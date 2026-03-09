import { Link } from "wouter";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import imgSadhu from "@assets/1000038424_1773064007556.jpg";
import imgCarNight from "@assets/1000038427_1773064007594.jpg";
import imgCookingRoad from "@assets/1000038430_1773064007606.jpg";
import imgAutoRickshaw from "@assets/1000038425_1773064007617.jpg";
import imgTukTukSelfie from "@assets/1000038439_1773064007628.jpg";
import imgCow from "@assets/1000038422_1773064007639.jpg";
import imgGroupNight from "@assets/1000038429_1773064007652.jpg";
import imgStreetNight from "@assets/1000038428_1773064007664.jpg";

export default function RishikeshDharamshala() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] overflow-hidden" data-testid="post-hero">
        <img
          src="https://traveltipsexposed.com/wp-content/uploads/2026/03/Rishikesh-Header.webp"
          alt="Rishikesh Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold bg-[#1D4A38]/80 text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}>Getting Around</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12" data-testid="post-content">
        <Link
          href="/blog"
          data-testid="link-back-to-blog"
          className="inline-flex items-center gap-2 text-[#C4541C] hover:text-[#C4541C] text-sm font-semibold mb-8 transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
          data-testid="heading-post-title"
        >
          Rishikesh to Dharamshala: Your Essential Guide to India's Spiritual Hub
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-[#C4541C]" />
            <span data-testid="text-author">Eden</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-amber-500" />
            <span data-testid="text-date">March 4, 2026</span>
          </span>
        </div>

        <div className="prose prose-lg max-w-none text-foreground" style={{ fontFamily: "var(--font-sans)" }} data-testid="post-body">
          <p className="lead text-xl text-muted-foreground mb-8 leading-relaxed">
            Getting to Dharamshala from Rishikesh was quite the adventure! You see, buses on time or even showing up are not a given in India. Even if you purchased your bus ticket in advance. Also, there's no bus station where you wait for the bus. You basically just sweat on the side of a noisy, dusty road, with absolutely no one (and I mean no one) communicating when, or if, your ride will show up.
          </p>

          <img src={imgSadhu} alt="Sadhu walking along the road in India" className="w-full rounded-xl my-8" data-testid="img-sadhu" />

          <p className="mb-6 leading-relaxed">
            So I guess it was just another day in India when my bus was a no show. And yes, I was in the middle of the road, not knowing anyone or what was going on. But here's the magic of India: you're never alone. I quickly made friends with two equally bewildered travelers, and we did the sensible thing: pooled our cash and secured a cramped, slightly unsettling taxi for the all night drive up the mountain.
          </p>

          <div className="grid grid-cols-2 gap-3 my-8" data-testid="img-grid-street">
            <img src={imgAutoRickshaw} alt="Blue auto-rickshaws parked under an overpass" className="w-full rounded-xl" />
            <img src={imgCow} alt="A cow wandering the streets of India" className="w-full rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            The Midnight Express to the Himalayas:
          </h2>

          <p className="mb-4 leading-relaxed">
            This was where the journey truly earned its stripes. It was a long, dark, and classically sketchy drive that only makes sense when you're traveling like this. Our driver was a man of unusual habits, shall we say. To ensure the road trip flowed more peacefully (for us at least), I dosed myself and my new homies with a couple of strong weed gummies. It was a shared, silent decision that we just had to surrender to the driver's dramatic swerving and the Himalayan hairpin turns. You have to roll with it. What can you say?!
          </p>

          <img src={imgCarNight} alt="Loading luggage onto a taxi at night for the mountain drive" className="w-full rounded-xl my-8" data-testid="img-car-night" />

          <img src={imgGroupNight} alt="Group of travelers at night by a taxi" className="w-full rounded-xl my-8" data-testid="img-group-night" />

          <p className="mb-10 leading-relaxed">
            Anyways, fucking made it finally at around midday the next day. Utterly smashed! Could use some sleep but haven't booked anywhere. So I walk in town and found this cheap hostel that seemed to be well located. I like getting shared rooms sometimes as it helps me connect with more people. It's so awesome when you vibe well with your roommates. And this time, the travel gods smiled on me: my roommates and I all vibed instantly and were staying for a month. We became good homies instantly and decided to go for a walk and get some food.
          </p>

          <div className="grid grid-cols-2 gap-3 my-8" data-testid="img-grid-eating">
            <img src={imgStreetNight} alt="Friends eating together on the street at night" className="w-full rounded-xl" />
            <img src={imgCookingRoad} alt="Cooking a meal on the road with a camp stove" className="w-full rounded-xl" />
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            The High Vibe Hub:
          </h2>

          <p className="mb-4 leading-relaxed">
            Walking in Dharamshala feels so safe (even solo and late at night). The air is thick with the scent of pine and Momos, and the streets are crawling with musicians. A lot of the restaurants host some live music gigs. Jamming is a very big part of the culture there. In fact, every day there was an ecstatic dance, a Cacao ceremony, a breathwork session or intentional workshop organized somewhere. There's a WhatsApp group where events are shared daily.
          </p>

          <p className="mb-4 leading-relaxed">
            As if this wasn't exciting enough, the food was so cheap. I avoided street food not to get sick but still paid less than $5/meal in delicious, clean, restaurants. Everyone was so warm all the time and people don't hesitate to invite you to try their food when they're sitting beside you in the restaurant. That, my friends, is the real One Love Vibe: shared food, shared space.
          </p>

          <figure className="my-8">
            <video
              src="/dharamshala-journey.mp4"
              controls
              playsInline
              className="w-full rounded-xl"
              data-testid="video-dharamshala"
            />
          </figure>

          <img src={imgTukTukSelfie} alt="Eden and a friend smiling inside a tuk-tuk" className="w-full rounded-xl my-8" data-testid="img-tuktuk-selfie" />

          <p className="mb-4 leading-relaxed">
            I guess these good vibes facilitated some serious heart openings within me as I had the most powerful breakthrough during a breathwork session there. I was able to let go of some pain that was weighing down my chest and it was a relief!
          </p>

          <p className="mb-10 leading-relaxed">
            Dharamshala is a small, easy to navigate town. It doesn't demand anything from you except to go with the flow of the moment, breathe deep, and let the good vibes wash over you. Oh and did I mention that the nature all around is epic?! There are many waterfalls and beautiful hikes all around.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Here's 4 hacks to make the most out of Dharamshala:
          </h2>

          <div className="space-y-6 my-8">
            <div className="flex gap-4 p-5 bg-card border border-card-border rounded-xl">
              <span className="text-2xl font-bold text-[#C4541C]" style={{ fontFamily: "var(--font-display)" }}>1.</span>
              <div>
                <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>Get on the local WhatsApp group</p>
                <p className="text-muted-foreground leading-relaxed">
                  As soon as you arrive, ask your hostel or any local in a café how to get added. This is your essential, daily, high vibe survival guide.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-card border border-card-border rounded-xl">
              <span className="text-2xl font-bold text-amber-600" style={{ fontFamily: "var(--font-display)" }}>2.</span>
              <div>
                <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>The upper town is the real town (Get Above the Noise)</p>
                <p className="text-muted-foreground leading-relaxed">
                  Dharamshala is kinda spread, but the heart of the community and the spiritual energy is concentrated in the upper village: McLeod Ganj. Don't waste time (or money) staying far down in Lower Dharamshala. Book your accommodation in Dharamkot. This immediately plugs you into the WhatsApp event flow, puts you within walking distance of the Dalai Lama's temple, and ensures you're effortlessly surrounded by the musicians, yogis, and healers who make this place so special.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-card border border-card-border rounded-xl">
              <span className="text-2xl font-bold text-rose-600" style={{ fontFamily: "var(--font-display)" }}>3.</span>
              <div>
                <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>Always carry cash</p>
                <p className="text-muted-foreground leading-relaxed">
                  I haven't been to a place that accepts card. There are easily accessible ATMs in town.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-card border border-card-border rounded-xl">
              <span className="text-2xl font-bold text-[#C4541C]" style={{ fontFamily: "var(--font-display)" }}>4.</span>
              <div>
                <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>Master the taxi negotiation exit strategy</p>
                <p className="text-muted-foreground leading-relaxed">
                  Taxis (especially long distance ones) can be a headache. Hack your travel budget and sanity by always negotiating the price before you sit down, but then immediately ask a follow-up question: "Does that include the road tax and the bags?" Often, drivers will sneak in hidden fees last minute. Asking upfront eliminates the classic Indian tourist trap and keeps your ride chill.
                </p>
              </div>
            </div>
          </div>

          <div className="my-10 p-6 border border-[#C4541C]/20 bg-[#C4541C]/30 bg-orange-950/10 rounded-xl text-center">
            <p className="text-lg font-semibold text-foreground" style={{ fontFamily: "var(--font-serif)" }}>
              Ready to take the leap? If you need a personal push or have a question this post didn't cover, send me a message or leave a comment. I'm here to guide your journey!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-[#C4541C] hover:bg-[#C4541C] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link
            href="/blog"
            data-testid="link-bottom-back-to-blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C4541C] text-[#C4541C] hover:bg-[#C4541C] hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <ArrowLeft size={16} /> All Posts
          </Link>
          <Link
            href="/blog/yoga-teacher-training-rishikesh"
            data-testid="link-next-post"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4541C] hover:bg-[#C4541C] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Yoga Teacher Training <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
