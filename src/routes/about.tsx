import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, ShieldCheck, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SITE } from "@/lib/site";
import hero from "@/assets/hero-training.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | SIA Approved Centre 11461 — East London" },
      { name: "description", content: "Security Training London is an SIA Approved Centre delivering affordable, expert SIA & safety training across East London since day one." },
      { property: "og:title", content: "About Us — Security Training London" },
      { property: "og:description", content: "Affordable, expert SIA training in East London. SIA Approved Centre 11461." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">About Security Training London</h1>
          <p className="mt-4 text-white/85">
            {SITE.centre} — your trusted East London partner for SIA, First Aid and Fire Marshal training.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary">Real trainers. Real careers.</h2>
            <p className="mt-4 text-muted-foreground">
              We've helped thousands of East Londoners qualify and start rewarding careers in the
              security industry. Our trainers are working professionals — door supervisors, CCTV
              operators and ex-services personnel — who know exactly what it takes to succeed on
              the job, not just pass an exam.
            </p>
            <p className="mt-3 text-muted-foreground">
              We keep our prices honest, our class sizes small and our pass rates high. With weekly
              start dates across Barking, Ilford, Whitechapel and Rainham, there's never a long wait
              to begin.
            </p>
            <Button asChild variant="cta" size="lg" className="mt-6">
              <Link to="/courses">Explore Our Courses</Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-xl border border-border shadow-card">
            <img src={hero} alt="Training session" loading="lazy" width={1600} height={1067} className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: ShieldCheck, t: "SIA Approved", d: "Centre 11461 — fully accredited" },
            { i: Users, t: "Expert Trainers", d: "Industry pros with real experience" },
            { i: Award, t: "98% Pass Rate", d: "Plus unlimited resits on DS" },
            { i: Heart, t: "Job Support", d: "CV help and career guidance" },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-xl border border-border bg-card p-6 text-center shadow-card">
              <Icon className="mx-auto h-8 w-8 text-[oklch(0.7_0.21_45)]" />
              <h3 className="mt-3 font-bold text-primary">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
