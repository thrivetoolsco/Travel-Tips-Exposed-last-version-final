import { Link } from "wouter";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import imgFood1 from "@assets/1000038410_1773063241007.jpg";
import imgFood2 from "@assets/1000038409_1773063241038.jpg";
import imgFood3 from "@assets/1000038412_1773063241051.jpg";
import imgFood4 from "@assets/1000038411_1773063241062.jpg";

const postImages = [
  "https://traveltipsexposed.com/wp-content/uploads/2020/04/nik-shuliahin-UPapS5-R_rk-unsplash.jpg",
  "https://traveltipsexposed.com/wp-content/uploads/2020/04/jan-henrik-franz-1063148-unsplash-1024x650.jpg",
  "https://traveltipsexposed.com/wp-content/uploads/2020/04/peter-jan-rijpkema-wI6o8OwUwdw-unsplash-1024x650.jpg",
  "https://traveltipsexposed.com/wp-content/uploads/2020/04/casey-horner-D4TooCIEyF4-unsplash.jpg",
  "https://traveltipsexposed.com/wp-content/uploads/2020/04/dimitar-donovski-TLia8gk8bJM-unsplash2.jpg",
  "https://traveltipsexposed.com/wp-content/uploads/2020/04/benjamin-davies-OzdP3muCSrc-unsplash.jpg",
];

