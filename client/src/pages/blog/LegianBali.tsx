import { Link } from "wouter";
import { Calendar, User, ArrowLeft, ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";
import ShareButton from "@/components/ShareButton";

function DealCopyButton() {
  const [copied, setCopied] = useState(false);
  const code = "TRAVELTIPS";

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div
      className="my-10 rounded-2xl overflow-hidden border border-[#C4541C]/20"
      data-testid="cta-deal-block"
    >
      <div className="bg-[#1A1008] px-8 py-10 text-center">
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Bali Budget Hack
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold text-white mb-3"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Want the Cheapest Prices for Your Bali Trip?
        </h2>
        <p className="text-white/60 mb-6 max-w-md mx-auto">
          Every flight, hotel, and activity platform I personally use. One page, no fluff.
        </p>
        <Link
          href="/deal-seekers"
          data-testid="link-deal-seekers-cta"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C4541C] hover:bg-[#A83F10] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200 mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          View All Bali Deals <ArrowRight size={15} />
        </Link>
        <div className="mt-6 flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 max-w-xs mx-auto">
          <span
            className="text-xs text-white/50 font-medium"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Agoda discount code:
          </span>
          <code
            className="flex-1 text-sm font-mono font-bold text-amber-400 tracking-widest select-all"
            data-testid="code-discount-TRAVELTIPS"
          >
            {code}
          </code>
          <button
            onClick={handleCopy}
            data-testid="button-copy-TRAVELTIPS"
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
              copied
                ? "bg-[#1D4A38] text-white"
                : "bg-[#C4541C] hover:bg-[#A83F10] text-white"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
            title="Copy discount code"
          >
            {copied ? <Check size={11} /> : <Copy size={11} />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LegianBali() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Legian Bali: Skip Canggu, Start Here Instead"
        description="Legian is the smartest first stop in Bali. Close to the airport, on the beach, and half the price of Canggu. The honest guide for first-timers."
        canonical="/blog/legian-bali-first-stop"
        ogType="article"
        publishedTime="2025-12-08"
        author="Eden"
      />

      <div className="relative h-[55vh] overflow-hidden" data-testid="post-hero">
        <img
          src="/images/legian-beach-sunset.jpg"
          alt="Legian Beach Bali at sunset, people walking along the shoreline with surfers in the warm ocean waves"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <span
              className="px-3 py-1 text-xs font-semibold bg-[#C4541C] text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Bali
            </span>
            <span
              className="px-3 py-1 text-xs font-semibold bg-amber-500 text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}
            >
              First-Timer Tips
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12" data-testid="post-content">
        <Link
          href="/blog"
          data-testid="link-back-to-blog"
          className="inline-flex items-center gap-2 text-[#C4541C] hover:text-[#C4541C] text-sm font-semibold mb-8 transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
          data-testid="heading-post-title"
        >
          Why Legian Should Be Your First Stop in Bali (Not Canggu, Not Ubud)
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-[#C4541C]" />
            <span data-testid="text-author">Eden</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-amber-500" />
            <span data-testid="text-date">December 8, 2025</span>
          </span>
          <ShareButton />
        </div>

        <div
          className="prose prose-lg max-w-none text-foreground"
          style={{ fontFamily: "var(--font-sans)" }}
          data-testid="post-body"
        >
          <p className="lead text-xl text-muted-foreground mb-8 leading-relaxed">
            You've just survived a long-haul flight on recycled air and thin coffee. The last thing
            you need is another two hours debating taxi fares to a villa that's still an hour from
            the beach.
          </p>

          <p className="mb-6 leading-relaxed">
            I've seen this play out so many times. First-timers land in Ngurah Rai, immediately
            commit to Canggu or Ubud because that's where the algorithm pointed them, and spend
            their first 48 hours exhausted, disoriented, and overpaying for everything before
            they've even got their bearings.
          </p>

          <p className="mb-6 leading-relaxed">
            There is a better approach, and it starts in Legian. Legian Bali sits just north of
            Kuta and south of Seminyak, which means it gets overlooked by travelers chasing the
            "right" neighborhood. But that's precisely what makes it the smartest place to land.
            Here is the full case.
          </p>

          <h2
            className="text-2xl font-bold mt-10 mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}
          >
            01. The Ocean Fixes Jet Lag Faster Than You Think
          </h2>

          <p className="mb-6 leading-relaxed">
            Within 30 minutes of collecting your bags, you could be standing barefoot on Legian
            Beach. Not sitting in traffic. Not checking into a hotel three transfers away. That
            first swim is something travelers remember for years. The water is warm, the sand is
            wide, and unlike the heavy breaks down in Uluwatu, the surf here is manageable. You
            can actually float, wade, and breathe.
          </p>

          <div className="my-8 rounded-xl overflow-hidden">
            <img
              src="/images/legian-beach-massage.jpg"
              alt="10 dollar beach massage on Legian Beach Bali, massage tables under white umbrellas on the sand with the ocean in the background"
              className="w-full object-cover max-h-[400px]"
            />
            <p className="text-xs text-muted-foreground text-center mt-2 italic">
              $10 for a one-hour beach massage. It's genuinely hard to leave.
            </p>
          </div>

          <p className="mb-6 leading-relaxed">
            Legian Beach is one of the few spots on Bali's southern coast where swim conditions are
            genuinely safe and approachable for non-surfers. No rip currents, no heavy shore
            breaks, no drama. That contrast, twenty hours of recycled airplane air to open ocean in
            under an hour, is the fastest jet lag cure I have found. Not melatonin. Not blackout
            curtains. Salt water.
          </p>

          <p className="mb-6 leading-relaxed">
            The science backs it up:{" "}
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/29100939/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline hover:text-foreground"
            >
              research published in the International Journal of Environmental Research and Public
              Health
            </a>{" "}
            confirms that exposure to natural light and outdoor physical environments significantly
            accelerates circadian rhythm resynchronization after long-haul travel. A swim and a
            sunset on Legian Beach is not just pleasant. It is physiologically the right call.
          </p>

          <h2
            className="text-2xl font-bold mt-10 mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}
          >
            02. Your Budget Will Thank You on Day One
          </h2>

          <p className="mb-6 leading-relaxed">
            Bali is more affordable than most Western destinations, but costs vary dramatically by
            neighborhood. Canggu has crept up significantly in price over the last few years, and
            Seminyak has always been the premium pick. Legian sits in a different category
            entirely.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-8">
            <div className="p-5 bg-card border border-card-border rounded-xl">
              <h3
                className="font-bold text-foreground mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Canggu and Seminyak
              </h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>Boutique hotels from $60 to $200 per night</li>
                <li>Brunch at full tourist pricing</li>
                <li>30 to 60 minutes from the airport</li>
                <li>Heavily saturated with travelers</li>
              </ul>
            </div>
            <div className="p-5 bg-[#C4541C]/5 border border-[#C4541C]/20 rounded-xl">
              <h3
                className="font-bold text-[#C4541C] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Legian (the smart choice)
              </h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>Solid hotels from $20 to $80 per night</li>
                <li>Local warungs with full meals under $4</li>
                <li>20 to 30 minutes from the airport</li>
                <li>Casual, walkable, low-pressure</li>
              </ul>
            </div>
          </div>

          <p className="mb-6 leading-relaxed">
            The difference between starting your trip in Legian versus a pricier neighborhood can
            realistically save you $30 to $60 per day on accommodation alone. Money that stays in
            your pocket for day trips, experiences, and the parts of Bali that actually cost more
            to reach. For all the platforms I use to find the best Bali accommodation deals, the{" "}
            <Link
              href="/deal-seekers"
              className="text-[#C4541C] font-semibold hover:underline"
              data-testid="link-deal-seekers-inline"
            >
              Travel Deal Seekers page
            </Link>{" "}
            has everything in one place.
          </p>

          <h2
            className="text-2xl font-bold mt-10 mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}
          >
            03. The Best Place to Learn to Surf in Bali
          </h2>

          <p className="mb-6 leading-relaxed">
            The surf breaks in Uluwatu and Padang Padang are world-class, which is exactly why a
            beginner has no business being there on day one. Legian is forgiving in a way the
            southern points aren't. Smaller waves, sandy bottom, and enough space to fall off a
            board without causing a scene.
          </p>

          <p className="mb-6 leading-relaxed">
            Surf lessons here run $15 to $25 USD for two hours with an instructor, and the
            instructors along Legian Beach have been doing this for years. You'll catch your first
            waves in a morning session and spend the afternoon wondering why you waited so long to
            try. It's not just about the experience either. It's about starting your Bali trip with
            something you actually did, not just photographed.
          </p>

          <p className="mb-6 leading-relaxed">
            Before you go, it's worth knowing that{" "}
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/30631827/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline hover:text-foreground"
            >
              research in the British Journal of Sports Medicine
            </a>{" "}
            shows that blue space environments (ocean, coastline, open water) significantly reduce
            cortisol and self-reported stress within 20 minutes of exposure. Your first surf lesson
            in Legian isn't just fun. It's a complete nervous system reset after the flight.
          </p>

          <h2
            className="text-2xl font-bold mt-10 mb-4"
            style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}
          >
            04. Nowhere Is This Easy to Reach From Legian
          </h2>

          <div className="my-8 rounded-xl overflow-hidden">
            <img
              src="/images/legian-bali-street.jpg"
              alt="Legian main street Bali with motorbikes, local shops and tourists walking in the daytime sunshine"
              className="w-full object-cover max-h-[350px]"
            />
            <p className="text-xs text-muted-foreground text-center mt-2 italic">
              The main street through Legian: busy, walkable, and genuinely useful.
            </p>
          </div>

          <p className="mb-6 leading-relaxed">
            Legian's location is its quietest advantage. App-based ride services like Grab and
            Gojek are cheap and reliable here, and the southern coast's highlights are all within
            easy reach. No car rental required for your first few days.
          </p>

          <div className="my-8 overflow-x-auto">
            <table className="w-full text-sm border-collapse" data-testid="table-distances">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>Destination</th>
                  <th className="text-left py-3 pr-4 font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>Vibe</th>
                  <th className="text-left py-3 font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>Travel Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dest: "Canggu", vibe: "Cafes, surf culture, digital nomads", time: "~25 min" },
                  { dest: "Seminyak", vibe: "Upscale dining, beach clubs", time: "~10 min" },
                  { dest: "Uluwatu", vibe: "Cliff temples, world-class surf", time: "~35 min" },
                  { dest: "Ubud", vibe: "Rice terraces, temples, healing", time: "~60 min" },
                  { dest: "Nusa Dua", vibe: "Calm water beaches, luxury resorts", time: "~30 min" },
                ].map((row) => (
                  <tr key={row.dest} className="border-b border-border/50">
                    <td className="py-3 pr-4 font-semibold text-foreground">{row.dest}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{row.vibe}</td>
                    <td className="py-3">
                      <span className="inline-block bg-[#C4541C] text-white text-xs px-2.5 py-1 rounded-full font-medium">
                        {row.time}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-6 leading-relaxed">
            You get the access without paying the premium to sleep in each neighborhood every
            night. Use Legian as your base for three or four days, then move as you go. If you
            want to know how to skip the immigration queue when you land, the{" "}
            <Link
              href="/blog/skip-lines-bali"
              className="text-[#C4541C] font-semibold hover:underline"
              data-testid="link-skip-lines"
            >
              Bali airport lines guide
            </Link>{" "}
            walks through every step.
          </p>

          <div className="my-10 p-8 bg-[#1A1008] rounded-2xl" data-testid="callout-truth">
            <h2
              className="text-2xl font-bold text-amber-400 mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              The Part No One Tells You
            </h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Legian isn't trying to be cool. That's the point. It doesn't have the curated cafe
              scene of Canggu or the temple-at-every-turn magic of Ubud. What it has is the beach,
              easy logistics, reasonable prices, and the kind of low-key energy that's genuinely
              useful when you've just landed somewhere new and your body thinks it's 3am.
            </p>
            <p className="text-white/80 mb-4 leading-relaxed">
              You won't spend your entire trip here and you shouldn't. Bali rewards the traveler
              who moves through it: jungle one week, coast the next, a village market on the way
              back. But your starting point shapes everything that follows. Start tired and
              scattered, and the first half of your trip is recovery. Start grounded and close to
              the ocean, and you're already in it by the end of day one.
            </p>
            <p className="text-white/80 leading-relaxed">
              Legian gives you that start. Everything else opens up from there. And if you want the
              Ubud magic on day four,{" "}
              <Link
                href="/blog/balis-one-love-vibe"
                className="text-amber-400 hover:underline font-semibold"
                data-testid="link-bali-one-love"
              >
                this post covers everything you need to know about Ubud's One Love vibe
              </Link>
              .
            </p>
          </div>

          <h3
            className="text-xl font-bold mt-12 mb-6"
            style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}
            data-testid="heading-faq"
          >
            Common Questions About Visiting Legian, Bali
          </h3>

          <div className="space-y-4 mb-10" data-testid="faq-section">
            {[
              {
                q: "Is Legian good for first-time visitors to Bali?",
                a: "Yes, arguably the best starting neighborhood. It's close to the airport, affordable, directly on the beach, and central enough to reach the rest of southern Bali without a long commute. Most first-timers overcomplicate their first days by heading straight to Ubud or Canggu. Legian removes that friction entirely.",
              },
              {
                q: "Is Legian Beach safe for swimming?",
                a: "Generally yes, especially compared to the heavy surf beaches in Uluwatu or Balangan. The waves are smaller and more manageable. Always swim between the flags when they're present, and check local conditions in the wet season (November to March) when swells increase.",
              },
              {
                q: "How far is Legian from Ngurah Rai Airport?",
                a: "Approximately 20 to 30 minutes by car in normal traffic, making it one of the closest beach areas to the airport. A Grab or Gojek ride typically runs 60,000 to 90,000 IDR, roughly $4 to $6 USD.",
              },
              {
                q: "What is the difference between Legian, Kuta, and Seminyak?",
                a: "Kuta (to the south) is the busiest and most budget-oriented but can feel chaotic. Seminyak (to the north) is polished and pricier with more upscale dining and beach clubs. Legian sits in between: less hectic than Kuta, more affordable than Seminyak, with a walkable, relaxed energy that works well for arrivals.",
              },
              {
                q: "How many days should I spend in Legian?",
                a: "Two to four days is the sweet spot. Enough to decompress, orient yourself, catch a surf lesson, and do a couple of day trips, but not so long that you miss the wider island. After Legian, most travelers move on to Ubud for the culture and interior, then south toward Uluwatu before heading to the Gili Islands or Lombok.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="border border-border rounded-xl p-5 group"
                data-testid={`faq-item-${i}`}
              >
                <summary
                  className="cursor-pointer font-semibold text-foreground list-none flex justify-between items-center"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.q}
                  <span className="text-[#C4541C] text-lg font-light ml-4 flex-shrink-0">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{item.a}</p>
              </details>
            ))}
          </div>

          <DealCopyButton />

          <p className="text-xs text-muted-foreground text-center italic mt-4">
            Travel Tips Exposed is an independent travel blog. All recommendations are based on
            personal experience. Some links may be affiliate links. I only recommend services I'd
            suggest to a friend.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link
            href="/blog"
            data-testid="link-bottom-back-to-blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C4541C] text-[#C4541C] hover:bg-[#C4541C] hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <ArrowLeft size={16} /> All Posts
          </Link>
          <Link
            href="/blog/balis-one-love-vibe"
            data-testid="link-next-post"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4541C] hover:bg-[#A83F10] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bali One Love Vibe <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
