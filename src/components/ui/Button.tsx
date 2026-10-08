import { ArrowRight, Play } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "ghost" | "outline" | "red";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  icon?: "arrow" | "play" | "none";
  children: ReactNode;
}

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-white/10 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.2),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 backdrop-blur-md",
  outline:
    "border border-white/10 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 shadow-[inset_0_0_0_1px_transparent] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]",
  ghost:
    "text-white/60 hover:text-white hover:bg-white/5",
  red:
    "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300",
};

export function Button({
  variant = "primary",
  icon = "arrow",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link href={props.href || "#"} className={`${base} ${variants[variant]} ${className}`} {...(props as any)}>
      {icon === "play" && (
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current">
          <Play className="h-3.5 w-3.5 fill-current" />
        </span>
      )}
      {children}
      {icon === "arrow" && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}
