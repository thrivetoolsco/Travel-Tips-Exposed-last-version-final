import { Link } from "wouter";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";

const postImages = [
  "https://traveltipsexposed.com/wp-content/grand-media/image/thumb/2026-03-04_19.39.15.webp",
  "https://traveltipsexposed.com/wp-content/grand-media/image/thumb/2026-03-04_19.39.24.webp",
  "https://traveltipsexposed.com/wp-content/grand-media/image/thumb/2026-03-04_19.39.29.webp",
  "https://traveltipsexposed.com/wp-content/grand-media/image/thumb/2026-03-04_20.35.06.webp",
];

export default function Ayahuasca() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] overflow-hidden" data-testid="post-hero">
        <img
          src="https://traveltipsexposed.com/wp-content/uploads/2026/02/Ayahuasca.webp"
          alt="Ayahuasca"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold bg-teal-600 text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}>Wellness</span>
            <span className="px-3 py-1 text-xs font-semibold bg-amber-600 text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}>Peru</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12" data-testid="post-content">
        <Link
          href="/blog"
          data-testid="link-back-to-blog"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-500 text-sm font-semibold mb-8 transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
          data-testid="heading-post-title"
        >
          The Unfiltered Truth About Ayahuasca Retreats in Peru: Shaman Scams & Deep Transformation
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-teal-500" />
            <span data-testid="text-author">Eden</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-amber-500" />
            <span data-testid="text-date">February 2026</span>
          </span>
        </div>

        <div
          className="prose prose-lg max-w-none text-foreground"
          style={{ fontFamily: "var(--font-sans)" }}
          data-testid="post-body"
        >
          <p className="lead text-xl text-muted-foreground mb-8 leading-relaxed">
            Morocco was my current setting: a blur of tagine, mint tea, and the constant, buzzing question of my life's purpose. I was sweating out the details of my existence until a whispered legend cut through the noise: a retreat in Spain. Not just any retreat, but one featuring a legit Peruvian Shipibo Shaman bringing Ayahuasca to European soil.
          </p>

          <p className="mb-6 leading-relaxed">
            <strong>The psychonaut in me</strong>, the one constantly chasing the next paradigm shift, didn't hesitate. You could call it a calling; I called it booking a ferry ticket and praying I hadn't lost my damn mind.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            The Spark in Spain 🔥
          </h2>

          <p className="mb-4 leading-relaxed">
            That first taste? <strong>Absolutely incredible.</strong>
          </p>

          <p className="mb-6 leading-relaxed">
            Seriously, that initial two day retreat felt like someone took a spiritual power washer to my soul. I'm talking transformational heart openings that felt like finally unlocking a level I didn't even know existed. I learned to look at my own story through a less filtered, more uplifting lens. The transformation was real, and the consensus in my head was simple: This plant has more to show me.
          </p>

          <p className="mb-4 leading-relaxed">
            I bounced the idea off Elmer, the Shipibo shaman, and without missing a beat, he hit me with the invitation: "Come to my village in the Amazon."
          </p>

          <p className="mb-10 leading-relaxed italic text-muted-foreground">
            A few months later, I was there. In la tierra de Mama Ayahuasca! 🤯
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            The Jungle Grind: A 14 Hour Reality Check 🛶
          </h2>

          <p className="mb-4 leading-relaxed">
            Let me be brutally honest: just making it to Elmer's village was an insane commitment. This wasn't a trendy, glamping retreat center.
          </p>

          <p className="mb-4 leading-relaxed">
            We took off from Pucallpa and boarded a boat for a 14 hour marathon down the Amazon River. Forget luxury cruise! This was survival mode. At certain points, the water was so low that we, the passengers, had to hop out and literally push the damn boat. The seats? Let's just say my chiropractor still sends me Christmas cards.
          </p>

          <p className="mb-4 italic text-muted-foreground leading-relaxed">
            I don't miss that boat ride, but man, was I stoked.
          </p>

          <p className="mb-4 leading-relaxed">
            Here I was, the only Westerner, in a tiny village deep in the jungle. No cars. The pace was slow, hazy, and kinda beautiful, like living inside a dream filter. My plan was to shack up in Elmer's cabin for two months, sitting with the medicine every other day.
          </p>

          <p className="mb-10 italic text-muted-foreground leading-relaxed">
            My intention was lofty: Ascend to a higher realm of consciousness and, crucially, learn to hold space for others. I wanted to bring this medicine back home. Morocco was going to get its first proper taste.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            The Plot Twist: Shaman Not Saint 💸
          </h2>

          <p className="mb-4 leading-relaxed">
            And bring it back I did! For a minute there, Elmer and I were the first, which is a wild footnote in my life story.
          </p>

          <p className="mb-4 leading-relaxed">
            But here's the unsexy, necessary truth I have to share, because we need to talk about it: The jungle wasn't all light and transcendence.
          </p>

          <p className="mb-4 leading-relaxed">
            Years later, the dark side of Elmer started to creep into the picture. I was planning a massive retreat with him in Canada. I handled everything: booked his flight, slogged through the visa docs, and wired him the cash. Then? He decided not to come. He took the money. He went radio silent. Ghosted.
          </p>

          <p className="mb-4 leading-relaxed">
            It soured the memory, because even during my incredible two months in his village, I felt the constant low-level humming of money "shenanigans" coming from Elmer.
          </p>

          <div className="my-8 p-6 border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-r-xl">
            <p className="text-lg font-semibold text-foreground leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
              Which brings me to my major, non-negotiable takeaway: Most shamans are not saints. They are humans. And sometimes, they are flawed, complicated, and yes, sometimes opportunistic humans.
            </p>
          </div>

          <p className="mb-4 leading-relaxed">
            And yet, here's the mind blower, I had some of the most beautiful, transformational experiences of my life with a shaman who was decidedly not "saintly."
          </p>

          <p className="mb-10 leading-relaxed">
            Ultimately, the work is between you, the plant, and the Divine. The shaman is just the gatekeeper. Over time, I've found my deepest work happens when I sit with plant medicines by myself, tuning out the noise.
          </p>

          <div className="my-10" data-testid="post-gallery">
            <h3 className="text-xl font-bold mb-6 text-center" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
              Ayahuasca Post Images
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {postImages.map((img, idx) => (
                <div key={img} className="aspect-square rounded-xl overflow-hidden bg-muted">
                  <img
                    src={img}
                    alt={`Ayahuasca Peru ${idx + 1}`}
                    className="w-full h-full object-cover"
                    data-testid={`img-post-gallery-${idx}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            What's Next on My Journey?
          </h2>

          <p className="mb-6 leading-relaxed">
            I've got so much more to unpack about my deep dives! Next time, I'll tell you about sitting with the Sacred Wood (Iboga) in Gabon, AKA the Tibet of Africa. You won't want to miss that one.
          </p>

          <p className="mb-4 leading-relaxed font-semibold">
            In the meantime, if you're feeling the call of the Amazon, here are 3 Real Talk Things you need to know before you book that flight to Peru:
          </p>

          <div className="space-y-6 my-8">
            <div className="flex gap-4 p-5 bg-card border border-card-border rounded-xl">
              <span className="text-2xl">1.</span>
              <div>
                <p className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>Go Deep or Go Home (Literally)</p>
                <p className="text-muted-foreground leading-relaxed">
                  If you want the authentic jungle experience, skip the tourist traps near Cusco. You're heading to the real hubs: Iquitos or Pucallpa. Do your homework on centers, the vibe and safety matter more than anything.
                </p>
                <Link href="/deal-seekers#deals-accommodations" className="text-teal-600 hover:text-teal-500 text-sm font-semibold mt-2 inline-flex items-center gap-1">
                  Get a feel for different retreat centers here <ArrowRight size={12} />
                </Link>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-card border border-card-border rounded-xl">
              <span className="text-2xl">2.</span>
              <div>
                <p className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>Unpack Your Baggage, But Keep Your Faith</p>
                <p className="text-muted-foreground leading-relaxed">
                  You have to 100% trust the medicine and the people holding space for you. If you go in with resistance, fear, or a constant desire to control the process, the medicine won't be able to do its magic. Drop in and surrender.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-card border border-card-border rounded-xl">
              <span className="text-2xl">3.</span>
              <div>
                <p className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>The Real Work Starts After the Trip</p>
                <p className="text-muted-foreground leading-relaxed">
                  The easy part is getting all those mind-blowing revelations in the ceremony. The hardest part is the integration: bringing those cosmic truths back to your messy, daily life. Commit to the work, and the medicine will hold you strong.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link
            href="/blog"
            data-testid="link-bottom-back-to-blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <ArrowLeft size={16} /> All Posts
          </Link>
          <Link
            href="/blog/yoga-teacher-training-rishikesh"
            data-testid="link-next-post"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Next Post <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
