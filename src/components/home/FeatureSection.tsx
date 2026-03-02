import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const features = [
  {
    emoji: "🔬",
    title: "과학적 근거 기반",
    description:
      "후각 신경과학, 임상 연구 결과를 바탕으로 한 검증된 훈련 프로그램을 제공합니다.",
  },
  {
    emoji: "👩‍⚕️",
    title: "현장 전문가 집필",
    description:
      "피지오 후각 연구소와 현장 치료사들의 실전 경험을 그대로 담았습니다.",
  },
  {
    emoji: "📋",
    title: "바로 적용 가능",
    description:
      "기록지, 체크리스트, 단계별 프로그램으로 가정과 치료실에서 즉시 활용할 수 있습니다.",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-bg-secondary py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="왜 짱샘의 전자책인가요?"
          subtitle="독자 여러분이 선택하는 이유"
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-bg-primary p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mb-4 inline-block text-4xl">{feature.emoji}</span>
              <h3 className="mb-2 text-lg font-bold text-text-primary">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
