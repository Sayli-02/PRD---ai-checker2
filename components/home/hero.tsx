import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { home } from "@/content/home";
import { withBase } from "@/lib/base-path";
import { icons } from "./icons";

const h = home.hero;

// The hero photo is the page's LCP element: pre-encoded AVIF with a WebP fallback, high priority, no layout shift
// because the box is absolutely positioned. On phones it is a faint background; on large screens it fades in from the right.
function HeroImage() {
  return (
    <>
      <picture className="absolute inset-0 -z-10 opacity-50 lg:left-[28%] lg:opacity-100">
        <source srcSet={withBase("/images/hero-building.avif")} type="image/avif" />
        <img
          src={withBase("/images/hero-building.webp")}
          alt={h.imageAlt}
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="hero-photo size-full origin-[72%_42%] object-cover object-[72%_42%]"
        />
      </picture>
      <div aria-hidden className="hero-overlay absolute inset-0 -z-10 max-lg:opacity-70" />
    </>
  );
}

export function Hero() {
  return (
    <Section
      tone="dark"
      backdrop={<HeroImage />}
      containerClassName="pt-10 pb-14 lg:pt-24 lg:pb-28"
    >
      <div className="hero-copy max-w-xl">
        <Eyebrow>{h.eyebrow}</Eyebrow>
        <h1 className="mt-3 text-[2.25rem] leading-[1.05] sm:text-6xl lg:text-[4rem]">
          {h.titleLead}{" "}
          <em className="text-accent italic">{h.titleAccent}</em>
        </h1>
        <p className="mt-3 max-w-md text-lg text-tone-muted lg:mt-5">
          <span className="sm:hidden">{h.subtitleShort}</span>
          <span className="hidden sm:inline">{h.subtitle}</span>
        </p>
        <ul className="mt-8 grid grid-cols-3 divide-x divide-line-dark">
          {h.points.map((p) => {
            const Icon = icons[p.icon];
            return (
              <li key={p.label} className="flex flex-col items-center gap-2 px-2 text-center text-sm text-tone-fg first:pl-0 last:pr-0 lg:items-start lg:text-left">
                <Icon aria-hidden className="size-5 text-tone-accent" />
                {p.label}
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
