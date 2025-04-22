
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLeft?: boolean;
}

const Step = ({ number, title, description, icon: Icon, isLeft = true }: StepProps) => {
  return (
    <div className="flex items-center justify-center gap-4 relative">
      {/* Timeline line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-nile-200 -z-10" />
      
      {/* Content */}
      <div className={cn(
        "grid grid-cols-[1fr,auto,1fr] w-full items-center gap-4",
        "md:grid-cols-[1fr,auto,1fr]"
      )}>
        {/* Left side content */}
        <div className={cn(
          "col-span-1",
          isLeft ? "text-right" : "text-right opacity-0"
        )}>
          {isLeft && (
            <div className="space-y-2">
              <h3 className="font-semibold text-xl flex items-center justify-end gap-2">
                <span>{title}</span>
                <Icon className="h-5 w-5 text-nile-600" />
              </h3>
              <p className="text-gray-600 max-w-md ml-auto leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>

        {/* Center number and icon */}
        <div className="relative flex flex-col items-center justify-center gap-2">
          <div className="w-10 h-10 rounded-full bg-nile-600 text-white flex items-center justify-center font-bold text-lg">
            {number}
          </div>
          <div className="w-12 h-12 rounded-full bg-nile-50 border-2 border-nile-200 flex items-center justify-center">
            <Icon className="h-6 w-6 text-nile-600" />
          </div>
        </div>

        {/* Right side content */}
        <div className={cn(
          "col-span-1",
          !isLeft ? "text-left" : "text-left opacity-0"
        )}>
          {!isLeft && (
            <div className="space-y-2">
              <h3 className="font-semibold text-xl flex items-center gap-2">
                <Icon className="h-5 w-5 text-nile-600" />
                <span>{title}</span>
              </h3>
              <p className="text-gray-600 max-w-md leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface StepLayoutProps {
  steps: Array<{
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
  }>;
}

const StepLayout = ({ steps }: StepLayoutProps) => {
  return (
    <div className="space-y-16 py-8">
      {steps.map((step, idx) => (
        <Step 
          key={step.number} 
          {...step} 
          isLeft={idx % 2 === 0}
        />
      ))}
    </div>
  );
};

export default StepLayout;
