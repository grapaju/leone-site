import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3.5 py-1.5 text-[0.65rem] font-medium tracking-[0.14em] uppercase transition-colors backdrop-blur-md",
  {
    variants: {
      variant: {
        default:
          "border-white/30 bg-black/50 text-light",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        completed: "border-gold bg-black/50 text-light",
        inProgress: "border-white/30 bg-black/50 text-light",
        launch: "border-white/30 bg-black/50 text-light",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
