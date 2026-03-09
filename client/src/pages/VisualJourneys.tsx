import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Camera, ArrowUp } from "lucide-react";
import imgCa1 from "@assets/20151207_193710_1773065104995.jpg";
import imgCa2 from "@assets/DSC_6323_1773065105011.JPG";
import imgCa3 from "@assets/20200819_073322_1773065105021.jpg";
import imgCa4 from "@assets/20190521_204134_1773065105031.jpg";
import imgCa5 from "@assets/20190912_214028_1773065105042.jpg";
import imgCa6 from "@assets/20151119_114728_1773065105052.jpg";
import imgCa7 from "@assets/20200903_195218_1773065105065.jpg";
import imgCa8 from "@assets/20250520_124520_1773065105075.jpg";
import imgCa9 from "@assets/20210616_192247_1773065105086.jpg";
import imgCa10 from "@assets/20151204_130302_1773065105096.jpg";
import imgCa11 from "@assets/295718_10150850256595596_749030595_20892884_1595593293_n-1_1773065105107.jpg";
import imgCa12 from "@assets/20201019_162853_1773065113459.JPG";
import imgCa13 from "@assets/20201011_172546_Original_1773065133247.jpg";
import imgCa14 from "@assets/20200903_195924_1773065133271.jpg";
import imgCa15 from "@assets/20190522_194500_1773065133282.jpg";
import imgCa16 from "@assets/20190617_210908_1773065252576.jpg";
import imgCa17 from "@assets/20200824_062913_1773065252587.jpg";
import imgCa18 from "@assets/IMG_1945_1773065252597.JPG";
import imgCa19 from "@assets/2018-07-18_16_18_41.468_1773065252605.JPG";
import imgCa20 from "@assets/IMG_1884_1773065252614.JPG";
import imgCa21 from "@assets/IMG_2177~3_1773065252623.JPG";
import imgCa22 from "@assets/IMG013_1773065252636.jpg";
import imgCa23 from "@assets/IMG_2053_1773065252647.JPG";
import imgCa24 from "@assets/IMG_2537_1773065252668.JPG";
import imgCa25 from "@assets/IMG_20200713_114937_1773065252702.jpg";
import imgCa26 from "@assets/IMG_1951_1773065252723.jpg";
import imgCa27 from "@assets/IMG_20241007_055933_973_1773065252740.jpg";
import imgCa28 from "@assets/IMG_2180~2_1773065252752.jpg";
import imgCa29 from "@assets/IMG_1895_1773065252769.JPG";
import imgCa30 from "@assets/IMG009_1773065252778.jpg";
import imgCa31 from "@assets/IMG012_1773065252789.jpg";
import imgCa32 from "@assets/received_2289262894475677_1773065252798.jpeg";
import imgCa33 from "@assets/received_10155721876940596_1773065252808.jpeg";
import imgMo1 from "@assets/IMG_1297_1773065713784.JPG";
import imgMo2 from "@assets/IMG_6715_1773065713805.JPG";
import imgMo3 from "@assets/IMG_5413_1773065713859.jpg";
import imgIn1 from "@assets/20230602_184608_Original_1773069017785.jpg";
import imgIn2 from "@assets/IMG-20230516-WA0011_Original_1773069017795.jpg";
import imgIn3 from "@assets/IMG-20230616-WA0019_Original_1773069017821.jpg";
import imgIn4 from "@assets/IMG-20230515-WA0053_Original_1773069017829.jpg";
import imgIn5 from "@assets/IMG-20230516-WA0018_Original_1773069017837.jpg";
import imgIn6 from "@assets/IMG-20230515-WA0035_Original_1773069017845.jpg";
import imgIn7 from "@assets/IMG-20230522-WA0056_Original_1773069017853.jpg";
import imgIn8 from "@assets/IMG-20230522-WA0054_Original_1773069017861.jpg";
import imgIn9 from "@assets/IMG-20230530-WA0025_Original_1773069017877.jpg";
import imgIn10 from "@assets/IMG-20230528-WA0014_Original_1773069017885.jpg";
import imgIn11 from "@assets/IMG-20230515-WA0063_Original_1773069017895.jpg";
import imgIn12 from "@assets/IMG-20230528-WA0019_Original~2_1773069017904.jpg";
import imgIn13 from "@assets/IMG-20230515-WA0057_Original_1773069017912.jpg";
import imgIn14 from "@assets/IMG-20230516-WA0007_Original_1773069017920.jpg";
import imgIn15 from "@assets/IMG-20230522-WA0030_Original_1773069017936.jpg";
import imgIn16 from "@assets/IMG-20230616-WA0026_Original_1773069017944.jpg";
import imgIn17 from "@assets/IMG-20230515-WA0032_Original_1773069017953.jpg";
import imgIn18 from "@assets/20230506_114552_Original_1773080040788.jpg";
import imgIn19 from "@assets/IMG-20230505-WA0018_Original_1773080040792.jpg";
import imgIn20 from "@assets/IMG-20230515-WA0063_Original_1773080040792.jpg";
import imgIn21 from "@assets/IMG-20230505-WA0020_Original_1773080040793.jpg";
import imgIn22 from "@assets/20230519_155442_Original_1773080040793.jpg";
import imgId1 from "@assets/Screenshot_20260304_084113_Drive_1773081913245.jpg";
import imgId2 from "@assets/Screenshot_20260120_134406_Photos~2_1773081913246.jpg";
import imgId3 from "@assets/lv_0_20260104142247_1773081913247.jpg";
import imgId4 from "@assets/IMG-20251221-WA0001_1773081913248.jpg";
import imgId5 from "@assets/20260103_152216_1773081913248.jpg";
import imgId6 from "@assets/20260102_154015_1773081913249.jpg";
import imgId7 from "@assets/20251230_194420_1773081913250.jpg";
import imgId8 from "@assets/20251223_224423_1773081913250.jpg";
import imgUs1 from "@assets/1000038773_1773079797890.jpg";
import imgUs2 from "@assets/1000038772_1773079797891.jpg";
import imgUs3 from "@assets/1000038771_1773079797891.jpg";