export default function BaliDelhiBelly() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] overflow-hidden" data-testid="post-hero">
        <img
          src="https://traveltipsexposed.com/wp-content/uploads/2026/02/OneBelly.webp"
          alt="Asia Belly"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold bg-rose-600 text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}>Health</span>
            <span className="px-3 py-1 text-xs font-semibold bg-[#C4541C] text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}>Wellness</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12" data-testid="post-content">
        <Link href="/blog" data-testid="link-back-to-blog"
          className="inline-flex items-center gap-2 text-[#C4541C] hover:text-[#C4541C] text-sm font-semibold mb-8 transition-colors"
          style={{ fontFamily: "var(--font-display)" }}>
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
          style={{ fontFamily: "var(--font-serif)" }} data-testid="heading-post-title">
          Don't Let 'Bali Belly' or 'Delhi Belly' Ruin Your Vibe: The Ultimate Guide to Travel Immunity
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-[#C4541C]" />
            <span data-testid="text-author">Eden</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-amber-500" />
            <span data-testid="text-date">January 5, 2026</span>
          </span>
        </div>

        <div className="prose prose-lg max-w-none text-foreground" style={{ fontFamily: "var(--font-sans)" }} data-testid="post-body">
          <p className="lead text-xl font-bold mb-4">Keep Your Ass Off the Toilet and On the Beach (Seriously.)</p>

          <p className="mb-6 leading-relaxed text-muted-foreground">
            You book the flight, nail the itinerary, and finally land in paradise. The absolute worst way to spend that hard-earned vacation? Crying over a squat toilet instead of sipping a cocktail on the sunset deck. We've all seen the nightmare Instagram stories.
          </p>

          <p className="mb-6 leading-relaxed">
            My stomach is basically a highly sensitive baby. I look at street food wrong and I start feeling queasy. Yet, after years of exploring everywhere from bustling markets to remote jungles, I've never spent a single day glued to the porcelain throne.
          </p>

          <p className="mb-10 font-semibold text-foreground">
            I'm dropping my essential strategies below. Follow this simple playbook, and you can worry about finding the perfect photo op, not the nearest washroom.
          </p>

          <div className="grid grid-cols-2 gap-3 my-10" data-testid="photo-grid-food">
            <img src={imgFood1} alt="Eden eating at a Sikh temple langar" loading="lazy" className="w-full h-56 object-cover rounded-xl" />
            <img src={imgFood2} alt="Chana masala with roti" loading="lazy" className="w-full h-56 object-cover rounded-xl" />
            <img src={imgFood3} alt="Serving food at the langar" loading="lazy" className="w-full h-56 object-cover rounded-xl" />
            <img src={imgFood4} alt="Community meal at a Sikh temple" loading="lazy" className="w-full h-56 object-cover rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            💧 The H2O Rules: Treat All Water Like It's Suspect
          </h2>

          <div className="space-y-4 mb-10">
            <div className="flex gap-3 p-4 bg-card border border-card-border rounded-xl">
              <span className="text-[#C4541C] font-bold text-lg flex-shrink-0">•</span>
              <div>
                <p className="font-semibold text-foreground mb-1">The Ice and Infusion Veto</p>
                <p className="text-muted-foreground leading-relaxed">This is non-negotiable. Never order ice in your drink (it's often made from tap water). Also, when that trendy-looking restaurant offers "infused water," politely pass. It's often just tap water with some questionable fruit slices.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-card border border-card-border rounded-xl">
              <span className="text-[#C4541C] font-bold text-lg flex-shrink-0">•</span>
              <div>
                <p className="font-semibold text-foreground mb-1">The Tap Water Ban (Yes, Even for Brushing)</p>
                <p className="text-muted-foreground leading-relaxed">Just like you wouldn't drink it, don't use tap water to brush your teeth! A quick rinse with a bottle of water (or filtered water) is essential.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-card border border-card-border rounded-xl">
              <span className="text-[#C4541C] font-bold text-lg flex-shrink-0">•</span>
              <div>
                <p className="font-semibold text-foreground mb-1">The Sustainable Lifesaver</p>
                <p className="text-muted-foreground leading-relaxed">Stop buying a thousand plastic bottles! Invest in a reliable water filter. I swear by my Grayl Water Filter. It's fast and eliminates viruses, bacteria, and protozoa. It's the only way I can travel guilt-free and belly-issue-free.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-card border border-card-border rounded-xl">
              <span className="text-[#C4541C] font-bold text-lg flex-shrink-0">•</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Go Natural</p>
                <p className="text-muted-foreground leading-relaxed">If you're over the filter life, the ultimate hydration hack is fresh coconut water. It's loaded with electrolytes and is generally safer than bottled water. Budget around 4 coconuts a day. They cost about 30,000 IDR (approx CAD $2) each in places like Bali.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            🛡️ Pre-Gaming Your Gut: Pills, Potions, and Prep
          </h2>

          <div className="space-y-4 mb-10">
            <div className="flex gap-3 p-4 bg-card border border-card-border rounded-xl">
              <span className="text-rose-600 font-bold text-lg flex-shrink-0">•</span>
              <div>
                <p className="font-semibold text-foreground mb-1">The Daily Gut Guardian (Probiotics)</p>
                <p className="text-muted-foreground leading-relaxed">Start taking a high quality probiotic before you leave, and don't skip a single day while you're traveling. It's like sending good troops to establish a base in your digestive system.</p>
                <p className="text-sm text-muted-foreground mt-2">
                  I get mine <a href="https://justthrivehealth.com/THRIVETOOLS" target="_blank" rel="noopener noreferrer" className="text-[#C4541C] hover:text-[#C4541C] font-semibold">HERE</a>. You can use my discount code <strong>THRIVETOOLS</strong>. They're a powerful strain of probiotics.
                </p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-card border border-card-border rounded-xl">
              <span className="text-rose-600 font-bold text-lg flex-shrink-0">•</span>
              <div>
                <p className="font-semibold text-foreground mb-1">The Anti-Parasite Power-Up</p>
                <p className="text-muted-foreground leading-relaxed">I always pack a bottle of anti-parasitic capsules (look for natural options like Wormwood or Black Walnut Hull). Start your day with them. Think of them as your system's preventative deep-cleanse.</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-card border border-card-border rounded-xl">
              <span className="text-rose-600 font-bold text-lg flex-shrink-0">•</span>
              <div>
                <p className="font-semibold text-foreground mb-1">Emergency Mode (Charcoal)</p>
                <p className="text-muted-foreground leading-relaxed">If the worst happens and you start feeling off, immediately pop some activated charcoal tablets. It's not a cure, but it's a quick-acting sponge that binds to toxins and speeds up the removal of whatever poison is trying to sideline you. It'll significantly shorten your recovery time.</p>
              </div>
            </div>
          </div>

          <div className="my-10 p-6 border border-[#C4541C]/20 bg-[#C4541C]/30 bg-orange-950/10 rounded-xl text-center">
            <p className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              Ready to stop worrying about your gut and start enjoying your trip?
            </p>
            <Link href="/deal-seekers#deals-gear"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4541C] hover:bg-[#C4541C] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}>
              Get the Gear <ArrowRight size={16} />
            </Link>
          </div>

          <div className="my-10" data-testid="post-gallery">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {postImages.map((img, idx) => (
                <div key={img} className="aspect-video rounded-xl overflow-hidden bg-muted">
                  <img
                    src={img}
                    alt={`Travel immunity ${idx + 1}`}
                    className="w-full h-full object-cover"
                    data-testid={`img-post-gallery-${idx}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/blog" data-testid="link-bottom-back-to-blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C4541C] text-[#C4541C] hover:bg-[#C4541C] hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            <ArrowLeft size={16} /> All Posts
          </Link>
          <Link href="/blog/yoga-teacher-training-rishikesh" data-testid="link-next-post"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4541C] hover:bg-[#C4541C] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            Yoga Teacher Training <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
