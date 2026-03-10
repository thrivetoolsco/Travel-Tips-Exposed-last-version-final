import { Link } from "wouter";
import { ArrowRight, Heart } from "lucide-react";
import aboutImg from "@assets/IMG-20251218-WA0018_1773174404095.jpg";

const tags = ["Traveler", "Music Head", "Psychonaut", "Breathwork Space Holder", "Gardener"];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative py-24 px-4 overflow-hidden"
        style={{ background: "#1A1008" }}
        data-testid="about-hero"
      >
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.45) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(217, 158, 20, 0.3) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-amber-400 border border-amber-400/30 px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "var(--font-display)" }}>
            The Human Behind the Blog
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            style={{ fontFamily: "var(--font-serif)" }}
            data-testid="heading-about"
          >
            About
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16" data-testid="about-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-400/20 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#C4541C]/20 rounded-2xl" />
            <img
              src={aboutImg}
              alt="Eden - Travel Tips Exposed"
              className="relative w-full rounded-2xl object-cover shadow-xl"
              data-testid="img-about-portrait"
              loading="eager"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}
              >
                Hi, I'm{" "}
                <span className="text-[#C4541C]">Eden</span>.
              </h2>
              <div className="flex flex-wrap gap-2 mb-5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    data-testid={`badge-tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full border"
                    style={{
                      fontFamily: "var(--font-display)",
                      background: "rgba(196,84,28,0.08)",
                      color: "#C4541C",
                      borderColor: "rgba(196,84,28,0.25)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="w-16 h-1 bg-amber-400 rounded-full mb-6" />
              <p className="text-foreground leading-relaxed text-base mb-4" data-testid="text-bio-1">
                I spend my time moving through places looking for that vibe that actually shifts something inside. Whether I'm scouting a remote spot for a plant medicine or finding a drum circle to dance and have fun, I'm looking for the raw evidence of a life well lived.
              </p>
              <p className="text-foreground leading-relaxed mb-4" data-testid="text-bio-2">
                This space is for the seekers and the music heads who want to explore the planet without losing their edge or draining their resources.
              </p>
              <p className="text-foreground leading-relaxed" data-testid="text-bio-3">
                I also curated a collection of evidence based biology and wellness tech I use to clear the fog, beat jet lag, and stay at a high frequency while on the move. You can also find me here:{" "}
                <a
                  href="https://thrivetools.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C4541C] hover:underline font-semibold"
                  data-testid="link-thrivetools"
                >
                  thrivetools.co
                </a>
              </p>
            </div>

            <Link
              href="/blog"
              data-testid="button-about-read-blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4541C] hover:bg-[#A83F10] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Read the Blog <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-amber-500/15 bg-amber-950/15" data-testid="affiliate-disclosure">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-900/30 rounded-xl flex-shrink-0">
              <Heart size={24} className="text-amber-600" />
            </div>
            <div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}
              >
                Affiliate Link Information
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Some of the links on this site are affiliate links. This means I may earn a small commission if you make a purchase through them at no extra cost to you. I only recommend things I genuinely use or believe in:
              </p>
              <Link
                href="/deal-seekers"
                data-testid="link-favorite-platforms"
                className="inline-flex items-center gap-2 mt-4 text-amber-600 hover:text-amber-500 font-semibold text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Favorite Travel Platforms <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
