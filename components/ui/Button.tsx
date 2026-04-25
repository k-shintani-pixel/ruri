import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-ink border-2 border-accent hover:bg-accent-dark hover:border-accent-dark transition-colors",
  secondary:
    "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-white transition-colors",
  ghost:
    "bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-white transition-colors",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-10 py-4 text-lg",
};

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type AsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = AsButton | AsAnchor;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-sans font-medium tracking-wider rounded-none cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as AsAnchor;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as AsButton)}>
      {children}
    </button>
  );
}
