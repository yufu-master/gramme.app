import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "lg";
};

export function Button({ className, variant = "default", size = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
        variant === "default" && "bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700",
        variant === "outline" && "border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-100",
        variant === "ghost" && "px-4 py-2 text-slate-700 hover:bg-slate-100",
        size === "lg" && "px-6 py-3.5 text-base",
        className
      )}
      {...props}
    />
  );
}
