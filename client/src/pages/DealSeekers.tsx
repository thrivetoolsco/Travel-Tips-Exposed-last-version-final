import { useState, useEffect } from "react";
import { Plane, BedDouble, Briefcase, Home, Car, Map, Shield, Package, ExternalLink, Leaf, Copy, Check } from "lucide-react";

interface Platform {
  name: string;
  description: string;
  url: string;
  tag: string;
  tagColor: string;
  discountCode?: string;
}

interface Section {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  emoji: string;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  platforms: Platform[];
}

const sections: Section[] = [
  {
    id: "deals-flights",
    icon: Plane,
    emoji: "✈️",
    title: "Flights",
    color: "text-[#C4541C]",
    bgColor: "bg-[#C4541C]/10",
    borderColor: "border-[#C4541C]/20",
    platforms: [
      {
        name: "Kayak",
        description: "My go-to for finding deals. Book 4 months out for the best prices on long-haul flights.",
        url: "https://www.kayak.com",
        tag: "Best for Long Haul",
        tagColor: "bg-[#C4541C]/10 text-[#D4855A]",
      },
      {
        name: "Skyscanner",
        description: "The best for flexible date searches. The 'Whole Month' view is a game-changer for finding the cheapest day to fly.",
        url: "https://www.skyscanner.com",
        tag: "Best for Flexibility",
        tagColor: "bg-amber-100 text-amber-700",
      },
      {
        name: "Google Flights",
        description: "Excellent for price tracking. Set alerts and get notified when prices drop for your route.",
        url: "https://flights.google.com",
        tag: "Price Alerts",
        tagColor: "bg-sky-100 text-sky-700",
      },
      {
        name: "Kiwi.com",
        description: "Smart routing, finds creative combinations to get you there for less. Great for multi-city trips.",
        url: "https://www.kiwi.com",
        tag: "Multi-City",
        tagColor: "bg-rose-100 text-rose-700",
      },
    ],
  },
  {
    id: "deals-accommodations",
    icon: BedDouble,
    emoji: "🛏️",
    title: "Accommodations",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-400/25",
    platforms: [
      {
        name: "Agoda",
        description: "The MVP for Southeast Asia. Best deals and the most flexible cancellation policies. For 45 days in Bali, accommodation came to around CAD $600.",
        url: "https://www.agoda.com",
        tag: "Best for SEA",
        tagColor: "bg-amber-100 text-amber-700",
      },
      {
        name: "Hostelworld",
        description: "The best for finding cheap shared rooms. I love shared rooms for meeting amazing people and instant connections.",
        url: "https://www.hostelworld.com",
        tag: "Budget Travel",
        tagColor: "bg-[#C4541C]/10 text-[#D4855A]",
      },
      {
        name: "Booking.com",
        description: "Massive inventory, trustworthy reviews, and great free cancellation options.",
        url: "https://www.booking.com",
        tag: "Best Selection",
        tagColor: "bg-sky-100 text-sky-700",
      },
      {
        name: "Retreat Guru",
        description: "For the conscious travelers. Find yoga retreats, meditation centers, ayahuasca retreats, and spiritual escapes worldwide.",
        url: "https://retreat.guru",
        tag: "Spiritual Travel",
        tagColor: "bg-[#1D4A38]/15 text-[#1D4A38]",
      },
    ],
  },
  {
    id: "deals-work",
    icon: Briefcase,
    emoji: "🤑",
    title: "Work Exchange",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-400/25",
    platforms: [
      {
        name: "Worldpackers",
        description: "Work a few hours a day in exchange for free accommodation. Perfect for extending trips on zero budget.",
        url: "https://www.worldpackers.com",
        tag: "Most Popular",
        tagColor: "bg-rose-100 text-rose-700",
      },
      {
        name: "Workaway",
        description: "One of the original work exchange platforms. Thousands of hosts worldwide, from organic farms to eco-lodges.",
        url: "https://www.workaway.info",
        tag: "Huge Network",
        tagColor: "bg-amber-100 text-amber-700",
      },
      {
        name: "HelpX",
        description: "Help exchange, great for finding farm stays, homesteads, and eco-projects.",
        url: "https://www.helpx.net",
        tag: "Farm Stays",
        tagColor: "bg-[#C4541C]/10 text-[#D4855A]",
      },
      {
        name: "WWOOF",
        description: "World Wide Opportunities on Organic Farms. Work on organic farms in exchange for food and accommodation. One of the best ways to connect with local culture and land.",
        url: "https://wwoof.net",
        tag: "Organic Farms",
        tagColor: "bg-[#1D4A38]/15 text-[#1D4A38]",
      },
    ],
  },
  {
    id: "deals-sitting",
    icon: Home,
    emoji: "🏘️",
    title: "Housesitting",
    color: "text-[#C4541C]",
    bgColor: "bg-[#C4541C]/10",
    borderColor: "border-[#C4541C]/20",
    platforms: [
      {
        name: "TrustedHousesitters",
        description: "The gold standard. Get free accommodation in exchange for looking after someone's home and pets. It's a beautiful deal.",
        url: "https://www.trustedhousesitters.com",
        tag: "Gold Standard",
        tagColor: "bg-amber-100 text-amber-700",
      },
      {
        name: "Nomador",
        description: "European-centric platform with a more curated approach to house sitting.",
        url: "https://www.nomador.com",
        tag: "Europe Focus",
        tagColor: "bg-[#C4541C]/10 text-[#D4855A]",
      },
      {
        name: "HouseCarers",
        description: "Great selection globally, especially for longer-term sits.",
        url: "https://www.housecarers.com",
        tag: "Long-Term Sits",
        tagColor: "bg-rose-100 text-rose-700",
      },
    ],
  },
  {
    id: "deals-transport",
    icon: Car,
    emoji: "🚙",
    title: "Transportation & Ride Shares",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-400/25",
    platforms: [
      {
        name: "Grab",
        description: "The Uber of Southeast Asia. You can schedule your airport lift in advance, and the driver tracks your flight arrival. Life. Saver.",
        url: "https://www.grab.com",
        tag: "Essential for SEA",
        tagColor: "bg-[#C4541C]/10 text-[#D4855A]",
      },
      {
        name: "BlaBlaCar",
        description: "The best carpooling platform. Share rides across Europe and beyond for a fraction of train costs.",
        url: "https://www.blablacar.com",
        tag: "Europe Carpooling",
        tagColor: "bg-amber-100 text-amber-700",
      },
      {
        name: "Rome2Rio",
        description: "Compare all transport options. Planes, trains, buses, ferries, from A to B worldwide. Essential for planning.",
        url: "https://www.rome2rio.com",
        tag: "Route Comparison",
        tagColor: "bg-rose-100 text-rose-700",
      },
      {
        name: "12Go.Asia",
        description: "The best for booking trains, buses and ferries across Southeast Asia.",
        url: "https://12go.asia",
        tag: "SEA Transport",
        tagColor: "bg-sky-100 text-sky-700",
      },
    ],
  },
  {
    id: "deals-tours",
    icon: Map,
    emoji: "🌍",
    title: "Guided Tours",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-400/25",
    platforms: [
      {
        name: "GetYourGuide",
        description: "The biggest library of tours, activities and experiences worldwide. Great free cancellation policies.",
        url: "https://www.getyourguide.com",
        tag: "Most Variety",
        tagColor: "bg-rose-100 text-rose-700",
      },
      {
        name: "Viator",
        description: "TripAdvisor's tour platform. Excellent reviews system for vetting tours before you book.",
        url: "https://www.viator.com",
        tag: "Trusted Reviews",
        tagColor: "bg-amber-100 text-amber-700",
      },
      {
        name: "Airbnb Experiences",
        description: "Hosted by locals. For the authentic, off-the-beaten-path experiences that tour companies don't offer.",
        url: "https://www.airbnb.com/experiences",
        tag: "Local Experiences",
        tagColor: "bg-[#C4541C]/10 text-[#D4855A]",
      },
    ],
  },
  {
    id: "deals-insurance",
    icon: Shield,
    emoji: "🚑",
    title: "Travel Insurance",
    color: "text-[#C4541C]",
    bgColor: "bg-[#C4541C]/10",
    borderColor: "border-[#C4541C]/20",
    platforms: [
      {
        name: "SafetyWing",
        description: "The digital nomad's insurance of choice. Affordable monthly plans that cover you globally with automatic renewal.",
        url: "https://safetywing.com",
        tag: "Best for Nomads",
        tagColor: "bg-[#C4541C]/10 text-[#D4855A]",
      },
      {
        name: "World Nomads",
        description: "Solid adventure travel insurance for the more extreme activities. Surfing, trekking, scuba diving, etc.",
        url: "https://www.worldnomads.com",
        tag: "Adventure Coverage",
        tagColor: "bg-amber-100 text-amber-700",
      },
    ],
  },
  {
    id: "deals-gear",
    icon: Package,
    emoji: "🥾",
    title: "Gear",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-400/25",
    platforms: [
      {
        name: "Grayl Water Filter",
        description: "The only way I can travel guilt-free and belly-issue-free. Eliminates viruses, bacteria, and protozoa. Fast and durable. Non-negotiable for Asia and jungle travel.",
        url: "https://grayl.com",
        tag: "Essential Gear",
        tagColor: "bg-[#C4541C]/10 text-[#D4855A]",
      },
      {
        name: "Just Thrive Probiotics",
        description: "Start taking a high quality probiotic before you leave home and don't skip a single day while traveling.",
        url: "https://justthrivehealth.com/THRIVETOOLS",
        tag: "Health Essential",
        tagColor: "bg-rose-100 text-rose-700",
        discountCode: "THRIVETOOLS",
      },
      {
        name: "Osprey Packs",
        description: "The backpack I'd trust my life with. Built to last years of hard travel. Their Farpoint series is the gold standard for travel backpacks.",
        url: "https://www.osprey.com",
        tag: "Best Backpack",
        tagColor: "bg-amber-100 text-amber-700",
      },
      {
        name: "Earthrunners",
        description: "Minimalist grounding sandals built for world travel. Light enough to pack flat, durable enough for mountain treks. My go-to footwear for warm climates.",
        url: "https://earthrunners.com",
        tag: "Best Travel Sandals",
        tagColor: "bg-[#1D4A38]/15 text-[#1D4A38]",
        discountCode: "THRIVETOOLS",
      },
      {
        name: "KnowRoaming eSIM",
        description: "Download an app, buy a data plan for any country, and install it instantly before you take off. The moment your plane lands, you have data. No SIM card fuss.",
        url: "https://www.knowroaming.com",
        tag: "Stay Connected",
        tagColor: "bg-sky-100 text-sky-700",
      },
      {
        name: "GoPro Hero",
        description: "The toughest action camera on the planet. Waterproof, shockproof, and fits in your pocket. I use this to document everything from reef dives to mountain hikes.",
        url: "https://gopro.com",
        tag: "Action Camera",
        tagColor: "bg-[#C4541C]/10 text-[#D4855A]",
      },
      {
        name: "DJI Osmo Pocket",
        description: "3-axis gimbal camera in a pocket-sized package. Silky smooth footage without the bulk of a full camera setup. Perfect for travel vlogs.",
        url: "https://www.dji.com/osmo-pocket-3",
        tag: "Best for Video",
        tagColor: "bg-sky-100 text-sky-700",
      },
      {
        name: "Peak Design",
        description: "The world's best camera bags, straps, and organizers. Built for adventure travel, carries your camera securely while looking good doing it.",
        url: "https://www.peakdesign.com",
        tag: "Camera Gear",
        tagColor: "bg-amber-100 text-amber-700",
      },
      {
        name: "Anker Power Bank",
        description: "A high-capacity portable charger is non-negotiable for long travel days. Anker is the most reliable brand, never lost a device to a dead battery since switching.",
        url: "https://www.anker.com",
        tag: "Stay Powered",
        tagColor: "bg-[#1D4A38]/15 text-[#1D4A38]",
      },
    ],
  },
  {
    id: "deals-wellness",
    icon: Leaf,
    emoji: "🌱",
    title: "Wellness Essentials",
    color: "text-[#1D4A38]",
    bgColor: "bg-[#1D4A38]/10",
    borderColor: "border-[#1D4A38]/25",
    platforms: [
      {
        name: "ThriveTools",
        description: "Eden's dedicated wellness resource hub. Biohacking tools, grounding practices, supplements, and everything you need to optimize your health, whether you're home or on the road.",
        url: "https://thrivetools.co",
        tag: "Eden's Wellness Hub",
        tagColor: "bg-[#1D4A38]/15 text-[#1D4A38]",
      },
      {
        name: "Just Thrive Probiotics",
        description: "Start taking a high quality probiotic before you leave home and don't skip a single day while traveling. Spore-based, shelf-stable, and the most effective probiotic I've ever used.",
        url: "https://justthrivehealth.com/THRIVETOOLS",
        tag: "Gut Health Essential",
        tagColor: "bg-rose-100 text-rose-700",
        discountCode: "THRIVETOOLS",
      },
      {
        name: "IM8 Health",
        description: "The most comprehensive daily health supplement I've found. One scoop covers your greens, adaptogens, vitamins, and minerals. Perfect for travel days when your nutrition goes sideways.",
        url: "https://im8health.com",
        tag: "Daily Essentials",
        tagColor: "bg-[#1D4A38]/15 text-[#1D4A38]",
        discountCode: "THRIVE10",
      },
      {
        name: "Organika Creatine",
        description: "Creatine is one of the most well researched supplements out there and Organika's version is clean and unflavoured. It supports muscle recovery after intense movement, helping your body bounce back faster so you can keep going. What I love most is what it does for your brain on low sleep days. When you did not get enough rest, creatine steps in and helps your brain run on a fuller tank. You stay sharp, focused, and actually on your game instead of running on fumes. A non negotiable in my daily stack.",
        url: "https://organika.com",
        tag: "Brain and Muscle",
        tagColor: "bg-sky-100 text-sky-700",
        discountCode: "EDEN_25",
      },
    ],
  },
];

