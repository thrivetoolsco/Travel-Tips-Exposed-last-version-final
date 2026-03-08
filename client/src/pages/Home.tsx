import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";

const featuredPosts = [
  {
    title: "Ayahuasca Retreats",
    location: "Peru",
    href: "/blog/ayahuasca-retreats-peru",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/02/Ayahuasca.webp",
    category: "Wellness",
    categoryColor: "bg-teal-600",
  },
  {
    title: "Asia Belly",
    location: "Bali",
    href: "/blog/bali-belly-delhi-belly",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/02/OneBelly.webp",
    category: "Health",
    categoryColor: "bg-amber-600",
  },
  {
    title: "One Love Vibe",
    location: "Bali",
    href: "/blog/balis-one-love-vibe",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/02/OneLove.webp",
    category: "Islands",
    categoryColor: "bg-rose-600",
  },
  {
    title: "Yoga Teacher Training",
    location: "India",
    href: "/blog/yoga-teacher-training-rishikesh",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/02/YogaTeacher.webp",
    category: "Wellness",
    categoryColor: "bg-teal-600",
  },
];

const platforms = [
  {
    label: "Finding Cheap Flights",
    href: "/deal-seekers#deals-flights",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/03/finding-cheap-flights-1-1024x683.webp",
  },
  {
    label: "Finding Accommodations",
    href: "/deal-seekers#deals-accommodations",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/03/finding-accommodations-1-1024x683.webp",
  },
  {
    label: "Travel Work Exchange",
    href: "/deal-seekers#deals-work",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/03/travel-work-exchange-1024x683.webp",
  },
  {
    label: "House Sitting",
    href: "/deal-seekers#deals-sitting",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/03/House-Sitting-1024x683.webp",
  },
  {
    label: "Transportation & Ride Share",
    href: "/deal-seekers#deals-transport",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/03/ride-share-1024x683.webp",
  },
  {
    label: "Guided Tours",
    href: "/deal-seekers#deals-tours",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/03/guided-tours-1024x683.webp",
  },
  {
    label: "Travel Insurance",
    href: "/deal-seekers#deals-insurance",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/03/travel-insurance-1024x683.webp",
  },
  {
    label: "Gear",
    href: "/deal-seekers#deals-gear",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/03/gear-1024x683.webp",
  },
];

const visualJourneys = [
  { country: "Indonesia", count: 8, image: "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-491.jpg", slug: "indonesia" },
  { country: "Canada", count: 28, image: "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-550.jpg", slug: "canada" },
  { country: "USA", count: 8, image: "https://traveltipsexposed.com/wp-content/grand-media/image/USA-558.jpg", slug: "usa" },
  { country: "Jamaica", count: 5, image: "https://traveltipsexposed.com/wp-content/grand-media/image/Jamaica-563.jpg", slug: "jamaica" },
  { country: "Morocco", count: 33, image: "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-596.jpg", slug: "morocco" },
  { country: "Peru", count: 16, image: "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-606_1.jpg", slug: "peru" },
  { country: "India", count: 49, image: "https://traveltipsexposed.com/wp-content/grand-media/image/India-661.jpg", slug: "india" },
  { country: "Europe", count: 10, image: "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-682_1.jpg", slug: "europe" },
  { country: "Gabon", count: 31, image: "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-714.jpg", slug: "gabon" },
];

