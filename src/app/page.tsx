import HeroSection from "@/components/home/HeroSection";
import CatalogSection from "@/components/home/CatalogSection";
import FeatureSection from "@/components/home/FeatureSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CatalogSection />
      <FeatureSection />
      <BlogPreviewSection />
      <CtaBanner />
    </>
  );
}
