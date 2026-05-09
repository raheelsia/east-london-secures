import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { CourseCard } from "@/components/CourseCard";
import { COURSES } from "@/lib/site";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "All SIA & Safety Courses East London | Security Training London" },
      { name: "description", content: "Browse all our SIA Door Supervisor, CCTV, Refresher, First Aid and Fire Marshal courses across East London. Weekly start dates and best prices." },
      { property: "og:title", content: "All Courses — Security Training London" },
      { property: "og:description", content: "Weekly SIA, First Aid and Fire Marshal courses across East London." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <Layout>
      <section className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">All Courses</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            SIA, First Aid and Fire Marshal qualifications — delivered by experts across East London.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => <CourseCard key={c.slug} {...c} />)}
        </div>
      </section>
    </Layout>
  );
}
