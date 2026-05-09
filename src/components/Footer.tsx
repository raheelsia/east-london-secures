import { Link } from "@tanstack/react-router";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import { SITE, COURSES, LOCATIONS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold">Security Training London</div>
                <div className="text-xs opacity-80">{SITE.centre}</div>
              </div>
            </div>
            <p className="mt-4 text-sm opacity-80">
              Affordable SIA, First Aid and Fire Marshal training across East London.
              Weekly courses, expert trainers, unlimited resits on Door Supervisor.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-90">Courses</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {COURSES.map((c) => (
                <li key={c.slug}>
                  <Link to="/courses/$slug" params={{ slug: c.slug }} className="hover:text-white hover:underline">
                    {c.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-90">Locations</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link to="/locations" className="hover:text-white hover:underline">
                    {l.name} ({l.postcode})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-90">Contact</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`tel:${SITE.phone}`} className="hover:underline">{SITE.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:underline break-all">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs opacity-70 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div>{SITE.centre} · Ofqual Regulated Qualifications</div>
        </div>
      </div>
    </footer>
  );
}
