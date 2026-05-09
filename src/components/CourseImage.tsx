import door from "@/assets/course-door.jpg";
import cctv from "@/assets/course-cctv.jpg";
import refresher from "@/assets/course-refresher.jpg";
import firstaid from "@/assets/course-firstaid.jpg";
import fire from "@/assets/course-fire.jpg";

const map: Record<string, string> = { door, cctv, refresher, firstaid, fire };

export function CourseImage({ name, alt, className }: { name: string; alt: string; className?: string }) {
  return <img src={map[name]} alt={alt} loading="lazy" className={className} width={1024} height={768} />;
}
