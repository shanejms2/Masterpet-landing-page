import type { ReactNode } from "react";
import Container from "./Container";

type LegalPageProps = {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
};

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <section className="bg-white py-14 md:py-20" aria-label={title}>
      <Container>
        <article className="mx-auto max-w-3xl">
          <p className="mp-kicker mb-3">Legal</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue tracking-tight mb-3">
            {title}
          </h1>
          {lastUpdated ? (
            <p className="font-body text-sm text-brand-blue/50 mb-10">{lastUpdated}</p>
          ) : null}
          <div className="legal-prose font-body text-[15px] md:text-base leading-relaxed text-brand-blue/80">
            {children}
          </div>
        </article>
      </Container>
    </section>
  );
}
