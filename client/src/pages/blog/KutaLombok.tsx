import { Link } from "wouter";
import { Calendar, User, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import imgHero from "@assets/20230602_184608_Original_1773069017785.jpg";
import imgMid from "@assets/IMG-20230516-WA0018_Original_1773069017837.jpg";

export default function KutaLombok() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] overflow-hidden" data-testid="post-hero">
        <img src={imgHero} alt="Is Kuta Lombok worth visiting honest review" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold bg-[#B04A2A] text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}>Wanderlust</span>
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
          Is Kuta Lombok Overrated? 6 Honest Reasons I Won't Be Going Back
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-[#C4541C]" />
            <span data-testid="text-author">Eden</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-amber-500" />
            <span data-testid="text-date">March 15, 2026</span>
          </span>
        </div>

        <div className="prose prose-lg max-w-none text-foreground" style={{ fontFamily: "var(--font-sans)" }} data-testid="post-body">

          <p className="lead text-xl text-muted-foreground mb-6 leading-relaxed">
            Let's be real for a second. We've all fallen down the rabbit hole of aesthetic Instagram reels showing Lombok as some untouched paradise, turquoise water, empty beaches, golden hour forever. And look, parts of Lombok absolutely live up to that. But <strong>Kuta Lombok</strong>? After spending time there, I feel a responsibility to deinfluence you just a little.
          </p>

          <p className="mb-6 leading-relaxed">
            I genuinely wanted to love it. The hype was real, my expectations were high, and I arrived ready to be amazed. Instead, I left with a congested throat, a lighter wallet, and zero desire to return.
          </p>

          <p className="mb-10 leading-relaxed">
            Here is my completely unfiltered review of Kuta Lombok, the things the IG reels won't show you.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            1. The Beach Situation Is Not What You Think
          </h2>

          <p className="mb-6 leading-relaxed">
            This one hurts to write because the <em>potential</em> is real. The coastline around Kuta Lombok is genuinely beautiful in terms of geography. But the reality on the ground is a different story.
          </p>

          <p className="mb-6 leading-relaxed">
            The water quality at the main beach was a serious disappointment. Visible garbage lines the shore, and this is not an exaggeration, there is wastewater runoff flowing directly into the ocean in areas where tourists are expected to swim. For a destination marketing itself as a pristine alternative to Bali, this is a significant problem that doesn't get talked about enough.
          </p>

          <p className="mb-8 leading-relaxed">
            If spotless, swimmable water is a non negotiable for you (as it should be), temper your expectations considerably before booking.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            2. Getting Around Means Renting a Scooter. Whether You Like It or Not.
          </h2>

          <p className="mb-6 leading-relaxed">
            Here's the thing nobody puts in their travel guide: if you want to access the better beaches around Kuta Lombok, and they do exist, further out, you essentially <em>have</em> to rent a scooter. There is no viable alternative for most of the spots worth seeing.
          </p>

          <p className="mb-6 leading-relaxed">
            That might sound fine in theory. In practice, the traffic is chaotic, the roads to coastal viewpoints are rough, and accidents involving tourists are genuinely common. What made it worse for me was the complete absence of protective riding gear for rent. No jackets, no proper pants, just a helmet and good luck. If you go down on those roads, you are looking at serious road rash at minimum. That risk reward calculation didn't work for me on a trip that was supposed to be relaxing.
          </p>

          <img src={imgMid} alt="Kuta Lombok scooter rental roads Indonesia" className="w-full rounded-xl my-10" />

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            3. The Air Quality and Noise Will Grind You Down
          </h2>

          <p className="mb-6 leading-relaxed">
            I was not expecting this one at all. The air in Kuta Lombok town is rough. A persistent combination of motorbike fumes and dust had my throat congested within the first day and kept it that way for the duration of my stay. Pair that with the constant noise of traffic and construction, and the "peaceful island escape" energy evaporates pretty quickly.
          </p>

          <p className="mb-8 leading-relaxed">
            If you have any respiratory sensitivity, this is worth factoring into your decision seriously.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            4. The Nightlife Is Trying Very Hard to Be Bali
          </h2>

          <p className="mb-6 leading-relaxed">
            I have nothing against a laid back music scene. But the live entertainment in Kuta Lombok during my visit ranged from forgettable to genuinely painful. Performers reading lyrics off their phones, beach clubs with playlists that felt like a Spotify radio station set to "generic." The whole scene has an energy of straining toward something it hasn't quite become yet.
          </p>

          <p className="mb-8 leading-relaxed">
            Bali's beach club culture took years and significant investment to develop into what it is. Kuta Lombok feels like it's attempting to skip that process, and the gap shows.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            5. The Prices Are Not What Indonesia Promises
          </h2>

          <p className="mb-6 leading-relaxed">
            One of the main draws of Southeast Asia travel, Indonesia especially, is the value for money. Kuta Lombok has largely abandoned that proposition. Prices at many shops, accommodations, and tourist facing restaurants were, frankly, closer to what I'd pay back home in Canada than what I'd expect from a developing surf town in Indonesia.
          </p>

          <p className="mb-8 leading-relaxed">
            The "affordable luxury" appeal that draws so many people to this region simply isn't there in Kuta. You are paying Bali prices, sometimes more, for a significantly less polished experience.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            6. The Food Scene Is a Letdown
          </h2>

          <p className="mb-6 leading-relaxed">
            Indonesia has one of the most exciting food cultures in the world. <em>Nasi goreng, mie goreng, soto, gado gado,</em> fresh seafood at local warungs for next to nothing. That version of Indonesia felt largely absent in Kuta Lombok's main tourist drag.
          </p>

          <p className="mb-8 leading-relaxed">
            What I found instead was a row of overpriced restaurants clearly designed for tourists with no interest in authenticity, and a noticeable shortage of the kind of humble, delicious local warungs that make eating your way through Indonesia such a joy elsewhere. The few local spots I did find were underwhelming. For a food lover, that's a hard pass.
          </p>

          <div className="my-10 p-8 border border-border bg-card rounded-xl">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
              The Bottom Line: Is Kuta Lombok Worth Visiting?
            </h2>
            <p className="leading-relaxed mb-4">
              Kuta Lombok is not without potential. The surrounding landscape is genuinely spectacular, and if the infrastructure and environmental issues get addressed in the coming years, it could become something special. But right now, for a traveler prioritizing clean water, safety, good food, and honest value, there are far better options in Indonesia.
            </p>
            <p className="font-bold text-foreground text-lg" style={{ fontFamily: "var(--font-serif)" }}>
              My honest verdict: keep scrolling past Kuta Lombok on your itinerary, at least for now.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Where to Go Instead in Indonesia
          </h2>

          <p className="mb-6 leading-relaxed">
            If Kuta Lombok didn't sell you, Indonesia has no shortage of alternatives worth your time and money. Some worth considering:
          </p>

          <div className="space-y-3 my-6">
            {[
              {
                name: "Nusa Penida",
                desc: "Dramatic cliffs, incredible snorkeling, more rugged than Bali but with genuine natural beauty."
              },
              {
                name: "Flores and Komodo",
                desc: "For serious divers and adventurers, one of the best in Southeast Asia."
              },
              {
                name: "Sidemen, Bali",
                desc: "For the rice terraces, quiet, and authentic village life without the Seminyak circus."
              },
              {
                name: "Amed, Bali",
                desc: "Laid back, affordable, excellent diving, great local food scene."
              },
              {
                name: "Gili Air",
                desc: "Genuinely relaxed, beautiful water, no motorbikes, no cars."
              },
            ].map((place, i) => (
              <div key={i} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                <span className="text-[#C4541C] font-bold text-xl mt-0.5 shrink-0">✦</span>
                <div>
                  <p className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>{place.name}</p>
                  <p className="text-muted-foreground leading-relaxed">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="my-8 p-6 border border-[#C4541C]/20 bg-[#C4541C]/5 rounded-xl text-center">
            <p className="text-muted-foreground leading-relaxed">
              Not sure which destination fits your travel style?
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-1.5 text-[#C4541C] font-semibold text-sm mt-2 hover:underline"
              data-testid="link-contact-cta">
              Send me a message <ArrowRight size={14} />
            </Link>
            <p className="text-muted-foreground text-sm mt-1">
              and I'll help you figure out exactly where in Indonesia you should be going next.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Useful Links
          </h2>

          <div className="space-y-3 my-6">
            {[
              {
                label: "Lonely Planet. Lombok Travel Guide",
                url: "https://www.lonelyplanet.com/indonesia/lombok",
                desc: "For broader Lombok context beyond Kuta."
              },
              {
                label: "The Surf Atlas. Kuta Lombok Surf Conditions",
                url: "https://www.thesurfatlas.com/surf-spots/lombok/",
                desc: "Useful if surfing is your reason for considering it."
              },
              {
                label: "Numbeo. Cost of Living Comparison Indonesia",
                url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Indonesia",
                desc: "Handy for budgeting reality checks before you go."
              },
            ].map((res, i) => (
              <a key={i} href={res.url} target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl hover:border-[#C4541C]/40 transition-colors group"
                data-testid={`link-resource-${i}`}>
                <ExternalLink size={16} className="text-[#C4541C] mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground group-hover:text-[#C4541C] transition-colors text-sm">{res.label}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">{res.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="my-10 p-6 border border-border bg-card rounded-xl text-center">
            <p className="text-muted-foreground leading-relaxed italic">
              Have you been to Kuta Lombok? Did you have a different experience? Drop it in the comments. I genuinely want to know if I missed something. And if you're planning an Indonesia trip and want honest, unsponsored advice, that's exactly what traveltipsexposed.com is here for.
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/blog" data-testid="link-bottom-back-to-blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C4541C] text-[#C4541C] hover:bg-[#C4541C] hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            <ArrowLeft size={16} /> All Posts
          </Link>
          <Link href="/blog/iboga-gabon-sacred-wood-la-cite-de-la-source" data-testid="link-next-post"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4541C] hover:bg-[#C4541C] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            Iboga in Gabon <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
