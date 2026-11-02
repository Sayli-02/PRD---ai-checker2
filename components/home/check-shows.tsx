import { Section } from "@/components/layout/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { home } from "@/content/home";
import { icons } from "./icons";
import { Reveal } from "./reveal";

const s = home.shows;

// Four columns divided by hairlines on desktop, 2x2 on tablet, one column on phones.
export function CheckShows() {
  return (
    <Section tone="cream" containerClassName="pb-14 md:pb-20">
      <div className="border-t border-tone-line pt-8">
        <Reveal>
          <Eyebrow>{s.eyebrow}</Eyebrow>
        </Reveal>
        <ul className="shows-grid">
          {s.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title} className="shows-card">
                <Reveal delay={i * 120} from={i % 2 === 0 ? "left" : "right"}>
                  <span aria-hidden className="grid size-10 shrink-0 place-items-center rounded-control bg-accent-soft text-accent-strong">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="mt-4 font-sans text-lg font-semibold tracking-normal">{item.title}</h3>
                    <p className="mt-2 max-w-[16rem] text-tone-muted">{item.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
