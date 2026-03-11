import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";
import edenPhoto from "@assets/IMG-20251218-WA0020~3_1773030520927.jpg";
import imgGear from "@assets/sadasdasd-outdoor-1844275_1920_1773059183896.jpg";
import imgInsurance from "@assets/kormandallas-under-the-water-2141072_1920_1773059255037.jpg";
import imgTours from "@assets/simon-high-altitude-mountain-tour-1578127_1920_(1)_1773059420629.jpg";
import imgUsaCover from "@assets/SantaMonica-133_1773169036752.jpg";
import imgIndiaCover from "@assets/IMG-20230505-WA0025_Original_1773171507135.jpg";
import imgYogaFeatured from "@assets/IMG-20230522-WA0048_Original_1773171507059.jpg";
import imgMoroccoCover from "@assets/IMG_1888_1773172642908.JPG";
import imgPeruCover from "@assets/IMG_2314_1773173146791.JPG";
import imgAyaFeatured from "@assets/IMG_2330_1773173146748.JPG";
import imgJamaicaCover from "@assets/jamaica_ngmhhn-107_1773173598237.jpg";
import imgGabonCover from "@assets/DSCN8758_(1)_1773173919513.JPG";
import imgCanadaCover from "@assets/DSCN8881_1773174802232.JPG";
import imgIndonesiaCover from "@assets/20251230_194420_1773081913250.jpg";
import imgEuropeCover from "@assets/IMG_0137_1773175746567.JPG";
import imgOneLoveFeatured from "@assets/Boho_chic_people_hanging_out_by_the_beach_someone__delpmaspu_1773180012712.png";
import imgBellyFeatured from "@assets/Delete_the_date_and_time_from_the_bottom_right__2k_delpmaspu_1773179417216.png";

const featuredPosts = [
  {
    title: "Ayahuasca Retreats",
    location: "Peru",
    href: "/blog/ayahuasca-retreats-peru",
    image: imgAyaFeatured,
    category: "Spirituality",
    categoryColor: "bg-[#1D4A38]",
  },
  {
    title: "Asia Belly",
    location: "Bali",
    href: "/blog/bali-belly-delhi-belly",
    image: imgBellyFeatured,
    category: "Health",
    categoryColor: "bg-[#C4541C]",
  },
  {
    title: "One Love Vibe",
    location: "Bali",
    href: "/blog/balis-one-love-vibe",
    image: imgOneLoveFeatured,
    category: "Islands",
    categoryColor: "bg-[#B04A2A]",
  },
  {
    title: "Yoga Teacher Training",
    location: "India",
    href: "/blog/yoga-teacher-training-rishikesh",
    image: imgYogaFeatured,
    category: "Wellness",
    categoryColor: "bg-[#1D4A38]",
  },
];

const platforms = [
  {
    label: "Finding Cheap Flights",
    href: "/deal-seekers#deals-flights",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
  },
  {
    label: "Finding Accommodations",
    href: "/deal-seekers#deals-accommodations",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    label: "Travel Work Exchange",
    href: "/deal-seekers#deals-work",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    label: "House Sitting",
    href: "/deal-seekers#deals-sitting",
    image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=800&q=80",
  },
  {
    label: "Transportation & Ride Share",
    href: "/deal-seekers#deals-transport",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
  },
  {
    label: "Guided Tours",
    href: "/deal-seekers#deals-tours",
    image: imgTours,
  },
  {
    label: "Travel Insurance",
    href: "/deal-seekers#deals-insurance",
    image: imgInsurance,
  },
  {
    label: "Gear",
    href: "/deal-seekers#deals-gear",
    image: imgGear,
  },
];

const visualJourneys = [
  { country: "Indonesia", count: 15, image: imgIndonesiaCover, slug: "indonesia" },
  { country: "Canada", count: 57, image: imgCanadaCover, slug: "canada" },
  { country: "USA", count: 9, image: imgUsaCover, slug: "usa" },
  { country: "Jamaica", count: 5, image: imgJamaicaCover, slug: "jamaica" },
  { country: "Morocco", count: 18, image: imgMoroccoCover, slug: "morocco" },
  { country: "Peru", count: 16, image: imgPeruCover, slug: "peru" },
  { country: "India", count: 73, image: imgIndiaCover, slug: "india" },
  { country: "Europe", count: 11, image: imgEuropeCover, slug: "europe" },
  { country: "Gabon", count: 32, image: imgGabonCover, slug: "gabon" },
];

