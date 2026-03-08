import { Link } from "wouter";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "rishikesh-to-dharamshala",
    title: "Rishikesh to Dharamshala: Your Essential Guide to India's Spiritual Hub",
    excerpt: "Getting to Dharamshala from Rishikesh was quite the adventure! You see, buses on time or even showing up are not a given in India. Even if you purchased your bus ticket in advance...",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/03/Rishikesh-Header-768x439.webp",
    categories: ["Islands", "Waves"],
    date: "March 4, 2026",
    author: "Eden",
    href: "/blog/rishikesh-to-dharamshala",
  },
  {
    id: "balis-one-love-vibe",
    title: "Bali's \"One Love Vibe\": Is Indonesia Still a Hub for Spiritual Travel?",
    excerpt: "Here I am, traveling to the other part of the world. Again. Part of me is excited knowing that I need to get out of my comfort zone to keep creating that cool \"moi\"...",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/02/OneLove-768x1376.webp",
    categories: ["Islands", "Waves"],
    date: "March 2, 2026",
    author: "Eden",
    href: "/blog/balis-one-love-vibe",
  },
  {
    id: "skip-lines-bali",
    title: "Skip the lines: 4 Ways To Accelerate Your Airport Entry in Bali & Indonesia",
    excerpt: "Okay, let's be real. That 30 hour flight out of North America? It was a nightmare. The absolute last thing you need after finally landing in Bali or Jakarta is to get stuck in the immigration queue...",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/01/skip-the-lines-blog-768x439.webp",
    categories: ["Airport"],
    date: "January 17, 2026",
    author: "Eden",
    href: "/blog/skip-lines-bali",
  },
  {
    id: "bali-belly-delhi-belly",
    title: "Don't Let 'Bali Belly' or 'Delhi Belly' Ruin Your Vibe: The Ultimate Guide to Travel Immunity",
    excerpt: "Keep Your Ass Off the Toilet and On the Beach (Seriously.) You book the flight, nail the itinerary, and finally land in paradise...",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/02/OneBelly-768x1376.webp",
    categories: ["Health", "Wellness"],
    date: "January 5, 2026",
    author: "Eden",
    href: "/blog/bali-belly-delhi-belly",
  },
  {
    id: "yoga-teacher-training-rishikesh",
    title: "Ashtanga Yoga Teacher Training in Rishikesh: An Honest Review of the Experience",
    excerpt: "I wanted an intensive training and I got just that at the Ashtanga school. The best way I can describe that experience is that it was like a military training but for yoga...",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/02/YogaTeacher.webp",
    categories: ["Wellness"],
    date: "December 2025",
    author: "Eden",
    href: "/blog/yoga-teacher-training-rishikesh",
  },
  {
    id: "ayahuasca-retreats-peru",
    title: "The Unfiltered Truth About Ayahuasca Retreats in Peru: Shaman Scams & Deep Transformation",
    excerpt: "Morocco was my current setting: a blur of tagine, mint tea, and the constant, buzzing question of my life's purpose. A whispered legend cut through the noise: a retreat in Spain...",
    image: "https://traveltipsexposed.com/wp-content/uploads/2026/02/Ayahuasca.webp",
    categories: ["Wellness"],
    date: "February 2026",
    author: "Eden",
    href: "/blog/ayahuasca-retreats-peru",
  },
];

const categoryColors: Record<string, string> = {
  "Islands": "bg-[#1D4A38]/20 text-[#1D4A38] border border-[#1D4A38]/30",
  "Waves": "bg-sky-100 text-sky-700",
  "Airport": "bg-amber-100 text-amber-700",
  "Health": "bg-rose-100 text-rose-700",
  "Wellness": "bg-[#1D4A38]/20 text-[#1D4A38] border border-[#1D4A38]/30",
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative py-24 px-4 text-center overflow-hidden"
        style={{
          background: "#1A1008",
        }}
        data-testid="blog-hero"
      >
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://traveltipsexposed.com/wp-content/uploads/2020/04/ashim-d-silva-WeYamle9fDM-unsplash.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#1A1008]/75" />
        <div className="relative z-10">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-amber-400 border border-amber-400/30 px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "var(--font-display)" }}>
            Eden's Stories
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            style={{ fontFamily: "var(--font-serif)" }}
            data-testid="heading-blog"
          >
            The Blog
          </h1>
          <p className="text-white/60 mt-4 max-w-lg mx-auto">
            Real stories. Honest tips. Zero sugarcoating.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16" data-testid="blog-posts-list">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              data-testid={`card-blog-post-${post.id}`}
              className="group bg-card border border-[#E8DDD0] overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <Link href={post.href} className="block">
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                    {post.categories.map((cat) => (
                      <span
                        key={cat}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-full ${categoryColors[cat] || "bg-gray-100 text-gray-700"}`}
                        style={{ fontFamily: "var(--font-display)" }}
                        data-testid={`badge-category-${cat.toLowerCase()}`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <Link href={post.href} className="block mb-3">
                  <h2
                    className="text-xl font-bold text-card-foreground group-hover:text-[#C4541C] transition-colors leading-snug"
                    style={{ fontFamily: "var(--font-serif)" }}
                    data-testid={`heading-post-${post.id}`}
                  >
                    {post.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <User size={12} className="text-[#C4541C]" />
                      <span data-testid={`text-author-${post.id}`}>{post.author}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-amber-500" />
                      <span data-testid={`text-date-${post.id}`}>{post.date}</span>
                    </span>
                  </div>
                  <Link
                    href={post.href}
                    data-testid={`link-read-more-${post.id}`}
                    className="flex items-center gap-1 text-xs font-semibold text-[#C4541C] hover:text-[#A83F10] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Read More <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
