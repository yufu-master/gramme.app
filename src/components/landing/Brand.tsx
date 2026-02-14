import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_PATH = "/logos/gramme-icon.svg";

export function BrandIcon({ className }: { className?: string }) {
  return (
    <Image
      src={LOGO_PATH}
      alt="Gramme"
      width={36}
      height={36}
      className={cn("object-contain", className)}
    />
  );
}

export function BrandWordmark({ className }: { className?: string }) {
  return <span className={cn("text-lg font-extrabold tracking-tight text-[var(--foreground)]", className)}>GRAMME</span>;
}
