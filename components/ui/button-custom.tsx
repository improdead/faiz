import React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "store"
  size?: "sm" | "md" | "lg"
  withIcon?: boolean
  glow?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

export const ButtonCustom = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      withIcon = false,
      glow = false,
      icon,
      iconPosition = "right",
      children,
      ...props
    },
    ref,
  ) => {
    const baseClasses = "btn"
    const variantClasses = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      outline: "btn-outline",
      store: "btn-store",
    }
    const sizeClasses = {
      sm: "text-sm py-2 px-4",
      md: "py-2.5 px-6",
      lg: "text-lg py-3 px-8",
    }
    const iconClasses = withIcon ? "btn-with-icon" : ""
    const glowClasses = glow ? "btn-glow" : ""

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], iconClasses, glowClasses, className)}
        {...props}
      >
        {iconPosition === "left" && icon && <span>{icon}</span>}
        {children}
        {iconPosition === "right" && (icon || (withIcon && <ArrowRight className="ml-2 h-4 w-4" />))}
      </button>
    )
  },
)

ButtonCustom.displayName = "ButtonCustom"
