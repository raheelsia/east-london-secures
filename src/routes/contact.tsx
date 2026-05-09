import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Security Training London | SIA Courses East London" },
      { name: "description", content: "Get in touch with our friendly team for SIA, First Aid and Fire Marshal course bookings across East London. Call, WhatsApp or email." },
      { property: "og:title", content: "Contact Us — Security Training London" },
      { property: "og:description", content: "Call, WhatsApp or email our East London team about SIA training." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-white/85">
            Friendly advice from our East London team — 7 days a week.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          <Card icon={Phone} title="Call us" cta={SITE.phoneDisplay} href={`tel:${SITE.phone}`} desc="Speak to a course advisor right away." />
          <Card icon={MessageCircle} title="WhatsApp" cta="Message us" href={`https://wa.me/${SITE.whatsapp}`} desc="Quick replies from our booking team." />
          <Card icon={Mail} title="Email" cta={SITE.email} href={`mailto:${SITE.email}`} desc="We reply within 1 working hour." />
          <div className="rounded-xl border border-border bg-card p-6 shadow-card md:col-span-2">
            <MapPin className="h-6 w-6 text-[oklch(0.7_0.21_45)]" />
            <h3 className="mt-3 text-lg font-bold text-primary">Locations</h3>
            <p className="mt-2 text-muted-foreground">{SITE.address}</p>
            <p className="mt-1 text-sm text-muted-foreground">Exact venue address sent on booking confirmation.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <Clock className="h-6 w-6 text-[oklch(0.7_0.21_45)]" />
            <h3 className="mt-3 text-lg font-bold text-primary">Office Hours</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Mon–Fri: 8:00 – 20:00</li>
              <li>Sat–Sun: 9:00 – 18:00</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Card({ icon: Icon, title, cta, href, desc }: { icon: React.ElementType; title: string; cta: string; href: string; desc: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-card">
      <Icon className="h-6 w-6 text-[oklch(0.7_0.21_45)]" />
      <h3 className="mt-3 text-lg font-bold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      <Button asChild variant="cta" className="mt-4 w-full"><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">{cta}</a></Button>
    </div>
  );
}
