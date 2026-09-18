import type { ReactNode } from "react";
import Container from "./Container";

type PageHeroProps = {
  kicker?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageHero({ kicker, title, description, children }: PageHeroProps) {
  return (
    <section className="border-b border-brand-blue/8 bg-white py-12 md:py-16" aria-label={title}>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {kicker ? <p className="mp-kicker mb-3">{kicker}</p> : null}
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-brand-blue tracking-tight leading-tight">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 font-body text-base md:text-lg text-brand-blue/65 leading-relaxed">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
