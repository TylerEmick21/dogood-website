import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About — We Believe Doing Good Should Be Easy",
  description:
    "Do Good exists to remove the structural barriers between bold ideas and real impact. Learn about our mission, our founder, and the team behind the platform.",
};

const BELIEFS = [
  {
    title: "Doing good is a business strategy, not a charity tax.",
    body: "The most successful companies we know are also the most purpose-driven ones. Impact isn't something you earn the right to pursue after financial success. It's a competitive advantage you build from day one.",
  },
  {
    title: "The barriers to doing good are structural, not motivational.",
    body: "People aren't failing to make impact because they don't care. They're failing because the system is expensive, slow, and confusing. We're here to dismantle those barriers — one fund at a time.",
  },
  {
    title: "Speed matters. A mission delayed is a mission diminished.",
    body: "The traditional nonprofit formation process costs you time and money you could be putting toward your mission. We built NaaS to solve that — permanently.",
  },
];

const TEAM = [
  {
    name: "Andy Choi",
    title: "Founder & CEO",
    bio: "Andy grew up in a family rooted in service. Later, in the tech world, he watched impact get treated as something you pursue only after financial success — a reward for \"making it.\" He built Do Good to prove it doesn't have to be either/or. Andy leads strategy, partnerships, and product at [Do Good].",
  },
  {
    name: "Kamara",
    title: "Operations",
    bio: "Placeholder — coming soon.",
  },
  {
    name: "Jess",
    title: "Client Success",
    bio: "Placeholder — coming soon.",
  },
  {
    name: "Tyler Emick",
    title: "Strategy & Growth",
    bio: "Placeholder — coming soon.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-brand-black py-24 text-white" aria-labelledby="about-hero">
          <div className="section-container max-w-content-narrow">
            <h1 id="about-hero" className="text-display-lg font-bold text-white">
              We believe doing good should be easy.
            </h1>
            <p className="mt-6 text-body-lg text-white/75 leading-relaxed">
              Do Good exists to remove the structural barriers between bold ideas and real impact.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="section-y bg-white" aria-labelledby="mission">
          <div className="section-container max-w-content-narrow text-center">
            <p className="text-caption font-semibold uppercase tracking-widest text-coral mb-4">Our Mission</p>
            <h2 id="mission" className="text-display-lg font-bold text-brand-black">
              Make doing good easy, accessible, and scalable — for anyone.
            </h2>
            <p className="mt-6 text-body-lg text-brand-gray-dark leading-relaxed">
              We built Do Good on the belief that impact shouldn&apos;t be reserved for people who can afford a lawyer, a board, and 18 months of IRS wait time. NaaS is our answer to that: a full-stack nonprofit infrastructure that anyone can launch in days.
            </p>
          </div>
        </section>

        {/* Andy's Story */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="story">
          <div className="section-container">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
              {/* Text */}
              <div>
                <p className="text-caption font-semibold uppercase tracking-widest text-coral mb-4">The Origin Story</p>
                <h2 id="story" className="text-h2-sm font-semibold text-brand-black">Why Andy built Do Good</h2>
                <div className="mt-6 space-y-4 text-body-lg text-brand-gray-dark leading-relaxed">
                  <p>
                    Andy Choi grew up in a family where service wasn&apos;t a weekend activity — it was the culture. Volunteering, giving, and looking out for the community were just part of how his family moved through the world.
                  </p>
                  <p>
                    Later, working in tech, he kept running into a frustrating pattern: impact was treated as something you earned the right to pursue{" "}
                    <em>after</em> financial success. Give back{" "}
                    <em>once you&apos;ve made it</em>. Build your foundation{" "}
                    <em>after the exit</em>.
                  </p>
                  <p>
                    He didn&apos;t buy it. He saw businesses and creators with real resources, real audiences, and real desire to do something meaningful — held back by bureaucracy, legal cost, and inertia.
                  </p>
                  <p>
                    So he built Do Good to prove the premise wrong:{" "}
                    <strong className="text-brand-black">you don&apos;t have to choose between financial success and social impact.</strong> The fastest path to impact starts today.
                  </p>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="rounded-card-lg bg-brand-black/5 aspect-[4/3] flex items-center justify-center border border-gray-200">
                <p className="text-caption text-brand-gray-dark text-center px-8">
                  [Photo of Andy — replace with actual asset]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Beliefs */}
        <section className="section-y bg-white" aria-labelledby="beliefs">
          <div className="section-container">
            <p className="text-caption font-semibold uppercase tracking-widest text-coral text-center mb-4">What We Believe</p>
            <h2 id="beliefs" className="text-center">Three beliefs that drive everything we build.</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {BELIEFS.map((belief, i) => (
                <div key={i} className="relative rounded-card-lg bg-brand-gray-light p-8">
                  <span className="absolute -top-4 left-6 text-6xl font-bold text-coral/10 leading-none select-none" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative text-h3-sm font-semibold text-brand-black">{belief.title}</h3>
                  <p className="mt-3 text-body text-brand-gray-dark">{belief.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-y bg-brand-gray-light" aria-labelledby="team">
          <div className="section-container">
            <h2 id="team" className="text-center">The Team</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((member) => (
                <div key={member.name} className="rounded-card-lg bg-white p-6 shadow-card">
                  {/* Avatar placeholder */}
                  <div className="h-20 w-20 rounded-full bg-coral-light flex items-center justify-center mb-4">
                    <span className="text-h2-sm font-bold text-coral">{member.name[0]}</span>
                  </div>
                  <h3 className="text-h3-sm font-semibold text-brand-black">{member.name}</h3>
                  <p className="text-caption font-medium text-coral mb-3">{member.title}</p>
                  <p className="text-caption text-brand-gray-dark leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-coral py-20 text-center">
          <div className="section-container">
            <h2 className="text-white text-display-lg font-bold">Want to work with us?</h2>
            <p className="mt-4 text-body-lg text-white/80 max-w-lg mx-auto">
              Whether you&apos;re ready to launch a fund or just want to learn more — we&apos;d love to talk.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/apply" variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">Apply Now</Button>
              <Button href="/contact" variant="tertiary" size="lg" className="text-white hover:text-white/80">Get in Touch</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
