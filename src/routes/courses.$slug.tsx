import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Check, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { CourseImage } from "@/components/CourseImage";
import { courseBySlug, COURSES, LOCATIONS, SITE } from "@/lib/site";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = courseBySlug(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.course.title} — £${loaderData.course.price} | East London` },
          { name: "description", content: loaderData.course.summary },
          { property: "og:title", content: loaderData.course.title },
          { property: "og:description", content: loaderData.course.summary },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <Layout>
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Course not found</h1>
        <Button asChild className="mt-6"><Link to="/courses">Back to Courses</Link></Button>
      </div>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
      </div>
    </Layout>
  ),
  component: CoursePage,
});

function CoursePage() {
  const { course } = Route.useLoaderData();
  const others = COURSES.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <Layout>
      <section className="bg-gradient-hero py-14 text-primary-foreground">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <Link to="/courses" className="text-sm text-white/70 hover:text-white">← All courses</Link>
            <h1 className="mt-3 text-3xl font-bold md:text-5xl">{course.title}</h1>
            <p className="mt-4 max-w-xl text-white/85">{course.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Clock className="h-4 w-4" /> {course.duration}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><Calendar className="h-4 w-4" /> Weekly start</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5"><ShieldCheck className="h-4 w-4" /> SIA Approved</span>
            </div>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-md shadow-elegant">
            <div className="text-xs font-semibold uppercase tracking-wider text-[oklch(0.85_0.15_80)]">All-inclusive price</div>
            <div className="mt-2 text-5xl font-bold">£{course.price}</div>
            <ul className="mt-4 space-y-2 text-sm">
              {course.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-[oklch(0.85_0.15_80)]" /> {h}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-2">
              <Button asChild variant="cta" size="lg"><Link to="/book" search={{ course: course.slug }}>Reserve My Spot</Link></Button>
              <Button asChild variant="outlineLight" size="lg"><a href={`tel:${SITE.phone}`}><Phone className="h-4 w-4" /> {SITE.phoneDisplay}</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-primary">What you'll learn</h2>
            <ul className="mt-5 space-y-3">
              {course.modules.map((m) => (
                <li key={m} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[oklch(0.62_0.17_150)]" />
                  <span className="font-medium">{m}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-primary">Available at all our venues</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {LOCATIONS.map((l) => (
                <div key={l.slug} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-[oklch(0.7_0.21_45)]" />
                  <div>
                    <div className="font-semibold text-primary">{l.name}</div>
                    <div className="text-xs text-muted-foreground">{l.postcode}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside>
            <div className="overflow-hidden rounded-xl border border-border shadow-card">
              <CourseImage name={course.image} alt={course.title} className="aspect-[4/3] w-full object-cover" />
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-primary">Other courses</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((c) => (
              <Link key={c.slug} to="/courses/$slug" params={{ slug: c.slug }} className="group rounded-xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="text-xs font-semibold text-[oklch(0.7_0.21_45)]">£{c.price} · {c.duration}</div>
                <div className="mt-1 text-lg font-bold text-primary group-hover:underline">{c.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
