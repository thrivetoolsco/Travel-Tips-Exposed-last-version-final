import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { SiInstagram } from "react-icons/si";
import { Menu, X } from "lucide-react";
import YinYangNew from "./YinYangNew";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Visual Journeys", href: "/visual-journeys" },
  { label: "About", href: "/about" },
  { label: "Deal Seekers", href: "/deal-seekers" },
  { label: "Contact", href: "/contact" },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-md border-b border-[#E8DDD0]"
            : "bg-[#FAF7F2] border-b border-[#E8DDD0]"
        }`}
        data-testid="header"
      >
        <div className="border-t-[3px] border-[#C4541C]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-0 lg:pt-4 lg:flex-col lg:items-center">
            <Link
              href="/"
              className="flex flex-col items-center no-underline group"
              data-testid="link-logo"
            >
              <span
                className="text-[10px] tracking-[0.45em] uppercase font-semibold text-[#C4541C] mb-0.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ✦ Travel Tips ✦
              </span>
              <div
                className="flex items-baseline text-4xl md:text-5xl leading-none group-hover:text-[#C4541C] transition-colors duration-300"
                style={{ fontFamily: "var(--font-impact)", letterSpacing: "0.06em", color: "#1A1008" }}
              >
                <span>EXP</span>
                <span
                  className="inline-flex items-center self-center mx-[0.02em]"
                  style={{ width: "calc(1cap + 2mm)", height: "calc(1cap + 2mm)", transform: "translateY(1mm)" }}
                >
                  <YinYangNew size="100%" color="currentColor" bgColor="#FAF7F2" />
                </span>
                <span>SED</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-0 mt-2 border-t border-[#E8DDD0] w-full justify-center" data-testid="nav-desktop">
              {navLinks.map((link, i) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`px-5 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 border-r border-[#E8DDD0] ${i === 0 ? "border-l" : ""} ${
                      isActive
                        ? "text-[#C4541C] bg-[#F0E8E0]"
                        : "text-[#1A1008]/65 hover:text-[#C4541C] hover:bg-[#F6F0E8]"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="https://www.instagram.com/lifes.a.trip.huh/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-instagram"
                className="ml-4 px-3 py-2.5 text-[#1A1008]/40 hover:text-[#C4541C] transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram size={16} />
              </a>
            </nav>

            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="https://www.instagram.com/lifes.a.trip.huh/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-instagram"
                className="text-[#1A1008]/40 hover:text-[#C4541C] transition-colors p-2"
                aria-label="Instagram"
              >
                <SiInstagram size={18} />
              </a>
              <button
                className="text-[#1A1008]/65 hover:text-[#C4541C] p-2 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                data-testid="button-menu-toggle"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div
            className="lg:hidden bg-[#FAF7F2] border-t border-[#E8DDD0] pb-4"
            data-testid="nav-mobile"
          >
            <nav className="max-w-7xl mx-auto px-4">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-testid={`nav-mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`block py-3 px-2 text-xs font-semibold tracking-[0.18em] uppercase border-b border-[#EBE3DA] transition-colors ${
                      isActive
                        ? "text-[#C4541C]"
                        : "text-[#1A1008]/55 hover:text-[#C4541C]"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 pt-[88px] lg:pt-[110px]" data-testid="main-content">
        {children}
      </main>

      <footer className="bg-[#1A1008] text-white/50 py-12 border-t border-[#C4541C]/30" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-10">
            <span className="text-[10px] tracking-[0.45em] uppercase font-semibold text-[#C4541C] mb-1" style={{ fontFamily: "var(--font-display)" }}>
              ✦ Travel Tips ✦
            </span>
            <div className="flex items-baseline text-3xl leading-none" style={{ fontFamily: "var(--font-impact)", letterSpacing: "0.06em" }}>
              <span className="text-white/90">EXP</span>
              <span
                className="inline-flex items-center self-center mx-[0.02em]"
                style={{ width: "calc(1cap + 2mm)", height: "calc(1cap + 2mm)", transform: "translateY(1mm)" }}
              >
                <YinYangNew size="100%" color="#ffffff" bgColor="#1A1008" />
              </span>
              <span className="text-white/90">SED</span>
            </div>
            <p className="text-xs text-white/30 mt-3 max-w-xs text-center leading-relaxed">
              Uncovering the raw, unfiltered truth behind global travel. From hidden alleyways to profound spiritual retreats, we're exploring the depth of the human journey.
            </p>
          </div>

          <div className="border-t border-white/10 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="text-white/70 text-[10px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>Navigate</h3>
              <ul className="space-y-1.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-white/50 hover:text-[#C4541C] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white/70 text-[10px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>Connect</h3>
              <a
                href="https://www.instagram.com/lifes.a.trip.huh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white/35 hover:text-[#C4541C] transition-colors mb-2"
              >
                <SiInstagram size={14} />
                @lifes.a.trip.huh
              </a>
              <a href="mailto:traveltipsexposed@gmail.com" className="text-xs text-[#C4541C]/70 hover:text-[#C4541C] transition-colors">
                traveltipsexposed@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-white/70 text-[10px] tracking-[0.3em] uppercase font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>Fine Print</h3>
              <p className="text-xs text-white/25 leading-relaxed">
                Some links are affiliate links. I only recommend what I genuinely use &amp; love.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-5 text-center">
            <p className="text-xs text-white/20">
              &copy; {new Date().getFullYear()} Travel Tips Exposed. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
