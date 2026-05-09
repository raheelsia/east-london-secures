import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/Layout";
import { COURSES, LOCATIONS, SITE } from "@/lib/site";

const searchSchema = z.object({
  course: z.string().optional(),
});

export const Route = createFileRoute("/book")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book Your SIA Course | Reserve Your Spot — East London" },
      { name: "description", content: "Reserve your spot on this week's SIA Door Supervisor, CCTV or First Aid course in East London. Quick, simple booking." },
      { property: "og:title", content: "Book Your SIA Course — Security Training London" },
      { property: "og:description", content: "Quick & simple booking for SIA & First Aid courses in East London." },
    ],
  }),
  component: BookPage,
});

const formSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(255),
  course: z.string().min(1, "Please select a course"),
  location: z.string().min(1, "Please select a location"),
  date: z.string().optional(),
  notes: z.string().max(1000).optional(),
});

function BookPage() {
  const search = Route.useSearch();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = formSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="container mx-auto max-w-2xl px-4 py-24 text-center">
          <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[oklch(0.95_0.05_150)] text-[oklch(0.5_0.17_150)]">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-3xl font-bold text-primary md:text-4xl">Booking request received</h1>
          <p className="mt-4 text-muted-foreground">
            Thanks! Our team will call you within 1 working hour to confirm your spot and take a small deposit.
            Need it sooner? WhatsApp or call us now.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="whatsapp" size="lg">
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener"><MessageCircle className="h-5 w-5" /> WhatsApp</a>
            </Button>
            <Button asChild variant="cta" size="lg">
              <a href={`tel:${SITE.phone}`}><Phone className="h-5 w-5" /> {SITE.phoneDisplay}</a>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-gradient-hero py-14 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Reserve Your Spot</h1>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Courses start every week. Fill in the form and we'll confirm your place within 1 working hour.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1.5fr_1fr]">
          <form onSubmit={onSubmit} noValidate className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" name="name" error={errors.name} required />
              <Field label="Phone Number" name="phone" type="tel" error={errors.phone} required />
              <Field label="Email" name="email" type="email" error={errors.email} required className="md:col-span-2" />

              <div>
                <Label htmlFor="course">Course Interested In *</Label>
                <select
                  id="course" name="course" defaultValue={search.course ?? ""}
                  className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a course…</option>
                  {COURSES.map((c) => <option key={c.slug} value={c.slug}>{c.title} — £{c.price}</option>)}
                </select>
                {errors.course && <p className="mt-1 text-xs text-destructive">{errors.course}</p>}
              </div>

              <div>
                <Label htmlFor="location">Preferred Location *</Label>
                <select
                  id="location" name="location"
                  className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a venue…</option>
                  {LOCATIONS.map((l) => <option key={l.slug} value={l.slug}>{l.name} ({l.postcode})</option>)}
                </select>
                {errors.location && <p className="mt-1 text-xs text-destructive">{errors.location}</p>}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="date">Preferred Start Date</Label>
                <Input id="date" name="date" type="date" className="mt-1.5" />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="notes">Additional Notes (optional)</Label>
                <Textarea id="notes" name="notes" rows={4} className="mt-1.5" placeholder="Any questions or special requirements?" />
              </div>
            </div>

            <Button type="submit" variant="cta" size="xl" className="mt-6 w-full">
              Reserve My Spot
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              No payment required now. We'll call you to confirm and take a small deposit.
            </p>
          </form>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-primary p-6 text-primary-foreground shadow-card">
              <Calendar className="h-6 w-6 text-[oklch(0.85_0.15_80)]" />
              <h3 className="mt-3 text-lg font-bold">Need to book urgently?</h3>
              <p className="mt-2 text-sm text-white/85">Our team is on hand 7 days a week.</p>
              <div className="mt-4 flex flex-col gap-2">
                <Button asChild variant="cta" className="w-full"><a href={`tel:${SITE.phone}`}><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a></Button>
                <Button asChild variant="whatsapp" className="w-full"><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener"><MessageCircle className="h-4 w-4" /> WhatsApp Now</a></Button>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6 shadow-card">
              <h3 className="font-bold text-primary">What happens next?</h3>
              <ol className="mt-3 space-y-3 text-sm">
                {[
                  "We call you within 1 working hour",
                  "Confirm your venue, date & take small deposit",
                  "Receive joining instructions by email",
                  "Turn up, train and qualify",
                ].map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required, error, className }: { label: string; name: string; type?: string; required?: boolean; error?: string; className?: string }) {
  return (
    <div className={className}>
      <Label htmlFor={name}>{label}{required && " *"}</Label>
      <Input id={name} name={name} type={type} required={required} className="mt-1.5" />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
