"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

const SESSION_TIMEOUT_MS = 10 * 60 * 1000; // 10분
const SESSION_FLAG = "jjangsaem_session_active";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signOut: async () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const signOut = async () => {
    const supabase = createClient();
    if (supabase) {
      await supabase.auth.signOut();
    }
    sessionStorage.removeItem(SESSION_FLAG);
  };

  // 비활동 타이머 리셋
  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      signOut();
    }, SESSION_TIMEOUT_MS);
  };

  useEffect(() => {
    const supabase = createClient();
    if (!supabase) {
      setLoading(false);
      return;
    }

    // 브라우저/탭 종료 감지: sessionStorage 플래그 확인
    const wasActive = sessionStorage.getItem(SESSION_FLAG);

    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      if (currentSession && !wasActive) {
        // 새 탭/브라우저인데 이전 세션이 남아있으면 로그아웃
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
        sessionStorage.setItem(SESSION_FLAG, "true");
        resetTimer();
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
        resetTimer();
      } else {
        sessionStorage.removeItem(SESSION_FLAG);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    });

    // 사용자 활동 감지 → 타이머 리셋
    const activityEvents = ["mousedown", "keydown", "scroll", "touchstart"];
    const handleActivity = () => {
      if (user || session) resetTimer();
    };
    activityEvents.forEach((event) =>
      window.addEventListener(event, handleActivity, { passive: true })
    );

    return () => {
      subscription.unsubscribe();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      activityEvents.forEach((event) =>
        window.removeEventListener(event, handleActivity)
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
