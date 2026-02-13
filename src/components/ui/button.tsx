import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

export function Button({ className, variant = "default", size = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
        variant === "default" && "bg-[var(--primary)] text-[var(--primary-foreground)] hover:brightness-95",
        variant === "destructive" && "bg-[var(--destructive)] text-white hover:brightness-95",
        variant === "outline" && "border border-[var(--border)] bg-white text-[var(--foreground)] hover:bg-[var(--accent)]",
        variant === "secondary" && "bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[var(--accent)]",
        variant === "ghost" && "text-[var(--foreground)] hover:bg-[var(--accent)]",
        variant === "link" && "h-auto rounded-none p-0 text-[var(--dashboard-foreground)] underline-offset-4 hover:underline",
        size === "default" && "h-12 px-4",
        size === "sm" && "h-10 px-3",
        size === "lg" && "h-14 px-6",
        size === "icon" && "h-12 w-12",
        className
      )}
      {...props}
    />
  );
}
