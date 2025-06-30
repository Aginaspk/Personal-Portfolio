import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type InteractiveHoverButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative font-outfit inline-flex cursor-pointer items-center overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pr-[3px] pl-6 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-2 md:px-5 w-auto",
        className
      )}
      {...props}
    >
      <div className="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-white transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0  transition-all duration-300 group-hover:-translate-x-4 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight size={16} className="mt-[2px]"/>
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
