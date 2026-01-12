/**
 * https://raghunathchava.com
 */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useAnalytics } from "@/hooks/useAnalytics";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/components";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const navItems: NavItem[] = [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Experience",
      href: "/experience",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-md py-3"
          : "bg-background/50 backdrop-blur-sm border-b border-border/50 py-4",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/images/SARAISE-LOGO.png"
              alt="Raghunath Chava Logo"
              className="h-12 w-auto min-w-[48px] object-contain"
            />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
              Raghunath Chava
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground uppercase tracking-wider transition-colors relative group"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-deepBlue transition-all group-hover:w-full" />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div
                      className={cn(
                        "absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg transition-all duration-200",
                        activeDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2",
                      )}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-4 space-y-2">
                        {item.children.map((child) =>
                          child.external ? (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-3 rounded-lg hover:bg-secondary transition-colors group"
                            >
                              <div className="font-medium text-foreground group-hover:text-deepBlue transition-colors">
                                {child.label}
                              </div>
                              {child.description && (
                                <div className="text-sm text-muted-foreground mt-1">
                                  {child.description}
                                </div>
                              )}
                            </a>
                          ) : (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block p-3 rounded-lg hover:bg-secondary transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="font-medium text-foreground group-hover:text-deepBlue transition-colors">
                                {child.label}
                              </div>
                              {child.description && (
                                <div className="text-sm text-muted-foreground mt-1">
                                  {child.description}
                                </div>
                              )}
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  </>
                ) : item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground uppercase tracking-wider transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-deepBlue transition-all group-hover:w-full" />
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground uppercase tracking-wider transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-deepBlue transition-all group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* GitHub CTA */}
            <a
              href="https://github.com/buildworksai/saraise-application"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent({
                  name: "cta_click",
                  category: "conversion",
                  properties: {
                    elementId: "nav_github_cta",
                    elementType: "button",
                    elementText: "GitHub",
                    targetUrl:
                      "https://github.com/buildworksai/saraise-application",
                    trackingId: "cta_nav_github",
                    icpTarget: "developer",
                  },
                });
              }}
              className="px-4 py-2 bg-gradient-to-r from-deepBlue to-teal text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="flex items-center justify-between w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground uppercase tracking-wider transition-colors py-2"
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            activeDropdown === item.label && "rotate-180",
                          )}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 space-y-2 pb-2">
                          {item.children.map((child) =>
                            child.external ? (
                              <a
                                key={child.href}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleMobileMenuClose}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                              >
                                {child.label}
                              </a>
                            ) : (
                              <Link
                                key={child.href}
                                to={child.href}
                                onClick={handleMobileMenuClose}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                              >
                                {child.label}
                              </Link>
                            ),
                          )}
                        </div>
                      )}
                    </>
                  ) : item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleMobileMenuClose}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground uppercase tracking-wider transition-colors py-2 block"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={handleMobileMenuClose}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground uppercase tracking-wider transition-colors py-2 block"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                  aria-label="Toggle theme"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>

              <a
                href="https://github.com/buildworksai/saraise-application"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handleMobileMenuClose();
                  trackEvent({
                    name: "cta_click",
                    category: "conversion",
                    properties: {
                      elementId: "nav_mobile_github_cta",
                      elementType: "button",
                      elementText: "GitHub",
                      targetUrl:
                        "https://github.com/buildworksai/saraise-application",
                      trackingId: "cta_nav_mobile_github",
                      icpTarget: "developer",
                    },
                  });
                }}
                className="px-4 py-2 bg-gradient-to-r from-deepBlue to-teal text-white rounded-lg font-semibold text-sm text-center mt-4"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
