import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// primary: indigo, for use on cream cards. cream: the header CTA on dark. soft: lavender pill.
export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-control font-semibold transition-[color,background-color,transform] select-none duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:motion-safe:scale-[1.03] active:motion-safe:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 motion-reduce:transition-colors [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-accent-strong text-on-dark hover:bg-accent-strong/90",
        cream: "bg-cta-cream text-on-cream hover:bg-cta-cream/90",
        soft: "bg-accent-soft text-accent-strong hover:bg-accent-soft/80",
        outline: "border border-tone-line text-tone-fg hover:bg-tone-surface",
        ghost: "text-tone-fg hover:bg-tone-surface",
      },
      size: {
        sm: "h-10 px-3.5 text-sm",
        md: "h-11 px-5 text-[0.95rem]",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
