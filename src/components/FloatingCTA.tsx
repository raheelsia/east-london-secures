import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book an SIA course in East London.")}`}
        target="_blank"
        rel="noopener"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.17_150)] text-white shadow-elegant transition-transform hover:scale-110"
        aria-label="WhatsApp us"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href={`tel:${SITE.phone}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-cta text-cta-foreground shadow-cta transition-transform hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
