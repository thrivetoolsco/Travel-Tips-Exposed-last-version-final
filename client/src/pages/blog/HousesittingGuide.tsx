import { Link } from "wouter";
import { Calendar, User, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import imgHero from "@assets/generated_images/housesitting-hero.png";
import imgRemoteWork from "@assets/generated_images/housesitting-remote-work.png";
import imgDogWalk from "@assets/generated_images/housesitting-dog-walk.png";

export default function HousesittingGuide() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] overflow-hidden" data-testid="post-hero">
        <img src={imgHero} alt="Housesitting travel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold bg-[#1D4A38] text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}>Budget Hacks</span>
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
          The Ultimate Guide to Housesitting: Travel the World for Free While Caring for Pets and Homes
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-[#C4541C]" />
            <span data-testid="text-author">Eden</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-amber-500" />
            <span data-testid="text-date">March 14, 2026</span>
          </span>
        </div>

        <div className="prose prose-lg max-w-none text-foreground" style={{ fontFamily: "var(--font-sans)" }} data-testid="post-body">

          <p className="lead text-xl text-muted-foreground mb-8 leading-relaxed">
            Imagine waking up in a sun drenched villa in Tuscany, sipping coffee on a terrace as a golden retriever curls at your feet and paying absolutely nothing for the privilege. No hotel bill. No Airbnb fees. Just you, an incredible home, and a furry companion who's thrilled to have you there.
          </p>

          <p className="mb-6 leading-relaxed">
            This is the reality of housesitting travel, one of the fastest growing trends among savvy globetrotters, digital nomads, retirees, and anyone who wants to see the world without draining their bank account. Whether you're a solo adventurer, a couple, or a family, housesitting and pet sitting can transform the way you experience the world giving you a local lifestyle instead of a tourist experience.
          </p>

          <p className="mb-8 leading-relaxed">
            In this guide, I'll cover everything you need to know: what housesitting actually is, how to get started, the best platforms to use, how to write a winning profile, and pro tips to make every sit a 5 star experience.
          </p>

          <img src={imgHero} alt="Housesitting in a beautiful villa" className="w-full rounded-xl my-10 object-cover h-72" />

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            What Is Housesitting Travel? (And Why It's Exploding in Popularity)
          </h2>

          <p className="mb-6 leading-relaxed">
            Housesitting is a simple, mutually beneficial arrangement: a homeowner needs someone to look after their property, and often their pets, while they're away. In exchange, the housesitter gets free accommodation. No money changes hands. It's a win-win that's been around for decades but has exploded in the digital age thanks to dedicated platforms that connect homeowners and travelers worldwide.
          </p>

          <p className="mb-8 leading-relaxed">
            The rise of the remote work movement has supercharged this trend. With more people untethered from a fixed office, the appeal of living like a local in Bali, Buenos Aires, or the Berner Oberland for weeks or even months at a time has never been stronger.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-serif)" }}>The Numbers Don't Lie</h3>

          <div className="space-y-3 my-6">
            {[
              "TrustedHousesitters, the largest housesitting platform, has over 150,000 members across more than 130 countries.",
              "The average nightly rate for pet sitting in a major city runs $50 to $120, meaning a month-long sit can save you $1,500 to $3,600 in accommodation costs alone.",
              "Searches for \"housesitting abroad\" have grown over 300% in the past five years.",
              "Pet ownership surged post pandemic, dramatically increasing demand for trusted, in-home pet sitters over kennels."
            ].map((stat, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-[#1D4A38]/5 border border-[#1D4A38]/20 rounded-lg">
                <span className="text-[#1D4A38] font-bold text-lg mt-0.5">✓</span>
                <p className="text-foreground leading-relaxed">{stat}</p>
              </div>
            ))}
          </div>

          <div className="my-8 p-6 border border-amber-300 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 rounded-xl">
            <p className="text-foreground leading-relaxed">
              <strong>Insider tip:</strong> Housesitting isn't just for budget travelers. Many sits are in stunning luxury homes, beachfront villas, mountain chalets, city penthouses, that you'd never otherwise afford to stay in.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Housesitting vs. Pet Sitting vs. House Swapping: Know the Difference
          </h2>

          <p className="mb-6 leading-relaxed">
            These terms are often used interchangeably, but they're distinct arrangements worth understanding before you dive in.
          </p>

          <div className="space-y-4 my-8">
            {[
              { label: "Housesitting", color: "text-[#C4541C]", desc: "You stay in someone's home while they're away. Your primary responsibility is maintaining the property collecting mail, watering plants, keeping things secure. There may or may not be pets involved." },
              { label: "Pet Sitting (via housesitting)", color: "text-[#1D4A38]", desc: "The most common form. You stay in the owner's home specifically to care for their animals. This might involve feeding, walking, administering medication, or simply providing companionship. Most housesits involve at least one pet." },
              { label: "House Swapping", color: "text-amber-600", desc: "Two parties agree to stay in each other's homes simultaneously. A different model entirely, often requiring reciprocal availability." },
              { label: "Pet Sitting Without Overnight Stays", color: "text-sky-600", desc: "Platforms like Rover also offer drop in visits or dog walking useful for supplemental income, but not the full immersive travel experience housesitting offers." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                <span className={`text-xl font-bold mt-0.5 ${item.color}`} style={{ fontFamily: "var(--font-display)" }}>{i + 1}.</span>
                <div>
                  <p className={`font-bold mb-2 ${item.color}`} style={{ fontFamily: "var(--font-display)" }}>{item.label}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-8 leading-relaxed">
            For travelers, housesitting with pet care is usually the sweet spot: homeowners are far more motivated to find a trustworthy sitter when beloved animals are involved, meaning more listings, more opportunities, and more grateful homeowners.
          </p>

          <img src={imgRemoteWork} alt="Working remotely while housesitting" className="w-full rounded-xl my-10 object-cover h-72" />

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            The Best Housesitting Platforms in 2025
          </h2>

          <p className="mb-6 leading-relaxed">Not all platforms are created equal. Here's a breakdown of the leading options:</p>

          <div className="space-y-5 my-8">
            {[
              {
                num: "1",
                name: "TrustedHousesitters",
                url: "https://www.trustedhousesitters.com",
                color: "text-[#C4541C]",
                desc: "The undisputed leader in the space. It operates on a subscription model (sitters pay an annual fee, homeowners pay separately), which filters out casual browsers and creates a community of genuinely committed members. Listings span over 130 countries, with a solid review system and excellent customer support.",
                details: [
                  { label: "Best for", value: "Global travelers wanting variety and volume of listings" },
                  { label: "Annual fee", value: "~$129/year for sitters" },
                  { label: "Standout feature", value: "Video verification and 24/7 vet advice line" },
                ]
              },
              {
                num: "2",
                name: "HouseCarers",
                url: "https://www.housecarers.com",
                color: "text-[#1D4A38]",
                desc: "One of the oldest platforms, with a loyal membership and listings that skew toward longer term stays, popular with slow travelers and digital nomads.",
                details: [
                  { label: "Best for", value: "Long term stays, slower travel" },
                  { label: "Annual fee", value: "~$50/year" },
                  { label: "Standout feature", value: "Lower cost of entry, good for beginners" },
                ]
              },
              {
                num: "3",
                name: "MindMyHouse",
                url: "https://www.mindmyhouse.com",
                color: "text-amber-600",
                desc: "A more affordable option with a solid international database. Less polished but worth it as a supplemental listing source.",
                details: [
                  { label: "Best for", value: "Budget-conscious sitters" },
                  { label: "Annual fee", value: "~$20/year" },
                ]
              },
              {
                num: "4",
                name: "Nomador",
                url: "https://www.nomador.com",
                color: "text-sky-600",
                desc: "Popular in France and across Europe, with a strong community feel and built-in forum discussions.",
                details: [
                  { label: "Best for", value: "European sits, community minded travelers" },
                ]
              },
              {
                num: "5",
                name: "WorkAway and HelpX",
                url: "https://www.workaway.info",
                color: "text-purple-600",
                desc: "Technically work exchange platforms, but they often include property caretaking and pet care in exchange for a few hours of help daily, with accommodation (and sometimes meals) provided.",
                details: [
                  { label: "Best for", value: "Longer placements, travelers who enjoy contributing skills" },
                ]
              },
            ].map((platform) => (
              <div key={platform.num} className="p-6 bg-card border border-border rounded-xl">
                <div className="flex items-start gap-4 mb-3">
                  <span className={`text-2xl font-bold ${platform.color}`} style={{ fontFamily: "var(--font-display)" }}>{platform.num}.</span>
                  <div className="flex-1">
                    <a href={platform.url} target="_blank" rel="noopener noreferrer"
                      className={`text-xl font-bold hover:underline inline-flex items-center gap-1.5 ${platform.color}`}
                      style={{ fontFamily: "var(--font-display)" }}>
                      {platform.name} <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 ml-10">{platform.desc}</p>
                <div className="ml-10 space-y-1">
                  {platform.details.map((d) => (
                    <p key={d.label} className="text-sm"><span className="font-semibold text-foreground">{d.label}:</span> <span className="text-muted-foreground">{d.value}</span></p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="my-8 p-6 border border-amber-300 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 rounded-xl">
            <p className="text-foreground leading-relaxed">
              <strong>Pro tip:</strong> Sign up for at least two platforms simultaneously. Listings don't overlap, so multiple memberships dramatically expand your opportunities, especially in popular destinations with high demand.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            How to Create a Housesitting Profile That Gets Accepted
          </h2>

          <p className="mb-6 leading-relaxed">Your profile is your first impression. Homeowners, especially those entrusting you with beloved pets, will scrutinize it carefully. Here's how to stand out:</p>

          <div className="space-y-5 my-8">
            {[
              { num: "1", title: "Lead with your personality, not just your credentials.", desc: "Write in a warm, conversational tone. Share why you love housesitting and what kind of traveler you are. A profile that feels human will always outperform a bullet point resume." },
              { num: "2", title: "Highlight pet experience prominently.", desc: "\"I grew up with three border collies and understand how important exercise and mental stimulation are for high energy breeds\" is infinitely more compelling than \"I love animals.\"" },
              { num: "3", title: "Get verified and collect references.", desc: "Most platforms offer ID verification. Do it immediately. Then ask friends, former employers, or neighbors to vouch for your reliability. Even non housesitting references carry weight early on." },
              { num: "4", title: "Use professional photos.", desc: "A clear, friendly headshot as your main photo. No sunglasses, no group shots. Include photos of you with animals if possible." },
              { num: "5", title: "Tailor every application.", desc: "Reference the specific animals by name, mention something you noticed about the listing, and explain why this particular sit appeals to you. Homeowners receive multiple applications. A personalized message immediately signals that you're thoughtful and attentive." },
            ].map((tip) => (
              <div key={tip.num} className="flex gap-4 p-5 bg-card border border-card-border rounded-xl">
                <span className="text-2xl font-bold text-[#C4541C]" style={{ fontFamily: "var(--font-display)" }}>{tip.num}.</span>
                <div>
                  <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>{tip.title}</p>
                  <p className="text-muted-foreground leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="my-8 p-6 border border-amber-300 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 rounded-xl">
            <p className="text-foreground leading-relaxed">
              <strong>Pro tip:</strong> Ask previous homeowners to write you a detailed reference rather than just leaving a star rating. A written testimonial is far more persuasive to future hosts.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            What to Expect: A Day in the Life of a Travel Housesitter
          </h2>

          <div className="space-y-4 my-8">
            {[
              { time: "Morning", icon: "🌅", desc: "Feed and walk the dog(s). Check that the property is secure, water plants if needed. Then your day is largely your own." },
              { time: "Daytime", icon: "☀️", desc: "Explore the local area, work remotely, visit attractions, or simply relax. For sits with dogs, you'll likely return midday for another walk or feeding." },
              { time: "Evening", icon: "🌙", desc: "Evening feeding and any medications. Quality time with the pets. One of the genuinely best parts of the whole experience." },
              { time: "Ongoing", icon: "📸", desc: "Bring in mail, maintain the home at the standard you'd want if you owned it, and keep the homeowner updated. Most appreciate a photo every couple of days." },
            ].map((item) => (
              <div key={item.time} className="flex gap-4 p-5 bg-card border border-border rounded-xl items-start">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>{item.time}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-8 leading-relaxed">
            The ratio of responsibility to freedom is remarkably favorable. A typical dog sit might require 3 to 4 hours of active care daily. The rest of your time is genuinely free.
          </p>

          <img src={imgDogWalk} alt="Walking dogs while traveling as a housesitter" className="w-full rounded-xl my-10 object-cover h-72" />

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Top Destinations for Housesitting Travel in 2025
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            {[
              { place: "Portugal", detail: "Lisbon, Algarve, Silver Coast", desc: "A booming expat scene has created a rich housesitting ecosystem. Mild climate, stunning coastline, excellent food, and low costs make it a perennial favorite." },
              { place: "New Zealand", detail: "All regions", desc: "Consistently one of the most sought after destinations on TrustedHousesitters. Farm sits, coastal properties, and breathtaking scenery, though competition is fierce." },
              { place: "Mexico", detail: "Oaxaca, San Cristóbal, Mérida", desc: "Fast growing digital nomad hubs with increasing listings and a low cost of living." },
              { place: "Australia", detail: "Byron Bay, Sunshine Coast, Tasmania", desc: "Australians travel frequently and love their pets, creating consistent year round demand. Farm and lifestyle property sits are particularly common." },
              { place: "Costa Rica", detail: "Nationwide", desc: "Wildlife, rainforest, and beach sits. Often with exotic pets like parrots or toucans alongside the usual dogs and cats." },
              { place: "United Kingdom", detail: "Cotswolds, Cornwall, Scottish Highlands", desc: "Cottage sits in idyllic countryside, often with dogs and beautiful walking country right outside the door." },
            ].map((dest) => (
              <div key={dest.place} className="p-5 bg-card border border-border rounded-xl">
                <p className="font-bold text-[#C4541C] mb-0.5" style={{ fontFamily: "var(--font-display)" }}>{dest.place}</p>
                <p className="text-xs text-muted-foreground mb-2">{dest.detail}</p>
                <p className="text-sm text-foreground leading-relaxed">{dest.desc}</p>
              </div>
            ))}
          </div>

          <div className="my-8 p-6 border border-amber-300 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 rounded-xl">
            <p className="text-foreground leading-relaxed">
              <strong>Pro tip:</strong> Search 3 to 6 months in advance for competitive locations like New Zealand or Provence. Popular listings can receive 20 or more applications within 24 hours of posting.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Pet Sitting Tips: How to Care for Animals Like a Pro
          </h2>

          <div className="space-y-3 my-8">
            {[
              { title: "Honor the routine.", desc: "Pets thrive on consistency. Follow the owner's feeding schedule, walk times, and sleep arrangements, even if you'd do it differently." },
              { title: "Ask detailed questions before the sit.", desc: "Food quantities, vet contact, emergency procedures, behavioral quirks, favorite toys, fears (thunderstorms? strangers?). A thorough handover saves stress later." },
              { title: "Never leave dogs alone longer than they're accustomed to.", desc: "Some dogs handle 4 to 5 hours fine; others experience separation anxiety after 90 minutes. Know before you go." },
              { title: "Photograph everything on day one.", desc: "Document any pre-existing damage or health concerns. This protects both you and the homeowner." },
              { title: "Establish vet access in advance.", desc: "Confirm you're authorized to seek veterinary care and have payment details sorted before an emergency occurs." },
              { title: "Send regular photo updates.", desc: "This is the single biggest predictor of 5 star reviews. A cute photo with a reassuring message is worth its weight in gold." },
              { title: "Leave the home cleaner than you found it.", desc: "Do a final deep clean before departure. Replace anything you've used." },
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 items-start p-4 bg-[#1D4A38]/5 border border-[#1D4A38]/20 rounded-lg">
                <span className="text-[#1D4A38] font-bold text-lg mt-0.5">✓</span>
                <p className="text-foreground leading-relaxed"><strong>{tip.title}</strong> {tip.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            How Much Money Can You Actually Save?
          </h2>

          <p className="mb-4 leading-relaxed">Accommodation typically represents 30 to 50% of total travel costs. Here's what eliminating it can look like:</p>

          <div className="space-y-4 my-8">
            {[
              { type: "Budget traveler", color: "bg-[#1D4A38]", desc: "12 months of travel, housesitting 70% of nights (~250 nights). At an average of $60/night saved, that's $15,000. Often the difference between affording the trip at all and staying home." },
              { type: "Mid range traveler", color: "bg-[#C4541C]", desc: "Alternating housesits with occasional hotels or Airbnbs. Saves $8,000 to $12,000 annually while maintaining flexibility." },
              { type: "Digital nomad", color: "bg-amber-600", desc: "Back to back monthly sits in key destinations, essentially eliminating rent. Combined with remote income, this makes genuine location independent living financially viable." },
            ].map((item) => (
              <div key={item.type} className="flex gap-4 p-5 bg-card border border-border rounded-xl items-start">
                <span className={`px-3 py-1 text-xs font-bold text-white rounded-full whitespace-nowrap mt-1 ${item.color}`}
                  style={{ fontFamily: "var(--font-display)" }}>{item.type}</span>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mb-8 leading-relaxed">
            Beyond pure savings, housesitting gives you access to neighborhoods and lifestyles that hotels simply can't offer: shopping at the local market, becoming a familiar face at the corner café. This is the travel that actually changes you.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Common Housesitting Myths (Debunked)
          </h2>

          <div className="space-y-4 my-8">
            {[
              { myth: "\"You need years of experience to get accepted.\"", truth: "Every experienced sitter started with zero reviews. A stellar profile, genuine references, and personalized applications go a long way and many homeowners enjoy giving first timers a chance." },
              { myth: "\"It only works if you have a flexible schedule.\"", truth: "Many sits fall on weekends, school holidays, or predictable travel windows, perfectly compatible with a regular job and limited time off." },
              { myth: "\"You'll be tied to the house the whole time.\"", truth: "Not at all. Most homeowners expect you to explore and enjoy the destination. Your responsibilities are real but bounded." },
              { myth: "\"It's unsafe. You're staying in strangers' homes.\"", truth: "Platforms with robust verification systems make this genuinely low risk. Reviews are mutual, IDs are verified, and the housesitting community has a strong culture of accountability." },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-card border border-border rounded-xl">
                <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>{item.myth}</p>
                <p className="text-muted-foreground leading-relaxed">{item.truth}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Getting Your First Housesit: A Step by Step Action Plan
          </h2>

          <div className="space-y-4 my-8">
            {[
              { num: "1", step: "Choose your platform(s)", detail: "Start with TrustedHousesitters. Add HouseCarers as a second option." },
              { num: "2", step: "Build your profile completely", detail: "Photo, bio, pet experience, references, verification." },
              { num: "3", step: "Set realistic expectations", detail: "Apply broadly, not just to dream destinations." },
              { num: "4", step: "Apply quickly", detail: "Set notifications and respond within hours of new listings going live." },
              { num: "5", step: "Offer a video call", detail: "This dramatically increases acceptance rates." },
              { num: "6", step: "Nail the first sit", detail: "Treat it as your most important. The review you earn will open every door after it." },
              { num: "7", step: "Ask for a written reference", detail: "After every sit, request a detailed testimonial." },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 p-4 bg-card border border-border rounded-xl items-start">
                <span className="text-2xl font-bold text-[#C4541C] w-8 shrink-0" style={{ fontFamily: "var(--font-display)" }}>{item.num}.</span>
                <div>
                  <p className="font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>{item.step}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 my-8">
            {[
              { q: "Can couples or families housesit together?", a: "Absolutely! Many homeowners prefer pairs or families, as it signals stability. List all sitters on your profile." },
              { q: "Do I need insurance?", a: "Travel insurance that covers accidental damage is worth considering. Some platforms offer their own coverage. Check the specifics." },
              { q: "What if there's a pet emergency?", a: "Discuss this before the sit begins. Have the vet's number, confirm your authorization to seek care, and clarify payment arrangements in advance." },
              { q: "How long are typical sits?", a: "Anywhere from a long weekend to six months. The most common sits run 1 to 3 weeks." },
            ].map((faq, i) => (
              <div key={i} className="p-5 border border-border rounded-xl">
                <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>{faq.q}</p>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="my-10 p-8 border border-[#C4541C]/20 bg-[#C4541C]/5 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-serif)" }}>Ready to Start Your Housesitting Journey?</h3>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              Housesitting travel isn't for everyone. But if you're looking for a way to travel more deeply, more affordably, and with a sense of genuine purpose, waking up each morning to a wagging tail and a beautiful home that's temporarily yours, it's genuinely transformative.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The world is full of homeowners who want nothing more than to travel knowing their beloved pets are in safe, caring hands. And somewhere out there is a cottage in the Cotswolds, a farmhouse in Tuscany, or a beach bungalow in Costa Rica waiting for exactly the kind of traveler you are.
            </p>
            <p className="text-foreground font-semibold">All you have to do is show up and bring your love of animals.</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center my-8">
            <a href="https://www.trustedhousesitters.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#C4541C] text-white font-semibold text-sm rounded-md hover:opacity-90 transition-opacity"
              style={{ fontFamily: "var(--font-display)" }} data-testid="link-trustedhousesitters">
              Join TrustedHousesitters <ExternalLink size={14} />
            </a>
            <a href="https://www.housecarers.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#1D4A38] text-[#1D4A38] font-semibold text-sm rounded-md hover:bg-[#1D4A38] hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-display)" }} data-testid="link-housecarers">
              Explore HouseCarers <ExternalLink size={14} />
            </a>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/blog" data-testid="link-bottom-back-to-blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C4541C] text-[#C4541C] hover:bg-[#C4541C] hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            <ArrowLeft size={16} /> All Posts
          </Link>
          <Link href="/blog/rishikesh-to-dharamshala" data-testid="link-next-post"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4541C] hover:bg-[#C4541C] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            Rishikesh to Dharamshala <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
