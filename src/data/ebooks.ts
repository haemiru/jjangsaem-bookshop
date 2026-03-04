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
    category: "부모 치유",
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
    pageCount: 150,
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
    category: "수면 훈련",
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
    pageCount: 160,
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
    category: "후각 키트",
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
    category: "후각 발달",
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
    category: "후각 훈련",
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
];

export function getEbookBySlug(slug: string): Ebook | undefined {
  return ebooks.find((book) => book.slug === slug);
}

export function getAllSlugs(): string[] {
  return ebooks.map((book) => book.slug);
}
