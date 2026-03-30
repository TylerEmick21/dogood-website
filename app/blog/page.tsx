import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS, CATEGORIES } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Nonprofit & Fundraising Resources",
  description:
    "Practical guides on fiscal sponsorship, fundraising, grants, and nonprofit strategy — from the team at [Do Good].",
};

function PostCard({ post }: { post: typeof BLOG_POSTS[0] }) {
  return (
    <article className="flex flex-col rounded-card-lg bg-white shadow-card hover:shadow-card-hover transition-shadow overflow-hidden">
      {/* Color bar by category */}
      <div className="h-1.5 w-full bg-coral" aria-hidden="true" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="rounded-full bg-teal-light px-3 py-0.5 text-caption font-semibold text-teal">
            {post.category}
          </span>
          <span className="text-caption text-brand-gray-dark">{post.readTime}</span>
        </div>
        <Link href={`/blog/${post.slug}`} className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded-sm">
          <h2 className="text-h3-sm font-semibold text-brand-black group-hover:text-coral transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        <p className="mt-3 text-body text-brand-gray-dark line-clamp-3 flex-1">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between">
          <time className="text-caption text-brand-gray-dark" dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </time>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-caption font-semibold text-coral hover:underline focus-ring rounded-sm"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section className="bg-brand-black py-20 text-white">
          <div className="section-container">
            <h1 className="text-display-lg font-bold text-white">Resources</h1>
            <p className="mt-4 text-body-lg text-white/70 max-w-xl">
              Practical guides on fiscal sponsorship, fundraising, grants, and running a compliant nonprofit.
            </p>
          </div>
        </section>

        {/* Category filter */}
        <section className="border-b border-gray-100 bg-white py-4">
          <div className="section-container">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-caption font-semibold text-brand-gray-dark mr-2">Filter:</span>
              <Link
                href="/blog"
                className="rounded-full border border-coral bg-coral-light px-4 py-1.5 text-caption font-semibold text-coral hover:bg-coral hover:text-white transition-colors"
              >
                All
              </Link>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog?category=${encodeURIComponent(cat)}`}
                  className="rounded-full border border-gray-200 px-4 py-1.5 text-caption font-semibold text-brand-gray-dark hover:border-coral hover:text-coral transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Post grid */}
        <section className="section-y bg-brand-gray-light" aria-label="Blog posts">
          <div className="section-container">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-y bg-white text-center">
          <div className="section-container">
            <h2 className="text-h2-sm font-semibold text-brand-black">Ready to launch your fund?</h2>
            <p className="mt-4 text-body-lg text-brand-gray-dark max-w-lg mx-auto">
              Knowledge is step one. Step two is applying — takes 5 minutes.
            </p>
            <div className="mt-8">
              <Button href="/apply" variant="primary" size="lg">Apply Now</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
