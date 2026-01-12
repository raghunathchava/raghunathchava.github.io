/**
 * https://raghunathchava.com
 */
import { useEffect, useState } from "react";

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
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto relative">
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full border-2 border-deepBlue animate-ping opacity-20" />
            <div className="absolute inset-0 rounded-full border-2 border-teal animate-ping opacity-20 animation-delay-500" />
            <div className="absolute inset-0 rounded-full border-2 border-deepBlue animate-ping opacity-20 animation-delay-1000" />

            {/* Logo circle */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-br from-deepBlue to-teal p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-deepBlue to-teal animate-pulse" />
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent mb-2">
          Raghunath Chava
        </h1>
        <p className="text-muted-foreground">GenAI Platform Operations</p>
      </div>
    </div>
  );
}
