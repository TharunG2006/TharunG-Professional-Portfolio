import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
    title?: string;
    children: ReactNode;
    className?: string;
}

export const TerminalWindow = ({ title = "TERMINAL", children, className }: TerminalWindowProps) => {
    return (
        <div className={cn(
            "border border-white/20 bg-[#2a2440]/80 backdrop-blur-xl rounded-lg overflow-hidden shadow-lg",
            className
        )}>
            {/* Header - Mac/Retro OS style */}
            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-color-alert-red opacity-80" />
                    <div className="w-3 h-3 rounded-full bg-color-neon-green opacity-80" />
                    <div className="w-3 h-3 rounded-full bg-color-neon-green opacity-80" />
                </div>
                <span className="text-gray-400 text-xs font-mono uppercase tracking-widest text-center flex-1">
                    {title}
                </span>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 text-foreground font-mono text-sm leading-relaxed">
                {children}
            </div>
        </div>
    );
};
