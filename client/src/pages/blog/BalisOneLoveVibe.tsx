import { Link } from "wouter";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import imgOneLoveHero from "@assets/generated_images/bali-one-love-hero.png";

export default function BalisOneLoveVibe() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] overflow-hidden" data-testid="post-hero">
        <img
          src={imgOneLoveHero}
          alt="One Love"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold bg-[#C4541C] text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}>Islands</span>
            <span className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}>Waves</span>
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
          Bali's "One Love Vibe": Is Indonesia Still a Hub for Spiritual Travel?
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-[#C4541C]" />
            <span data-testid="text-author">Eden</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-amber-500" />
            <span data-testid="text-date">March 2, 2026</span>
          </span>
        </div>

        <div className="prose prose-lg max-w-none text-foreground" style={{ fontFamily: "var(--font-sans)" }} data-testid="post-body">
          <p className="lead text-xl text-muted-foreground mb-8 leading-relaxed">
            Here I am, traveling to the other part of the world. Again. Part of me is excited knowing that I need to get out of my comfort zone to keep creating that cool "moi". The other part just wanna chill home instead.
          </p>

          <p className="mb-6 leading-relaxed">
            Feeling content with my daily little routine, feeling like I could just vegg and watch videos instead of going out there. When I'm out there, I have to be more on my game; especially traveling as a solo woman. But hey, I'd rather focus on all the good otherwise I create unnecessary anxieties within me.
          </p>

          <p className="mb-6 leading-relaxed">
            It's so interesting to notice how I still get that mild fear sneaking in when I'm about to travel. Even after hitchhiking solo across North America and traveling to India alone, I still get that fear of the unknown. The thing is that I choose to embrace that fear because it's by overcoming it that I create the best version of myself. These travels are really not about finding myself but about creating myself.
          </p>

          <p className="mb-8 text-xl font-bold text-[#C4541C]">Indonesia, let's gooo!!!</p>

          <div className="flex justify-center my-8" data-testid="embed-instagram-reel">
            <iframe
              src="https://www.instagram.com/reel/DTn0UaEE1C1/embed/"
              width="400"
              height="710"
              frameBorder="0"
              scrolling="no"
              allowtransparency="true"
              allow="encrypted-media"
              className="rounded-xl max-w-full"
            />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            That Ubud Magic is REAL.
          </h2>

          <p className="mb-4 leading-relaxed">
            I am beyond ready to hit the hub of the spiritually minded community. Bali is famous for the ecstatic dance events, the breathwork, and all sorts of somatic healing modalities.
          </p>

          <p className="mb-4 leading-relaxed">
            But I know what you're wondering: is the "One Love" vibe still there? Short answer: <strong>Absolutely.</strong> The high frequency in Ubud is still very much alive and well. You feel it the second you walk into places like The Yoga Barn. And if you really want to vibrate on a higher plane, you have to hit the Pyramids of Chi. Getting lost in a sound healing session inside those massive structures is a total sensory reset: it's like hitting the 'refresh' button on your entire being. It's that deep, soulful, "we're all connected" energy that makes Ubud… well, Ubud.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            3 Pro Tips for the Initial Launch
          </h2>

          <p className="mb-6 leading-relaxed">
            To make the first leg of the trip less of a headache, here's what I figured out:
          </p>

          <div className="space-y-5 my-8">
            <div className="flex gap-4 p-5 bg-card border border-card-border rounded-xl">
              <span className="text-2xl font-bold text-[#C4541C]" style={{ fontFamily: "var(--font-display)" }}>1.</span>
              <div>
                <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>Get your e-VOA (Electronic Visa on Arrival) early</p>
                <p className="text-muted-foreground leading-relaxed">
                  Don't be the person stuck in the 2 hour airport line. Do it online before you fly.
                </p>
                <a href="http://molina.imigrasi.go.id" target="_blank" rel="noopener noreferrer"
                  className="text-[#C4541C] hover:text-[#C4541C] text-sm font-semibold mt-1 inline-flex items-center gap-1">
                  Official site: molina.imigrasi.go.id <ArrowRight size={12} />
                </a>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-card border border-card-border rounded-xl">
              <span className="text-2xl font-bold text-amber-600" style={{ fontFamily: "var(--font-display)" }}>2.</span>
              <div>
                <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>Agoda is the MVP</p>
                <p className="text-muted-foreground leading-relaxed">
                  They have the best deals and the most flexible cancellation policies. For 45 days, my accommodation came out to around CAD$ 600.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-card border border-card-border rounded-xl">
              <span className="text-2xl font-bold text-rose-600" style={{ fontFamily: "var(--font-display)" }}>3.</span>
              <div>
                <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>Download Grab</p>
                <p className="text-muted-foreground leading-relaxed">
                  It's the Uber of SE Asia. You can schedule your airport lift in advance, and the driver stays updated on your flight arrival time through the app. Life. Saver. I booked 4 months out to snag a deal on Kayak.com.
                </p>
              </div>
            </div>
          </div>

          <div className="my-10 p-6 border border-[#C4541C]/20 bg-[#C4541C]/30 bg-orange-950/10 rounded-xl text-center">
            <p className="text-lg leading-relaxed text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
              I hope this inspires you to take that leap and get uncomfortable. Indonesia is truly one of the most budget friendly places on earth.
            </p>
            <p className="text-foreground font-semibold mt-4">You know what you gotta do to get started.</p>
            <p className="text-muted-foreground mt-2 italic">See you out there!</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/blog" data-testid="link-bottom-back-to-blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C4541C] text-[#C4541C] hover:bg-[#C4541C] hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            <ArrowLeft size={16} /> All Posts
          </Link>
          <Link href="/blog/skip-lines-bali" data-testid="link-next-post"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4541C] hover:bg-[#C4541C] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            Skip The Lines <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