export default function Home() {
  return (
    <div className="bg-background">
      <section
        className="relative min-h-screen flex items-start justify-center overflow-hidden"
        style={{ backgroundColor: "#1A1008" }}
        data-testid="hero-section"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 15% 50%, rgba(196,84,28,0.22) 0%, transparent 55%),
              radial-gradient(ellipse at 85% 30%, rgba(196,84,28,0.12) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 85%, rgba(29,74,56,0.15) 0%, transparent 50%)
            `,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-16 pb-16">
          <div className="mb-8">
            <span
              className="inline-block px-5 py-2 text-xs font-semibold tracking-[0.08em] uppercase text-[#C4541C] border border-[#C4541C]/35 rounded-full whitespace-nowrap"
              style={{ fontFamily: "var(--font-display)" }}
              data-testid="hero-tagline-badge"
            >
              The Logistics of Staying Wild &amp; Happy
            </span>
          </div>

          <h1
            className="leading-none mb-10 text-white"
            style={{ fontFamily: "var(--font-impact)" }}
            data-testid="hero-headline"
          >
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
              Travel Stories.
            </span>
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#C4541C]">
              Itineraries.
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white/80">
              Hacks. Tips.
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#D4A26A]">
              Budget Friendly.
            </span>
            <span
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/60 mt-2"
              style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 300 }}
            >
              Good Times Guaranteed.&nbsp; Ooh Yeaaah!!!
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/blog"
              data-testid="button-read-blog"
              className="px-8 py-4 bg-[#C4541C] hover:bg-[#A83F10] text-white font-bold text-xs tracking-[0.25em] uppercase transition-all duration-200 flex items-center gap-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Read the Blog <ArrowRight size={16} />
            </Link>
            <Link
              href="/deal-seekers"
              data-testid="button-deal-seekers"
              className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-bold text-xs tracking-[0.25em] uppercase transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Deal Seekers
            </Link>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }}
        />
      </section>

      <section className="py-20 px-4" data-testid="intro-section">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#E8DDD0] shadow-lg">
                <img
                  src={edenPhoto}
                  alt="Eden, the face behind Travel Tips Exposed"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-eden"
                  fetchpriority="high"
                  loading="eager"
                />
              </div>
            </div>
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1A1008] mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
                data-testid="heading-intro"
              >
                Hi, I'm Eden, the face behind Travel Tips Exposed.
              </h2>
              <p className="text-[#1A1008]/70 text-base leading-relaxed mb-3">
                I'm a world traveler, music head, psychonaut, breathwork space holder, gardener and videographer.
              </p>
              <p className="text-[#1A1008]/70 text-base leading-relaxed">
                I created this blog to share with like minded people the coolest places I've found along the way with the exact tips and budget hacks I've used to explore them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto" data-testid="featured-posts-section">
        <div className="flex items-center gap-6 mb-12">
          <div className="h-px flex-1 bg-[#E8DDD0]" />
          <div className="text-center">
            <span className="block text-[10px] tracking-[0.35em] uppercase text-[#C4541C] font-semibold mb-1" style={{ fontFamily: "var(--font-display)" }}>From the Field</span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1A1008]"
              style={{ fontFamily: "var(--font-serif)" }}
              data-testid="heading-featured-posts"
            >
              Featured Posts
            </h2>
          </div>
          <div className="h-px flex-1 bg-[#E8DDD0]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              data-testid={`card-featured-post-${post.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group block rounded-none overflow-hidden bg-card border border-[#E8DDD0] hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className={`absolute top-0 left-0 px-3 py-1.5 text-[10px] font-bold text-white tracking-wider uppercase ${post.categoryColor}`}
                  style={{ fontFamily: "var(--font-display)" }}>
                  {post.category}
                </span>
              </div>
              <div className="p-4 border-t-2 border-[#E8DDD0] group-hover:border-[#C4541C] transition-colors duration-300">
                <h3
                  className="text-base font-bold text-[#1A1008] mb-2 group-hover:text-[#C4541C] transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {post.title}
                </h3>
                <div className="flex items-center gap-1.5 text-[#1A1008]/45 text-xs">
                  <MapPin size={11} className="text-[#C4541C]" />
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
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#1A1008] text-[#1A1008] hover:bg-[#1A1008] hover:text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            View All Posts <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section
        className="py-20 px-4"
        style={{ backgroundColor: "#F0E8DF" }}
        data-testid="favorite-platforms-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#C4541C] mb-2 block" style={{ fontFamily: "var(--font-display)" }}>
              Budget Hacks
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1A1008]"
              style={{ fontFamily: "var(--font-serif)" }}
              data-testid="heading-favorite-platforms"
            >
              My Favorite Platforms
            </h2>
            <p className="mt-3 text-[#1A1008]/55 max-w-xl mx-auto text-sm" style={{ fontFamily: "var(--font-sans)" }}>
              These are the exact platforms I use to travel more for less. Every recommendation is tested and real.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {platforms.map((platform) => (
              <Link
                key={platform.href}
                href={platform.href}
                data-testid={`card-platform-${platform.label.toLowerCase().replace(/[\s&]+/g, "-")}`}
                className="group relative overflow-hidden aspect-[4/3] block"
              >
                <img
                  src={platform.image}
                  alt={platform.label}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-[#C4541C]/0 group-hover:bg-[#C4541C]/25 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span
                    className="text-white font-bold text-sm leading-tight block"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {platform.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/deal-seekers"
              data-testid="button-view-all-platforms"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C4541C] hover:bg-[#A83F10] text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Explore All Deals <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto" data-testid="visual-journeys-section">
        <div className="text-center mb-12">
          <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[#1D4A38] mb-2 block" style={{ fontFamily: "var(--font-display)" }}>
            Photo Albums
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1A1008]"
            style={{ fontFamily: "var(--font-serif)" }}
            data-testid="heading-visual-journeys"
          >
            Visual Journeys
          </h2>
          <p className="mt-3 text-[#1A1008]/55 max-w-xl mx-auto text-sm">
            Raw, unfiltered snapshots from the road.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {visualJourneys.map((album) => (
            <Link
              key={album.slug}
              href={`/visual-journeys#${album.slug}`}
              data-testid={`card-album-${album.slug}`}
              className="group relative overflow-hidden aspect-square block"
            >
              <img
                src={album.image}
                alt={album.country}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span
                  className="text-white font-bold text-sm block"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {album.country}
                </span>
                <span className="text-white/50 text-xs">{album.count} photos</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/visual-journeys"
            data-testid="button-view-all-journeys"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#1D4A38] text-[#1D4A38] hover:bg-[#1D4A38] hover:text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            View All Albums <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section
        className="py-24 px-4 text-center"
        style={{ backgroundColor: "#1A1008" }}
        data-testid="cta-section"
      >
        <div className="max-w-2xl mx-auto">
          <span className="block text-[10px] tracking-[0.35em] uppercase text-[#C4541C] mb-6 font-semibold" style={{ fontFamily: "var(--font-display)" }}>
            Ready?
          </span>
          <h2
            className="text-5xl md:text-7xl font-normal text-white mb-6 leading-none"
            style={{ fontFamily: "var(--font-impact)" }}
          >
            Change Your Reality.
          </h2>
          <p className="text-white/45 mb-10 leading-relaxed text-sm max-w-lg mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
            Budget travel, spiritual journeys, and unfiltered stories from someone who's actually doing it.
          </p>
          <Link
            href="/blog"
            data-testid="button-cta-start"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#C4541C] hover:bg-[#A83F10] text-white font-bold tracking-[0.2em] uppercase text-xs transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start Reading <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
