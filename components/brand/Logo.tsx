import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
  href?: string;
};

export function Logo({ className, showTagline = false, href = "/" }: LogoProps) {
  return (
    <Link href={href} className={cn("group flex items-center gap-3", className)}>
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 shadow-elevation-1 transition-transform group-hover:scale-[1.02] dark:from-[#8ab4f8] dark:to-[#669df6]"
        aria-hidden
      >
        <span className="text-sm font-bold text-white dark:text-[#062e6f]">M</span>
      </span>
      <span className="flex flex-col">
        <span className="text-[15px] font-medium tracking-tight text-ink dark:text-[#e3e3e3]">
          MobilityForge
        </span>
        {showTagline && (
          <span className="hidden text-xs text-ink-muted sm:block">
            Mobile engineering playbook
          </span>
        )}
      </span>
    </Link>
  );
}
