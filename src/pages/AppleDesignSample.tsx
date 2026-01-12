/**
 * https://raghunathchava.com
 * Apple Design Sample - Demonstrating Apple Design Principles Applied to Raghunath Chava
 *
 * Based on: https://developer.apple.com/design/tips/
 *
 * Key Principles Applied:
 * - Clean, minimal layout with generous white space
 * - Large, readable typography (11pt minimum, larger for headings)
 * - High contrast for legibility
 * - Touch-friendly targets (44pt minimum)
 * - Clear content organization
 * - Minimal color palette (black/white/gray with subtle accents)
 */

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Moon,
  Sun,
  TrendingUp,
  DollarSign,
  Package,
  Users,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

// Dashboard Preview Component - Apple Style
function DashboardPreviewApple() {
  const metrics = [
    {
      label: "Revenue",
      value: "$124,580",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-500 dark:text-green-400",
    },
    {
      label: "Orders",
      value: "1,247",
      change: "+8.2%",
      icon: Package,
      color: "text-deepBlue dark:text-deepBlue-light",
    },
    {
      label: "Customers",
      value: "3,421",
      change: "+15.3%",
      icon: Users,
      color: "text-teal dark:text-teal-light",
    },
    {
      label: "Growth",
      value: "24.8%",
      change: "+5.1%",
      icon: TrendingUp,
      color: "text-gold dark:text-gold-light",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "Sale",
      description: "Order #1247 - $2,450",
      time: "2m ago",
    },
    {
      id: 2,
      type: "Payment",
      description: "Invoice #892 - $1,200",
      time: "15m ago",
    },
    {
      id: 3,
      type: "Inventory",
      description: "Stock updated - Widget A",
      time: "1h ago",
    },
    {
      id: 4,
      type: "Customer",
      description: "New customer registered",
      time: "2h ago",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-2xl transition-colors">
      {/* Mock Browser Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Dashboard
        </span>
      </div>

      {/* Metrics Grid - 50% Smaller with Colorful Trends */}
      <div className="grid grid-cols-2 gap-2.5 mb-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;

          // Generate mini trend data for each metric (7 data points)
          const trendDataSets: number[][] = [
            [45, 52, 48, 58, 55, 62, 65], // Revenue trend
            [820, 950, 880, 1020, 980, 1100, 1247], // Orders trend
            [2100, 2400, 2250, 2600, 2500, 2900, 3421], // Customers trend
            [18.5, 19.2, 18.8, 20.1, 19.8, 22.5, 24.8], // Growth trend
          ];
          const trendData = (
            index < trendDataSets.length
              ? trendDataSets[index]
              : trendDataSets[0]
          ) as number[];

          // Normalize trend data to 0-100 for visualization
          const maxValue = Math.max(...trendData);
          const minValue = Math.min(...trendData);
          const range = maxValue - minValue || 1;
          const normalizedTrend = trendData.map(
            (val) => ((val - minValue) / range) * 100,
          );

          // Color schemes for each metric
          const trendGradients = [
            "from-green-400 via-green-500 to-green-600",
            "from-deepBlue via-deepBlue-light to-teal",
            "from-teal via-teal-light to-deepBlue-light",
            "from-gold via-yellow-400 to-gold-light",
          ];
          const trendGradient = (
            index < trendGradients.length
              ? trendGradients[index]
              : trendGradients[0]
          ) as string;

          // SVG color values for each metric
          const svgColors: Array<{ fill: string; stroke: string }> = [
            { fill: "#22c55e", stroke: "#16a34a" }, // green-500/green-600
            { fill: "#1e40af", stroke: "#3b82f6" }, // deepBlue
            { fill: "#14b8a6", stroke: "#2dd4bf" }, // teal
            { fill: "#eab308", stroke: "#facc15" }, // gold/yellow
          ];
          const svgColor = (
            index < svgColors.length ? svgColors[index] : svgColors[0]
          ) as { fill: string; stroke: string };

          return (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-2.5 hover:border-deepBlue/30 dark:hover:border-teal/30 transition-all relative overflow-hidden group"
            >
              {/* Animated background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${trendGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="relative">
                <div className="flex items-center justify-between mb-1.5">
                  <Icon className={`w-3.5 h-3.5 ${metric.color}`} />
                  <span className="text-[10px] text-gray-600 dark:text-gray-400 flex items-center gap-0.5 font-medium">
                    <ArrowUpRight className="w-2.5 h-2.5 text-green-500 dark:text-green-400" />
                    {metric.change}
                  </span>
                </div>

                <div className="text-xl font-semibold text-gray-900 dark:text-white mb-1 leading-tight">
                  {metric.value}
                </div>

                <div className="text-[10px] text-gray-600 dark:text-gray-400 uppercase tracking-wider font-medium mb-2">
                  {metric.label}
                </div>

                {/* Colorful Mini Trend Sparkline */}
                <div className="relative h-8 bg-white/50 dark:bg-gray-900/50 rounded-lg p-1 border border-gray-200/50 dark:border-gray-700/50">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 30"
                    preserveAspectRatio="none"
                  >
                    {/* Gradient definition */}
                    <defs>
                      <linearGradient
                        id={`trend-gradient-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor={svgColor.fill}
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor={svgColor.fill}
                          stopOpacity="0.05"
                        />
                      </linearGradient>
                      <linearGradient
                        id={`trend-line-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor={svgColor.stroke}
                          stopOpacity="0.6"
                        />
                        <stop
                          offset="50%"
                          stopColor={svgColor.stroke}
                          stopOpacity="1"
                        />
                        <stop
                          offset="100%"
                          stopColor={svgColor.stroke}
                          stopOpacity="0.8"
                        />
                      </linearGradient>
                    </defs>

                    {/* Area fill */}
                    <path
                      d={`M 0,30 ${normalizedTrend.map((val, i) => `L ${(i * 100) / (normalizedTrend.length - 1)},${30 - val}`).join(" ")} L 100,30 Z`}
                      fill={`url(#trend-gradient-${index})`}
                    />

                    {/* Trend line */}
                    <path
                      d={`M ${normalizedTrend.map((val, i) => `${(i * 100) / (normalizedTrend.length - 1)},${30 - val}`).join(" L ")}`}
                      fill="none"
                      stroke={`url(#trend-line-${index})`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Data points */}
                    {normalizedTrend.map((val, i) => (
                      <circle
                        key={i}
                        cx={(i * 100) / (normalizedTrend.length - 1)}
                        cy={30 - val}
                        r="1.5"
                        fill={svgColor.fill}
                        opacity="0.8"
                      />
                    ))}
                  </svg>

                  {/* Trend indicator overlay */}
                  <div className="absolute bottom-0 right-1 flex items-center gap-0.5">
                    <div
                      className="w-1 h-1 rounded-full animate-pulse"
                      style={{ backgroundColor: svgColor.fill }} // Dynamic color - must use inline style
                    ></div>
                    <span className="text-[8px] text-gray-500 dark:text-gray-500 font-medium">
                      Live
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sales Trend Chart - Professional Design */}
      <div className="mb-8">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
          {/* Chart Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                Sales Trend
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Last 12 Months
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-deepBlue to-teal"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                  Revenue
                </span>
              </div>
              <div className="text-xs text-green-600 dark:text-green-400 font-semibold">
                +24.8% YoY
              </div>
            </div>
          </div>

          {/* Chart Container */}
          <div className="relative">
            {/* Y-Axis Labels - $0 at bottom, $100K at top */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400 font-medium pr-2">
              <span>$100K</span>
              <span>$75K</span>
              <span>$50K</span>
              <span>$25K</span>
              <span className="self-start">$0</span>
            </div>

            {/* Chart Area */}
            <div className="ml-12 relative h-[192px] pb-8">
              {/* Grid Lines */}
              <div className="absolute inset-0 pb-8">
                <div className="h-full flex flex-col justify-between">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="border-t border-gray-200 dark:border-gray-700"
                    />
                  ))}
                </div>
              </div>

              {/* Baseline - Clear bottom border */}
              <div className="absolute left-0 right-0 bottom-8 border-b-2 border-gray-400 dark:border-gray-500"></div>

              {/* Chart Bars Container - Anchored to bottom */}
              <div className="absolute left-0 right-0 bottom-8 h-40 flex justify-between gap-1.5 px-2">
                {[
                  { value: 65, month: "J" },
                  { value: 80, month: "F" },
                  { value: 45, month: "M" },
                  { value: 90, month: "A" },
                  { value: 70, month: "M" },
                  { value: 85, month: "J" },
                  { value: 95, month: "J" },
                  { value: 75, month: "A" },
                  { value: 60, month: "S" },
                  { value: 88, month: "O" },
                  { value: 72, month: "N" },
                  { value: 82, month: "D" },
                ].map((item, index) => {
                  const heightPercent = (item.value / 100) * 100;
                  const barHeight = (heightPercent / 100) * 160; // 160px is the chart height
                  const isCurrentMonth = index === 11; // December is current

                  return (
                    <div
                      key={index}
                      className="relative flex-1 h-40 flex flex-col items-center justify-end group"
                    >
                      {/* Bar - Absolutely positioned at bottom */}
                      <div
                        className={`w-full rounded-t transition-all duration-200 cursor-pointer min-h-1 ${
                          isCurrentMonth
                            ? "bg-gradient-to-t from-deepBlue via-deepBlue-light to-teal shadow-md shadow-deepBlue/20"
                            : "bg-gradient-to-t from-deepBlue/80 via-deepBlue-light/80 to-teal/80 hover:from-deepBlue hover:via-deepBlue-light hover:to-teal"
                        }`}
                        style={{
                          height: `${barHeight}px`, // Dynamic height - must use inline style
                        }}
                      >
                        {/* Hover Tooltip */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg z-10 pointer-events-none">
                          ${(item.value * 1000).toLocaleString()}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-800"></div>
                        </div>
                      </div>

                      {/* Month Label - positioned below baseline */}
                      <div className="absolute -bottom-6 text-xs font-medium text-gray-600 dark:text-gray-400">
                        {item.month}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            Recent Activity
          </span>
        </div>
        <div className="space-y-2">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between text-sm p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal/30 dark:hover:border-teal/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal dark:bg-teal-light" />
                <span className="text-gray-600 dark:text-gray-400 font-medium">
                  {activity.type}
                </span>
                <span className="text-gray-900 dark:text-white">
                  {activity.description}
                </span>
              </div>
              <span className="text-gray-500 dark:text-gray-500 text-xs">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AppleDesignSample() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Navigation - Apple Style: Simple, Clean */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/assets/images/Raghunath Chava-LOGO.png"
                alt="Raghunath Chava Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-semibold bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent">
                Raghunath Chava
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/product"
                className="text-base text-gray-700 dark:text-gray-300 hover:text-deepBlue dark:hover:text-teal transition-colors"
              >
                Product
              </Link>
              <Link
                to="/solutions"
                className="text-base text-gray-700 dark:text-gray-300 hover:text-deepBlue dark:hover:text-teal transition-colors"
              >
                Solutions
              </Link>
              <Link
                to="/enterprise"
                className="text-base text-gray-700 dark:text-gray-300 hover:text-deepBlue dark:hover:text-teal transition-colors"
              >
                Enterprise
              </Link>
              <Link
                to="/pricing"
                className="text-base text-gray-700 dark:text-gray-300 hover:text-deepBlue dark:hover:text-teal transition-colors"
              >
                Pricing
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-deepBlue to-teal text-white rounded-full text-base font-medium hover:from-deepBlue-dark hover:to-teal-dark transition-all shadow-lg shadow-deepBlue/20"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Apple Style: Large Typography, Generous Spacing */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-base text-teal dark:text-teal-light mb-6 tracking-wide uppercase transition-colors font-medium">
              Open-Source ERP
            </p>
            <h1 className="text-7xl font-semibold leading-tight mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-deepBlue via-teal to-deepBlue bg-clip-text text-transparent dark:from-teal-light dark:via-teal dark:to-deepBlue-light">
                The ERP for
                <br />
                Modern Teams
              </span>
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12 max-w-2xl transition-colors">
              Finance, Inventory, CRM, HR and Automation. Deploy in minutes.
              Scale to millions.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-deepBlue to-teal text-white rounded-full text-lg font-medium hover:from-deepBlue-dark hover:to-teal-dark transition-all inline-flex items-center gap-2 min-h-[44px] shadow-lg shadow-deepBlue/30"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="https://github.com/buildworksai/saraise-application"
                className="px-8 py-4 border-2 border-deepBlue dark:border-teal text-deepBlue dark:text-teal rounded-full text-lg font-medium hover:bg-deepBlue/5 dark:hover:bg-teal/10 transition-colors inline-flex items-center gap-2 min-h-[44px]"
              >
                View on GitHub
              </Link>
            </div>
          </div>

          {/* Right Dashboard - Apple Style */}
          <div className="hidden lg:block">
            <DashboardPreviewApple />
          </div>
        </div>
      </section>

      {/* Features Section - Apple Style: Clear Organization, Card-Based */}
      <section className="bg-gray-50 dark:bg-gray-800 py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-semibold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent dark:from-teal-light dark:to-deepBlue-light">
                Complete ERP Suite
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
              Everything you need to run your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card */}
            <div className="bg-white dark:bg-gray-900 p-10 rounded-2xl transition-colors border border-gray-200 dark:border-gray-800 hover:border-deepBlue/30 dark:hover:border-teal/30 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-deepBlue/10 to-teal/10 dark:from-deepBlue/20 dark:to-teal/20 rounded-xl mb-6 flex items-center justify-center transition-colors">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors">
                Accounting & Ledger
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-base text-gray-600 dark:text-gray-300 transition-colors">
                  <Check className="w-5 h-5 text-teal dark:text-teal-light mt-0.5 flex-shrink-0" />
                  <span>General Ledger</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-600 dark:text-gray-300 transition-colors">
                  <Check className="w-5 h-5 text-teal dark:text-teal-light mt-0.5 flex-shrink-0" />
                  <span>AP/AR Management</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-600 dark:text-gray-300 transition-colors">
                  <Check className="w-5 h-5 text-teal dark:text-teal-light mt-0.5 flex-shrink-0" />
                  <span>Bank Reconciliation</span>
                </li>
              </ul>
            </div>

            {/* Feature Card */}
            <div className="bg-white dark:bg-gray-900 p-10 rounded-2xl transition-colors border border-gray-200 dark:border-gray-800 hover:border-deepBlue/30 dark:hover:border-teal/30 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-deepBlue/10 to-teal/10 dark:from-deepBlue/20 dark:to-teal/20 rounded-xl mb-6 flex items-center justify-center transition-colors">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors">
                CRM & Sales
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-base text-gray-600 dark:text-gray-300 transition-colors">
                  <Check className="w-5 h-5 text-teal dark:text-teal-light mt-0.5 flex-shrink-0" />
                  <span>Lead Management</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-600 dark:text-gray-300 transition-colors">
                  <Check className="w-5 h-5 text-teal dark:text-teal-light mt-0.5 flex-shrink-0" />
                  <span>Sales Pipeline</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-600 dark:text-gray-300 transition-colors">
                  <Check className="w-5 h-5 text-teal dark:text-teal-light mt-0.5 flex-shrink-0" />
                  <span>Contact Management</span>
                </li>
              </ul>
            </div>

            {/* Feature Card */}
            <div className="bg-white dark:bg-gray-900 p-10 rounded-2xl transition-colors border border-gray-200 dark:border-gray-800 hover:border-deepBlue/30 dark:hover:border-teal/30 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-deepBlue/10 to-teal/10 dark:from-deepBlue/20 dark:to-teal/20 rounded-xl mb-6 flex items-center justify-center transition-colors">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors">
                Inventory
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-base text-gray-600 dark:text-gray-300 transition-colors">
                  <Check className="w-5 h-5 text-teal dark:text-teal-light mt-0.5 flex-shrink-0" />
                  <span>Stock Management</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-600 dark:text-gray-300 transition-colors">
                  <Check className="w-5 h-5 text-teal dark:text-teal-light mt-0.5 flex-shrink-0" />
                  <span>Warehouse Operations</span>
                </li>
                <li className="flex items-start gap-3 text-base text-gray-600 dark:text-gray-300 transition-colors">
                  <Check className="w-5 h-5 text-teal dark:text-teal-light mt-0.5 flex-shrink-0" />
                  <span>Serial/Batch Tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Apple Style: Large Text, Clear Hierarchy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mb-20">
            <h2 className="text-5xl font-semibold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-deepBlue to-teal bg-clip-text text-transparent dark:from-teal-light dark:to-deepBlue-light">
                Why Open-Source ERP?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
              The modern approach to enterprise software
            </p>
          </div>

          <div className="space-y-16">
            {/* Benefit Item */}
            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green/10 to-teal/10 dark:from-green/20 dark:to-teal/20 rounded-2xl flex items-center justify-center transition-colors border border-green/20 dark:border-green/30">
                <span className="text-3xl">💰</span>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors">
                  Massive Cost Savings
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                  Self-hosting is free. No per-user fees, no
                  mandatory support contracts.
                </p>
              </div>
            </div>

            {/* Benefit Item */}
            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-deepBlue/10 to-teal/10 dark:from-deepBlue/20 dark:to-teal/20 rounded-2xl flex items-center justify-center transition-colors border border-deepBlue/20 dark:border-deepBlue/30">
                <span className="text-3xl">🔧</span>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors">
                  Full Control & Customization
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                  Modify source code, integrate with existing systems, and
                  deploy anywhere you want.
                </p>
              </div>
            </div>

            {/* Benefit Item */}
            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal/10 to-deepBlue/10 dark:from-teal/20 dark:to-deepBlue/20 rounded-2xl flex items-center justify-center transition-colors border border-teal/20 dark:border-teal/30">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors">
                  Modern Technology Stack
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                  Built with Django 5.0.6, Django REST Framework 3.15.1, React
                  18, and PostgreSQL 17. No legacy code, no vendor lock-in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Apple Style: Simple, Clear */}
      <section className="bg-gradient-to-br from-deepBlue via-deepBlue-dark to-teal dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-24 transition-colors relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-deepBlue/20 to-teal/20 dark:from-deepBlue/10 dark:to-teal/10"></div>
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-5xl font-semibold text-white mb-6 tracking-tight">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-gray-200 dark:text-gray-300 mb-12 leading-relaxed transition-colors">
            Docker makes deployment simple
          </p>
          <div className="bg-gray-900/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-left mb-8 transition-colors border border-teal/20">
            <code className="text-base text-teal-light dark:text-teal font-mono block whitespace-pre transition-colors">
              {`$ git clone https://github.com/buildworksai/saraise-application
$ cd saraise-application
$ docker-compose up

✅ Raghunath Chava running on http://localhost:8000`}
            </code>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-deepBlue rounded-full text-lg font-medium hover:bg-gray-100 transition-colors min-h-[44px] shadow-lg shadow-white/20"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer - Apple Style: Simple, Clean */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/Raghunath Chava-LOGO.png"
                alt="Raghunath Chava Logo"
                className="h-6 w-auto"
              />
              <span className="text-base text-gray-600 dark:text-gray-400 transition-colors">
                © 2025 Raghunath Chava
              </span>
            </div>
            <div className="flex items-center gap-8">
              <Link
                to="/about"
                className="text-base text-gray-600 dark:text-gray-400 hover:text-deepBlue dark:hover:text-teal transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-base text-gray-600 dark:text-gray-400 hover:text-deepBlue dark:hover:text-teal transition-colors"
              >
                Contact
              </Link>
              <Link
                to="https://github.com/buildworksai/saraise-application"
                className="text-base text-gray-600 dark:text-gray-400 hover:text-deepBlue dark:hover:text-teal transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
