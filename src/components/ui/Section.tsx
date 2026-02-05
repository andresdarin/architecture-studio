import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("py-20 md:py-32", className)}
                {...props}
            >
                {children}
            </section>
        );
    }
);
Section.displayName = "Section";

export default Section;
