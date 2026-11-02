import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PostCard } from "@/components/blog/post-card";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { home } from "@/content/home";
import { getLatestPosts } from "@/lib/blog";
import { Reveal } from "./reveal";

const b = home.blog;

// The three newest posts, read from content/blog through lib/blog.ts.
export async function BlogPreview() {
  const posts = await getLatestPosts(3);
  if (posts.length === 0) return null;
  return (
    <Section tone="cream" className="border-t border-tone-line" containerClassName="py-14 md:py-20">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>{b.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[2.25rem] leading-[1.08] sm:text-5xl">{b.title}</h2>
          </div>
          <Link href="/blog" className={buttonVariants({ variant: "soft" })}>
            {b.all}
            <ArrowRight aria-hidden />
          </Link>
        </div>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 120}>
            <PostCard post={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
