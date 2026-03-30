export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  publishedAt: string;
}

// Stub posts per spec — replace with CMS / MDX content in Phase 5
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-start-a-nonprofit-without-starting-a-nonprofit",
    title: "How to start a nonprofit (without starting a nonprofit)",
    category: "Fiscal Sponsorship",
    readTime: "6 min read",
    excerpt:
      "Most founders don't actually need to form a 501(c)(3) — they just need the ability to accept tax-deductible donations. Here's the faster path.",
    publishedAt: "2025-10-01",
  },
  {
    slug: "fiscal-sponsorship-vs-501c3",
    title: "Fiscal sponsorship vs. 501(c)(3): which is right for you?",
    category: "Fiscal Sponsorship",
    readTime: "8 min read",
    excerpt:
      "Both give you the ability to accept tax-deductible donations. But they're completely different in terms of cost, timeline, and control. Here's how to decide.",
    publishedAt: "2025-10-08",
  },
  {
    slug: "how-to-raise-your-first-25k",
    title: "How to raise your first $25K",
    category: "Fundraising",
    readTime: "7 min read",
    excerpt:
      "Your first $25K is the hardest. Here's the playbook — from identifying your first 25 donors to setting up a recurring giving program.",
    publishedAt: "2025-10-15",
  },
  {
    slug: "google-ad-grants-qualify-in-30-days",
    title: "Google Ad Grants: how to qualify in 30 days",
    category: "Grants",
    readTime: "5 min read",
    excerpt:
      "$10,000/month in free Google Search ads — available to 501(c)(3) organizations. Here's exactly how fiscal sponsorship clients can qualify fast.",
    publishedAt: "2025-10-22",
  },
  {
    slug: "tickets-as-tax-deductible-donations",
    title: "Tickets as tax-deductible donations: how it works",
    category: "Compliance",
    readTime: "5 min read",
    excerpt:
      "If you're running an event for a nonprofit cause, your tickets may qualify as charitable donations — but only if you structure them correctly.",
    publishedAt: "2025-10-29",
  },
  {
    slug: "creator-foundations-influencers-launching-nonprofits",
    title: "Creator foundations: how influencers are launching nonprofits in a day",
    category: "Creators",
    readTime: "6 min read",
    excerpt:
      "More creators are launching branded giving funds as a way to deepen audience connection, attract brand deals, and create real impact. Here's how.",
    publishedAt: "2025-11-05",
  },
];

export const CATEGORIES = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));
