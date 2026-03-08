import { Link } from "wouter";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";

export default function YogaTeacherTraining() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[50vh] overflow-hidden" data-testid="post-hero">
        <img
          src="https://traveltipsexposed.com/wp-content/uploads/2026/02/YogaTeacher.webp"
          alt="Yoga Teacher Training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-semibold bg-orange-500 text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}>Wellness</span>
            <span className="px-3 py-1 text-xs font-semibold bg-amber-600 text-white rounded-full"
              style={{ fontFamily: "var(--font-display)" }}>India</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12" data-testid="post-content">
        <Link href="/blog" data-testid="link-back-to-blog"
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-500 text-sm font-semibold mb-8 transition-colors"
          style={{ fontFamily: "var(--font-display)" }}>
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
          style={{ fontFamily: "var(--font-serif)" }} data-testid="heading-post-title">
          Ashtanga Yoga Teacher Training in Rishikesh: An Honest Review of the Experience
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
          <span className="flex items-center gap-1.5">
            <User size={14} className="text-orange-500" />
            <span data-testid="text-author">Eden</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-amber-500" />
            <span data-testid="text-date">December 2025</span>
          </span>
        </div>

        <div className="prose prose-lg max-w-none text-foreground" style={{ fontFamily: "var(--font-sans)" }} data-testid="post-body">
          <p className="lead text-xl text-muted-foreground mb-8 leading-relaxed">
            I wanted an intensive training and I got just that at the Ashtanga school.
          </p>

          <div className="my-6 p-6 border-l-4 border-orange-400 bg-orange-950/20 rounded-r-xl">
            <p className="text-lg font-semibold text-foreground leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
              The best way I can describe that experience is that it was like a military training but for yoga.
            </p>
          </div>

          <p className="mb-6 leading-relaxed">
            The days started at 6 every morning and ended up at 6 in the evening. Those days were packed with practices that didn't leave much space for the mind to wander off on anything that wasn't yoga related.
          </p>

          <p className="mb-6 leading-relaxed">
            I learned a lot. I love how being around incredible yogis forced me to push myself beyond what I would have found comfortable if I were practicing alone. The teachers were all about expressing some tough love. They know how to ruffle your feathers just enough to push yourself.
          </p>

          <p className="mb-6 leading-relaxed">
            At the end, I got exactly what I needed from that experience: I learned the ancient breathing techniques to influence my states of mind.
          </p>

          <p className="mb-10 leading-relaxed text-muted-foreground italic">
            Side note: the meals and accommodation were included in the school. The curriculum included theory and practice. It covered all the basics. We had many opportunities to practice holding space for others. Each student had the chance to guide breathwork and yoga classes while receiving valuable feedback from the teachers.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-6" style={{ fontFamily: "var(--font-serif)", color: "hsl(var(--foreground))" }}>
            Here's 3 hacks to help you have a better experience at your teacher training:
          </h2>

          <div className="space-y-5 my-8">
            <div className="flex gap-4 p-5 bg-card border border-card-border rounded-xl">
              <span className="text-2xl font-bold text-orange-500" style={{ fontFamily: "var(--font-display)" }}>1.</span>
              <div>
                <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>Magnesium</p>
                <p className="text-muted-foreground leading-relaxed">
                  Your body will be so sore at the end of each day. Do yourself a favor and recover quick with the right dose of magnesium.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-card border border-card-border rounded-xl">
              <span className="text-2xl font-bold text-amber-600" style={{ fontFamily: "var(--font-display)" }}>2.</span>
              <div>
                <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>Arnica</p>
                <p className="text-muted-foreground leading-relaxed">
                  My hamstrings got injured from overstretching. Injuries can happen when you quickly try to push yourself. Arnica will accelerate your healing process if you get injured and help you avoid missing out on your TTC while there.
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-card border border-card-border rounded-xl">
              <span className="text-2xl font-bold text-rose-600" style={{ fontFamily: "var(--font-display)" }}>3.</span>
              <div>
                <p className="font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-display)" }}>Bring earplugs with you</p>
                <p className="text-muted-foreground leading-relaxed">
                  India is noisy and you wanna be feeling on your game during the day and get them good sleeps.
                </p>
              </div>
            </div>
          </div>

          <p className="mb-6 leading-relaxed">
            Other than that we had 1 day a week off. That day allowed me and the other students to explore Rishikesh.
          </p>

          <p className="mb-6 leading-relaxed">
            The Ganges are a trip! It's a different planet alongside that river. It's fascinating to witness humans in all their flavors! Yeah, you're in for a show when you go there. Especially during their festivals. It's so surreal!
          </p>

          <p className="mb-6 leading-relaxed">
            After 2 months in Rishikesh, I was absolutely ready for a change of scene.
          </p>

          <p className="mb-6 leading-relaxed">
            A friend of mine told me about this place in the mountains where the Dalai Lama went when he fled from Tibet. That town is called Dharamshala and it was my favorite spot I visited in India.
          </p>

          <div className="my-10 p-6 border border-orange-500/20 bg-orange-950/20 bg-orange-950/10 rounded-xl">
            <p className="text-foreground font-semibold mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              I'll tell you why in the next blog post:
            </p>
            <Link href="/blog/rishikesh-to-dharamshala"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-500 font-semibold transition-colors">
              Rishikesh to Dharamshala: Your Essential Guide to India's Spiritual Hub <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/blog" data-testid="link-bottom-back-to-blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            <ArrowLeft size={16} /> All Posts
          </Link>
          <Link href="/blog/rishikesh-to-dharamshala" data-testid="link-next-post"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-500 text-white font-semibold text-sm tracking-wider uppercase rounded-md transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}>
            Rishikesh to Dharamshala <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
