import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 hover:shadow-lg",
  {
    variants: {
      variant: {
        // Duolingo Primary - Green (Main action)
        primary:
          "bg-gradient-to-b from-[#58CC02] to-[#4CAF00] text-white hover:from-[#6FD935] hover:to-[#58CC02] focus-visible:ring-[#58CC02] shadow-md hover:shadow-xl active:shadow-md",

        // Success - Light Green (Positive feedback)
        success:
          "bg-gradient-to-b from-[#7FE29E] to-[#58CC02] text-white hover:from-[#9FFFC0] hover:to-[#7FE29E] focus-visible:ring-[#58CC02] shadow-md",

        // Secondary - Blue (Alternative action)
        secondary:
          "bg-gradient-to-b from-[#1F8FE8] to-[#1565C0] text-white hover:from-[#42A5F5] hover:to-[#1F8FE8] focus-visible:ring-[#1F8FE8] shadow-md hover:shadow-xl",

        // Warning - Yellow (Caution/Streak)
        warning:
          "bg-gradient-to-b from-[#FFD700] to-[#FFC107] text-gray-900 hover:from-[#FFED4E] hover:to-[#FFD700] focus-visible:ring-[#FFD700] shadow-md font-bold",

        // Outline - Friendly style
        outline:
          "border-2 border-[#58CC02] bg-white text-[#58CC02] hover:bg-[#F0F9E8] focus-visible:ring-[#58CC02] font-semibold transition-colors",

        // Ghost - Subtle
        ghost:
          "text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-400 dark:text-gray-300 dark:hover:bg-gray-800",

        // Destructive - Red (Delete/Cancel)
        destructive:
          "bg-gradient-to-b from-[#FF6B6B] to-[#EE5A52] text-white hover:from-[#FF8787] hover:to-[#FF6B6B] focus-visible:ring-[#FF6B6B] shadow-md",

        // Link - Text only
        link: "text-[#58CC02] underline-offset-4 hover:underline font-semibold",

        // Gamification - XP/Reward button
        reward:
          "bg-gradient-to-b from-[#FFD700] via-[#FFC107] to-[#FF9800] text-white hover:from-[#FFED4E] hover:via-[#FFD700] hover:to-[#FFC107] focus-visible:ring-[#FFD700] shadow-lg hover:shadow-2xl font-bold animate-pulse",

        // Streak - Fire button
        streak:
          "bg-gradient-to-b from-[#FF6B35] to-[#F7931E] text-white hover:from-[#FF8A50] hover:to-[#FF6B35] focus-visible:ring-[#FF6B35] shadow-md font-bold",
      },

      size: {
        // Default size
        default: "h-11 px-6 py-2.5 has-[>svg]:px-4 text-sm",

        // Small size
        sm: "h-9 px-4 py-1.5 has-[>svg]:px-3 text-xs rounded-md",

        // Large size
        lg: "h-13 px-8 py-3 has-[>svg]:px-5 text-base rounded-xl",

        // Extra large (for main CTAs)
        xl: "h-14 px-10 py-3.5 has-[>svg]:px-6 text-lg rounded-2xl font-bold",

        // Icon sizes
        icon: "size-11 rounded-lg",
        "icon-sm": "size-9 rounded-md",
        "icon-lg": "size-13 rounded-xl",
      },

      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