const albums = [
  {
    slug: "indonesia",
    country: "Indonesia",
    count: 18,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-491.jpg",
    images: [
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-491.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-485.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-486.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-487.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-488.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-489.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Indonesia-490.jpg",
      imgId1, imgId2, imgId3, imgId4, imgId5, imgId6, imgId7, imgId8,
      "/indonesia-video-1.mp4",
      "/indonesia-video-2.mp4",
      "/indonesia-video-3.mp4",
    ],
  },
  {
    slug: "canada",
    country: "Canada",
    count: 62,
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
      imgCa1,
      imgCa2,
      imgCa3,
      imgCa4,
      imgCa5,
      imgCa6,
      imgCa7,
      imgCa8,
      imgCa9,
      imgCa10,
      imgCa11,
      imgCa12,
      imgCa13,
      imgCa14,
      imgCa15,
      imgCa16,
      imgCa17,
      imgCa18,
      imgCa19,
      imgCa20,
      imgCa21,
      imgCa22,
      imgCa23,
      imgCa24,
      imgCa25,
      imgCa26,
      imgCa27,
      imgCa28,
      imgCa29,
      imgCa30,
      imgCa31,
      imgCa32,
      imgCa33,
      "/canada-farm.mp4",
    ],
  },
  {
    slug: "usa",
    country: "USA",
    count: 11,
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
      imgUs1,
      imgUs2,
      imgUs3,
    ],
  },
  {
    slug: "jamaica",
    country: "Jamaica",
    count: 4,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/Jamaica-563.jpg",
    images: [
      "https://traveltipsexposed.com/wp-content/grand-media/image/Jamaica-563.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Jamaica-560.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Jamaica-562.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Jamaica-564.jpg",
    ],
  },
  {
    slug: "morocco",
    country: "Morocco",
    count: 36,
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
      imgMo1,
      imgMo2,
      imgMo3,
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
    count: 75,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/India-661.jpg",
    images: [
      ...Array.from({ length: 49 }, (_, i) => `https://traveltipsexposed.com/wp-content/grand-media/image/India-${613 + i}.jpg`),
      imgIn1, imgIn2, imgIn3, imgIn4, imgIn5, imgIn6, imgIn7, imgIn8, imgIn9,
      imgIn10, imgIn11, imgIn12, imgIn13, imgIn14, imgIn15, imgIn16, imgIn17,
      imgIn18, imgIn19, imgIn20, imgIn21, imgIn22,
      "/india-video-1.mp4",
      "/india-video-2.mp4",
      "/india-video-3.mp4",
      "/india-video-4.mp4",
    ],
  },
  {
    slug: "europe",
    country: "Europe",
    count: 10,
    cover: "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-682_1.jpg",
    images: [
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-682_1.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-672.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-673.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-674.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-676.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-677.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-678.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-679.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-680.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Europe-681.jpg",
    ],
  },
  {
    slug: "gabon",
    country: "Gabon",
    count: 26,
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
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-682.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-683.jpg",
      "https://traveltipsexposed.com/wp-content/grand-media/image/Gabon-684.jpg",
      "/gabon-video-1.mp4",
      "/gabon-video-2.mp4",
    ],
  },
];

