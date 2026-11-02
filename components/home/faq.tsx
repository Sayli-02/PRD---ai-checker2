import { Section } from "@/components/layout/section";
import { AccordionItem } from "@/components/ui/accordion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { home } from "@/content/home";
import { Reveal } from "./reveal";

const f = home.faq;

export function Faq() {
  return (
    <Section tone="cream" id="faq" className="border-t border-tone-line" containerClassName="grid gap-8 py-14 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-20">
      <Reveal>
        <Eyebrow>{f.eyebrow}</Eyebrow>
        <h2 className="mt-3 text-[2.25rem] leading-[1.08] sm:text-5xl">{f.title}</h2>
      </Reveal>
      <Reveal delay={120} from="right">
      <div className="border-t border-tone-line">
        {f.items.map((item) => (
          <AccordionItem key={item.q} question={item.q} name="faq">
            <p>{item.a}</p>
          </AccordionItem>
        ))}
      </div>
      </Reveal>
    </Section>
  );
}
