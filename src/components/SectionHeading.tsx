import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  className?: string;
};

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {kicker ? <p className="mp-kicker mb-3">{kicker}</p> : null}
      <Tag className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue tracking-tight leading-[1.15]">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 font-body text-base md:text-lg text-brand-blue/65 leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