interface LightboxState {
  albumSlug: string;
  imageIndex: number;
}

const isVideo = (src: string) => src.endsWith(".mp4") || src.endsWith(".mov") || src.endsWith(".webm");

function GalleryImage({ src, alt, onLoad }: { src: string; alt: string; onLoad?: () => void }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) return null;

  if (isVideo(src)) {
    const poster = src.replace(/\.mp4$/, "-poster.jpg");
    return (
      <div className="w-full h-full relative flex items-center justify-center bg-black">
        <img
          src={poster}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          onLoad={() => onLoad?.()}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center">
            <svg className="w-5 h-5 text-white fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      onLoad={() => { setLoaded(true); onLoad?.(); }}
      onError={() => setError(true)}
    />
  );
}

export default function VisualJourneys() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleAlbumClick = (slug: string) => {
    const next = activeAlbum === slug ? null : slug;
    setActiveAlbum(next);
    if (next) {
      setTimeout(() => {
        galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  };

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
              onClick={() => handleAlbumClick(album.slug)}
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

        <div ref={galleryRef} className="scroll-mt-6">
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

            <div className="flex justify-center mt-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                data-testid={`button-back-to-top-${album.slug}`}
                className="flex items-center gap-2 px-6 py-3 border border-[#C4541C]/40 text-[#C4541C] hover:bg-[#C4541C] hover:text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <ArrowUp size={14} />
                Back to Top
              </button>
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
            {isVideo(currentAlbum.images[lightbox.imageIndex]) ? (
              <video
                key={currentAlbum.images[lightbox.imageIndex]}
                src={currentAlbum.images[lightbox.imageIndex]}
                poster={currentAlbum.images[lightbox.imageIndex].replace(/\.mp4$/, "-poster.jpg")}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-full rounded-lg"
                data-testid="video-lightbox"
              />
            ) : (
              <img
                src={currentAlbum.images[lightbox.imageIndex]}
                alt={`${currentAlbum.country} ${lightbox.imageIndex + 1}`}
                className="max-h-[85vh] max-w-full object-contain rounded-lg"
                data-testid="img-lightbox"
              />
            )}
            <p className="text-white/50 text-sm text-center mt-3" style={{ fontFamily: "var(--font-display)" }}>
              {currentAlbum.country}, {lightbox.imageIndex + 1} / {currentAlbum.images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
