import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Calendar, CheckCircle2, MapPin, Phone, RefreshCw, ShieldCheck, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { CourseCard } from "@/components/CourseCard";
import { COURSES, LOCATIONS, SITE } from "@/lib/site";
import hero from "@/assets/hero-training.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIA Courses East London | Door Supervisor Training £400 | Weekly Start" },
      { name: "description", content: "SIA Approved Centre. SIA Door Supervisor, CCTV & First Aid courses in Barking, Ilford, Whitechapel & Rainham. Unlimited resits. Book today." },
      { property: "og:title", content: "SIA Courses East London — Security Training London" },
      { property: "og:description", content: "Weekly SIA Door Supervisor, CCTV & First Aid courses across East London. Best prices, unlimited resits." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" aria-hidden />
        <div className="container relative mx-auto grid gap-10 px-4 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> {SITE.centre}
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              SIA Courses in East London – <span className="text-[oklch(0.85_0.15_80)]">Starting Every Week</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Professional SIA Training · Unlimited Resits · Best Prices in London.
              Train in Barking, Ilford, Whitechapel or Rainham.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="cta" size="xl">
                <Link to="/book">
                  <Calendar className="h-5 w-5" /> View Dates & Book Now
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener">
                  <Phone className="h-5 w-5" /> Call / WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-sm">
              {[
                { i: ShieldCheck, t: "SIA Approved", s: "Accredited centre" },
                { i: RefreshCw, t: "Unlimited Resits", s: "On Door Supervisor" },
                { i: Award, t: "High Pass Rate", s: "Expert trainers" },
              ].map(({ i: Icon, t, s }) => (
                <div key={t} className="flex flex-col items-start gap-1">
                  <Icon className="h-5 w-5 text-[oklch(0.85_0.15_80)]" />
                  <div className="font-semibold">{t}</div>
                  <div className="text-xs text-white/70">{s}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-end justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-2xl bg-white/5 blur-2xl" />
              <div className="relative rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md shadow-elegant">
                <div className="text-xs font-semibold uppercase tracking-wider text-[oklch(0.85_0.15_80)]">Most Booked</div>
                <h3 className="mt-1 text-2xl font-bold">SIA Door Supervisor</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <div className="text-5xl font-bold">£400</div>
                  <div className="text-sm text-white/70">all inclusive</div>
                </div>
                <ul className="mt-5 space-y-2 text-sm">
                  {["6 Days Training", "Emergency First Aid Included", "FREE Fire Marshal Cert", "Unlimited Resits"].map((x) => (
                    <li key={x} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[oklch(0.85_0.15_80)]" /> {x}</li>
                  ))}
                </ul>
                <Button asChild variant="cta" size="lg" className="mt-6 w-full">
                  <Link to="/book" search={{ course: "sia-door-supervisor" }}>Reserve My Spot</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-surface">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-8 text-center md:grid-cols-4">
          {[
            { n: "10,000+", l: "Students Trained" },
            { n: "98%", l: "Pass Rate" },
            { n: "4", l: "East London Venues" },
            { n: "Weekly", l: "Course Start Dates" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl font-bold text-primary md:text-3xl">{s.n}</div>
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground md:text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-[oklch(0.7_0.21_45)]">Our Courses</div>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">SIA & Safety Courses Starting Every Week</h2>
            <p className="mt-3 text-muted-foreground">
              All courses delivered by experienced industry trainers across our East London venues.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c) => (
              <CourseCard key={c.slug} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-surface py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-[oklch(0.7_0.21_45)]">Why Choose Us</div>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">East London's Trusted SIA Training Provider</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { i: ShieldCheck, t: "SIA Approved Centre 11461", d: "Fully accredited and Ofqual regulated qualifications you can trust." },
              { i: RefreshCw, t: "Unlimited Resits", d: "Free unlimited resits on Door Supervisor — we get you qualified." },
              { i: Calendar, t: "Weekly Start Dates", d: "New courses every week so you never have to wait long." },
              { i: MapPin, t: "4 East London Venues", d: "Barking, Ilford, Whitechapel & Rainham — close to home." },
              { i: Users, t: "Expert Trainers", d: "Real-world security professionals with years of experience." },
              { i: Award, t: "Job Support & CV Help", d: "We help you take the next step into a security career." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-primary">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-[oklch(0.7_0.21_45)]">Our Locations</div>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Train Close to Home in East London</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} to="/locations" className="group rounded-xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                <MapPin className="h-5 w-5 text-[oklch(0.7_0.21_45)]" />
                <h3 className="mt-3 text-lg font-bold text-primary group-hover:underline">{l.name}</h3>
                <div className="text-xs font-medium text-muted-foreground">{l.postcode}</div>
                <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-[oklch(0.85_0.15_80)]">Reviews</div>
            <h2 className="text-3xl font-bold md:text-4xl">What Our Students Say</h2>
            <div className="mt-3 flex items-center justify-center gap-1 text-[oklch(0.85_0.15_80)]">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              <span className="ml-2 text-sm text-white/80">4.9 / 5 from 800+ reviews</span>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "James O.", c: "Barking", t: "Booked the Door Supervisor course on Monday, started Saturday. Trainer was top class and I passed first time." },
              { n: "Aisha M.", c: "Ilford", t: "Best price I could find in London and the unlimited resits gave me confidence. Got my SIA badge within weeks." },
              { n: "Daniel K.", c: "Whitechapel", t: "CCTV course was super clear and the venue is right next to the station. Highly recommend." },
            ].map((r) => (
              <div key={r.n} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex gap-0.5 text-[oklch(0.85_0.15_80)]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-3 text-white/90">"{r.t}"</p>
                <div className="mt-4 text-sm font-semibold">{r.n} <span className="font-normal text-white/60">· {r.c}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Start Your Security Career?</h2>
          <p className="max-w-xl text-white/85">
            Reserve your spot on this week's course with a small deposit. Pay the rest on your first day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="cta" size="xl">
              <Link to="/book">Reserve My Spot</Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href={`tel:${SITE.phone}`}><Phone className="h-5 w-5" /> {SITE.phoneDisplay}</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function FAQ() {
  const faqs = [
    { q: "What are the requirements to do an SIA course?", a: "You must be 18 or over and provide ID. A basic understanding of English is helpful. We'll guide you through the SIA licence application after you pass." },
    { q: "Can I get an SIA licence with a criminal record?", a: "It depends on the offence and how long ago it was. The SIA assesses each application individually. We're happy to advise based on your situation — call us for a confidential chat." },
    { q: "How long does it take to get my SIA licence?", a: "Most students complete training in 6 days, then apply to the SIA — licences are typically issued within 1–4 weeks." },
    { q: "Do you really offer unlimited resits?", a: "Yes — on the SIA Door Supervisor course you can resit any failed assessment as many times as needed at no extra cost." },
    { q: "What is included in the £400 Door Supervisor price?", a: "All training, course materials, Emergency First Aid at Work, a free Fire Marshal certificate and unlimited resits. Only the SIA licence application fee is paid separately to the SIA." },
  ];
  return (
    <section className="bg-surface py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-[oklch(0.7_0.21_45)]">FAQ</div>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-lg border border-border bg-card p-5 shadow-card">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-primary">
                {f.q}
                <span className="text-2xl font-light text-[oklch(0.7_0.21_45)] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
