export const BASE_URL = "https://www.traveltipsexposed.com";

export interface SitemapUrl {
  path: string;
  lastmod?: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

/**
 * Add a new entry here whenever you add a new page or blog post.
 * The sitemap at /sitemap.xml is generated from this list automatically.
 *
 * Fields:
 *   path       - The URL path, e.g. "/blog/my-new-post"
 *   lastmod    - ISO date of last meaningful update, e.g. "2026-03-15"
 *   changefreq - How often the page changes (used by crawlers as a hint)
 *   priority   - Relative importance 0.0–1.0 (home=1.0, posts=0.8, utility=0.5)
 */
export const sitemapUrls: SitemapUrl[] = [
  // ── Core pages ──────────────────────────────────────────────────────────
  { path: "/",               lastmod: "2026-03-18", changefreq: "weekly",  priority: 1.0 },
  { path: "/blog",           lastmod: "2026-03-18", changefreq: "weekly",  priority: 0.9 },
  { path: "/deal-seekers",   lastmod: "2026-03-18", changefreq: "weekly",  priority: 0.8 },
  { path: "/visual-journeys",lastmod: "2026-03-15", changefreq: "monthly", priority: 0.7 },
  { path: "/about",          lastmod: "2026-03-01", changefreq: "monthly", priority: 0.6 },
  { path: "/contact",        lastmod: "2026-01-01", changefreq: "yearly",  priority: 0.5 },

  // ── Blog posts (newest first) ────────────────────────────────────────────
  { path: "/atm-fees-money-exchange-indonesia",                  lastmod: "2026-01-20", changefreq: "monthly", priority: 0.8 },
  { path: "/tetebatu-lombok-honest-review",                      lastmod: "2026-01-07", changefreq: "monthly", priority: 0.8 },
  { path: "/gili-air-indonesia-travel-guide",                    lastmod: "2026-01-04", changefreq: "monthly", priority: 0.8 },
  { path: "/is-kuta-lombok-overrated",                           lastmod: "2026-03-15", changefreq: "monthly", priority: 0.8 },
  { path: "/iboga-gabon-sacred-wood-la-cite-de-la-source",       lastmod: "2026-03-15", changefreq: "monthly", priority: 0.8 },
  { path: "/blog/housesitting-guide",                            lastmod: "2026-03-14", changefreq: "monthly", priority: 0.8 },
  { path: "/blog/rishikesh-to-dharamshala",                      lastmod: "2026-03-04", changefreq: "monthly", priority: 0.8 },
  { path: "/blog/balis-one-love-vibe",                           lastmod: "2026-03-02", changefreq: "monthly", priority: 0.8 },
  { path: "/blog/ayahuasca-retreats-peru",                       lastmod: "2026-02-15", changefreq: "monthly", priority: 0.8 },
  { path: "/blog/skip-lines-bali",                               lastmod: "2026-01-17", changefreq: "monthly", priority: 0.8 },
  { path: "/blog/bali-belly-delhi-belly",                        lastmod: "2026-01-05", changefreq: "monthly", priority: 0.8 },
  { path: "/blog/yoga-teacher-training-rishikesh",               lastmod: "2025-12-15", changefreq: "monthly", priority: 0.8 },
];
