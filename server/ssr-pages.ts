import type { Express } from "express";
import fs from "fs";
import path from "path";

const BASE_URL = "https://www.traveltipsexposed.com";
const SITE_NAME = "Travel Tips Exposed";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.jpg`;

interface PostMeta {
  route: string;
  seoTitle: string;
  h1: string;
  description: string;
  canonical: string;
  publishedTime: string;
  author: string;
  intro: string;
  bodyText: string;
}

const posts: PostMeta[] = [
  {
    route: "/blog/ayahuasca-retreats-peru",
    seoTitle: "Ayahuasca in Peru: Honest Review",
    h1: "The Unfiltered Truth About Ayahuasca Retreats in Peru: Shaman Scams & Deep Transformation",
    description: "An honest, unfiltered account of attending an Ayahuasca retreat in Peru. What it is really like, how to prepare, and whether it is right for you.",
    canonical: "/blog/ayahuasca-retreats-peru",
    publishedTime: "2026-02-15",
    author: "Eden",
    intro: "Morocco was my current setting: a blur of tagine, mint tea, and the constant, buzzing question of my life's purpose. I was sweating out the details of my existence until a whispered legend cut through the noise: a retreat in Spain. Not just any retreat, but one featuring a legit Peruvian Shipibo Shaman bringing Ayahuasca to European soil.",
    bodyText: "That first taste was absolutely incredible. Seriously, that initial two day retreat felt like someone took a spiritual power washer to my soul. I'm talking transformational heart openings that felt like finally unlocking a level I didn't even know existed. I learned to look at my own story through a less filtered, more uplifting lens. The transformation was real. I bounced the idea off Elmer, the Shipibo shaman, and without missing a beat, he hit me with the invitation: Come to my village in the Amazon. A few months later, I was there. We took off from Pucallpa and boarded a boat for a 14 hour marathon down the Amazon River. Here I was, the only Westerner, in a tiny village deep in the jungle. No cars. The pace was slow, hazy, and kinda beautiful. My plan was to shack up in Elmer's cabin for two months, sitting with the medicine every other day. My intention was lofty: Ascend to a higher realm of consciousness and, crucially, learn to hold space for others. Most shamans are not saints. They are humans. And sometimes, they are flawed, complicated, and yes, sometimes opportunistic humans. And yet, I had some of the most beautiful, transformational experiences of my life. Ultimately, the work is between you, the plant, and the Divine. The shaman is just the gatekeeper. If you're feeling the call of the Amazon, skip the tourist traps near Cusco. Head to the real hubs: Iquitos or Pucallpa. You have to 100% trust the medicine and the people holding space for you. The easy part is getting all those mind-blowing revelations in the ceremony. The hardest part is the integration: bringing those cosmic truths back to your messy, daily life.",
  },
  {
    route: "/blog/rishikesh-to-dharamshala",
    seoTitle: "Rishikesh to Dharamshala: Road Trip",
    h1: "Rishikesh to Dharamshala: Your Essential Guide to India's Spiritual Hub",
    description: "Getting from Rishikesh to Dharamshala overland is an experience in itself. Honest guide to the roads, transport options, and what to actually expect.",
    canonical: "/blog/rishikesh-to-dharamshala",
    publishedTime: "2026-03-04",
    author: "Eden",
    intro: "Getting to Dharamshala from Rishikesh was quite the adventure! You see, buses on time or even showing up are not a given in India. Even if you purchased your bus ticket in advance. Also, there's no bus station where you wait for the bus. You basically just sweat on the side of a noisy, dusty road, with absolutely no one communicating when, or if, your ride will show up.",
    bodyText: "So I guess it was just another day in India when my bus was a no show. And yes, I was in the middle of the road, not knowing anyone or what was going on. But here's the magic of India: you're never alone. I quickly made friends with two equally bewildered travelers, and we did the sensible thing: pooled our cash and secured a cramped, slightly unsettling taxi for the all night drive up the mountain. This was where the journey truly earned its stripes. It was a long, dark, and classically sketchy drive that only makes sense when you're traveling like this. Our driver was a man of unusual habits, shall we say. Expect 8 to 12 hours depending on road conditions. Walking in Dharamshala feels so safe even solo and late at night. The air is thick with the scent of pine and Momos, and the streets are crawling with musicians. Every day there was an ecstatic dance, a Cacao ceremony, a breathwork session or intentional workshop organized somewhere. The food was so cheap. I avoided street food not to get sick but still paid less than $5 per meal in delicious, clean restaurants. Get on the local WhatsApp group as soon as you arrive. The upper town is the real town. Book your accommodation in Dharamkot. Always carry cash. Master the taxi negotiation exit strategy. Taxis especially long distance ones can be a headache. Always negotiate the price before you sit down.",
  },
  {
    route: "/blog/balis-one-love-vibe",
    seoTitle: "Solo Female Travel in Bali",
    h1: "Solo Female Travel in Bali: Why Ubud's Magic is Still Very Much Alive (+ 3 Practical Tips)",
    description: "A solo female traveler's honest take on Bali in 2025. Why Ubud still delivers, three practical safety tips, and what the vibe is really like.",
    canonical: "/blog/balis-one-love-vibe",
    publishedTime: "2026-03-02",
    author: "Eden",
    intro: "Here I am, traveling to the other part of the world. Again. Part of me is excited knowing that I need to get out of my comfort zone to keep creating that cool self. The other part just wants to chill home instead.",
    bodyText: "Feeling content with my daily little routine. When I'm out there, I have to be more on my game; especially traveling as a solo woman. But hey, I'd rather focus on all the good otherwise I create unnecessary anxieties within me. It's so interesting to notice how I still get that mild fear sneaking in when I'm about to travel. Even after hitchhiking solo across North America and traveling to India alone, I still get that fear of the unknown. The thing is that I choose to embrace that fear because it's by overcoming it that I create the best version of myself. The high frequency in Ubud is still very much alive and well. You feel it the second you walk into places like The Yoga Barn. And if you really want to vibrate on a higher plane, you have to hit the Pyramids of Chi. Getting lost in a sound healing session inside those massive structures is a total sensory reset. Get your e-VOA Electronic Visa on Arrival early. Don't be the person stuck in the 2 hour airport line. Agoda has the best deals and the most flexible cancellation policies. For 45 days, my accommodation came out to around CAD 600. Download Grab. It's the Uber of SE Asia. You can schedule your airport lift in advance. At roughly CAD 600 for 45 nights of accommodation, you're looking at about 13 dollars a night. Meals from warungs run 2 to 5 dollars. A scooter rental is 5 to 7 dollars a day. Indonesia is genuinely one of the most budget friendly destinations on earth.",
  },
  {
    route: "/blog/skip-lines-bali",
    seoTitle: "Skip Bali Airport Lines: 4 Tips",
    h1: "Skip the lines: 4 Ways To Accelerate Your Airport Entry in Bali & Indonesia",
    description: "How to avoid queuing for hours at Bali's Ngurah Rai Airport. Visa on Arrival tips, priority lanes, and the apps that cut airport wait times to near zero.",
    canonical: "/blog/skip-lines-bali",
    publishedTime: "2026-01-17",
    author: "Eden",
    intro: "Okay, let's be real. That 30 hour flight out of North America? It was a nightmare. The absolute last thing you need after finally landing in Bali or Jakarta is to get stuck in the immigration queue that stretches longer than your phone screen time last week.",
    bodyText: "We all want that immediate, seamless transition from plane to poolside. You want to ditch the backpack, grab your first nasi goreng, and start posting that golden hour magic. I've done the slow, painful airport hustle, and I'm here to tell you: never again. This is your 4 step cheat code to glide through Indonesian airport arrival like the VIP you are. Forget the paperwork pain; this is how you make your entry less stressful than choosing a Netflix show. The Digital VOA is Your Main Character Moment. Indonesia's e-VOA Electronic Visa on Arrival is your ticket to freedom. Applying online takes maybe five minutes. When you land, you literally walk past the long queue of people still paying cash and go straight to the stamping counter. Do this about 3 weeks out. Bali Added a Tourist Tax and Yes You Can Pre-Pay. The official Love Bali portal makes it super easy. You get a QR code receipt emailed to you. Screenshot that receipt. Airport Wi-Fi is rarely your friend. The Customs Form is Digital. The Electronic Customs Declaration ECD form is required. You can fill it out within 72 hours of arrival. When you're done, they send you a QR code. Get an eSIM. You download an app like KnowRoaming, buy a data plan for Indonesia, and install it instantly before you even take off. The moment your plane hits the tarmac, you switch it on and you have high speed data.",
  },
  {
    route: "/blog/bali-belly-delhi-belly",
    seoTitle: "Avoid Bali Belly & Delhi Belly",
    h1: "Don't Let 'Bali Belly' or 'Delhi Belly' Ruin Your Vibe: The Ultimate Guide to Travel Immunity",
    description: "How to eat safely and confidently in Bali and India. The foods to watch out for, the ones that are fine, and how to recover fast if it hits you.",
    canonical: "/blog/bali-belly-delhi-belly",
    publishedTime: "2026-01-05",
    author: "Eden",
    intro: "Keep Your Ass Off the Toilet and On the Beach. You book the flight, nail the itinerary, and finally land in paradise. The absolute worst way to spend that hard-earned vacation? Crying over a squat toilet instead of sipping a cocktail on the sunset deck.",
    bodyText: "My stomach is basically a highly sensitive baby. I look at street food wrong and I start feeling queasy. Yet, after years of exploring everywhere from bustling markets to remote jungles, I've never spent a single day glued to the porcelain throne. I'm dropping my essential strategies below. Follow this simple playbook, and you can worry about finding the perfect photo op, not the nearest washroom. Never order ice in your drink. It's often made from tap water. Also, when that trendy-looking restaurant offers infused water, politely pass. It's often just tap water with some questionable fruit slices. Just like you wouldn't drink tap water, don't use tap water to brush your teeth. Stop buying a thousand plastic bottles. Invest in a reliable water filter. If you're over the filter life, the ultimate hydration hack is fresh coconut water. It's loaded with electrolytes and is generally safer than bottled water. Start taking a high quality probiotic before you leave, and don't skip a single day while you're traveling. It's like sending good troops to establish a base in your digestive system. I always pack a bottle of anti-parasitic capsules. If the worst happens and you start feeling off, immediately pop some activated charcoal tablets. It's a quick-acting sponge that binds to toxins and speeds up the removal of whatever poison is trying to sideline you.",
  },
  {
    route: "/blog/yoga-teacher-training-rishikesh",
    seoTitle: "Yoga Teacher Training, Rishikesh",
    h1: "Ashtanga Yoga Teacher Training in Rishikesh: An Honest Review of the Experience",
    description: "An honest, first-hand account of completing a 200-hour yoga teacher training in Rishikesh, India. The curriculum, the challenges, and whether it is worth it.",
    canonical: "/blog/yoga-teacher-training-rishikesh",
    publishedTime: "2025-12-15",
    author: "Eden",
    intro: "I wanted an intensive training and I got just that at the Ashtanga school. The best way I can describe that experience is that it was like a military training but for yoga.",
    bodyText: "The days started at 6 every morning and ended up at 6 in the evening. Those days were packed with practices that didn't leave much space for the mind to wander off on anything that wasn't yoga related. I learned a lot. I love how being around incredible yogis forced me to push myself beyond what I would have found comfortable if I were practicing alone. The teachers were all about expressing some tough love. They know how to ruffle your feathers just enough to push yourself. At the end, I got exactly what I needed from that experience: I learned the ancient breathing techniques to influence my states of mind. Meals and accommodation were included in the school. The curriculum covered theory and practice, all the basics, and gave every student multiple rounds of guiding breathwork and yoga classes with real-time feedback from the teachers. Your body will be so sore at the end of each day. Do yourself a favor and recover quick with the right dose of magnesium. Injuries can happen when you quickly try to push yourself. Arnica will accelerate your healing process. Bring earplugs with you. India is noisy and you want to be feeling on your game during the day. We had one day a week off, which allowed me and the other students to explore Rishikesh. The Ganges are a trip! It's a different planet alongside that river. After 2 months in Rishikesh, I was absolutely ready for a change of scene.",
  },
  {
    route: "/blog/housesitting-guide",
    seoTitle: "How to Travel Free via Housesitting",
    h1: "The Ultimate Guide to Housesitting: Travel the World for Free While Caring for Pets and Homes",
    description: "How to use housesitting to travel the world for free or close to it. The platforms that work, the profile tips, and how to land your first sit.",
    canonical: "/blog/housesitting-guide",
    publishedTime: "2026-03-14",
    author: "Eden",
    intro: "Imagine waking up in a sun drenched villa in Tuscany, sipping coffee on a terrace as a golden retriever curls at your feet and paying absolutely nothing for the privilege. No hotel bill. No Airbnb fees. Just you, an incredible home, and a furry companion who's thrilled to have you there.",
    bodyText: "This is the reality of housesitting travel, one of the fastest growing trends among savvy globetrotters, digital nomads, retirees, and anyone who wants to see the world without draining their bank account. Whether you're a solo adventurer, a couple, or a family, housesitting and pet sitting can transform the way you experience the world giving you a local lifestyle instead of a tourist experience. In this guide, I'll cover everything you need to know: what housesitting actually is, how to get started, the best platforms to use, how to write a winning profile, and pro tips to make every sit a 5 star experience. Housesitting is a simple, mutually beneficial arrangement: a homeowner needs someone to look after their property, and often their pets, while they're away. In exchange, the housesitter gets free accommodation. No money changes hands. TrustedHousesitters is the undisputed leader in the space. It operates on a subscription model and listings span over 130 countries. HouseCarers is one of the oldest platforms, with a loyal membership and listings that skew toward longer term stays. MindMyHouse is a more affordable option with a solid international database. Write in a warm, conversational tone. Share why you love housesitting and what kind of traveler you are. Get verified and collect references. Use professional photos. Tailor every application. Reference the specific animals by name. Accommodation typically represents 30 to 50 percent of total travel costs. Budget travelers can save 15,000 dollars or more per year by housesitting 70 percent of nights.",
  },
  {
    route: "/blog/iboga-gabon-sacred-wood-la-cite-de-la-source",
    seoTitle: "Iboga in Gabon: Bwiti Ceremony",
    h1: "Iboga in Gabon: What One Month at La Cité de la Source Actually Did to Me",
    description: "A first-hand account of undergoing Iboga initiation in Gabon with a traditional Bwiti healer at La Cité de la Source. The full, unfiltered experience.",
    canonical: "/blog/iboga-gabon-sacred-wood-la-cite-de-la-source",
    publishedTime: "2026-03-15",
    author: "Eden",
    intro: "I have sat with plant medicines before. Ayahuasca in the jungle, psilocybin in ceremony, breathwork that cracked me open for days. I thought I had a reasonable sense of what transformation felt like. I was wrong. Nothing prepared me for what was waiting in Gabon.",
    bodyText: "Iboga is the root bark of the Tabernanthe iboga shrub, native to the equatorial rainforests of Central Africa, primarily Gabon, Cameroon, and the Republic of Congo. To the Bwiti people, and particularly to the Babongo, the original forest people of the region, it is not a drug, not even simply a medicine. It is a living teacher. A sacred intelligence that has guided initiations for an estimated 10,000 years. Gabon takes this so seriously that Iboga is protected in the country's national constitution as a strategic national heritage. Two close friends and I had been circling the idea of Iboga for years. We had all done our homework. That container turned out to be La Cite de la Source, a ceremonial village in Gabon where the Bwiti tradition is practiced in its most authentic, community rooted form. This is not a wellness retreat with bamboo bungalows and cold press juice. This is a living village, organized around the sacred, where ceremony is not an event but a way of life. For the weeks leading up to taking the Sacred Wood, we worked intensively with our subconscious minds. Every morning began with dream sharing. In a proper Bwiti ceremony, it is not just two shamans holding space for you. The entire village holds space for you. Through the deepest hours of the night, I could hear drums and voices outside. Steady. Purposeful. Unbroken. Iboga is not gentle. The experience stretches across an entire night and well into the following day. At the deepest point in my journey, my shaman came close and whispered: It was a good day to die. I left Gabon a month later lighter than I have ever felt in my adult life. Medical screening is non negotiable. The preparation period is part of the ceremony. One month is the right amount of time.",
  },
  {
    route: "/is-kuta-lombok-overrated",
    seoTitle: "Kuta Lombok: Honest Review",
    h1: "Is Kuta Lombok Overrated? 6 Honest Reasons I Won't Be Going Back",
    description: "An honest review of Kuta Lombok, Indonesia. 6 reasons why this overhyped destination did not deliver, and where to go instead.",
    canonical: "/is-kuta-lombok-overrated",
    publishedTime: "2026-03-15",
    author: "Eden",
    intro: "Let's be real for a second. We've all fallen down the rabbit hole of aesthetic Instagram reels showing Lombok as some untouched paradise, turquoise water, empty beaches, golden hour forever. And look, parts of Lombok absolutely live up to that. But Kuta Lombok? After spending time there, I feel a responsibility to deinfluence you just a little.",
    bodyText: "I genuinely wanted to love it. The hype was real, my expectations were high, and I arrived ready to be amazed. Instead, I left with a congested throat, a lighter wallet, and zero desire to return. Here is my completely unfiltered review of Kuta Lombok, the things the Instagram reels won't show you. The water quality at the main beach was a serious disappointment. Visible garbage lines the shore, and there is wastewater runoff flowing directly into the ocean in areas where tourists are expected to swim. For a destination marketing itself as a pristine alternative to Bali, this is a significant problem that doesn't get talked about enough. If you want to access the better beaches around Kuta Lombok, you essentially have to rent a scooter. In practice, the traffic is chaotic, the roads to coastal viewpoints are rough, and accidents involving tourists are genuinely common. The air in Kuta Lombok town is rough. A persistent combination of motorbike fumes and dust had my throat congested within the first day. The live entertainment in Kuta Lombok during my visit ranged from forgettable to genuinely painful. Kuta Lombok has largely abandoned the affordable Indonesia proposition. Prices at many shops, accommodations, and tourist facing restaurants were closer to what I'd pay back home in Canada. Indonesia has one of the most exciting food cultures in the world. That version of Indonesia felt largely absent in Kuta Lombok's main tourist drag. Kuta Lombok is not without potential. The surrounding landscape is genuinely spectacular. But right now, for a traveler prioritizing clean water, safety, good food, and honest value, there are far better options in Indonesia.",
  },
  {
    route: "/gili-air-indonesia-travel-guide",
    seoTitle: "Gili Air Guide: Indonesia's Secret",
    h1: "Why Gili Air Is the Low Key Paradise You've Been Searching For (2 Week Honest Guide)",
    description: "Is Gili Air worth visiting? After 2 weeks on the island, a traveler with 40 countries under her belt calls it Indonesia's best-kept secret. Full honest guide.",
    canonical: "/gili-air-indonesia-travel-guide",
    publishedTime: "2026-01-04",
    author: "Eden",
    intro: "I have backpacked through 40 countries. I have seen paradise get discovered, hyped, overrun, and hollowed out more times than I can count. Overtourism is not just a buzzword, it is a genuine grief for anyone who loves travel done right.",
    bodyText: "So when I tell you that Gili Air genuinely surprised me, I need you to understand the bar I am working with. I spent two weeks on this tiny Indonesian island this past December, and I left with one clear conviction: Gili Air is the best answer I have found to the question every traveler eventually asks. Where can I go that still has beauty, culture, and good energy, without being completely overrun? Gili Trawangan is the party island, Gili Meno is the honeymoon island, and Gili Air is somewhere in between. That framing undersells Gili Air badly. It's not just a compromise. It is genuinely the most complete of the three islands. The first thing you notice when you step off the boat at Gili Air is the silence. No motorbikes. No cars. No exhaust fumes cutting through the salt air. The Indonesian government prohibits motorized vehicles on all three Gili islands. People get around by bicycle, electric scooter, or the island's iconic cidomo, a small horse drawn cart. Two weeks without exhaust fumes felt like a genuine physical detox. The water around the island is genuinely, almost unreasonably, that shade of turquoise. A clear, warm, luminous blue green that makes you want to be in it constantly. Snorkeling is world class right off the shore, no boat required. I saw sea turtles daily. The island operates across a surprisingly wide range. In the afternoon, you can sit at a beachfront bar sipping a well made cocktail. Walk five minutes inland, and you are sitting on a plastic stool in front of a warung eating Nasi Campur for around two dollars. And it will be one of the best things you eat on your entire trip. Gili Air is for the traveler who wants the beach, the culture, and the social scene, but wants to experience all of it with some grace and a lot of genuine peace.",
  },
  {
    route: "/tetebatu-lombok-honest-review",
    seoTitle: "Tetebatu, Lombok: Honest Review",
    h1: "Tetebatu, Lombok: Is This 'Hidden Gem' Actually Worth It? (Honest Review)",
    description: "An honest review of Tetebatu, Lombok. Stunning scenery, a serious noise problem, and who should actually visit. What the Instagram influencers won't tell you.",
    canonical: "/tetebatu-lombok-honest-review",
    publishedTime: "2026-01-07",
    author: "Eden",
    intro: "I am writing this from a terrace in Tetebatu, Lombok. The view in front of me is genuinely stunning. Emerald rice terraces, jungle mist, the kind of green that makes you understand why people keep posting about this place. And I cannot wait to leave.",
    bodyText: "Here is the honest review of Tetebatu that the slow travel influencers are not making. Tetebatu sits in the foothills of Mount Rinjani on the island of Lombok, about two hours from Mataram. It has been quietly circulating on travel blogs and Instagram feeds for a few years now as one of Indonesia's genuine hidden gems. A highland village surrounded by rice paddies, waterfalls, and jungle trekking routes, with none of the commercial chaos of Bali or Kuta Lombok. The pitch is simple and appealing: lush nature, fresh mountain air, a slower pace, authentic village life. I was that traveler. And the reality was something else entirely. Tetebatu has a serious noise problem. Not occasional noise. Not noise you can sleep through with earplugs. Persistent, multi source, high decibel noise that runs from before dawn until late in the evening. The most significant source is the mosques. Tetebatu has several, positioned close enough together that their sound systems overlap. During prayer times, you are hearing four or five simultaneous megaphone broadcasts at maximum volume. If the mosques don't wake you, the land clearing will. Chainsaws are a regular feature of the early morning soundscape, starting well before sunrise on many days. The landscape is genuinely beautiful. The emerald terraces are as vivid as the photos suggest. The jungle walks are lush and legitimately impressive. The bones of a great destination are absolutely here. The problem is not what Tetebatu looks like. The problem is what it sounds like. Tetebatu works well for trekkers doing Rinjani prep, photographers chasing rice paddy drone shots, and travelers with high noise tolerance or earplugs.",
  },
  {
    route: "/atm-fees-money-exchange-indonesia",
    seoTitle: "ATM Fees in Indonesia: Avoid Ripoffs",
    h1: "ATM Fees and Money Exchange in Indonesia: The Honest Guide to Not Getting Ripped Off",
    description: "ATM fees in Indonesia can cost you 6.5% per transaction. The honest guide to fee-free cards, trusted money changers in Bali, and avoiding exchange scams.",
    canonical: "/atm-fees-money-exchange-indonesia",
    publishedTime: "2026-01-20",
    author: "Eden",
    intro: "Indonesia is one of the most incredible travel destinations in the world. It is also, without question, one of the easiest places to quietly lose a significant chunk of your travel budget through ATM fees, bad exchange rates, and outright scams, if you don't know what you're doing.",
    bodyText: "I'm writing this because I've seen it happen too many times. Travelers who have budgeted carefully, flown long haul, and landed in Bali or Lombok, only to bleed money at the ATM and get shortchanged at exchange counters that look completely legitimate. Here is everything you need to know about handling money in Indonesia. Indonesia's currency is the Indonesian Rupiah IDR. The largest banknote in circulation is the Rp 100,000 note, worth roughly USD 6. That means when you exchange 500 dollars, you walk away holding around Rp 8,000,000. Eight million. Before you do anything with your money in Indonesia, get comfortable with the denominations. Using your home bank card at an ATM in Indonesia can cost you around 6.5 percent per transaction when you factor in your bank's foreign transaction fee, the currency conversion markup, and sometimes an additional local ATM surcharge on top. Get a travel specific card before you leave home. Cards like Wise, Revolut, and Charles Schwab are specifically designed for international use and can eliminate most or all of these fees. Stick to ATMs attached to major Indonesian bank branches: Bank Mandiri, BCA, Danamon, Maybank, BTN, and BPTN. Indonesia has a serious money exchange scam problem, and it is concentrated precisely in the areas where tourists go. Bali in particular. The scams do not look like scams. The most common technique is the counting trick. Only use licensed, well established operators. Look for the Bank Indonesia PVA Berizin logo. Count your money yourself, at the counter, before you walk away. Never chase a rate that looks significantly better than everywhere else. The trusted money changers in Bali are PT Central Kuta, PT Dirgahayu Valuta Prima also known as Bali Best Rate, and PT Bali Maspintjinra. Every airport in Indonesia has currency exchange counters in the arrivals hall. They are convenient. They are also, reliably, the worst rates you will find anywhere. Indonesia is an extraordinary country to travel through, and the money situation is genuinely manageable once you know the rules.",
  },
];

let cachedHtml: string | null = null;

function getIndexHtml(): string | null {
  if (cachedHtml) return cachedHtml;
  const distPath = path.resolve(__dirname, "public");
  const indexPath = path.join(distPath, "index.html");
  if (!fs.existsSync(indexPath)) return null;
  cachedHtml = fs.readFileSync(indexPath, "utf-8");
  return cachedHtml;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHeadOutletTags(post: PostMeta): string {
  const fullTitle = `${post.seoTitle} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${post.canonical}`;
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: fullTitle,
    description: post.description,
    url: canonicalUrl,
    datePublished: post.publishedTime,
    image: { "@type": "ImageObject", url: DEFAULT_OG_IMAGE, width: 1200, height: 630 },
    author: { "@type": "Person", name: post.author, url: `${BASE_URL}/about` },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: DEFAULT_OG_IMAGE, width: 1200, height: 630 },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  });

  return `
  <link rel="canonical" href="${canonicalUrl}" />
  <meta property="og:site_name" content="${SITE_NAME}" />
  <meta property="og:title" content="${escapeHtml(fullTitle)}" />
  <meta property="og:description" content="${escapeHtml(post.description)}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="${DEFAULT_OG_IMAGE}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="article:published_time" content="${post.publishedTime}" />
  <meta property="article:author" content="${post.author}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(fullTitle)}" />
  <meta name="twitter:description" content="${escapeHtml(post.description)}" />
  <meta name="twitter:image" content="${DEFAULT_OG_IMAGE}" />
  <script type="application/ld+json">${schema}</script>`;
}

function buildBodyHtml(post: PostMeta): string {
  return `<div id="ssr-content" style="display:none" aria-hidden="true">
  <h1>${escapeHtml(post.h1)}</h1>
  <p>${escapeHtml(post.intro)}</p>
  <p>${escapeHtml(post.bodyText)}</p>
</div>`;
}

export function registerSsrPages(app: Express) {
  for (const post of posts) {
    app.get(post.route, (_req, res) => {
      const html = getIndexHtml();
      if (!html) {
        res.status(500).send("Build not found");
        return;
      }

      const fullTitle = `${post.seoTitle} | ${SITE_NAME}`;
      const outletTags = buildHeadOutletTags(post);
      const bodyHtml = buildBodyHtml(post);

      let rendered = html
        .replace("<!--head-outlet-->", outletTags)
        .replace("<!--ssr-outlet-->", bodyHtml);

      rendered = rendered.replace(
        /<title>[^<]*<\/title>/,
        `<title>${escapeHtml(fullTitle)}</title>`
      );

      rendered = rendered.replace(
        /<meta name="description" content="[^"]*"/,
        `<meta name="description" content="${escapeHtml(post.description)}"`
      );

      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.setHeader("Cache-Control", "public, max-age=300, stale-while-revalidate=3600");
      res.send(rendered);
    });
  }
}
