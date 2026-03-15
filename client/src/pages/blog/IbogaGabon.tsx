import { Link } from "wouter";
import { Calendar, User, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import imgHero from "@assets/DSCN8758_(1)_1773173919513.JPG";
import imgMid from "@assets/DSCN8536_1773174186209.JPG";
import imgBottom from "@assets/DSCN8699_1773173919576.JPG";

export default function IbogaGabon() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] overflow-hidden" data-testid="post-hero">
        <img src={imgHero} alt="Iboga root bark sacred wood Gabon Bwiti ceremony" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold bg-[#1D4A38] text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}>Spirituality</span>
            <span className="px-3 py-1 text-xs font-semibold bg-[#C4541C] text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}>Plant Medicine</span>
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
          Iboga in Gabon: What One Month at La Cité de la Source Actually Did to Me
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
            I have sat with plant medicines before. Ayahuasca in the jungle, psilocybin in ceremony, breathwork that cracked me open for days. I thought I had a reasonable sense of what transformation felt like.
          </p>

          <p className="mb-6 leading-relaxed font-semibold text-foreground text-xl">I was wrong.</p>

          <p className="mb-10 leading-relaxed">
            Nothing prepared me for what was waiting in Gabon.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            What Is the Sacred Wood? A Quick Primer on Iboga and the Bwiti Tradition
          </h2>

          <p className="mb-6 leading-relaxed">
            Before I get into what happened to me, let me give you some context, because if you haven't heard of Iboga, you're not alone, and that's exactly why I'm writing this.
          </p>

          <p className="mb-6 leading-relaxed">
            <strong>Iboga</strong> is the root bark of the <em>Tabernanthe iboga</em> shrub, native to the equatorial rainforests of Central Africa, primarily Gabon, Cameroon, and the Republic of Congo. To the <strong>Bwiti people</strong>, and particularly to the Babongo, the original forest people of the region, it is not a drug, not even simply a medicine. It is a living teacher. A sacred intelligence that has guided initiations for an estimated 10,000 years.
          </p>

          <p className="mb-6 leading-relaxed">
            Gabon takes this so seriously that Iboga is protected in the country's national constitution as a strategic national heritage. That's not a small thing.
          </p>

          <p className="mb-8 leading-relaxed">
            In the West, you may have heard about <strong>ibogaine</strong>, a single alkaloid extracted from the plant, and its remarkable results in treating opioid addiction. Researchers and clinicians are paying close attention. But those who have traveled to the source will tell you: extracting one molecule and calling it medicine is like pulling a single thread from a tapestry and calling it art. The whole plant, in full ceremonial context, is something else entirely.
          </p>

          <img src={imgMid} alt="La Cité de la Source Gabon shamanic retreat" className="w-full rounded-xl my-10 object-cover h-72" />

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Why Three of Us Flew to Gabon
          </h2>

          <p className="mb-6 leading-relaxed">
            Two close friends and I had been circling the idea of Iboga for years. We had all done our homework. We knew it wasn't like anything else. We knew it demanded respect, preparation, and the right container.
          </p>

          <p className="mb-6 leading-relaxed">
            That container turned out to be <strong>La Cité de la Source</strong>, a ceremonial village in Gabon where the Bwiti tradition is practiced in its most authentic, community rooted form. This is not a wellness retreat with bamboo bungalows and cold press juice. This is a living village, organized around the sacred, where ceremony is not an event but a way of life.
          </p>

          <p className="mb-8 leading-relaxed">
            When we arrived, the shamans, <strong>Étincelle</strong> and <strong>Yaya</strong>, made one thing immediately clear: the ceremony itself was only one part of a much larger process. And the preparation would be unlike anything we expected.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            The Weeks Before: Dream Work, the Subconscious, and the Art of Storytelling
          </h2>

          <p className="mb-6 leading-relaxed">
            For the weeks leading up to taking the Sacred Wood, we worked intensively with our subconscious minds. Every morning began with dream sharing, but not casual, half remembered dream sharing over coffee. We were taught the <strong>art of storytelling</strong>.
          </p>

          <p className="mb-6 leading-relaxed">
            Our dreams had to be offered fully. Vividly. In a way that was worth listening to, alive, non linear, enticing rather than tedious. Étincelle and Yaya would then help us decode what we had brought: the recurring symbols, the strange characters, the doors we kept walking past without opening.
          </p>

          <p className="mb-6 leading-relaxed">
            This was not Jungian analysis. It was something older and more felt than that. It was learning to take your inner world seriously enough to render it beautifully.
          </p>

          <div className="my-8 p-6 border border-[#1D4A38]/30 bg-[#1D4A38]/5 rounded-xl">
            <p className="text-foreground leading-relaxed italic text-lg" style={{ fontFamily: "var(--font-serif)" }}>
              I want to say clearly: this preparation period was not filler. It was foundational. By the time we approached the ceremony, our subconscious material was not hidden from us. It was sitting on the table, organized, waiting. The Sacred Wood simply walked us into the room we had already mapped.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            The Village Holds You
          </h2>

          <p className="mb-6 leading-relaxed">
            Here is something I never fully understood from reading about Iboga online: in a proper Bwiti ceremony, it is not just two shamans holding space for you.
          </p>

          <p className="mb-6 leading-relaxed text-xl font-semibold text-[#C4541C]" style={{ fontFamily: "var(--font-serif)" }}>
            The entire village holds space for you.
          </p>

          <p className="mb-6 leading-relaxed">
            Elders, musicians, community members, all of them aware that you are in ceremony, all of them actively supporting the container. Through the deepest hours of the night, I could hear drums and voices outside. Steady. Purposeful. Unbroken. In moments when the journey became overwhelming, and there were many such moments, that sound was a rope I could grab. An entire culture built around this practice had my back.
          </p>

          <p className="mb-8 leading-relaxed">
            That is irreplaceable. You cannot replicate it in a retreat center in the Netherlands or a hotel room in Mexico. The village is part of the medicine.
          </p>

          <img src={imgBottom} alt="Bwiti initiation ceremony Central Africa" className="w-full rounded-xl my-10 object-cover h-72" />

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            "It Was a Good Day to Die"
          </h2>

          <p className="mb-6 leading-relaxed">
            I won't romanticize the ceremony itself. Iboga is not gentle. The experience stretches across an entire night and well into the following day. Time dissolves. The body purges. The mind, if you can still call it that at a certain point, enters a state of radical exposure. Everything you have avoided, suppressed, or carefully narrativized gets stripped back to its bare structure.
          </p>

          <p className="mb-6 leading-relaxed">
            At the deepest point in my journey, my shaman came close and whispered in my ear:
          </p>

          <div className="my-8 p-8 border-l-4 border-[#C4541C] bg-card rounded-r-xl">
            <p className="text-2xl font-bold text-[#C4541C]" style={{ fontFamily: "var(--font-serif)" }}>
              "It was a good day to die."
            </p>
          </div>

          <p className="mb-6 leading-relaxed">
            In any other context, those words might have terrified me. In that moment, they were a gift. A precise invitation. I understood, not as a thought but as something the body knows, that what needed to die was not me, but the version of me that had spent decades mistaking its stories for truth.
          </p>

          <p className="mb-8 leading-relaxed">
            I let go. And in letting go, I made contact with an aspect of myself I genuinely did not know existed. A stillness that had always been there, underneath everything. Untouched by all the noise. The shamans were right. My soul had been waiting a long time for that meeting.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            How This Compares to Other Plant Medicines
          </h2>

          <p className="mb-6 leading-relaxed">
            I say this with complete respect for every medicine I have sat with: Iboga operates on a different level.
          </p>

          <p className="mb-8 leading-relaxed">
            Ayahuasca showed me things. Iboga showed me the mechanism by which things are shown. It is less a journey through visions and emotions than a direct encounter with the architecture of your own psyche, how you built it, why you built it, and what it has been protecting you from all along. The aftermath is also different. Iboga's primary alkaloids can remain metabolically active for weeks after ceremony. Many people describe a sustained clarity and emotional openness in the months that follow. That has been my experience. Something shifted at a depth I am still discovering.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Is La Cité de la Source Right for You?
          </h2>

          <p className="mb-6 leading-relaxed">
            I cannot recommend this place enough, but I will not recommend it carelessly. Here is what you need to know before you go:
          </p>

          <div className="space-y-4 my-8">
            {[
              {
                title: "Medical screening is non negotiable.",
                body: "Iboga has serious cardiac contraindications. Certain medications and pre existing heart conditions make it genuinely dangerous. Any legitimate ceremony, including at La Cité de la Source, requires a thorough health assessment before you ever touch the plant. Do not skip this. Do not lie about your health history."
              },
              {
                title: "The preparation period is part of the ceremony.",
                body: "The dream work, the storytelling practice, the subconscious excavation. All of it is integral to what happens when you finally take the Wood. Budget time for this. Embrace it."
              },
              {
                title: "One month is the right amount of time.",
                body: "I could not imagine having come for a long weekend. The weeks of integration we spent in the village after ceremony, still held by the community, still in conversation with the shamans, were as transformative as the night itself. Give yourself the full container."
              },
              {
                title: "Come with people you trust.",
                body: "Doing this with two close friends was, I believe, one of the best decisions we made. We could hold each other during the hard moments, share what we were processing, and witness each other's transformation. That witness matters."
              },
              {
                title: "Be ready for a very intense experience.",
                body: "I say this not to frighten you, but to respect you. This is not a peak experience. It is a restructuring. Approach it accordingly."
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                <span className="text-[#C4541C] font-bold text-xl mt-0.5 shrink-0">✦</span>
                <div>
                  <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>{item.title}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Final Thoughts: Why I'll Never Be the Same
          </h2>

          <p className="mb-6 leading-relaxed">
            I left Gabon a month later lighter than I have ever felt in my adult life. Not because the experience was comfortable. It wasn't. Not because all my problems dissolved. They didn't. But because something that had been tangled for a very long time finally straightened out at the root.
          </p>

          <p className="mb-6 leading-relaxed">
            The shamans Étincelle and Yaya are extraordinary human beings. Patient, precise, deeply attuned. The village of La Cité de la Source is a rare and living treasure. If you feel called to the Sacred Wood, I hope you find your way there.
          </p>

          <div className="my-8 p-8 border border-[#C4541C]/20 bg-[#C4541C]/5 rounded-xl text-center">
            <p className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
              Just be ready for a good day to die.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Useful Resources and Further Reading
          </h2>

          <div className="space-y-3 my-6">
            {[
              {
                label: "MAPS (Multidisciplinary Association for Psychedelic Studies). Ibogaine Research",
                url: "https://maps.org/research/ibogaine",
                desc: "The scientific and clinical context around ibogaine."
              },
              {
                label: "Bwiti: An Ethnography of the Religious Imagination in Africa by James Fernandez",
                url: "https://press.princeton.edu/books/paperback/9780691028064/bwiti",
                desc: "The definitive academic text on the Bwiti tradition."
              },
              {
                label: "Global Ibogaine Therapy Alliance",
                url: "https://www.ibogainealliance.org",
                desc: "Provider standards, harm reduction, and safety guidelines."
              },
              {
                label: "Erowid Iboga Vault",
                url: "https://www.erowid.org/plants/iboga/",
                desc: "Extensive experience reports and pharmacological information."
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
              Have you journeyed with the Sacred Wood? I'd love to hear your experience. And if you're considering going to Gabon, feel free to reach out. I'm happy to share everything I know.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-[#C4541C] font-semibold text-sm mt-3 hover:underline">
              Get in Touch <ArrowRight size={14} />
            </Link>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/blog" data-testid="link-bottom-back-to-blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C4541C] text-[#C4541C] hover:bg-[#C4541C] hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            <ArrowLeft size={16} /> All Posts
          </Link>
          <Link href="/blog/housesitting-guide" data-testid="link-next-post"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4541C] hover:bg-[#C4541C] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            Housesitting Guide <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
