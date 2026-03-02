import { Ebook } from "@/types/ebook";

export const ebooks: Ebook[] = [
  {
    slug: "healing-parent",
    title: "괜찮아, 엄마도 아프니까",
    subtitle: "발달지연 아동 부모를 위한 내면 치유 가이드",
    author: "피지오 아카데미",
    description:
      "발달지연 아동 부모를 위한 내면 치유 가이드. 죄책감, 번아웃, 부부 갈등 등 양육 과정에서 겪는 심리적 어려움을 따뜻하게 다루며, 부모 스스로를 돌보는 실천법을 제시합니다.",
    price: 9900,
    originalPrice: 14000,
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
      "부부 관계 회복 가이드",
      "부록 4종 포함",
    ],
    toc: [
      {
        chapter: "프롤로그",
        title: "엄마도 아플 수 있다",
      },
      {
        chapter: "Part 1",
        title: "마음의 상처 알아차리기",
        items: ["죄책감의 실체", "비교의 함정"],
      },
      {
        chapter: "Part 2",
        title: "번아웃에서 벗어나기",
        items: ["에너지 관리법", "나만의 쉼표 만들기"],
      },
      {
        chapter: "Part 3",
        title: "관계 회복하기",
        items: ["부부 대화법", "주변과의 경계 설정"],
      },
      {
        chapter: "Part 4",
        title: "다시 나를 위한 시간",
        items: ["작은 목표 세우기", "지속 가능한 돌봄"],
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
    price: 11900,
    originalPrice: 16000,
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
        title: "수면과 발달의 연결",
        items: ["발달장애 아동의 수면 문제", "후각-호흡-수면의 과학"],
      },
      {
        chapter: "Part 2",
        title: "4주 프로그램",
        items: ["1주차: 향기 탐색", "2주차: 호흡 훈련", "3주차: 루틴 만들기", "4주차: 자립 수면"],
      },
      {
        chapter: "Part 3",
        title: "실전 사례",
        items: ["민준이 이야기", "서연이 이야기", "지훈이 이야기"],
      },
      {
        chapter: "부록",
        title: "도구와 자료",
        items: ["수면 기록지", "향기 가이드", "전문가 네트워크"],
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
    price: 13900,
    originalPrice: 18000,
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
      "향료 선택·배합 가이드",
      "안전 기준 및 인증 정보",
      "농도별 훈련 키트 구성법",
      "패키징·유통 실전 노하우",
    ],
    toc: [
      {
        chapter: "Part 1",
        title: "후각 키트의 기초",
        items: ["후각 훈련의 원리", "키트 구성 요소"],
      },
      {
        chapter: "Part 2",
        title: "향료 선택과 배합",
        items: ["향료 종류와 특성", "농도 조절 가이드"],
      },
      {
        chapter: "Part 3",
        title: "안전과 품질",
        items: ["안전 기준 체크리스트", "품질 관리 프로세스"],
      },
      {
        chapter: "Part 4",
        title: "제작과 패키징",
        items: ["키트 제작 워크플로", "유통 채널 전략"],
      },
    ],
    fileKey: "olfactory-kit/book.pdf",
    purchaseUrl: "https://kmong.com",
    pageCount: 120,
    publishedDate: "2026-02-01",
  },
  {
    slug: "olfactory-development",
    title: "후각 발달 훈련 가이드북",
    subtitle: "후각 발달 실전 적용 가이드",
    author: "짱샘 · 피지오 후각 연구소",
    description:
      "후각 발달의 과학적 원리와 실전 적용법을 담은 가이드. 연령별·발달 단계별 후각 자극 프로그램 설계, 평가 방법, 가정 내 적용 전략을 포함합니다.",
    price: 12900,
    originalPrice: 17000,
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
      "연령별 후각 발달 로드맵",
      "발달 단계별 자극 프로그램",
      "가정 내 적용 전략",
      "평가 도구 및 기록지 포함",
    ],
    toc: [
      {
        chapter: "Part 1",
        title: "후각 발달의 과학",
        items: ["후각 신경계의 발달", "발달 단계별 특성"],
      },
      {
        chapter: "Part 2",
        title: "프로그램 설계",
        items: ["연령별 자극 전략", "활동 설계 원칙"],
      },
      {
        chapter: "Part 3",
        title: "실전 적용",
        items: ["가정 내 프로그램", "치료실 활용법"],
      },
      {
        chapter: "Part 4",
        title: "평가와 기록",
        items: ["발달 평가 도구", "진행 기록 양식"],
      },
    ],
    fileKey: "olfactory-development/book.pdf",
    purchaseUrl: "https://kmong.com",
    pageCount: 140,
    publishedDate: "2026-02-15",
  },
  {
    slug: "olfactory-training",
    title: "후각 훈련의 이해",
    subtitle: "후각 훈련의 과학적 이해",
    author: "짱샘 · 피지오 후각 연구소",
    description:
      "후각 훈련의 신경과학적 근거와 원리를 체계적으로 정리한 전자책. 후각 신경 가소성, 훈련 효과의 과학적 증거, 다양한 훈련 프로토콜 비교 분석을 다룹니다.",
    price: 10900,
    originalPrice: 15000,
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
      "후각 신경 가소성의 과학",
      "훈련 프로토콜 비교 분석",
      "임상 연구 근거 정리",
      "전문가 참고 자료 수록",
    ],
    toc: [
      {
        chapter: "Part 1",
        title: "후각의 신경과학",
        items: ["후각 신경 해부학", "신경 가소성 원리"],
      },
      {
        chapter: "Part 2",
        title: "훈련의 과학적 근거",
        items: ["주요 임상 연구", "효과 메커니즘"],
      },
      {
        chapter: "Part 3",
        title: "훈련 프로토콜",
        items: ["전통적 후각 훈련", "변형 프로토콜 비교"],
      },
      {
        chapter: "Part 4",
        title: "임상 적용",
        items: ["대상별 적용 가이드", "효과 측정 방법"],
      },
    ],
    fileKey: "olfactory-training/book.pdf",
    purchaseUrl: "https://kmong.com",
    pageCount: 130,
    publishedDate: "2026-03-01",
  },
];

export function getEbookBySlug(slug: string): Ebook | undefined {
  return ebooks.find((book) => book.slug === slug);
}

export function getAllSlugs(): string[] {
  return ebooks.map((book) => book.slug);
}
