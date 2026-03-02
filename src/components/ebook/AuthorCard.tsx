export default function AuthorCard() {
  return (
    <div className="rounded-2xl border border-border bg-bg-warm p-6">
      <h3 className="mb-4 text-lg font-bold text-text-primary">저자 소개</h3>
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-2xl">
          👩‍⚕️
        </div>
        <div>
          <p className="mb-1 font-bold text-text-primary">짱샘 · 피지오 후각 연구소</p>
          <p className="text-sm leading-relaxed text-text-muted">
            현직 교사이자 감각 기반 치유 전문가. 피지오 후각 연구소와 함께
            발달장애 아동을 위한 후각 훈련, 수면 개선, 부모 치유 프로그램을
            연구하고 실전 가이드를 만들고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
