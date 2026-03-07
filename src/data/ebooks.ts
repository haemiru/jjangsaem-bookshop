import { Ebook } from "@/types/ebook";

export const ebooks: Ebook[] = [
  {
    slug: "healing-parent",
    title: "엄마라서 괜찮아!",
    subtitle: "발달지연 아동 부모를 위한 내면 치유 가이드",
    author: "피지오 아카데미",
    description:
      "발달지연 아동 부모를 위한 내면 치유 가이드. 죄책감, 번아웃, 부부 갈등 등 양육 과정에서 겪는 심리적 어려움을 따뜻하게 다루며, 부모 스스로를 돌보는 실천법을 제시합니다.",
    price: 5500,
    originalPrice: 9900,
    category: "치유",
    colorKey: "book-healing",
    colors: {
      primary: "#e17055",
      secondary: "#fab1a0",
      gradient: "from-[#e17055] to-[#d35400]",
    },
    coverEmoji: "💛",
    coverImage: "/images/covers/healing-parent.png",
    features: [
      "4개 파트, 7개 챕터 구성",
      "죄책감·번아웃 극복 실천법",
      "감정 관리와 지지 체계 만들기",
      "부록 4종 (감정일기, 체크리스트, 추천도서, 참고문헌)",
    ],
    toc: [
      {
        chapter: "프롤로그",
        title: "프롤로그",
      },
      {
        chapter: "Part 1",
        title: "마음의 지도 그리기",
        items: [
          "Ch1. 당신의 마음에 먼저 안부를 묻습니다",
          "Ch2. 진단 그 이후 — 애도와 수용의 과정",
        ],
      },
      {
        chapter: "Part 2",
        title: "마음의 짐 내려놓기",
        items: [
          "Ch3. 비교의 늪에서 벗어나기",
          "Ch4. 죄책감이라는 무거운 짐 내려놓기",
        ],
      },
      {
        chapter: "Part 3",
        title: "마음의 근육 키우기",
        items: [
          "Ch5. 지치지 않는 양육을 위한 감정 관리법",
          "Ch6. 나만의 지지 체계 만들기",
        ],
      },
      {
        chapter: "Part 4",
        title: "함께 피어나기",
        items: ["Ch7. 아이와 함께 성장하는 나"],
      },
      {
        chapter: "부록",
        title: "부록",
        items: [
          "감정 일기 템플릿",
          "셀프 체크리스트 모음",
          "추천 도서·기관·커뮤니티",
          "참고 문헌",
        ],
      },
    ],
    fileKey: "healing-parent/book.pdf",
    purchaseUrl: "https://kmong.com",
    pageCount: 96,
    publishedDate: "2026-01-15",
  },
  {
    slug: "sensory-sleep",
    title: "숙면으로 가는 향기로운 호흡",
    subtitle: "발달장애 아동을 위한 후각·호흡 훈련 가이드",
    author: "장지예 · 피지오 후각 연구소",
    description:
      "발달장애 아동을 위한 후각·호흡 기반 수면 훈련 프로그램. 4주 간의 단계별 훈련 가이드와 사례 연구, 전문가 조언을 포함합니다.",
    price: 9900,
    originalPrice: 14000,
    category: "수면",
    colorKey: "book-sleep",
    colors: {
      primary: "#9b89b3",
      secondary: "#a8e6cf",
      gradient: "from-[#9b89b3] to-[#7b6a9b]",
    },
    coverEmoji: "🌙",
    coverImage: "/images/covers/sensory-sleep.png",
    features: [
      "4주 완성 수면 훈련 프로그램",
      "후각·호흡 연결 과학적 근거",
      "실제 아동 사례 연구",
      "기록지와 체크리스트 포함",
    ],
    toc: [
      {
        chapter: "Part 1",
        title: "왜 후각과 호흡이 수면을 바꾸나요?",
        items: [
          "Ch1. 우리 아이의 수면, 무엇이 문제일까요?",
          "Ch2. 코와 폐, 그리고 뇌의 숨겨진 연결고리",
          "Ch3. 과학이 증명한 향기와 호흡의 힘",
        ],
      },
      {
        chapter: "Part 2",
        title: "4주 완성! 우리 아이 맞춤 훈련 프로그램",
        items: [
          "Ch4. 시작 전 준비하기",
          "Ch5. 1주차 — 향기와 친해지기",
          "Ch6. 2주차 — 호흡 훈련 시작",
          "Ch7. 3주차 — 수면 루틴 만들기",
          "Ch8. 4주차 — 습관으로 굳히기",
        ],
      },
      {
        chapter: "Part 3",
        title: "실제 사례로 배우는 성공 비법",
        items: [
          "Ch9. 민준이의 이야기 (5세, 자폐스펙트럼)",
          "Ch10. 서연이의 이야기 (8세, ADHD)",
          "Ch11. 지훈이의 이야기 (10세, 지적장애)",
          "Ch12. 전문가의 한 줄 조언",
        ],
      },
      {
        chapter: "Part 4",
        title: "문제 해결 Q&A",
        items: ["자주 묻는 질문 20가지", "긴급 상황 대처법"],
      },
      {
        chapter: "부록",
        title: "부록",
        items: [
          "훈련 기록지",
          "향기 선택 가이드",
          "참고 자료",
          "지원 네트워크",
        ],
      },
    ],
    fileKey: "sensory-sleep/book.pdf",
    purchaseUrl: "https://kmong.com",
    pageCount: 98,
    publishedDate: "2026-01-01",
  },
  {
    slug: "olfactory-kit",
    title: "느린아이 레벨업 시켜주는 후각키트 제작과 활용 가이드북",
    subtitle: "후각 훈련 키트 개발 실전 가이드",
    author: "짱샘 · 피지오 후각 연구소",
    description:
      "후각 훈련에 필요한 키트를 직접 개발하고 구성하는 실전 가이드. 향료 선택, 안전 기준, 농도 조절, 키트 패키징까지 후각 키트 제작의 전 과정을 다룹니다.",
    price: 38000,
    originalPrice: 48000,
    category: "후각",
    colorKey: "book-kit",
    colors: {
      primary: "#00b894",
      secondary: "#55efc4",
      gradient: "from-[#00b894] to-[#00a381]",
    },
    coverEmoji: "🧪",
    coverImage: "/images/covers/olfactory-kit.png",
    features: [
      "후각 훈련 키트 제작 가이드",
      "후각 훈련 프로그램 및 활용법",
      "노즈워터 제작 가이드",
      "FAQ 및 근거 자료 수록",
    ],
    toc: [
      {
        chapter: "1",
        title: "후각 훈련 키트",
      },
      {
        chapter: "2",
        title: "후각 훈련 프로그램",
      },
      {
        chapter: "3–4",
        title: "후각 키트 관리 및 활용",
      },
      {
        chapter: "5",
        title: "후각 훈련 키트 제작 가이드",
      },
      {
        chapter: "6",
        title: "노즈워터 제작 가이드",
      },
      {
        chapter: "7",
        title: "후각 키트 사용 가이드",
      },
      {
        chapter: "8",
        title: "자주 묻는 질문 (FAQ)",
      },
      {
        chapter: "부록",
        title: "부록",
        items: [
          "후각원 QR",
          "참고 문헌",
          "발달 장애 아동 호흡 후각 훈련 근거 자료",
        ],
      },
    ],
    fileKey: "olfactory-kit/book.pdf",
    purchaseUrl: "https://kmong.com",
    pageCount: 90,
    publishedDate: "2026-02-01",
  },
  {
    slug: "olfactory-development",
    title: "후각 발달 훈련 가이드북",
    subtitle: "후각 발달 실전 적용 가이드",
    author: "짱샘 · 피지오 후각 연구소",
    description:
      "후각 발달의 과학적 원리와 실전 적용법을 담은 가이드. 연령별·발달 단계별 후각 자극 프로그램 설계, 평가 방법, 가정 내 적용 전략을 포함합니다.",
    price: 29000,
    originalPrice: 38000,
    category: "후각",
    colorKey: "book-development",
    colors: {
      primary: "#6c5ce7",
      secondary: "#a29bfe",
      gradient: "from-[#6c5ce7] to-[#4834d4]",
    },
    coverEmoji: "🌿",
    coverImage: "/images/covers/olfactory-development.png",
    features: [
      "후각의 중요성과 정서발달 영향",
      "후각 기관과 냄새 전달 과정",
      "후각 발달 훈련 4가지 원리와 3단계",
      "부록 7종 (호흡 습관, 코 관리, 연구 자료 등)",
    ],
    toc: [
      {
        chapter: "Part I",
        title: "후각의 중요성",
        items: [
          "발달장애 아동의 정서적 어려움과 긴장 관리의 문제",
          "후각 기능이 정서발달과 감각 통합에 미치는 영향",
          "후각이 영향을 미치는 4가지 기억과 긴장",
        ],
      },
      {
        chapter: "Part II",
        title: "후각 발달 훈련의 이해",
        items: [
          "후각 발달 훈련이란?",
          "후각 훈련과 아로마 테라피의 차이점",
          "후각 발달 훈련의 목적",
          "아기들의 후각 발달",
        ],
      },
      {
        chapter: "Part III",
        title: "후각 기관과 냄새가 뇌로 전달되는 과정",
        items: [
          "후각 기관",
          "냄새 전달 과정",
          "냄새의 5가지 특성",
          "냄새를 맡는 방법",
          "아이의 후각 장애 확인 방법",
        ],
      },
      {
        chapter: "Part IV",
        title: "후각 발달 훈련 실제",
        items: [
          "후각 발달 훈련의 4가지 원리",
          "후각 발달 훈련 3단계",
          "아이에게 도움이 되는 후각 발달 훈련",
          "후각 훈련 키트 사용법",
          "명현 반응과 주의사항",
        ],
      },
      {
        chapter: "부록",
        title: "부록",
        items: [
          "향기로운 생활을 위한 소소한 실천법",
          "건강한 호흡 습관 만들기",
          "코 관리 팁 · 구강 바른 자세",
          "식사 시간 후각 발달 훈련",
          "후각 연구 자료 · 에센셜 오일 분류",
        ],
      },
    ],
    fileKey: "olfactory-development/book.pdf",
    purchaseUrl: "https://kmong.com",
    pageCount: 148,
    publishedDate: "2026-02-15",
  },
  {
    slug: "olfactory-training",
    title: "후각 훈련의 이해",
    subtitle: "후각 훈련의 과학적 이해",
    author: "짱샘 · 피지오 후각 연구소",
    description:
      "후각 훈련의 신경과학적 근거와 원리를 체계적으로 정리한 전자책. 후각 신경 가소성, 훈련 효과의 과학적 증거, 다양한 훈련 프로토콜 비교 분석을 다룹니다.",
    price: 6600,
    originalPrice: 10900,
    category: "후각",
    colorKey: "book-training",
    colors: {
      primary: "#2C5F8D",
      secondary: "#74b9ff",
      gradient: "from-[#2C5F8D] to-[#1e4366]",
    },
    coverEmoji: "🧠",
    coverImage: "/images/covers/olfactory-training.png",
    features: [
      "후각의 중요성과 감정·기억 연결",
      "후각과 뇌 발달의 과학적 근거",
      "아동 후각 발달 훈련 실질적 팁",
      "후각 훈련 사례 연구 수록",
    ],
    toc: [
      {
        chapter: "1",
        title: "서론 및 후각의 중요성",
      },
      {
        chapter: "3",
        title: "후각과 뇌 발달",
      },
      {
        chapter: "5",
        title: "후각 훈련",
      },
      {
        chapter: "5",
        title: "아동 후각 발달 훈련을 위한 실질적 팁",
      },
      {
        chapter: "7",
        title: "후각 훈련 사례 연구",
      },
      {
        chapter: "8",
        title: "결론",
      },
      {
        chapter: "9",
        title: "부록",
      },
    ],
    fileKey: "olfactory-training/book.pdf",
    purchaseUrl: "https://kmong.com",
    pageCount: 73,
    publishedDate: "2026-03-01",
  },
  {
    slug: "breath-first",
    title: "아이를 고치기 전에 숨부터 봅니다",
    subtitle: "발달장애 아동의 호흡을 이해하는 부모를 위한 안내서",
    author: "짱샘 · 피지오 후각 연구소",
    description:
      "25년 경력의 소아 물리치료사가 전하는 발달장애 아동 호흡 안내서. 구강호흡과 과호흡이 아이의 뇌와 정서에 미치는 영향을 설명하고, 치료보다 먼저 숨을 살펴야 하는 이유와 가정에서 실천할 수 있는 호흡 관리법을 제시합니다.",
    price: 9900,
    originalPrice: 18900,
    category: "호흡",
    colorKey: "book-breath",
    colors: {
      primary: "#5B7B9A",
      secondary: "#A8D5BA",
      gradient: "from-[#5B7B9A] to-[#3D5A80]",
    },
    coverEmoji: "🫁",
    coverImage: "/images/covers/breath-first.png",
    coverHasText: true,
    features: [
      "프롤로그 + 6장 구성",
      "구강호흡·과호흡이 뇌에 미치는 영향",
      "하루 3분 관찰 가이드",
      "보호자 셀프 케어 포함",
    ],
    toc: [
      {
        chapter: "프롤로그",
        title: "왜 나는 '숨'에 대해 다시 쓰게 되었는가",
      },
      {
        chapter: "서론",
        title: "숨을 잘 훈련하는 것과, 잘 쉬게 하는 것은 다르다",
      },
      {
        chapter: "1장",
        title: "정말 치료를 더 해야 할까?",
        items: ["치료가 늘어날수록 커지는 불안"],
      },
      {
        chapter: "2장",
        title: "아이의 입과 숨을 본 적이 있는가",
        items: ["하루 3분 관찰 가이드"],
      },
      {
        chapter: "3장",
        title: "뇌는 '숨'을 가장 먼저 듣는다",
        items: [
          "과호흡이 반복되면 생기는 일",
          "왜 멍해지고, 왜 예민해질까",
          "ADHD, 불안, 감각 문제와 숨의 공통점",
        ],
      },
      {
        chapter: "4장",
        title: "숨이 편안해지기 위한 조건 만들기",
      },
      {
        chapter: "5장",
        title: "절대 하지 말아야 할 말",
        items: [
          "하루 루틴은 '짧게'면 충분합니다",
          "치료와 병행할 때의 기준",
          "아이의 반응을 읽는 법",
        ],
      },
      {
        chapter: "6장",
        title: "아이보다 보호자를 먼저 지키는 이유",
        items: ["보호자가 무너지면, 아이는 더 버틴다"],
      },
    ],
    fileKey: "breath-first/book.pdf",
    purchaseUrl: "https://kmong.com",
    pageCount: 82,
    publishedDate: "2026-03-07",
  },
  {
    slug: "golden-time-breathing",
    title: "성장하는 골든타임을 위한 호흡의 비밀",
    subtitle: "발달장애 아동의 호흡 관리 — 25년 임상 경험의 기록",
    author: "짱샘 · 피지오 후각 연구소",
    description:
      "발달장애 아동의 코 호흡 훈련 실전 가이드. 숨이 무너지면 어떤 재활도 오래 가지 않는다는 임상 경험을 바탕으로, 심박수 기반 호흡 상태 평가, 비강 관리, 연령별 호흡 실습까지 체계적으로 안내합니다.",
    price: 38000,
    originalPrice: 69000,
    category: "호흡",
    colorKey: "book-golden",
    colors: {
      primary: "#E8A87C",
      secondary: "#F8D5B8",
      gradient: "from-[#E8A87C] to-[#C4956A]",
    },
    coverEmoji: "🌬️",
    coverImage: "/images/covers/golden-time-breathing.png",
    coverHasText: true,
    features: [
      "프롤로그 + 9장 구성",
      "심박수 기반 호흡 상태 평가",
      "비강 관리·구강 테이프 실전 가이드",
      "아동 연령별 호흡 실습",
    ],
    toc: [
      {
        chapter: "서론",
        title: "이 책을 읽기 전에",
        items: [
          "왜 '치료'보다 '숨'이 먼저여야 하는가",
          "숨이 무너지면, 어떤 재활도 오래 가지 않는다",
        ],
      },
      {
        chapter: "1장",
        title: "겉으로는 괜찮아 보여도 숨은 이미 무너져 있다",
        items: ["치료를 많이 받는데도 달라지지 않는 이유"],
      },
      {
        chapter: "2장",
        title: "숨이 망가지면 뇌에서 먼저 일어나는 일",
        items: [
          "인간만 입으로 숨 쉬는 이유",
          "씹지 않는 환경이 얼굴 구조를 바꾼다",
        ],
      },
      {
        chapter: "3장",
        title: "심박수로 보는 아이의 호흡 상태",
      },
      {
        chapter: "4장",
        title: "코가 막히면 모든 호흡은 실패한다",
        items: [
          "\"코가 막힌 것 같지 않은데요?\"라는 착각",
          "보이지 않는 비염이 만드는 악순환",
        ],
      },
      {
        chapter: "5장",
        title: "구강 테이프·비강 도구, 언제 쓰고 언제 멈춰야 하는가",
      },
      {
        chapter: "6장",
        title: "호흡 훈련의 핵심은 '자기 호흡 리듬'이다",
        items: [
          "자기 호흡 리듬이란 무엇인가",
          "왜 '열심히 하는 호흡 훈련'이 실패하는가",
        ],
      },
      {
        chapter: "7장",
        title: "숨은 몸 전체에서 회복된다",
      },
      {
        chapter: "8장",
        title: "아동 연령별 호흡 실습 가이드",
        items: ["유아기와 학령기의 차이"],
      },
      {
        chapter: "9장",
        title: "호흡은 치료가 아니라 관리다",
        items: ["치료비를 줄이는 진짜 구조"],
      },
    ],
    fileKey: "golden-time-breathing/book.pdf",
    purchaseUrl: "https://kmong.com",
    pageCount: 183,
    publishedDate: "2026-03-07",
  },
];

export function getEbookBySlug(slug: string): Ebook | undefined {
  return ebooks.find((book) => book.slug === slug);
}

export function getAllSlugs(): string[] {
  return ebooks.map((book) => book.slug);
}
