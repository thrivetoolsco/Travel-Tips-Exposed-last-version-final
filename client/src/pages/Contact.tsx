import { Mail, Instagram } from "lucide-react";
import contactHero from "@assets/pexels-woman-1868817_1920_1773060802116.jpg";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative h-80 md:h-[26rem] overflow-hidden"
        data-testid="contact-hero"
      >
        <img
          src={contactHero}
          alt="Traveler jumping with joy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-amber-400 border border-amber-400/30 px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "var(--font-display)" }}>
            Get in Touch
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-serif)" }}
            data-testid="heading-contact"
          >
            Contact
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-20" data-testid="contact-content">
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}
          >
            Hey You,{" "}
            <span className="text-[#C4541C]">Let's Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Whether you've got questions about a trip I've taken, or are curious about a retreat or plant medicine, or just want to vibe about travel, my inbox is open. No forms. No bots. Just a real email to a real human.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div
            className="p-8 rounded-2xl border border-card-border bg-card text-center hover-elevate transition-all duration-300"
            data-testid="contact-email-card"
          >
            <div className="w-14 h-14 bg-[#C4541C]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail size={28} className="text-[#C4541C]" />
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
              className="text-[#C4541C] hover:text-[#A83F10] font-semibold text-sm break-all transition-colors"
            >
              traveltipsexposed@gmail.com
            </a>
          </div>

          <div
            className="p-8 rounded-2xl border border-card-border bg-card text-center hover-elevate transition-all duration-300"
            data-testid="contact-instagram-card"
          >
            <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8" data-testid="text-contact-note">
          I'm a solo traveler often in different time zones. I'll get back to you as soon as I can, usually within a few days.
        </p>
      </div>
    </div>
  );
}