export default function Home() {
  return (
    <div className="bg-background">
      <section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d3d35 0%, #0a2d28 40%, #1a0a05 100%)",
        }}
        data-testid="hero-section"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 35%, rgba(45, 212, 191, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 70%, rgba(217, 158, 20, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.1) 0%, transparent 60%)`
          }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-amber-400 border border-amber-400/30 rounded-full mb-8" style={{ fontFamily: "var(--font-display)" }}>
              Eden's Travel Universe
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
            data-testid="hero-headline"
          >
            Travel Stories.{" "}
            <span className="text-teal-300">Itineraries.</span>
            <br />
            Hacks. Tips.{" "}
            <span className="text-amber-400">Budget Friendly.</span>
            <br />
            <span className="text-rose-400">Good Times Guaranteed.</span>
            <br />
            <span className="italic text-white/80">Ooh Yeaaah!!!</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/blog"
              data-testid="button-read-blog"
              className="px-8 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200 flex items-center gap-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Read the Blog <ArrowRight size={16} />
            </Link>
            <Link
              href="/visual-journeys"
              data-testid="button-visual-journeys"
              className="px-8 py-3.5 border border-amber-400/60 text-amber-400 hover:bg-amber-400/10 font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Visual Journeys
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16" style={{
          background: "linear-gradient(to top, hsl(var(--background)), transparent)"
        }} />
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto" data-testid="featured-posts-section">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-600/30 to-transparent" />
          <h2
            className="text-3xl font-bold text-center"
            style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}
            data-testid="heading-featured-posts"
          >
            Featured Posts
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-teal-600/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              data-testid={`card-featured-post-${post.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group block rounded-xl overflow-hidden bg-card border border-card-border hover-elevate transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold text-white rounded-full ${post.categoryColor}`}
                  style={{ fontFamily: "var(--font-display)" }}>
                  {post.category}
                </span>
              </div>
              <div className="p-4">
                <h3
                  className="text-lg font-bold text-card-foreground mb-2 group-hover:text-teal-600 transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {post.title}
                </h3>
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <MapPin size={12} className="text-rose-500" />
                  <span style={{ fontFamily: "var(--font-display)" }}>{post.location}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            data-testid="button-view-all-posts"
            className="inline-flex items-center gap-2 px-6 py-3 border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            View All Posts <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section
        className="py-20 px-4"
        style={{ backgroundColor: "hsl(180 40% 97%)" }}
        data-testid="favorite-platforms-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 mb-3 block" style={{ fontFamily: "var(--font-display)" }}>
              Budget Hacks
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}
              data-testid="heading-favorite-platforms"
            >
              Favorite Platforms
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm">
              These are the exact platforms I use to travel more for less. Every recommendation is tested and real.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {platforms.map((platform) => (
              <Link
                key={platform.href}
                href={platform.href}
                data-testid={`card-platform-${platform.label.toLowerCase().replace(/[\s&]+/g, "-")}`}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] block"
              >
                <img
                  src={platform.image}
                  alt={platform.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span
                    className="text-white font-semibold text-sm leading-tight block"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {platform.label}
                  </span>
                </div>
                <div className="absolute inset-0 border-2 border-amber-400/0 group-hover:border-amber-400/60 rounded-xl transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/deal-seekers"
              data-testid="button-view-all-platforms"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Explore All Deals <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto" data-testid="visual-journeys-section">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-rose-600 mb-3 block" style={{ fontFamily: "var(--font-display)" }}>
            Photo Albums
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}
            data-testid="heading-visual-journeys"
          >
            Visual Journeys
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm">
            Raw, unfiltered snapshots from the road.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {visualJourneys.map((album) => (
            <Link
              key={album.slug}
              href={`/visual-journeys#${album.slug}`}
              data-testid={`card-album-${album.slug}`}
              className="group relative rounded-xl overflow-hidden aspect-square block"
            >
              <img
                src={album.image}
                alt={album.country}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span
                  className="text-white font-bold text-sm block"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {album.country}
                </span>
                <span className="text-white/60 text-xs">{album.count} photos</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/visual-journeys"
            data-testid="button-view-all-journeys"
            className="inline-flex items-center gap-2 px-6 py-3 border border-rose-500 text-rose-600 hover:bg-rose-600 hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            View All Albums <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section
        className="py-20 px-4 text-center"
        style={{ background: "linear-gradient(135deg, #0d3d35 0%, #0a2d28 100%)" }}
        data-testid="cta-section"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Ready to Change Your Reality?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Budget travel, spiritual journeys, and unfiltered stories from someone who's actually doing it.
          </p>
          <Link
            href="/blog"
            data-testid="button-cta-start"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start Reading <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
