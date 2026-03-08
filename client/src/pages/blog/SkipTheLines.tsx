import { Link } from "wouter";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";

export default function SkipTheLines() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] overflow-hidden" data-testid="post-hero">
        <img
          src="https://traveltipsexposed.com/wp-content/uploads/2026/01/skip-the-lines-blog.webp"
          alt="Skip The Lines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold bg-amber-600 text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}>Airport</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12" data-testid="post-content">
        <Link href="/blog" data-testid="link-back-to-blog"
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-500 text-sm font-semibold mb-8 transition-colors"
          style={{ fontFamily: "var(--font-display)" }}>
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
          style={{ fontFamily: "var(--font-serif)" }} data-testid="heading-post-title">
          Skip the lines: 4 Ways To Accelerate Your Airport Entry in Bali & Indonesia
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-orange-500" />
            <span data-testid="text-author">Eden</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-amber-500" />
            <span data-testid="text-date">January 17, 2026</span>
          </span>
        </div>

        <div className="prose prose-lg max-w-none text-foreground" style={{ fontFamily: "var(--font-sans)" }} data-testid="post-body">
          <p className="lead text-xl text-muted-foreground mb-8 leading-relaxed">
            Okay, let's be real. That 30 hour flight out of North America? It was a nightmare. The absolute last thing you need after finally landing in Bali or Jakarta is to get stuck in the immigration queue that stretches longer than your phone screen time last week.
          </p>

          <p className="mb-6 leading-relaxed">
            We all want that immediate, seamless transition from plane to poolside. You want to ditch the backpack, grab your first nasi goreng, and start posting that golden hour magic.
          </p>

          <p className="mb-6 leading-relaxed">
            I've done the slow, painful airport hustle, and I'm here to tell you: never again.
          </p>

          <p className="mb-10 text-lg font-semibold text-foreground">
            This is <strong>your 4 step cheat code</strong> to glide through <strong>Indonesian airport arrival like the VIP you are</strong>. Forget the paperwork pain; this is how you make your entry less stressful than choosing a Netflix show.
          </p>

          <div className="my-8">
            <img
              src="https://traveltipsexposed.com/wp-content/uploads/2026/01/Screenshot-2026-03-04-at-7.28.51-PM.webp"
              alt="Skip The Lines App Screenshot"
              className="rounded-xl w-full max-w-2xl mx-auto block"
              data-testid="img-screenshot"
            />
          </div>

          <div className="space-y-8 my-10">
            <div className="p-6 bg-card border border-card-border rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-orange-500" style={{ fontFamily: "var(--font-serif)" }}>
                1. The Digital VOA is Your Main Character Moment
              </h3>
              <p className="text-muted-foreground font-semibold mb-2">The Pain Point:</p>
              <p className="mb-4 leading-relaxed">
                Waiting in the "Visa On Arrival" payment line just to shuffle over to the "Immigration Stamp" line. It's giving bureaucracy overload.
              </p>
              <p className="text-muted-foreground font-semibold mb-2">The Fix:</p>
              <p className="mb-4 leading-relaxed">
                Don't waste your energy. Indonesia's e-VOA (Electronic Visa on Arrival) is your ticket to freedom. Applying online takes maybe five minutes (the time it takes to scroll Instagram once). When you land, you literally walk past the long queue of people still paying cash and go straight to the stamping counter. It's the ultimate travel flex.
              </p>
              <p className="text-amber-600 font-semibold mb-2">Pro Tip:</p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Do this about 3 weeks out. Pay the fee, print the confirmation (just in case), and keep a screenshot on your phone.
              </p>
              <a href="https://evisa.imigrasi.go.id/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-500 font-semibold text-sm">
                Skip the Line: evisa.imigrasi.go.id <ArrowRight size={12} />
              </a>
            </div>

            <div className="p-6 bg-card border border-card-border rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-amber-600" style={{ fontFamily: "var(--font-serif)" }}>
                2. Bali Added a Tourist Tax (and Yes, You Can Pre-Pay)
              </h3>
              <p className="text-muted-foreground font-semibold mb-2">The Pain Point:</p>
              <p className="mb-4 leading-relaxed">
                Landing in Denpasar (DPS) only to realize you have one more random fee to pay for supporting Bali's environment and culture. It's a worthy cause, but getting stuck finding the right counter? Hard pass.
              </p>
              <p className="text-muted-foreground font-semibold mb-2">The Fix:</p>
              <p className="mb-4 leading-relaxed">
                If Bali is your first stop, do the adult thing and pay the tourist levy before you leave your couch. It's mandatory, and they check the receipt. The official "Love Bali" portal makes it super easy. You get a QR code/receipt emailed to you.
              </p>
              <p className="text-amber-600 font-semibold mb-2">Pro Tip:</p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Screenshot that receipt ASAP. Airport Wi-Fi is rarely your friend.
              </p>
              <a href="https://lovebali.baliprov.go.id/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-500 font-semibold text-sm">
                Pay the Levy Now: lovebali.baliprov.go.id <ArrowRight size={12} />
              </a>
            </div>

            <div className="p-6 bg-card border border-card-border rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-rose-600" style={{ fontFamily: "var(--font-serif)" }}>
                3. That Customs Form? It's Digital.
              </h3>
              <p className="text-muted-foreground font-semibold mb-2">The Pain Point:</p>
              <p className="mb-4 leading-relaxed">
                Trying to find a pen, a flat surface, and the will to live as you try to fill out a paper Customs Declaration form while juggling your carry-on.
              </p>
              <p className="text-muted-foreground font-semibold mb-2">The Fix:</p>
              <p className="mb-4 leading-relaxed">
                Customs is fully digital now, baby. They need to know what you're bringing in, and the Electronic Customs Declaration (ECD) form is required. You can fill it out within 72 hours of arrival. When you're done, they send you a QR code. When you get to the final exit, the officer scans the code, and you're out the door. No paper, no stress.
              </p>
              <p className="text-amber-600 font-semibold mb-2">Pro Tip:</p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Fill this out the day before your flight. You'll thank yourself later.
              </p>
              <a href="https://ecd.beacukai.go.id/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-500 font-semibold text-sm">
                Do the Digital Declaration: ecd.beacukai.go.id <ArrowRight size={12} />
              </a>
            </div>

            <div className="p-6 bg-card border border-card-border rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-orange-500" style={{ fontFamily: "var(--font-serif)" }}>
                4. eSIM: Don't Be That Guy Buying a SIM at the Airport
              </h3>
              <p className="text-muted-foreground font-semibold mb-2">The Pain Point:</p>
              <p className="mb-4 leading-relaxed">
                Walking out of the arrival hall, desperately needing an Uber/Grab, but realizing you have zero data and are now stuck negotiating with the first aggressive taxi driver you see.
              </p>
              <p className="text-muted-foreground font-semibold mb-2">The Fix:</p>
              <p className="mb-4 leading-relaxed">
                Seriously, just get an eSIM. It's the most set-it-and-forget-it travel hack ever. You download an app like KnowRoaming, buy a data plan for Indonesia, and install it instantly before you even take off. The moment your plane hits the tarmac, you switch it on and BAM! You have high speed data. You can call your driver, navigate, and send the first "I'm here!" selfie without ever fumbling with a physical tray or paying airport kiosk prices.
              </p>
              <p className="text-amber-600 font-semibold mb-2">Pro Tip:</p>
              <p className="text-muted-foreground leading-relaxed">
                Check if your phone supports eSIM first! Most modern phones do.
              </p>
            </div>
          </div>

          <div className="my-10 p-6 border border-orange-500/20 bg-orange-950/20 bg-orange-950/10 rounded-xl text-center">
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
              The Payoff
            </h3>
            <p className="text-foreground leading-relaxed">
              When you follow these four steps, you'll breeze past the lines, look confident, and probably make some confused travelers side-eye you with envy.
            </p>
            <p className="text-orange-500 font-bold text-lg mt-4">Your Indonesia trip is about to start. Go get that coconut.</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/blog" data-testid="link-bottom-back-to-blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            <ArrowLeft size={16} /> All Posts
          </Link>
          <Link href="/blog/bali-belly-delhi-belly" data-testid="link-next-post"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-500 text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            Bali Belly Guide <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
