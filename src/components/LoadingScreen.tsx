/**
 * https://raghunathchava.com
 */
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center">
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-2 border-deepBlue animate-ping opacity-20" />
            <div className="absolute inset-0 rounded-full border-2 border-teal animate-ping opacity-20 animation-delay-500" />
            <Logo size={96} className="relative" />
          </div>
        </div>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent mb-2">
          Raghunath Chava
        </h1>
        <p className="text-muted-foreground">Enterprise AI Automation & Transformation</p>
      </div>
    </div>
  );
}
