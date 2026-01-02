import * as React from "react";
import styles from "./Button.module.css";

// 1. Define the Types
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "glow"
    | "glass"
    | "gradient";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
}

const variantStyles = {
  default: styles.default,
  destructive: styles.destructive,
  outline: styles.outline,
  secondary: styles.secondary,
  ghost: styles.ghost,
  link: styles.link,
  glow: styles.glow,
  glass: styles.glass,
  gradient: styles.gradient,
};


const sizeStyles = {
  default: styles.size_default,
  sm: styles.size_sm,
  lg: styles.size_lg,
  xl: styles.size_xl,
  icon: styles.size_icon,
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {

    const variantClass = variantStyles[variant];
    const sizeClass = sizeStyles[size];

    
    const combinedClasses = [
      styles.button, 
      variantClass,
      sizeClass,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return <button className={combinedClasses} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };
