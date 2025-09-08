import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ElementType } from "react";

function CareerLink({
  href,
  icon: Icon,
  title,
}: {
  href: string;
  icon: ElementType;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between !rounded-none p-4 transition-colors group border bg-primary-color hover:opacity-90"
    >
      <div className="flex items-center gap-3">
        <Icon className="text-white group-hover:text-white/90" size={24} />
        <span className="text-white font-bold group-hover:text-white/90">{title}</span>
      </div>
      <ChevronRight className="size-5 text-white group-hover:translate-x-1 group-hover:text-white/90 group-hover:duration-200" />
    </Link>
  );
}

export default CareerLink;
