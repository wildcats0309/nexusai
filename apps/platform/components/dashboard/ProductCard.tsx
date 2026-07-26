import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ProductCard({
  title,
  description,
  href,
}: ProductCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-slate-500">
        {description}
      </p>

      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-800"
      >
        Open
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
