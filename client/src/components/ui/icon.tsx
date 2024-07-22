import { forwardRef, ReactNode, SVGProps } from "react";

import { cn } from "@/lib/utils";

interface IconProps extends SVGProps<SVGSVGElement> {
  children: ReactNode;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        ref={ref}
        className={cn("h-6 w-6 fill-current", className)}
        {...props}
      >
        {children}
      </svg>
    );
  },
);

Icon.displayName = "Icon";

export default Icon;
