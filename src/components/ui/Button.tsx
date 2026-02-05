import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-[#1A1A1A] text-white hover:bg-gray-800 border border-[#1A1A1A]",
            outline: "bg-transparent border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white",
            ghost: "bg-transparent text-[#1A1A1A] hover:bg-gray-100",
            link: "bg-transparent text-[#1A1A1A] underline-offset-4 hover:underline p-0",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-11 px-8 text-sm",
            lg: "h-14 px-10 text-base",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center transition-colors duration-300 font-medium tracking-wide uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    variant !== "link" ? sizes[size] : "",
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export default Button;
