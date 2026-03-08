import { Link } from "wouter";
import { ArrowRight, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative py-24 px-4 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d3d35 0%, #1a0a05 100%)" }}
        data-testid="about-hero"
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(45, 212, 191, 0.4) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(217, 158, 20, 0.3) 0%, transparent 60%)",
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
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-teal-600/20 rounded-2xl" />
            <img
              src="https://traveltipsexposed.com/wp-content/uploads/2026/01/about-image.webp"
              alt="Eden - Travel Tips Exposed"
              className="relative w-full rounded-2xl object-cover shadow-xl"
              data-testid="img-about-portrait"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}
              >
                Hi, I'm{" "}
                <span className="text-teal-600">Eden</span>, the face behind Travel Tips Exposed.
              </h2>
              <div className="w-16 h-1 bg-amber-400 rounded-full mb-6" />
              <p className="text-foreground leading-relaxed text-lg" data-testid="text-bio">
                I'm a world traveler, music head, psychonaut, breathwork space holder, gardener and videographer.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                I created this blog to share with like minded people the coolest places I've found along the way with the exact tips and budget hacks I've used to explore them.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["World Traveler", "Music Head", "Psychonaut", "Breathwork", "Gardener", "Videographer"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 dark:bg-teal-900/30 dark:text-teal-300 rounded-full border border-teal-200 dark:border-teal-700"
                  style={{ fontFamily: "var(--font-display)" }}
                  data-testid={`badge-tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/blog"
              data-testid="button-about-read-blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Read the Blog <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl border border-amber-200 dark:border-amber-800/30 bg-amber-50 dark:bg-amber-900/10" data-testid="affiliate-disclosure">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex-shrink-0">
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
