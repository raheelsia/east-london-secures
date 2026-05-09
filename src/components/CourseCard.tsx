import { Link } from "@tanstack/react-router";
import { Clock, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseImage } from "./CourseImage";

interface Props {
  slug: string;
  title: string;
  price: number;
  duration: string;
  image: string;
  badge?: string;
  highlights: string[];
  summary: string;
}

export function CourseCard({ slug, title, price, duration, image, badge, highlights, summary }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <CourseImage name={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {badge && (
          <div className="absolute left-3 top-3 rounded-full bg-gradient-cta px-3 py-1 text-xs font-bold uppercase tracking-wider text-cta-foreground shadow-cta">
            {badge}
          </div>
        )}
        <div className="absolute right-3 top-3 rounded-md bg-white/95 px-3 py-1 text-sm font-bold text-primary shadow">
          £{price}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Clock className="h-3.5 w-3.5" /> {duration}
        </div>
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{summary}</p>
        <ul className="mt-3 space-y-1.5">
          {highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.62_0.17_150)]" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-1 items-end gap-2">
          <Button asChild variant="cta" className="flex-1">
            <Link to="/book" search={{ course: slug }}>Book Now</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/courses/$slug" params={{ slug }}>
              Details <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
