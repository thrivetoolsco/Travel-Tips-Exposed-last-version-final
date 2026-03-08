import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const albums = [
  {
    slug: "indonesia",
    country: "Indonesia",
    count: 8,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-491.jpg",
    images: [
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-491.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-485.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-486.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-487.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-488.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-489.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-490.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-492.jpg",
    ],
  },
  {
    slug: "canada",
    country: "Canada",
    count: 28,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-550.jpg",
    images: [
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-550.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-519.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-520.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-521.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-522.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-523.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-524.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-525.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-526.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-527.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-528.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-529.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-530.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-531.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-532.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-533.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-534.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-535.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-536.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-537.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-538.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-539.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-540.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-541.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-542.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-543.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-544.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Canada-545.jpg",
    ],
  },
  {
    slug: "usa",
    country: "USA",
    count: 8,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/USA-558.jpg",
    images: [
      "https://traveltipsexposed.com/wp-content/grand-media/image/USA-558.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/USA-551.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/USA-552.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/USA-553.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/USA-554.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/USA-555.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/USA-556.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/USA-557.jpg",
    ],
  },
  {
    slug: "jamaica",
    country: "Jamaica",
    count: 5,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/Jamaica-563.jpg",
    images: [
      "https://traveltipsexposed.com/wp-content/grand-media/image/Jamaica-563.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Jamaica-560.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Jamaica-561.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Jamaica-562.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Jamaica-564.jpg",
    ],
  },
  {
    slug: "morocco",
    country: "Morocco",
    count: 33,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-596.jpg",
    images: [
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-596.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-565.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-566.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-567.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-568.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-569.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-570.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-571.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-572.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-573.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-574.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-575.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-576.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-577.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-578.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-579.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-580.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-581.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-582.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-583.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-584.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-585.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-586.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-587.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-588.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-589.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-590.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-591.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-592.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-593.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-594.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-595.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Morocco-597.jpg",
    ],
  },
  {
    slug: "peru",
    country: "Peru",
    count: 16,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-606_1.jpg",
    images: [
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-606_1.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-598.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-599.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-600.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-601.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-602.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-603.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-604.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-605.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-606.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-607.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-608.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-609.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-610.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-611.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Peru-612.jpg",
    ],
  },
  {
    slug: "india",
    country: "India",
    count: 49,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/India-661.jpg",
    images: Array.from({ length: 49 }, (_, i) => `https://traveltipsexposed.com/wp-content/grand-media/image/India-${613 + i}.jpg`),
  },
  {
    slug: "europe",
    country: "Europe",
    count: 10,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-682_1.jpg",
    images: [
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-682_1.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-663.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-664.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-665.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-666.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-667.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-668.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-669.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-670.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-671.jpg",
    ],
  },
  {
    slug: "gabon",
    country: "Gabon",
    count: 31,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-714.jpg",
    images: [
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-694.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-695.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-696.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-697.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-698.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-699.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-700.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-701.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-702.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-703.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-704.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-705.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-706.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-707.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-708.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-709.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-710.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-711.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-712.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-713.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-714.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-675.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-676.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-677.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-678.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-679.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-680.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-681.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-682.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-683.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-684.jpg",
    ],
  },
];

interface LightboxState {
  albumSlug: string;
  imageIndex: number;
}

function GalleryImage({ src, alt, onLoad }: { src: string; alt: string; onLoad?: () => void }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) return null;

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      onLoad={() => { setLoaded(true); onLoad?.(); }}
      onError={() => setError(true)}
    />
  );
}

