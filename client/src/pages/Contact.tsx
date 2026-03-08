import { Mail, Instagram, Globe } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative py-24 px-4 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d0c1a 0%, #1a0f2e 100%)" }}
        data-testid="contact-hero"
      >
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.45) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(217, 158, 20, 0.3) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-amber-400 border border-amber-400/30 px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "var(--font-display)" }}>
            Get in Touch
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            style={{ fontFamily: "var(--font-serif)" }}
            data-testid="heading-contact"
          >
            Contact
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-20" data-testid="contact-content">
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}
          >
            Hey Millennial,{" "}
            <span className="text-violet-400">Let's Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Whether you've got questions about a destination, want to share your own story, or just want to vibe about travel — my inbox is open. No forms. No bots. Just a real email to a real human.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div
            className="p-8 rounded-2xl border border-card-border bg-card text-center hover-elevate transition-all duration-300"
            data-testid="contact-email-card"
          >
            <div className="w-14 h-14 bg-violet-900/30 bg-violet-950/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail size={28} className="text-violet-400" />
            </div>
            <h3
              className="font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Email
            </h3>
            <a
              href="mailto:traveltipsexposed@gmail.com"
              data-testid="link-email"
              className="text-violet-400 hover:text-violet-400 font-semibold text-sm break-all transition-colors"
            >
              traveltipsexposed@gmail.com
            </a>
          </div>

          <div
            className="p-8 rounded-2xl border border-card-border bg-card text-center hover-elevate transition-all duration-300"
            data-testid="contact-instagram-card"
          >
            <div className="w-14 h-14 bg-rose-100 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Instagram size={28} className="text-rose-500" />
            </div>
            <h3
              className="font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Instagram
            </h3>
            <a
              href="https://www.instagram.com/lifes.a.trip.huh/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-instagram-contact"
              className="text-rose-500 hover:text-rose-400 font-semibold text-sm transition-colors"
            >
              @lifes.a.trip.huh
            </a>
          </div>

          <div
            className="p-8 rounded-2xl border border-card-border bg-card text-center hover-elevate transition-all duration-300"
            data-testid="contact-blog-card"
          >
            <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe size={28} className="text-amber-600" />
            </div>
            <h3
              className="font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Blog
            </h3>
            <a
              href="https://traveltipsexposed.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-website-contact"
              className="text-amber-600 hover:text-amber-500 font-semibold text-sm transition-colors"
            >
              traveltipsexposed.com
            </a>
          </div>
        </div>

        <div
          className="p-10 rounded-2xl text-center"
          style={{ background: "linear-gradient(135deg, #1a0f2e 0%, #0d0c1a 100%)", border: "1px solid rgba(139,92,246,0.2)" }}
          data-testid="contact-cta-box"
        >
          <h3
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Slide Into My Inbox
          </h3>
          <p className="text-white/60 mb-6 leading-relaxed max-w-md mx-auto">
            Got a question about a trip I've taken? Want to know my honest opinion about a place? Curious about retreats or plant medicine? Hit me up. I read every message.
          </p>
          <a
            href="mailto:traveltipsexposed@gmail.com"
            data-testid="button-email-cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <Mail size={18} />
            traveltipsexposed@gmail.com
          </a>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8" data-testid="text-contact-note">
          I'm a solo traveler often in different time zones — I'll get back to you as soon as I can, usually within a few days.
        </p>
      </div>
    </div>
  );
}
