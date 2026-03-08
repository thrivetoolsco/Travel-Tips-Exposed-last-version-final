import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { SiInstagram } from "react-icons/si";
import { Menu, X } from "lucide-react";
import YinYangSymbol from "./YinYangSymbol";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Visual Journeys", href: "/visual-journeys" },
  { label: "About", href: "/about" },
  { label: "Deal Seekers", href: "/deal-seekers" },
  { label: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex flex-col items-start no-underline group" data-testid="link-logo">
      <span
        className="text-xs tracking-[0.3em] uppercase text-teal-300 font-semibold"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Travel Tips
      </span>
      <div className="flex items-center gap-0">
        <span
          className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase leading-none"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.18em" }}
        >
          EXP
        </span>
        <span className="inline-flex items-center justify-center mx-0.5">
          <YinYangSymbol size={28} color="#ffffff" bgColor="#0d3d35" />
        </span>
        <span
          className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase leading-none"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "0.18em" }}
        >
          SED
        </span>
      </div>
    </Link>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
            ? "bg-[#071f1a] shadow-xl shadow-black/30"
            : "bg-[#0d3d35]"
        }`}
        data-testid="header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Logo />

            <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-sm ${
                      isActive
                        ? "text-amber-400 border-b-2 border-amber-400"
                        : "text-white/80 hover:text-amber-300 hover:bg-white/5"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/lifes.a.trip.huh/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-instagram"
                className="text-white/70 hover:text-rose-400 transition-colors p-2"
                aria-label="Instagram"
              >
                <SiInstagram size={20} />
              </a>
              <button
                className="lg:hidden text-white/80 hover:text-white p-2 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                data-testid="button-menu-toggle"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div
            className="lg:hidden bg-[#071f1a] border-t border-white/10 pb-4"
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
                    className={`block py-3 px-2 text-sm font-medium border-b border-white/5 transition-colors ${
                      isActive
                        ? "text-amber-400"
                        : "text-white/70 hover:text-amber-300"
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

      <main className="flex-1 pt-16 md:pt-20" data-testid="main-content">
        {children}
      </main>

      <footer className="bg-[#071f1a] text-white/60 py-12" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <span className="text-xs tracking-[0.3em] uppercase text-teal-400 font-semibold block mb-1">Travel Tips</span>
                <div className="flex items-center">
                  <span className="text-xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>
                    EXP
                  </span>
                  <YinYangSymbol size={20} color="#ffffff" bgColor="#071f1a" />
                  <span className="text-xl font-bold text-white tracking-widest uppercase" style={{ fontFamily: "var(--font-display)" }}>
                    SED
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/50">
                Real travel stories, honest itineraries, and budget hacks for the bold millennial explorer.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase" style={{ fontFamily: "var(--font-display)" }}>Navigate</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-amber-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase" style={{ fontFamily: "var(--font-display)" }}>Connect</h3>
              <a
                href="https://www.instagram.com/lifes.a.trip.huh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-rose-400 transition-colors mb-3"
              >
                <SiInstagram size={16} />
                @lifes.a.trip.huh
              </a>
              <p className="text-sm text-white/50">
                Questions or collabs?{" "}
                <a href="mailto:traveltipsexposed@gmail.com" className="text-amber-400 hover:text-amber-300 transition-colors">
                  traveltipsexposed@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Travel Tips Exposed. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Some links are affiliate links — we only recommend what we love.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