export default function VisualJourneys() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && albums.find((a) => a.slug === hash)) {
      setActiveAlbum(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, []);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  const navigateLightbox = (dir: number) => {
    if (!lightbox) return;
    const album = albums.find((a) => a.slug === lightbox.albumSlug);
    if (!album) return;
    const newIndex = (lightbox.imageIndex + dir + album.images.length) % album.images.length;
    setLightbox({ ...lightbox, imageIndex: newIndex });
  };

  const openLightbox = (albumSlug: string, imageIndex: number) => {
    setLightbox({ albumSlug, imageIndex });
  };

  const currentAlbum = lightbox ? albums.find((a) => a.slug === lightbox.albumSlug) : null;

  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative py-24 px-4 overflow-hidden"
        style={{ background: "#1A1008" }}
        data-testid="visual-journeys-hero"
      >
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.45) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(245, 158, 11, 0.2) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-amber-400 border border-amber-400/30 px-4 py-1.5 rounded-full mb-4"
            style={{ fontFamily: "var(--font-display)" }}>
            Photo Albums
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            style={{ fontFamily: "var(--font-serif)" }}
            data-testid="heading-visual-journeys"
          >
            Visual Journeys
          </h1>
          <p className="text-white/60 mt-4 max-w-lg mx-auto">
            Raw, unfiltered snapshots from the road. Click any album to explore.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16" data-testid="albums-grid">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-20">
          {albums.map((album) => (
            <button
              key={album.slug}
              id={album.slug}
              onClick={() => setActiveAlbum(activeAlbum === album.slug ? null : album.slug)}
              data-testid={`button-album-${album.slug}`}
              className="group relative rounded-xl overflow-hidden aspect-square focus:outline-none focus:ring-2 focus:ring-[#C4541C]"
            >
              <img
                src={album.cover}
                alt={album.country}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 transition-all duration-300 ${activeAlbum === album.slug ? "bg-[#C4541C]/30" : "bg-gradient-to-t from-black/80 via-black/20 to-transparent"}`} />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                <span
                  className="text-white font-bold text-sm block"
                  style={{ fontFamily: "var(--font-display)" }}
                  data-testid={`text-country-${album.slug}`}
                >
                  {album.country}
                </span>
                <span className="text-white/60 text-xs flex items-center gap-1">
                  <Camera size={10} />
                  {album.count} photos
                </span>
              </div>
              {activeAlbum === album.slug && (
                <div className="absolute top-2 right-2">
                  <span className="w-3 h-3 rounded-full bg-amber-400 block" />
                </div>
              )}
            </button>
          ))}
        </div>

        {albums.map((album) => (
          <div
            key={album.slug}
            data-testid={`album-gallery-${album.slug}`}
            className={`mb-16 transition-all duration-300 ${activeAlbum === album.slug ? "block" : "hidden"}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
              <h2
                className="text-2xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-serif)" }}
                data-testid={`heading-album-${album.slug}`}
              >
                {album.country} <span className="text-muted-foreground text-lg font-normal">· {album.count} photos</span>
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {album.images.map((imgUrl, idx) => (
                <button
                  key={imgUrl}
                  onClick={() => openLightbox(album.slug, idx)}
                  data-testid={`button-image-${album.slug}-${idx}`}
                  className="group relative aspect-square rounded-lg overflow-hidden bg-muted focus:outline-none focus:ring-2 focus:ring-[#C4541C]"
                >
                  <GalleryImage src={imgUrl} alt={`${album.country} ${idx + 1}`} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
                </button>
              ))}
            </div>
          </div>
        ))}

        {!activeAlbum && (
          <div className="text-center py-10 text-muted-foreground" data-testid="text-select-album">
            <Camera size={40} className="mx-auto mb-4 opacity-30" />
            <p style={{ fontFamily: "var(--font-display)" }}>Click an album above to view the photos</p>
          </div>
        )}
      </div>

      {lightbox && currentAlbum && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          data-testid="lightbox-modal"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            data-testid="button-close-lightbox"
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            data-testid="button-lightbox-prev"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 bg-black/30 rounded-full z-50"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            data-testid="button-lightbox-next"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 bg-black/30 rounded-full z-50"
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-5xl max-h-[90vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentAlbum.images[lightbox.imageIndex]}
              alt={`${currentAlbum.country} ${lightbox.imageIndex + 1}`}
              className="max-h-[85vh] max-w-full object-contain rounded-lg"
              data-testid="img-lightbox"
            />
            <p className="text-white/50 text-sm text-center mt-3" style={{ fontFamily: "var(--font-display)" }}>
              {currentAlbum.country} — {lightbox.imageIndex + 1} / {currentAlbum.images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
