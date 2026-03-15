import { Link } from "wouter";
import { Calendar, User, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import imgHero from "@assets/Screenshot_20260315_144016_Instagram~2_1773600228526.jpg";
import imgWaterfall from "@assets/Screenshot_20260315_144118_Instagram_1773600228545.jpg";
import imgRice from "@assets/Screenshot_20260315_144102_Instagram_1773600228563.jpg";

export default function Tetebatu() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] overflow-hidden" data-testid="post-hero">
        <img src={imgHero} alt="Tetebatu Lombok rice terraces honest review" className="w-full h-full object-cover" />
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
          Tetebatu, Lombok: Is This "Hidden Gem" Actually Worth It? (Honest Review)
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
            I am writing this from a terrace in Tetebatu, Lombok. The view in front of me is genuinely stunning. Emerald rice terraces, jungle mist, the kind of green that makes you understand why people keep posting about this place.
          </p>

          <p className="mb-6 leading-relaxed font-semibold text-foreground">
            And I cannot wait to leave.
          </p>

          <p className="mb-10 leading-relaxed">
            Here is the honest review of Tetebatu that the slow travel influencers are not making.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            What Tetebatu Promises and Why People Come
          </h2>

          <p className="mb-6 leading-relaxed">
            Tetebatu sits in the foothills of Mount Rinjani on the island of Lombok, about two hours from Mataram. It has been quietly circulating on travel blogs and Instagram feeds for a few years now as one of Indonesia's genuine hidden gems. A highland village surrounded by rice paddies, waterfalls, and jungle trekking routes, with none of the commercial chaos of Bali or Kuta Lombok.
          </p>

          <p className="mb-6 leading-relaxed">
            The pitch is simple and appealing: lush nature, fresh mountain air, a slower pace, authentic village life. For a certain kind of traveler, burnt out, overstimulated, craving stillness, it reads like exactly what they need.
          </p>

          <p className="mb-8 leading-relaxed">
            I was that traveler. And the reality was something else entirely.
          </p>

          <div className="my-8 p-6 border border-border bg-card rounded-xl text-center">
            <p className="text-muted-foreground text-sm mb-2">Also reconsidering another Lombok stop? Read my take on Kuta:</p>
            <Link href="/is-kuta-lombok-overrated"
              className="inline-flex items-center gap-1.5 text-[#C4541C] font-semibold text-sm hover:underline"
              data-testid="link-kuta-lombok">
              Is Kuta Lombok Overrated? <ArrowRight size={14} />
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            The Problem Nobody Talks About: The Noise
          </h2>

          <p className="mb-6 leading-relaxed">
            Let me be direct, because I wish someone had been direct with me before I booked.
          </p>

          <p className="mb-6 leading-relaxed">
            <strong>Tetebatu has a serious noise problem.</strong> Not occasional noise. Not noise you can sleep through with earplugs. Persistent, multi source, high decibel noise that runs from before dawn until late in the evening and makes genuine rest, the entire reason most people come here, nearly impossible.
          </p>

          <p className="mb-6 leading-relaxed">
            The most significant source is the mosques. Tetebatu has several, positioned close enough together that their sound systems overlap. During prayer times and, more intensively, during longer sermon periods, you are not hearing one call to prayer. You are hearing four or five simultaneous megaphone broadcasts at maximum volume. Different speakers, different content, different rhythms, layering over each other into a wall of sound that vibrates in your chest and offers no gap for silence.
          </p>

          <p className="mb-8 leading-relaxed">
            I want to be clear: I have traveled extensively through Muslim majority countries and regions, and the call to prayer is a part of the cultural landscape I genuinely appreciate in most contexts. What I experienced in Tetebatu was different in degree to a point where it became a different thing entirely. Four hours of overlapping megaphone broadcasts is not a cultural experience. It is sensory overwhelm, regardless of the source.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            The 5AM Chainsaw Situation
          </h2>

          <p className="mb-6 leading-relaxed">
            If the mosques don't wake you, the land clearing will.
          </p>

          <p className="mb-6 leading-relaxed">
            The agricultural expansion happening around Tetebatu means that chainsaws are a regular feature of the early morning soundscape, starting well before sunrise on many days. The "gentle jungle dawn" that the Instagram content promises is, in practice, frequently replaced by the sound of heavy machinery before 5am.
          </p>

          <p className="mb-8 leading-relaxed">
            Add a neighbor's radio blasting distorted pop music through a blown speaker, the general ambient noise of a working village at close quarters, and you have a soundscape that is the precise opposite of the mental reset the destination advertises.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            The Landscape Is Genuinely Beautiful. Which Makes It More Frustrating.
          </h2>

          <p className="mb-6 leading-relaxed">
            Here is what makes Tetebatu genuinely complicated to review: the nature is real. The emerald terraces are as vivid as the photos suggest. The jungle walks are lush and legitimately impressive. The air, when you can stop noticing everything else, does have that clean highland quality that lowland Indonesia lacks.
          </p>

          <p className="mb-6 leading-relaxed">
            The bones of a great destination are absolutely here. The problem is not what Tetebatu looks like. The problem is what it sounds like, and how completely that undermines the experience it is supposedly selling.
          </p>

          <p className="mb-8 leading-relaxed">
            Stunning scenery that you cannot sit quietly and appreciate is, ultimately, a missed opportunity. You could take the same photos and feel like you never actually arrived.
          </p>

          <img src={imgWaterfall} alt="Tetebatu jungle view Mount Rinjani foothills" className="w-full rounded-xl my-10" />

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Who Tetebatu Might Still Work For
          </h2>

          <p className="mb-6 leading-relaxed">
            In the interest of fairness, there are travelers for whom Tetebatu could genuinely work.
          </p>

          <div className="space-y-3 my-6">
            {[
              {
                label: "Trekkers with a specific mission",
                body: "If you are coming primarily to trek on Mount Rinjani or to hit specific waterfalls and jungle routes, and accommodation is just a place to sleep between physical activity, the noise matters less. You are not here to sit quietly on a terrace. You are here to move."
              },
              {
                label: "People who are genuinely unbothered by noise",
                body: "Some travelers sleep through anything, tune out ambient sound effortlessly, and don't need silence to decompress. If that is you, Tetebatu's visual payoff is real and the guesthouses are affordable."
              },
              {
                label: "Day trippers from Kuta Lombok or Mataram",
                body: "Honestly, the best version of Tetebatu might be as a day trip. Come for the scenery, walk the rice terrace paths, eat at a warung, leave before the evening. Get the visual experience without committing to nights that may not deliver the rest you came for."
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                <span className="text-[#C4541C] font-bold text-xl mt-0.5 shrink-0">✦</span>
                <div>
                  <p className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>{item.label}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <img src={imgRice} alt="Is Tetebatu worth visiting Lombok Indonesia" className="w-full rounded-xl my-10" />

          <div className="my-10 p-8 border border-[#B04A2A]/20 bg-[#B04A2A]/5 rounded-xl">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
              The Honest Verdict: Is Tetebatu Worth Visiting?
            </h2>
            <p className="leading-relaxed mb-4">
              If your primary reason for going to Tetebatu is <strong>peace, quiet, and a mental reset</strong>, which is the reason most people cite, I would encourage you to seriously reconsider, or at minimum to set very different expectations than the Instagram content has given you.
            </p>
            <p className="leading-relaxed mb-4">
              The destination is visually beautiful and culturally interesting. It is not, in my experience, a quiet one. The noise levels I encountered were genuinely among the most relentless I have experienced anywhere in Southeast Asia, and I travel specifically looking for off the beaten path places that deliver on stillness.
            </p>
            <p className="leading-relaxed font-semibold text-foreground">
              There are places in Indonesia and across Southeast Asia that offer the same lush highland scenery with a fraction of the sensory chaos. If peace is what you are after, your time and airfare deserve one of those places instead.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Quieter Alternatives Worth Considering
          </h2>

          <p className="mb-6 leading-relaxed text-muted-foreground">
            Looking for the Tetebatu aesthetic, rice terraces, jungle, mountain air, without the noise? These destinations deliver more consistently on that promise.
          </p>

          <div className="space-y-3 my-6">
            {[
              {
                label: "Sidemen, Bali",
                body: "Arguably the most beautiful rice terrace scenery on Bali, with a genuinely tranquil atmosphere and a well developed but not overcrowded guesthouse scene. Significantly calmer than anything in the Ubud corridor."
              },
              {
                label: "Munduk, Bali",
                body: "A highland village in north Bali surrounded by coffee plantations, clove trees, and waterfalls. Cooler, quieter, and deeply undervisited relative to its quality."
              },
              {
                label: "Bukit Lawang, North Sumatra",
                body: "Jungle vibes at a completely different scale, with orangutan trekking and river swimming in a setting that genuinely delivers on the \"remote and alive\" feeling."
              },
              {
                label: "Vang Vieng surrounds, Laos (the non party parts)",
                body: "The karst landscape around Vang Vieng is extraordinary, and if you get even slightly off the main strip, the peace is real."
              },
              {
                label: "Pai, Northern Thailand",
                body: "The classic highland escape for a reason. Still has some backpacker energy in town, but the surrounding countryside and guesthouses outside the center are genuinely restorative."
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                <span className="text-[#C4541C] font-bold text-xl mt-0.5 shrink-0">✦</span>
                <div>
                  <p className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>{item.label}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="my-8 p-6 border border-border bg-card rounded-xl text-center">
            <p className="text-muted-foreground text-sm mb-2">Looking for the Lombok experience that actually delivers? Read this next:</p>
            <Link href="/gili-air-indonesia-travel-guide"
              className="inline-flex items-center gap-1.5 text-[#C4541C] font-semibold text-sm hover:underline"
              data-testid="link-gili-air">
              Why Gili Air Is the Low Key Paradise You've Been Searching For <ArrowRight size={14} />
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Useful Links
          </h2>

          <div className="space-y-3 my-6">
            {[
              {
                label: "Lombok Tourism. Official Travel Information",
                url: "https://www.indonesia.travel/gb/en/destinations/bali-nusa-tenggara/lombok",
                desc: "For broader Lombok trip planning beyond Tetebatu."
              },
              {
                label: "Lonely Planet. Lombok Guide",
                url: "https://www.lonelyplanet.com/indonesia/lombok",
                desc: "Useful for building a fuller Lombok itinerary around what actually works."
              },
              {
                label: "Rome2Rio. Getting to Tetebatu",
                url: "https://www.rome2rio.com",
                desc: "For transport logistics from Mataram, Kuta Lombok, or the ferry ports."
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

          <div className="my-8 p-6 border border-[#C4541C]/20 bg-[#C4541C]/5 rounded-xl text-center">
            <p className="text-muted-foreground leading-relaxed">
              If you are planning a trip to Southeast Asia and want recommendations for destinations that actually deliver on the peace, scenery, and authenticity they promise, without the hidden catches, that is exactly the kind of honest, experience based guidance I share here.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-1.5 text-[#C4541C] font-semibold text-sm mt-3 hover:underline"
              data-testid="link-contact-cta">
              Send me a message <ArrowRight size={14} />
            </Link>
            <p className="text-muted-foreground text-sm mt-1">and I will help you find the right destination for your travel style.</p>
          </div>

          <div className="my-10 p-6 border border-border bg-card rounded-xl text-center">
            <p className="text-muted-foreground leading-relaxed italic">
              Have you been to Tetebatu? Did you have a different experience, or a worse one? Drop it in the comments. I want to hear from people who found it genuinely peaceful, because I am open to the possibility that timing, location within the village, or luck plays a real role here.
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/blog" data-testid="link-bottom-back-to-blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C4541C] text-[#C4541C] hover:bg-[#C4541C] hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            <ArrowLeft size={16} /> All Posts
          </Link>
          <Link href="/is-kuta-lombok-overrated" data-testid="link-next-post"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4541C] hover:bg-[#C4541C] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            Kuta Lombok <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
