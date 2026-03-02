import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", "mb-10", className)}>
      <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base text-text-muted">{subtitle}</p>
      )}
    </div>
  );
}
