import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(77,232,255,0.5)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "rounded-full bg-[linear-gradient(135deg,#4de8ff_0%,#06b6d4_100%)] px-6 py-2.5 font-sans font-semibold text-[#03010a] shadow-[0_0_20px_rgba(77,232,255,0.3)] hover:shadow-[0_0_35px_rgba(77,232,255,0.5)]",
        secondary:
          "liquid-glass rounded-full border border-[rgba(77,232,255,0.25)] px-6 py-2.5 font-sans font-normal text-[rgba(240,236,255,0.85)] hover:bg-[rgba(77,232,255,0.08)]",
        action:
          "action-btn",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