function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center gap-2 mt-3 p-2.5 bg-[#F0E8DF] border border-[#E8DDD0] rounded-lg">
      <span className="text-xs text-[#1A1008]/50 font-medium" style={{ fontFamily: "var(--font-display)" }}>
        Discount code:
      </span>
      <code
        className="flex-1 text-xs font-mono font-bold text-[#C4541C] tracking-wider select-all"
        data-testid={`code-discount-${code}`}
      >
        {code}
      </code>
      <button
        onClick={handleCopy}
        data-testid={`button-copy-${code}`}
        className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold transition-all duration-200 ${
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
  );
}

export default function DealSeekers() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative py-24 px-4 overflow-hidden"
        style={{ background: "#1A1008" }}
        data-testid="deal-seekers-hero"
      >
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(196, 84, 28, 0.2) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(217, 158, 20, 0.15) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-amber-400 border border-amber-400/30 px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "var(--font-display)" }}>
            Budget Hacks
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            style={{ fontFamily: "var(--font-serif)" }}
            data-testid="heading-deal-seekers"
          >
            Deal Seekers
          </h1>
          <p className="text-white/60 mt-4 max-w-lg mx-auto">
            Every platform I personally use to travel more for less. Real recommendations, no fluff.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-2 mb-16" data-testid="deal-seekers-nav">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                data-testid={`button-section-${section.id}`}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card hover:border-[#C4541C] hover:text-[#C4541C] text-sm font-medium transition-all duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span>{section.emoji}</span>
                <span>{section.title}</span>
              </button>
            );
          })}
        </div>

        <div className="space-y-20">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.id} id={section.id} data-testid={`section-${section.id}`} className="scroll-mt-24">
                <div className={`flex items-center gap-4 mb-8 p-6 rounded-2xl ${section.bgColor} border ${section.borderColor}`}>
                  <div className="p-3 rounded-xl bg-white shadow-sm">
                    <Icon size={28} className={section.color} />
                  </div>
                  <div>
                    <h2
                      className={`text-2xl md:text-3xl font-bold ${section.color}`}
                      style={{ fontFamily: "var(--font-serif)" }}
                      data-testid={`heading-${section.id}`}
                    >
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {section.platforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`card-platform-${platform.name.toLowerCase().replace(/[\s.]+/g, "-")}`}
                      className="group flex flex-col p-6 bg-card border border-card-border rounded-xl hover-elevate transition-all duration-300"
                      onClick={(e) => {
                        if ((e.target as HTMLElement).closest('[data-testid^="button-copy"]')) {
                          e.preventDefault();
                        }
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3
                          className="text-lg font-bold text-card-foreground group-hover:text-[#C4541C] transition-colors"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {platform.name}
                        </h3>
                        <ExternalLink size={16} className="text-muted-foreground group-hover:text-[#C4541C] flex-shrink-0 mt-1 transition-colors" />
                      </div>
                      <span
                        className={`self-start px-2.5 py-1 text-xs font-semibold rounded-full mb-3 ${platform.tagColor}`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {platform.tag}
                      </span>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {platform.description}
                      </p>
                      {platform.discountCode && (
                        <CopyCodeButton code={platform.discountCode} />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
