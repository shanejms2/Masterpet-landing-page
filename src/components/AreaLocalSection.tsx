import Container from "@/components/Container";
import type { AreaConfig } from "@/lib/areaConfig";

type AreaLocalSectionProps = {
  area: AreaConfig;
};

const AreaLocalSection = ({ area }: AreaLocalSectionProps) => {
  const hasDescription = Boolean(area.description?.trim());
  const hasNeighborhoods = area.neighborhoods.length > 0;
  const hasHighlights = area.localHighlights.length > 0;
  const hasTestimonials = area.testimonials.length > 0;

  if (!hasDescription && !hasNeighborhoods && !hasHighlights && !hasTestimonials) {
    return null;
  }

  return (
    <section
      className="w-full py-14 md:py-20 bg-white border-b border-brand-blue/5"
      aria-label={`Pet grooming in ${area.name}`}
    >
      <Container>
        <div className="max-w-3xl mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            At-home pet grooming in {area.name}
          </h2>
          {hasDescription ? (
            <p className="font-body text-lg text-brand-blue/75 leading-relaxed">
              {area.description}
            </p>
          ) : (
            <p className="font-body text-lg text-brand-blue/75 leading-relaxed">
              Professional, hygienic at-home pet grooming for dogs and cats across{" "}
              {area.name}, Kochi — we come to your doorstep so your pet stays
              comfortable.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {hasNeighborhoods ? (
            <div>
              <h3 className="font-heading text-xl font-semibold text-brand-blue mb-4">
                Neighbourhoods we cover
              </h3>
              <ul className="space-y-2">
                {area.neighborhoods.map((place) => (
                  <li
                    key={place}
                    className="font-body text-brand-blue/80 border-l-2 border-brand-green pl-3"
                  >
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {hasHighlights ? (
            <div>
              <h3 className="font-heading text-xl font-semibold text-brand-blue mb-4">
                Why pet parents in {area.name} choose us
              </h3>
              <ul className="space-y-2">
                {area.localHighlights.map((item) => (
                  <li
                    key={item}
                    className="font-body text-brand-blue/80 border-l-2 border-brand-blue/20 pl-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {hasTestimonials ? (
          <div className="mt-12 pt-10 border-t border-brand-blue/10">
            <h3 className="font-heading text-xl font-semibold text-brand-blue mb-6">
              From {area.name} pet parents
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {area.testimonials.slice(0, 3).map((t) => (
                <li key={`${t.author}-${t.location}`}>
                  <blockquote className="font-body text-brand-blue/80 leading-relaxed mb-3">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <p className="font-heading text-sm font-semibold text-brand-blue">
                    {t.author}
                    <span className="font-body font-normal text-brand-blue/60">
                      {" "}
                      · {t.location}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </section>
  );
};

export default AreaLocalSection;
