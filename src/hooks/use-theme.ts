/**
 * https://raghunathchava.com
 */
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored && (stored === "light" || stored === "dark")) {
      return stored;
    }
    // Default to system preference
    return "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return theme;
  });

  useEffect(() => {
    const root = document.documentElement;

    // Update resolved theme when theme changes
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const updateResolved = (e: MediaQueryListEvent | MediaQueryList) => {
        const newTheme = e.matches ? "dark" : "light";
        setResolvedTheme(newTheme);
        root.classList.toggle("dark", newTheme === "dark");
      };

      // Initial update
      updateResolved(mediaQuery);

      // Listen for changes
      mediaQuery.addEventListener("change", updateResolved);

      return () => {
        mediaQuery.removeEventListener("change", updateResolved);
      };
    } else {
      setResolvedTheme(theme);
      root.classList.toggle("dark", theme === "dark");
      // Return undefined cleanup function for consistency
      return undefined;
    }
  }, [theme]);

  const setThemeValue = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return {
    theme,
    resolvedTheme,
    setTheme: setThemeValue,
  };
}
