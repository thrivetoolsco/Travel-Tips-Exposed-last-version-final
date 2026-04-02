# Travel Tips Exposed — replit.md

## Overview

Travel Tips Exposed is a travel blog website built for a blogger named Eden. It features real travel stories, itineraries, budget hacks, wellness content, and a photo gallery. The site includes pages for blog posts (Bali, India, Peru, etc.), a deal-seeker resource page with affiliate-style travel platform recommendations, a visual journeys photo gallery, an about page, and a contact page.

The project is a full-stack TypeScript application with a React frontend and an Express backend. The backend is mostly a shell right now — routes are not yet implemented, and data storage uses an in-memory store. The database schema is defined with Drizzle ORM targeting PostgreSQL, but is not yet wired into the active routes.

---

## User Preferences

Preferred communication style: Simple, everyday language.

---

## System Architecture

### Frontend

- **Framework**: React (with Vite as the bundler)
- **Routing**: Wouter (lightweight client-side router)
- **State/Data Fetching**: TanStack React Query with a custom `apiRequest` helper and `getQueryFn`
- **Styling**: Tailwind CSS with CSS custom properties for theming (light/dark mode tokens defined in `index.css`)
- **Component Library**: shadcn/ui (Radix UI primitives + CVA for variants), "new-york" style
- **Typography**: Google Fonts — Playfair Display (serif), Open Sans (sans), Montserrat (display)
- **Icons**: Lucide React + react-icons (SiInstagram)

**Page structure** (all wrapped in a shared `Layout` with nav + footer):
- `/` — Home (featured posts grid, platform links)
- `/blog` — Blog listing
- `/blog/:slug` — Individual blog post pages (static, hardcoded content)
- `/about` — About the author
- `/deal-seekers` — Curated travel deal platforms by category
- `/visual-journeys` — Photo gallery with lightbox/slideshow
- `/contact` — Contact info page
- `/404` — Not found

**Key architectural choices**:
- Blog posts are fully static React components (no CMS or database-driven content yet). Each post lives in `client/src/pages/blog/`.
- The `Layout` component provides a responsive nav with a hamburger menu for mobile and a custom YinYang SVG logo.
- Query client defaults to `staleTime: Infinity` and no refetch on window focus — suited for mostly static content.
- **SEO**: All pages use `react-helmet-async` via a reusable `client/src/components/SEO.tsx` component. Each page has a unique title, description, canonical URL, Open Graph tags (including `og:image`), Twitter Card tags, and `article:published_time`/`article:author` for blog posts. The default OG image is `client/public/og-default.jpg`.

**Adding a new blog post checklist**:
1. Create the component in `client/src/pages/blog/NewPost.tsx` — include `<SEO>` with title, description, canonical, `ogType="article"`, `publishedTime`, and `author="Eden"`
2. Register the route in `client/src/App.tsx`
3. Add the post to `shared/sitemap-urls.ts` (sitemap auto-generates from this file)
4. Add the post card to the `blogPosts` array in `client/src/pages/Blog.tsx`
5. Update the navigation chain (`ArrowLeft`/`ArrowRight` links) in the adjacent posts
6. **Add a `PostMeta` entry to `server/ssr-pages.ts`** — this is required for the SEO fix; without it, crawlers will not see H1 or article text for the new post

### SEO Fix: Server-Side Rendering for Crawlers

**Problem**: In production, the app serves a static `index.html` shell via `serveStatic`. Search engine crawlers see an empty page with 0 words and no H1, because the React content only renders in the browser after JavaScript loads.

**Solution**: `server/ssr-pages.ts` registers Express GET routes for all 12 blog posts BEFORE `serveStatic` is called. When a crawler (or browser) requests a blog post route in production:
1. The handler reads `dist/public/index.html` (cached in memory)
2. It replaces `<!--head-outlet-->` with post-specific canonical, OG, Twitter, and JSON-LD tags
3. It replaces `<!--ssr-outlet-->` with a hidden `<div>` containing the H1 and article text (hundreds of words)
4. It also replaces the default `<title>` and `<meta name="description">` inline
5. Returns the complete HTML with full article content in the initial response

