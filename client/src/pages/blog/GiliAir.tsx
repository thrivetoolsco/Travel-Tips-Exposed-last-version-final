import { Link } from "wouter";
import { Calendar, User, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import imgHero from "@assets/Screenshot_20260315_142747_Instagram~2_1773599502923.jpg";
import imgCidomo from "@assets/Screenshot_20260315_142820_Instagram~2_1773599502970.jpg";
import imgBreakfast from "@assets/Screenshot_20260315_142659_Instagram~2_1773599502946.jpg";
import imgDumplings from "@assets/Screenshot_20260315_142814_Instagram~2_1773599502959.jpg";

export default function GiliAir() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] overflow-hidden" data-testid="post-hero">
        <img src={imgHero} alt="Gili Air Indonesia turquoise water snorkeling turtles" className="w-full h-full object-cover" />
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
          Why Gili Air Is the Low Key Paradise You've Been Searching For (2 Week Honest Guide)
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-[#C4541C]" />
            <span data-testid="text-author">Eden</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-amber-500" />
            <span data-testid="text-date">January 4, 2026</span>
          </span>
        </div>

        <div className="prose prose-lg max-w-none text-foreground" style={{ fontFamily: "var(--font-sans)" }} data-testid="post-body">

          <p className="lead text-xl text-muted-foreground mb-6 leading-relaxed">
            I have backpacked through 40 countries. I have seen "paradise" get discovered, hyped, overrun, and hollowed out more times than I can count. Overtourism is not just a buzzword, it is a genuine grief for anyone who loves travel done right.
          </p>

          <p className="mb-6 leading-relaxed">
            So when I tell you that <strong>Gili Air</strong> genuinely surprised me, I need you to understand the bar I am working with.
          </p>

          <p className="mb-6 leading-relaxed">
            I spent two weeks on this tiny Indonesian island this past December, and I left with one clear conviction: Gili Air is the best answer I have found to the question every traveler eventually asks. <em>Where can I go that still has beauty, culture, and good energy, without being completely overrun?</em>
          </p>

          <p className="mb-10 leading-relaxed">
            Here is my full, unfiltered guide to why Gili Air belongs at the top of your Indonesia itinerary.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            First: Which Gili Island Should You Actually Visit?
          </h2>

          <p className="mb-6 leading-relaxed">
            If you've done any research on the Gili Islands, you've probably encountered the standard breakdown: <strong>Gili Trawangan</strong> is the party island, <strong>Gili Meno</strong> is the honeymoon island, and <strong>Gili Air</strong> is somewhere in between.
          </p>

          <p className="mb-8 leading-relaxed">
            That framing undersells Gili Air badly. It's not just a compromise. It is genuinely the most complete of the three islands, enough life to keep you engaged, enough quiet to actually rest, a food scene that punches well above its size, and a local community that makes you feel welcome rather than tolerated. After two weeks, I wasn't ready to leave. That doesn't happen often.
          </p>

          <div className="my-8 p-6 border border-border bg-card rounded-xl text-center">
            <p className="text-muted-foreground text-sm mb-2">Visiting Lombok first? Read my honest take on why you should skip one stop:</p>
            <Link href="/is-kuta-lombok-overrated"
              className="inline-flex items-center gap-1.5 text-[#C4541C] font-semibold text-sm hover:underline"
              data-testid="link-kuta-lombok">
              Is Kuta Lombok Overrated? <ArrowRight size={14} />
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            1. The No Car Rule Changes Everything
          </h2>

          <p className="mb-6 leading-relaxed">
            The first thing you notice when you step off the boat at Gili Air is the silence. No motorbikes. No cars. No exhaust fumes cutting through the salt air. The Indonesian government prohibits motorized vehicles on all three Gili islands, and the effect on the atmosphere is immediate and profound.
          </p>

          <p className="mb-6 leading-relaxed">
            People get around by <strong>bicycle</strong>, <strong>electric scooter</strong>, or the island's iconic <strong>cidomo</strong>, a small horse drawn cart that clip clops along the sandy paths at its own unhurried pace. After weeks of chaotic Indonesian traffic, the sensory reset was extraordinary. I could hear palm trees. I could hear the ocean. I could hear myself think.
          </p>

          <p className="mb-8 leading-relaxed">
            Two weeks without exhaust fumes felt like a genuine physical detox. My lungs noticed. My nervous system noticed. If you have come from Bali or mainland Lombok, the contrast is stark and immediate.
          </p>

          <img src={imgCidomo} alt="Gili Air cidomo horse cart no cars island" className="w-full rounded-xl my-10" />

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            2. The Water Is Actually That Color
          </h2>

          <p className="mb-6 leading-relaxed">
            You know the turquoise you see in Gili Air photos and assume is heavily filtered? It isn't. The water around the island is genuinely, almost unreasonably, that shade. A clear, warm, luminous blue green that makes you want to be in it constantly.
          </p>

          <p className="mb-6 leading-relaxed">
            <strong>Snorkeling</strong> is world class right off the shore, no boat required. I saw sea turtles daily, not once, not as a lucky highlight, but as a routine part of every morning swim. The coral health and visibility are exceptional, and multiple friends who dived during the same trip described it as some of the best diving in the entire region.
          </p>

          <p className="mb-8 leading-relaxed">
            <strong>Surfers</strong>, take note: there is a reef break on the south side of the island that is one of the most under the radar waves I have encountered anywhere. On the days I paddled out, there were two or three people in the lineup maximum. Clean, uncrowded, and genuinely fun. A combination that is increasingly hard to find in Southeast Asia.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            3. The Food Scene Hits Every Budget
          </h2>

          <p className="mb-6 leading-relaxed">
            Indonesian food is, in my opinion, one of the great underrated cuisines of the world. Gili Air does it justice, and then some.
          </p>

          <p className="mb-6 leading-relaxed">
            The island operates across a surprisingly wide range. In the afternoon, you can sit at a beachfront bar sipping a well made cocktail while your feet are in the sand. Walk five minutes inland, and you are sitting on a plastic stool in front of a warung eating <strong>Nasi Campur</strong>, rice with a rotating selection of curries, vegetables, and protein, for around two dollars. And it will be one of the best things you eat on your entire trip.
          </p>

          <p className="mb-6 leading-relaxed">
            That range, genuine local food culture sitting comfortably alongside decent beach club infrastructure, is not easy to find. Most destinations have one or the other. Gili Air has both.
          </p>

          <img src={imgBreakfast} alt="Gili Air breakfast ocean view budget accommodation Indonesia" className="w-full rounded-xl my-10" />

          <img src={imgDumplings} alt="Gili Air beach sunset live music bar Indonesia" className="w-full rounded-xl my-10" />

          <div className="my-6 p-5 border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/30 rounded-xl">
            <p className="text-foreground leading-relaxed">
              <strong>One honest note:</strong> the boutique clothing and lifestyle shops on the island price themselves at roughly Australian retail levels. If you are planning to pick up linen sets and resort wear on arrival, budget accordingly. Or better yet, pack what you need before you come.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            4. Nightlife That Doesn't Punish You the Next Day
          </h2>

          <p className="mb-6 leading-relaxed">
            Gili Air has solved a problem that most beach destinations haven't: how to have a lively evening scene without destroying the daytime peace.
          </p>

          <p className="mb-6 leading-relaxed">
            The answer, it turns out, is geography. The dance parties and livelier bars are clustered in specific areas of the island, well away from the main accommodation zones. The result is genuinely unusual: you can dance until 2am, walk fifteen minutes home through quiet sandy paths, and wake up to complete silence. No bass rattling your windows. No 4am stragglers. Just birdsong and the sound of the ocean.
          </p>

          <p className="mb-8 leading-relaxed">
            The live music culture here is real and consistent. Almost every beach bar has a live set in the evenings, and the quality is considerably above what I encountered elsewhere in the region. Nights on Gili Air felt festive without feeling feral. That balance is rare.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            5. The Community Atmosphere Is Genuinely Respectful
          </h2>

          <p className="mb-6 leading-relaxed">
            This one matters more than it might sound.
          </p>

          <p className="mb-6 leading-relaxed">
            After extended time in parts of Indonesia where tourist facing commerce involves persistent, sometimes aggressive sales tactics, Gili Air's local vendor culture felt like exhaling. People here are laid back and genuinely friendly without an agenda attached. You can browse, wander, and exist without running a gauntlet.
          </p>

          <p className="mb-6 leading-relaxed">
            The island has a <strong>Sasak Muslim community</strong> at its heart, and the cultural balance is well calibrated. The call to prayer is part of the daily rhythm, as it should be. But it is not the multi hour, multi speaker experience that makes certain other parts of Indonesia difficult for light sleepers. The religious atmosphere is present, grounded, and peaceful. It gives the island a sense of genuine cultural identity beyond the tourist infrastructure. And that is something I find deeply appealing about a destination.
          </p>

          <p className="mb-8 leading-relaxed">
            Gili Air felt safe at all hours. I walked home alone at night without a second thought. That is not something I take for granted, and it is worth naming clearly.
          </p>

          <div className="my-10 p-8 border border-[#1D4A38]/20 bg-[#1D4A38]/5 rounded-xl">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
              The Honest Verdict on Gili Air
            </h2>
            <p className="leading-relaxed mb-4">
              Gili Air is for the traveler who wants the beach, the culture, and the social scene, but wants to experience all of it with some grace and a lot of genuine peace. It is not trying to be Bali. It is not trying to be Maldives. It is its own specific, well balanced thing, and right now, before the word fully gets out, it is still doing it extremely well.
            </p>
            <p className="font-bold text-foreground text-lg" style={{ fontFamily: "var(--font-serif)" }}>
              After 40 countries, it is one of the few places I left already planning to return to.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Quick Reference: Gili Air Essentials
          </h2>

          <div className="space-y-3 my-6">
            {[
              {
                label: "Best time to visit",
                body: "May to September (dry season). December (as I went) is shoulder season, quieter crowds, occasional rain, still very much worth it."
              },
              {
                label: "Getting there",
                body: "Fast boat from Bali (Padang Bai or Amed) or from Lombok's Bangsal Harbour. Journey time roughly 1.5 to 2.5 hours from Bali depending on departure point."
              },
              {
                label: "Getting around",
                body: "Bicycle rental is cheap and easy. Cidomo for a more leisurely pace. Electric scooters available. No cars, no motorbikes."
              },
              {
                label: "Budget guidance",
                body: "Very comfortable on $50 to 80 USD per day including accommodation, food, and activities. Possible to do it for considerably less if you lean local."
              },
              {
                label: "Don't miss",
                body: "Morning snorkel before the day trippers arrive. The south reef break at low tide. Nasi Campur at any local warung you find more than 100 metres from the beach."
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

          <h2 className="text-2xl font-bold mt-10 mb-6" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Useful Links
          </h2>

          <div className="space-y-3 my-6">
            {[
              {
                label: "Gili Islands Official Tourism Information",
                url: "https://www.indonesia.travel/gb/en/destinations/bali-nusa-tenggara/gili-islands",
                desc: "Official Indonesia tourism overview of all three Gili islands."
              },
              {
                label: "Lonely Planet. Gili Air Guide",
                url: "https://www.lonelyplanet.com/indonesia/gili-islands/gili-air",
                desc: "Solid foundational research before you go."
              },
              {
                label: "Numbeo. Cost of Living in Indonesia",
                url: "https://www.numbeo.com/cost-of-living/country_result.jsp?country=Indonesia",
                desc: "For realistic budget planning."
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
              Heading to Gili Air (or anywhere in Indonesia) and not sure what to bring? I put together a <strong>complete 2 week Indonesia packing checklist</strong>, including exactly what to pack for island life, what you can easily buy there, and what you absolutely should not leave home without.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-1.5 text-[#C4541C] font-semibold text-sm mt-3 hover:underline"
              data-testid="link-packing-cta">
              Send me a message <ArrowRight size={14} />
            </Link>
            <p className="text-muted-foreground text-sm mt-1">and I'll send it straight to you.</p>
          </div>

          <div className="my-10 p-6 border border-border bg-card rounded-xl text-center">
            <p className="text-muted-foreground leading-relaxed italic">
              Already been to Gili Air? I'd love to know what you thought in the comments below. And if you're still deciding between the three Gili islands, drop your questions. Happy to help you figure out which one fits your travel style.
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/blog" data-testid="link-bottom-back-to-blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C4541C] text-[#C4541C] hover:bg-[#C4541C] hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            <ArrowLeft size={16} /> All Posts
          </Link>
          <Link href="/tetebatu-lombok-honest-review" data-testid="link-next-post"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4541C] hover:bg-[#C4541C] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            Tetebatu Review <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
