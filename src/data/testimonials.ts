export interface Testimonial {
  name: string;
  role: string;
  content: string;
  bookSlug: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  // healing-parent
  {
    name: "김지원",
    role: "발달지연 아동 엄마",
    content:
      "혼자 삼키고 있던 죄책감을 이 책이 꺼내줬어요. '엄마도 아플 수 있다'는 말에 한참 울었습니다. 모든 특수 부모님께 추천합니다.",
    bookSlug: "healing-parent",
    rating: 5,
  },
  {
    name: "정수빈",
    role: "자폐 아동 아빠",
    content:
      "아내한테 먼저 읽어보라고 했다가 저도 몰래 읽고 눈물 흘렸습니다. 부부가 함께 읽으면 서로를 더 이해하게 돼요.",
    bookSlug: "healing-parent",
    rating: 5,
  },
  // sensory-sleep
  {
    name: "이서연",
    role: "특수교육 교사",
    content:
      "수면에 어려움을 겪는 아이들에게 실제로 적용해봤는데, 2주차부터 눈에 띄는 변화가 있었어요. 향기 훈련이 이렇게 효과적일 줄 몰랐습니다.",
    bookSlug: "sensory-sleep",
    rating: 5,
  },
  {
    name: "한미래",
    role: "ADHD 아동 엄마",
    content:
      "매일 밤 전쟁이던 잠자리가 3주 만에 평화로워졌어요. 라벤더 향 맡으면 아이가 먼저 이불로 들어갑니다.",
    bookSlug: "sensory-sleep",
    rating: 5,
  },
  // olfactory-kit
  {
    name: "최은미",
    role: "감각통합치료 전문가",
    content:
      "키트 개발 가이드 덕분에 우리 센터만의 후각 훈련 키트를 만들 수 있었어요. 향료 선택부터 패키징까지 실전 노하우가 가득합니다.",
    bookSlug: "olfactory-kit",
    rating: 5,
  },
  {
    name: "윤정아",
    role: "어린이집 원장",
    content:
      "노즈워터 만드는 법이 이렇게 자세히 나온 자료는 처음이에요. 우리 원에서 직접 만들어서 아이들에게 적용하고 있습니다.",
    bookSlug: "olfactory-kit",
    rating: 5,
  },
  // olfactory-development
  {
    name: "송다은",
    role: "언어치료사",
    content:
      "후각이 정서 발달에 이렇게 큰 영향을 미치는지 몰랐어요. 연령별 훈련법이 체계적이라 치료 계획 세울 때 많이 참고합니다.",
    bookSlug: "olfactory-development",
    rating: 5,
  },
  {
    name: "오태민",
    role: "소아재활 물리치료사",
    content:
      "후각 발달 3단계가 명확해서 부모 교육 자료로 활용하기 좋습니다. 부록의 실천법도 가정에서 바로 적용 가능해요.",
    bookSlug: "olfactory-development",
    rating: 5,
  },
  // olfactory-training
  {
    name: "박현수",
    role: "작업치료사",
    content:
      "후각 훈련의 과학적 근거가 이렇게 체계적으로 정리된 자료는 처음입니다. 치료실에서 바로 적용할 수 있어서 실용적이에요.",
    bookSlug: "olfactory-training",
    rating: 5,
  },
  {
    name: "강서율",
    role: "발달심리 상담사",
    content:
      "후각과 기억·감정의 연결을 과학적으로 설명해줘서 상담에 접목하기 좋았어요. 사례 연구가 특히 인상적입니다.",
    bookSlug: "olfactory-training",
    rating: 5,
  },
  // breath-first
  {
    name: "임하은",
    role: "발달지연 아동 엄마",
    content:
      "아이가 왜 치료를 많이 받아도 나아지지 않는지 이 책을 읽고 이해했어요. 숨을 먼저 봐야 한다는 말이 정말 와닿았습니다.",
    bookSlug: "breath-first",
    rating: 5,
  },
  {
    name: "조은성",
    role: "소아과 전문의",
    content:
      "구강호흡이 뇌에 미치는 영향을 부모 눈높이에서 이렇게 쉽게 설명한 책은 처음이에요. 진료실에서 부모님께 추천하고 있습니다.",
    bookSlug: "breath-first",
    rating: 5,
  },
  // golden-time-breathing
  {
    name: "배준혁",
    role: "소아 물리치료사",
    content:
      "심박수로 호흡 상태를 평가하는 방법이 정말 실용적입니다. 25년 임상 노하우가 고스란히 담겨 있어요.",
    bookSlug: "golden-time-breathing",
    rating: 5,
  },
  {
    name: "나윤서",
    role: "자폐 아동 엄마",
    content:
      "구강 테이프 사용법과 비강 관리 파트를 읽고 바로 실천했는데, 아이의 코골이가 확연히 줄었어요. 가격이 아깝지 않은 책입니다.",
    bookSlug: "golden-time-breathing",
    rating: 5,
  },
];

export function getTestimonialsBySlug(slug: string): Testimonial[] {
  return testimonials.filter((t) => t.bookSlug === slug);
}
