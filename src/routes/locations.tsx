import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { LOCATIONS } from "@/lib/site";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "SIA Training Venues in East London | Barking · Ilford · Whitechapel · Rainham" },
      { name: "description", content: "Four convenient East London training venues for SIA Door Supervisor, CCTV and First Aid courses. Choose Barking, Ilford, Whitechapel or Rainham." },
      { property: "og:title", content: "Our East London Training Locations" },
      { property: "og:description", content: "SIA training venues in Barking, Ilford, Whitechapel and Rainham." },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <Layout>
      <section className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Our East London Locations</h1>
          <p className="mt-4 text-white/85">
            Train at the venue closest to you — all easily reached by public transport.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2">
          {LOCATIONS.map((l) => (
            <div key={l.slug} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <MapPin className="h-3.5 w-3.5" /> {l.postcode}
                  </div>
                  <h2 className="mt-3 text-2xl font-bold text-primary">{l.name}</h2>
                </div>
              </div>
              <p className="mt-3 text-muted-foreground">{l.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Train className="h-4 w-4" /> Excellent transport links
              </div>
              <Button asChild variant="cta" className="mt-5">
                <Link to="/book" search={{ course: undefined }}>Book at {l.name}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
