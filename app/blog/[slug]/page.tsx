import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS } from "@/lib/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 2);

  return (
    <>
      <Nav />
      <main>
        {/* Article header */}
        <header className="bg-brand-black py-20">
          <div className="section-container max-w-content-narrow">
            <div className="flex items-center gap-3 mb-4">
              <span className="rounded-full bg-teal px-3 py-0.5 text-caption font-semibold text-white">
                {post.category}
              </span>
              <span className="text-caption text-white/60">{post.readTime}</span>
            </div>
            <h1 className="text-display-lg font-bold text-white">{post.title}</h1>
            <p className="mt-4 text-body-lg text-white/70">{post.excerpt}</p>
            <time
              className="mt-4 block text-caption text-white/50"
              dateTime={post.publishedAt}
            >
              Published{" "}
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </header>

        {/* Article body — stub content */}
        <article className="section-y bg-white" aria-label="Article content">
          <div className="section-container max-w-content-narrow">
            {/* Stub notice */}
            <div className="mb-10 rounded-card bg-marigold-light border border-marigold/30 p-5">
              <p className="text-body font-semibold text-brand-black">
                📝 Content stub — full article coming soon.
              </p>
              <p className="mt-1 text-body text-brand-gray-dark">
                This page is scaffolded for SEO. Replace the content below with the full article body in Phase 5.
              </p>
            </div>

            {/* Article prose placeholder */}
            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p className="text-body-lg text-brand-gray-dark">
                {post.excerpt} This article will walk you through everything you need to know — with practical steps you can take today.
              </p>
              <h2>What you&apos;ll learn</h2>
              <ul className="space-y-2 text-body text-brand-gray-dark">
                <li>The core concepts behind {post.title.toLowerCase()}</li>
                <li>Step-by-step guidance for your specific situation</li>
                <li>Common mistakes and how to avoid them</li>
                <li>How [Do Good] NaaS makes this faster and easier</li>
              </ul>
              <h2>Ready to take action?</h2>
              <p className="text-body-lg text-brand-gray-dark">
                Reading is step one. The fastest path to impact is applying — it takes 5 minutes and there&apos;s no cost to apply.
              </p>
            </div>

            {/* In-article CTA */}
            <div className="mt-12 rounded-card-lg bg-coral p-8 text-white text-center">
              <h3 className="text-h3 font-semibold text-white">Launch your fund today.</h3>
              <p className="mt-2 text-body text-white/80">No lawyers. No board. No IRS wait. Apply in 5 minutes.</p>
              <div className="mt-6">
                <Button href="/apply" variant="secondary" className="border-white text-white hover:bg-white/10">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="section-y bg-brand-gray-light" aria-labelledby="related">
            <div className="section-container max-w-content-narrow">
              <h2 id="related" className="text-h3 font-semibold text-brand-black mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="rounded-card-lg bg-white p-6 shadow-card hover:shadow-card-hover transition-shadow block focus-ring"
                  >
                    <span className="text-caption font-semibold text-teal">{related.category}</span>
                    <h3 className="mt-2 text-h3-sm font-semibold text-brand-black hover:text-coral transition-colors">{related.title}</h3>
                    <p className="mt-2 text-body text-brand-gray-dark line-clamp-2">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button href="/blog" variant="secondary">All Articles</Button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
