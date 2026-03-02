export interface Testimonial {
  name: string;
  role: string;
  content: string;
  bookSlug: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "이서연",
    role: "특수교육 교사",
    content:
      "수면에 어려움을 겪는 아이들에게 실제로 적용해봤는데, 2주차부터 눈에 띄는 변화가 있었어요. 향기 훈련이 이렇게 효과적일 줄 몰랐습니다.",
    bookSlug: "sensory-sleep",
    rating: 5,
  },
  {
    name: "김지원",
    role: "발달지연 아동 엄마",
    content:
      "혼자 삼키고 있던 죄책감을 이 책이 꺼내줬어요. '엄마도 아플 수 있다'는 말에 한참 울었습니다. 모든 특수 부모님께 추천합니다.",
    bookSlug: "healing-parent",
    rating: 5,
  },
  {
    name: "박현수",
    role: "작업치료사",
    content:
      "후각 훈련의 과학적 근거가 이렇게 체계적으로 정리된 자료는 처음입니다. 치료실에서 바로 적용할 수 있어서 실용적이에요.",
    bookSlug: "olfactory-training",
    rating: 5,
  },
  {
    name: "최은미",
    role: "감각통합치료 전문가",
    content:
      "키트 개발 가이드 덕분에 우리 센터만의 후각 훈련 키트를 만들 수 있었어요. 향료 선택부터 패키징까지 실전 노하우가 가득합니다.",
    bookSlug: "olfactory-kit",
    rating: 5,
  },
];
