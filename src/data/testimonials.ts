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
  {
    name: "이수정",
    role: "특수학교 교사",
    content:
      "학부모 상담할 때 이 책을 꼭 추천합니다. 부모님들이 읽고 나면 표정이 달라져요. 혼자가 아니라는 걸 느끼시는 것 같아요.",
    bookSlug: "healing-parent",
    rating: 5,
  },
  {
    name: "박소영",
    role: "ADHD 아동 엄마",
    content:
      "다른 육아서와 달리 '이렇게 하세요'가 아니라 '괜찮아요'라고 말해줘서 좋았어요. 읽는 내내 위로받는 느낌이었습니다.",
    bookSlug: "healing-parent",
    rating: 5,
  },
  {
    name: "장민호",
    role: "발달장애 아동 아빠",
    content:
      "아빠 입장에서 쓴 후기가 별로 없는데, 이 책은 아빠도 공감할 수 있어요. 감정 일기 파트가 특히 도움이 됐습니다.",
    bookSlug: "healing-parent",
    rating: 5,
  },
  {
    name: "홍은채",
    role: "임상심리사",
    content:
      "전문가로서도 배울 점이 많았습니다. 부모의 심리를 이렇게 세심하게 다룬 책은 드물어요. 상담 현장에서 활용하고 있습니다.",
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
  {
    name: "김태희",
    role: "소아청소년과 간호사",
    content:
      "병원에서 잠 못 자는 아이 부모님께 이 책을 안내하고 있어요. 약에 의존하지 않는 방법이라 부모님들이 안심하세요.",
    bookSlug: "sensory-sleep",
    rating: 5,
  },
  {
    name: "윤지혜",
    role: "다운증후군 아동 엄마",
    content:
      "4주 프로그램대로 따라했더니 아이가 밤에 깨는 횟수가 확 줄었어요. 기록지가 있어서 변화를 눈으로 확인할 수 있었습니다.",
    bookSlug: "sensory-sleep",
    rating: 5,
  },
  {
    name: "정하린",
    role: "감각통합치료사",
    content:
      "감각 과민인 아이들한테 후각 루틴이 이렇게 효과적인 줄 몰랐어요. 치료실에서도 수면 상담 시 참고자료로 쓰고 있습니다.",
    bookSlug: "sensory-sleep",
    rating: 5,
  },
  {
    name: "백승우",
    role: "자폐 아동 아빠",
    content:
      "아이 재우느라 매일 2시간씩 걸렸는데 지금은 30분이면 충분해요. 향기 루틴이 아이에게 잠자리 신호가 된 것 같습니다.",
    bookSlug: "sensory-sleep",
    rating: 4,
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
  {
    name: "서민지",
    role: "작업치료사",
    content:
      "재료 수급처부터 농도 배합까지 구체적으로 나와 있어서 바로 실행할 수 있었어요. 시행착오를 확 줄여주는 가이드입니다.",
    bookSlug: "olfactory-kit",
    rating: 5,
  },
  {
    name: "고은서",
    role: "특수교육 보조교사",
    content:
      "학교에서 감각놀이 시간에 활용하고 있어요. 아이들이 향기 맡는 걸 좋아해서 참여도가 눈에 띄게 올라갔습니다.",
    bookSlug: "olfactory-kit",
    rating: 5,
  },
  {
    name: "문재영",
    role: "소아재활 센터장",
    content:
      "센터 자체 키트를 만들고 싶었는데 이 책이 딱이었어요. 안전 기준과 주의사항까지 꼼꼼하게 다뤄서 신뢰가 갑니다.",
    bookSlug: "olfactory-kit",
    rating: 5,
  },
  {
    name: "류하나",
    role: "발달지연 아동 엄마",
    content:
      "집에서 아이와 함께 키트를 만들었는데 그 과정 자체가 치료 활동이 되더라고요. 아이가 향기 고르는 걸 너무 좋아해요.",
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
  {
    name: "안지유",
    role: "발달장애 아동 엄마",
    content:
      "아이가 음식 냄새에 예민해서 편식이 심했는데, 단계별 훈련을 따라하니 거부하던 음식도 조금씩 먹기 시작했어요.",
    bookSlug: "olfactory-development",
    rating: 5,
  },
  {
    name: "차민준",
    role: "소아정신건강의학과 전문의",
    content:
      "후각과 뇌 발달의 관계를 근거 기반으로 정리한 점이 좋습니다. 임상에서 보호자 교육 시 추천하는 자료입니다.",
    bookSlug: "olfactory-development",
    rating: 5,
  },
  {
    name: "권수빈",
    role: "놀이치료사",
    content:
      "후각 놀이를 치료 세션에 접목했더니 아이들의 집중 시간이 늘었어요. 연령별 활동 아이디어가 풍부해서 도움이 많이 됩니다.",
    bookSlug: "olfactory-development",
    rating: 5,
  },
  {
    name: "남유진",
    role: "어린이집 교사",
    content:
      "감각 수업 커리큘럼 짤 때 이 책을 교과서처럼 쓰고 있어요. 이론과 실습이 균형 있게 담겨 있어서 현장 적용이 쉽습니다.",
    bookSlug: "olfactory-development",
    rating: 4,
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
  {
    name: "신예림",
    role: "특수교육 대학원생",
    content:
      "논문 쓸 때 참고문헌으로도 활용했어요. 국내외 연구 결과가 잘 정리되어 있어서 학술 자료로도 가치가 높습니다.",
    bookSlug: "olfactory-training",
    rating: 5,
  },
  {
    name: "양동현",
    role: "감각통합치료사",
    content:
      "후각 훈련을 왜 해야 하는지 동료들한테 설명하기 어려웠는데, 이 책 한 권이면 충분합니다. 근거가 탄탄해요.",
    bookSlug: "olfactory-training",
    rating: 5,
  },
  {
    name: "전소희",
    role: "자폐 아동 엄마",
    content:
      "전문 용어가 많을까 걱정했는데 부모도 이해할 수 있게 쉽게 풀어서 써 있어요. 왜 후각이 중요한지 확실히 알게 됐습니다.",
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
  {
    name: "황지민",
    role: "언어재활사",
    content:
      "구강호흡하는 아이들이 왜 발음이 부정확한지 이 책으로 이해했어요. 호흡 교정 후 조음 치료 효과가 훨씬 좋아졌습니다.",
    bookSlug: "breath-first",
    rating: 5,
  },
  {
    name: "도현우",
    role: "소아치과 전문의",
    content:
      "구강호흡이 치아 발달에 미치는 영향까지 다뤄서 놀랐습니다. 치과 입장에서도 부모 교육에 활용하기 좋은 책이에요.",
    bookSlug: "breath-first",
    rating: 5,
  },
  {
    name: "유채원",
    role: "ADHD 아동 엄마",
    content:
      "아이 입을 벌리고 자는 게 습관이려니 했는데 이 책 읽고 심각성을 알았어요. 코호흡 연습 시작한 후 집중력이 좋아졌습니다.",
    bookSlug: "breath-first",
    rating: 5,
  },
  {
    name: "곽승민",
    role: "소아 물리치료사",
    content:
      "호흡 평가를 치료 초기에 꼭 넣어야겠다고 생각하게 된 계기가 이 책이에요. 호흡이 기초 체력의 출발점이라는 걸 깨달았습니다.",
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
  {
    name: "성유나",
    role: "작업치료사",
    content:
      "골든타임이라는 개념이 인상적이었어요. 호흡 교정 시기를 놓치지 않으려면 꼭 읽어야 할 책입니다.",
    bookSlug: "golden-time-breathing",
    rating: 5,
  },
  {
    name: "허재윤",
    role: "발달지연 아동 엄마",
    content:
      "비강 세척이 이렇게 중요한 줄 몰랐어요. 아이 코 관리를 시작한 후 감기에 걸리는 횟수도 줄었습니다.",
    bookSlug: "golden-time-breathing",
    rating: 5,
  },
  {
    name: "탁준서",
    role: "이비인후과 전문의",
    content:
      "의료인 관점에서도 호흡과 발달의 관계를 명확하게 정리한 자료입니다. 부모 상담 시 보조 자료로 추천합니다.",
    bookSlug: "golden-time-breathing",
    rating: 5,
  },
  {
    name: "마서현",
    role: "감각통합치료사",
    content:
      "호흡 훈련이 감각 조절에 미치는 영향을 이해하게 됐어요. 치료 계획에 호흡 파트를 추가하는 계기가 되었습니다.",
    bookSlug: "golden-time-breathing",
    rating: 5,
  },
];

export function getTestimonialsBySlug(slug: string): Testimonial[] {
  return testimonials.filter((t) => t.bookSlug === slug);
}