The hidden `<div id="ssr-content">` is overwritten when React hydrates in the browser, so users never see duplicate content. Crawlers read the full text on first load.

All 12 blog posts are covered, including the 4 with non-`/blog/` paths: `/is-kuta-lombok-overrated`, `/gili-air-indonesia-travel-guide`, `/tetebatu-lombok-honest-review`, `/atm-fees-money-exchange-indonesia`.

### Backend

- **Framework**: Express 5 (with TypeScript via `tsx`)
- **Server entry**: `server/index.ts` creates an HTTP server, registers routes, and serves static files in production
- **Dev server**: Vite runs in middleware mode inside Express during development (HMR via WebSocket at `/vite-hmr`)
- **Routes**: `server/routes.ts` — contains the `/sitemap.xml` dynamic generator route
- **Storage**: `server/storage.ts` — `IStorage` interface with `MemStorage` implementation (in-memory Map). No database queries are active yet.

### Database

- **ORM**: Drizzle ORM
- **Dialect**: PostgreSQL (`drizzle.config.ts` reads `DATABASE_URL`)
- **Schema** (`shared/schema.ts`):
  - `users` table: `id` (UUID, PK), `username` (text, unique), `password` (text)
  - Insert schema validated with `drizzle-zod` + Zod
- **Migrations**: Output to `./migrations` via `drizzle-kit push`
- **Status**: Schema exists but the app currently uses `MemStorage`, not the database. To activate the DB, replace `MemStorage` with a Drizzle-backed implementation and wire it into routes.

### Build

- **Client**: Vite builds to `dist/public`
- **Server**: esbuild bundles `server/index.ts` to `dist/index.cjs`, with a curated allowlist of dependencies bundled inline (drizzle, express, pg, etc.) and everything else externalized
- **Script**: `script/build.ts` orchestrates both builds sequentially

### Shared Code

- `shared/schema.ts` — Drizzle ORM schema, imported by both client and server
- `shared/sitemap-urls.ts` — Single source of truth for all site URLs. The server reads this to generate `/sitemap.xml` dynamically. Add new pages/posts here.

---

## External Dependencies

### UI & Frontend Libraries
- **shadcn/ui** + **Radix UI** — Accessible component primitives (accordion, dialog, popover, select, etc.)
- **Embla Carousel** — Used in carousel component
- **Vaul** — Drawer component
- **react-day-picker** — Calendar component
- **react-resizable-panels** — Resizable panel layout
- **cmdk** — Command palette
- **Recharts** — Charting (chart.tsx included but not actively used in current pages)
- **Wouter** — Client-side routing
- **TanStack React Query** — Server state management
- **react-helmet-async** — Per-page SEO head management (title, meta, og:, twitter: tags)
- **react-hook-form** + **@hookform/resolvers** — Form handling
- **Lucide React** + **react-icons** — Icon sets
- **clsx** + **tailwind-merge** — Conditional class utilities
- **class-variance-authority** — Component variant styling
- **date-fns** — Date formatting

### Backend Libraries
- **Express 5** — HTTP server
- **connect-pg-simple** — PostgreSQL session store (available, not yet configured)
- **express-session** — Session middleware (available, not yet configured)
- **passport** + **passport-local** — Auth strategy (available, not yet wired up)
- **drizzle-orm** + **pg** — PostgreSQL ORM
- **nanoid** — ID generation (used in Vite dev server template versioning)
- **zod** + **zod-validation-error** — Schema validation

### External Services / APIs (available in build, not yet active)
- **Nodemailer** — Email sending capability
- **OpenAI** / **@google/generative-ai** — AI integrations (bundled but not yet used in routes)
- **Stripe** — Payment processing (bundled but not yet used)
- **jsonwebtoken** — JWT auth (bundled but not yet used)
- **multer** — File upload handling
- **xlsx** — Spreadsheet processing

### Infrastructure
- **Database**: PostgreSQL (requires `DATABASE_URL` environment variable)
- **Replit plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` (dev only)
- **Google Fonts**: Loaded via CDN in `index.html` (Playfair Display, Open Sans, Montserrat)
- **Images**: Hosted externally at `traveltipsexposed.com` (WordPress media CDN)