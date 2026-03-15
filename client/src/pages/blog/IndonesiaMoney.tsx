import { Link } from "wouter";
import { Calendar, User, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import imgHero from "@assets/Atm_indonesia_the_shot_looks_slightly_grainy_as_if_delpmaspu_1773601374499.png";
import imgReceipt from "@assets/Screenshot_20260315_150022_Instagram_1773601374482.jpg";

export default function IndonesiaMoney() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] overflow-hidden" data-testid="post-hero">
        <img src={imgHero} alt="ATM fees Indonesia how to avoid Bali Lombok" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold bg-emerald-700 text-white rounded-full"
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
          ATM Fees and Money Exchange in Indonesia: The Honest Guide to Not Getting Ripped Off
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-[#C4541C]" />
            <span data-testid="text-author">Eden</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-amber-500" />
            <span data-testid="text-date">January 20, 2026</span>
          </span>
        </div>

        <div className="prose prose-lg max-w-none text-foreground" style={{ fontFamily: "var(--font-sans)" }} data-testid="post-body">

          <p className="lead text-xl text-muted-foreground mb-6 leading-relaxed">
            Indonesia is one of the most incredible travel destinations in the world. It is also, without question, one of the easiest places to quietly lose a significant chunk of your travel budget through ATM fees, bad exchange rates, and outright scams, if you don't know what you're doing.
          </p>

          <p className="mb-6 leading-relaxed">
            I'm writing this because I've seen it happen too many times. Travelers who have budgeted carefully, flown long haul, and landed in Bali or Lombok, only to bleed money at the ATM and get shortchanged at exchange counters that look completely legitimate.
          </p>

          <p className="mb-10 leading-relaxed font-semibold text-foreground">
            Here is everything you need to know about handling money in Indonesia. Read it before you go.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            The Currency: Getting Comfortable with Rupiah
          </h2>

          <p className="mb-6 leading-relaxed">
            Indonesia's currency is the <strong>Indonesian Rupiah (IDR)</strong>. The largest banknote in circulation is the Rp 100,000 note, worth roughly USD $6. That means when you exchange $500, you walk away holding around Rp 8,000,000. Eight million.
          </p>

          <p className="mb-8 leading-relaxed">
            I say this because the numbers can be disorienting at first, and disorientation is exactly the condition that scammers exploit. Before you do anything with your money in Indonesia, get comfortable with the denominations. The notes you'll use most are the <strong>Rp 100,000 (pink/red)</strong> and <strong>Rp 50,000 (blue)</strong>. Know what they look like. Count your money carefully every single time.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            ATM Fees in Indonesia: What Nobody Tells You Before You Land
          </h2>

          <p className="mb-6 leading-relaxed">
            This is where a lot of travelers get a silent, recurring shock.
          </p>

          <p className="mb-6 leading-relaxed">
            Using your home bank card at an ATM in Indonesia can cost you <strong>around 6.5% per transaction</strong> when you factor in your bank's foreign transaction fee, the currency conversion markup, and sometimes an additional local ATM surcharge on top. If you're making multiple withdrawals throughout a trip, which most people do, those fees compound into a serious amount of money lost.
          </p>

          <img src={imgReceipt} alt="Indonesia Rupiah currency exchange scams avoid" className="w-full max-w-sm mx-auto rounded-xl my-10" />

          <p className="mb-4 leading-relaxed">Here is how the fees layer up:</p>

          <div className="space-y-3 my-6">
            {[
              {
                label: "Your home bank's foreign transaction fee",
                body: "Most traditional banks charge between 2.5% and 3.5% of the transaction amount just for using your card abroad. This is charged on your end, regardless of which ATM you use."
              },
              {
                label: "Currency conversion markup",
                body: "Separate from the transaction fee, this is the spread your bank takes on the exchange rate itself. It is often invisible but very real."
              },
              {
                label: "Local ATM surcharge",
                body: "Some Indonesian bank ATMs charge foreign cardholders an additional flat fee or percentage on top of everything else. Some ATMs charge between IDR 20,000 to IDR 75,000 per transaction to foreign cardholders, while others charge nothing. You won't always know until the screen tells you. At which point you can cancel if the fee is unreasonable."
              },
              {
                label: "The Dynamic Currency Conversion trap",
                body: "When an ATM asks whether you want to be charged in your home currency or in Rupiah, it may look like a helpful convenience. It is not. Always, always choose to be charged in Rupiah. Let your own bank handle the conversion. Their rate, however imperfect, will be better than the ATM's."
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-card border border-border rounded-xl">
                <span className="text-emerald-600 font-bold text-xl mt-0.5 shrink-0">✦</span>
                <div>
                  <p className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>{item.label}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="my-8 p-6 border border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-800/30 rounded-xl">
            <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>The single most important thing you can do to reduce ATM costs</p>
            <p className="text-muted-foreground leading-relaxed">
              Get a travel specific card before you leave home. Cards like <strong>Wise</strong>, <strong>Revolut</strong>, and <strong>Charles Schwab</strong> (for US travelers) are specifically designed for international use and can eliminate most or all of these fees. Multiple long term travelers in Indonesia confirm paying zero in ATM fees using Revolut.
            </p>
          </div>

          <p className="mb-8 leading-relaxed">
            <strong>Which ATMs to use:</strong> Stick to ATMs attached to major Indonesian bank branches. The best options for foreigners are those owned by Bank Mandiri, BCA, Danamon, Maybank, BTN, and BPTN. Avoid standalone ATMs in convenience stores, tourist kiosks, and airport arrivals halls, where fees and skimming risks are both higher.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            The Money Exchange Scam Landscape in Indonesia
          </h2>

          <p className="mb-6 leading-relaxed">
            Let me be direct: Indonesia has a serious money exchange scam problem, and it is concentrated precisely in the areas where tourists go. Bali in particular.
          </p>

          <p className="mb-6 leading-relaxed">
            The scams do not look like scams. That is the point. The offices are professional looking, air conditioned, and staffed by friendly people. Some have large signs advertising competitive rates. Some have "official" or "authorized" in their name. None of this means anything.
          </p>

          <p className="mb-6 leading-relaxed">
            The most common technique is the <strong>counting trick</strong>. You hand over your foreign cash, the staff member counts out an impressive looking stack of Rupiah, and through a practiced sleight of hand, a fold here, a palmed note there, you walk out with significantly less than you were quoted. It happens quickly. It happens in front of you. And if you are not watching carefully and counting for yourself, you will not notice until you are outside.
          </p>

          <p className="mb-6 leading-relaxed">
            Other common tactics include displaying a great rate on the board but applying a "commission" that wasn't mentioned, or simply applying a different rate than advertised once your foreign currency is already on the counter.
          </p>

          <div className="my-8 p-6 border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800/30 rounded-xl">
            <p className="font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-display)" }}>Rules that protect you at any money changer</p>
            <div className="space-y-2 text-muted-foreground">
              <p>✦ Only use licensed, well established operators. Look for the <strong>Bank Indonesia PVA Berizin</strong> logo. If you don't see it displayed, leave.</p>
              <p>✦ Count your money yourself, at the counter, before you walk away. Ask staff to use the counting machine if available. Take your time. No legitimate exchange office will rush you.</p>
              <p>✦ Bring your own calculator and verify the math independently. Don't rely on the counter's screen.</p>
              <p>✦ Never chase the rate. If an exchange office is advertising a rate that looks significantly better than everywhere else, that is not good fortune. That is the setup.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            The Only Money Changers I Trust in Indonesia
          </h2>

          <p className="mb-6 leading-relaxed text-muted-foreground">
            After extensive research and on the ground experience, these are the names that consistently earn trust from long term travelers and expatriates in Indonesia.
          </p>

          <div className="space-y-4 my-6">
            {[
              {
                name: "PT Central Kuta. Bali",
                detail: "Multiple branches in Kuta, Legian, Seminyak, Nusa Dua, Ubud, Sanur, and Denpasar. Well known for competitive rates, no commissions, and strong security. The main branch on Jalan Raya Kuta is open daily from 7:30am to 1am.",
                url: "https://www.centralkutabali.com",
                urlLabel: "centralkutabali.com"
              },
              {
                name: "PT Dirgahayu Valuta Prima (Bali Best Rate). Bali",
                detail: "Operating since 1984, with branches in Kuta, Sanur, Ubud, and near Tanah Lot Temple. They typically ask for a valid passport or ID for each transaction, which is a sign of a legitimate operation. Located on Jalan Subita No. 21X, Denpasar.",
                url: "https://www.balibestrate.com",
                urlLabel: "balibestrate.com"
              },
              {
                name: "PT Bali Maspintjinra (BMC). Bali",
                detail: "In business since 1993, with branches in Kerobokan, Legian, Sanur, and Ubud. The busiest branch is in Banjar Taman on Jalan Raya Kerobokan, easily identified by its large roadside mural of a US dollar banknote. Open daily 8am to 9pm.",
                url: null,
                urlLabel: null
              },
              {
                name: "Major Indonesian Banks. Nationwide",
                detail: "For travelers outside Bali's main tourist corridor, including Lombok, Flores, Java, or anywhere more remote, major banks such as BCA, Mandiri, and BNI provide money exchange services with clear, upfront rates. Slightly less competitive on rate but completely safe.",
                url: null,
                urlLabel: null
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-xl">
                <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-serif)" }}>{item.name}</p>
                <p className="text-muted-foreground leading-relaxed mb-3">{item.detail}</p>
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#C4541C] text-sm font-semibold hover:underline"
                    data-testid={`link-exchanger-${i}`}>
                    <ExternalLink size={13} /> {item.urlLabel}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="my-8 p-6 border border-border bg-card rounded-xl">
            <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>A note on airport exchange</p>
            <p className="text-muted-foreground leading-relaxed">
              Every airport in Indonesia has currency exchange counters in the arrivals hall. They are convenient. They are also, reliably, the worst rates you will find anywhere. Exchange only the minimum you need to get to your accommodation, cab fare, a meal, maybe a coffee, and wait until you are in town to exchange the rest at a trusted office.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Quick Reference: Money Rules for Indonesia
          </h2>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/30 rounded-xl">
              <p className="font-bold text-emerald-800 dark:text-emerald-400 mb-3 text-lg" style={{ fontFamily: "var(--font-display)" }}>Always</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Use a fee free travel card (Wise, Revolut, or equivalent) for ATM withdrawals",
                  "Choose Rupiah, not your home currency, when the ATM asks",
                  "Count your money at the counter before leaving",
                  "Use licensed, named money changers with the Bank Indonesia PVA Berizin logo",
                  "Withdraw from ATMs inside or directly attached to bank branches",
                ].map((rule, i) => (
                  <p key={i} className="flex gap-2"><span className="text-emerald-600 shrink-0">✓</span>{rule}</p>
                ))}
              </div>
            </div>
            <div className="p-5 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 rounded-xl">
              <p className="font-bold text-red-800 dark:text-red-400 mb-3 text-lg" style={{ fontFamily: "var(--font-display)" }}>Never</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Accept Dynamic Currency Conversion at ATMs or card terminals",
                  "Exchange money at airport counters beyond a small emergency amount",
                  "Use roadside kiosks, souvenir shop counters, or any place not primarily in the business of currency exchange",
                  "Chase a rate that looks significantly better than the established operators",
                ].map((rule, i) => (
                  <p key={i} className="flex gap-2"><span className="text-red-500 shrink-0">✗</span>{rule}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="my-10 p-8 border border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-800/30 rounded-xl">
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
              The Bottom Line
            </h2>
            <p className="leading-relaxed mb-3 text-muted-foreground">
              Indonesia is an extraordinary country to travel through, and the money situation is genuinely manageable once you know the rules. The ATM fees are avoidable with the right card. The scams are avoidable by sticking to known, licensed operators. Neither requires luck, just preparation.
            </p>
            <p className="font-semibold text-foreground leading-relaxed">
              Sort your travel card before you fly, save the names above, and spend your energy on the things that actually make Indonesia worth going to.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Useful Links
          </h2>

          <div className="space-y-3 my-6">
            {[
              {
                label: "Wise. Fee Free Travel Card",
                url: "https://wise.com",
                desc: "The most consistently recommended card for Indonesia travel by long term travelers."
              },
              {
                label: "Central Kuta Money Exchange. Official Site",
                url: "https://www.centralkutabali.com",
                desc: "Check their current daily rates before you go."
              },
              {
                label: "Bank Indonesia. Licensed Exchange Trader Registry",
                url: "https://www.bi.go.id",
                desc: "Official source for verifying whether a money changer is legitimately licensed."
              },
              {
                label: "XE Currency Converter",
                url: "https://www.xe.com",
                desc: "Use this to check the real mid market rate before you exchange so you know what a fair deal looks like."
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
              Have a money exchange horror story from Indonesia, or a tip I missed? Drop it in the comments. The more specific and recent, the more useful it is for everyone planning a trip.
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/blog" data-testid="link-bottom-back-to-blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C4541C] text-[#C4541C] hover:bg-[#C4541C] hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            <ArrowLeft size={16} /> All Posts
          </Link>
          <Link href="/gili-air-indonesia-travel-guide" data-testid="link-next-post"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4541C] hover:bg-[#C4541C] text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            Gili Air Guide <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
