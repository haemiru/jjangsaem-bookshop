"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

const SESSION_TIMEOUT_MS = 10 * 60 * 1000; // 10분
const SESSION_FLAG = "jjangsaem_session_active";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  remainingSeconds: number | null;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  remainingSeconds: null,
  signOut: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null);
  const deadlineRef = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const signOut = useCallback(async () => {
    const supabase = createClient();
    if (supabase) {
      await supabase.auth.signOut();
    }
    sessionStorage.removeItem(SESSION_FLAG);
    setRemainingSeconds(null);
  }, []);

  const startCountdown = useCallback(() => {
    // 만료 시각 설정
    deadlineRef.current = Date.now() + SESSION_TIMEOUT_MS;

    // 자동 로그아웃 타이머
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      signOut();
    }, SESSION_TIMEOUT_MS);

    // 1초마다 남은 시간 업데이트
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRemainingSeconds(Math.ceil(SESSION_TIMEOUT_MS / 1000));
    intervalRef.current = setInterval(() => {
      const left = Math.max(0, Math.ceil((deadlineRef.current - Date.now()) / 1000));
      setRemainingSeconds(left);
      if (left <= 0 && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }, 1000);
  }, [signOut]);

  const stopCountdown = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRemainingSeconds(null);
  }, []);

  useEffect(() => {
    const supabase = createClient();
    if (!supabase) {
      setLoading(false);
      return;
    }

    // OAuth 콜백에서 돌아온 경우 _auth=1 파라미터로 감지
    const params = new URLSearchParams(window.location.search);
    if (params.get("_auth") === "1") {
      sessionStorage.setItem(SESSION_FLAG, "true");
      params.delete("_auth");
      const cleanUrl = params.toString()
        ? `${window.location.pathname}?${params.toString()}`
        : window.location.pathname;
      window.history.replaceState({}, "", cleanUrl);
    }

    const wasActive = sessionStorage.getItem(SESSION_FLAG);

    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      if (currentSession && !wasActive) {
        supabase.auth.signOut();
        setSession(null);
        setUser(null);
        setLoading(false);
        return;
      }

      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);

      if (currentSession) {
        startCountdown();
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user ?? null);
      setLoading(false);

      if (newSession) {
        sessionStorage.setItem(SESSION_FLAG, "true");
        startCountdown();
      } else {
        sessionStorage.removeItem(SESSION_FLAG);
        stopCountdown();
      }
    });

    // 사용자 활동 감지 → 타이머 리셋
    const activityEvents = ["mousedown", "keydown", "scroll", "touchstart"];
    const handleActivity = () => {
      if (sessionStorage.getItem(SESSION_FLAG)) startCountdown();
    };
    activityEvents.forEach((event) =>
      window.addEventListener(event, handleActivity, { passive: true })
    );

    return () => {
      subscription.unsubscribe();
      stopCountdown();
      activityEvents.forEach((event) =>
        window.removeEventListener(event, handleActivity)
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, loading, remainingSeconds, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
