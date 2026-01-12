/**
 * https://raghunathchava.com
 */
import {
  TrendingUp,
  DollarSign,
  Package,
  Users,
  Activity,
  ArrowUpRight,
} from "lucide-react";

export function DashboardPreview() {
  const metrics = [
    {
      label: "Revenue",
      value: "$124,580",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-500 dark:text-green-400",
      trendData: [45, 52, 48, 61, 55, 68, 72, 65, 58, 70, 64, 75],
      svgColor: { fill: "#10B981", stroke: "#059669" }, // green-500
    },
    {
      label: "Orders",
      value: "1,247",
      change: "+8.2%",
      icon: Package,
      color: "text-deepBlue dark:text-deepBlue-light",
      trendData: [60, 65, 58, 72, 68, 75, 80, 70, 65, 78, 72, 82],
      svgColor: { fill: "#1565C0", stroke: "#0D47A1" }, // deepBlue
    },
    {
      label: "Customers",
      value: "3,421",
      change: "+15.3%",
      icon: Users,
      color: "text-teal dark:text-teal-light",
      trendData: [50, 55, 52, 65, 60, 70, 75, 68, 62, 72, 68, 78],
      svgColor: { fill: "#00ACC1", stroke: "#0097A7" }, // teal
    },
    {
      label: "Growth",
      value: "24.8%",
      change: "+5.1%",
      icon: TrendingUp,
      color: "text-gold dark:text-gold-light",
      trendData: [40, 45, 42, 55, 50, 60, 65, 58, 52, 62, 58, 68],
      svgColor: { fill: "#FF8F00", stroke: "#F57C00" }, // gold
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
    <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
      {/* Mock Browser Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          Dashboard
        </span>
      </div>

      {/* Metrics Grid - Apple Style: Compact with Sparklines */}
      <div className="grid grid-cols-2 gap-2.5 mb-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const trendData = metric.trendData || [];
          const svgColor = metric.svgColor || {
            fill: "#6B7280",
            stroke: "#4B5563",
          };

          // Normalize trend data to 0-30 range for SVG
          const maxVal = Math.max(...trendData, 1);
          const minVal = Math.min(...trendData, 0);
          const range = maxVal - minVal || 1;
          const normalizedTrend = trendData.map(
            (val) => ((val - minVal) / range) * 25 + 2.5,
          );

          return (
            <div
              key={index}
              className="bg-secondary/30 border border-border rounded-xl p-2.5 hover:bg-secondary/50 transition-colors"
            >
              <div className="relative">
                <div className="flex items-center justify-between mb-1.5">
                  <Icon className={`w-3.5 h-3.5 ${metric.color}`} />
                  <span className="text-[10px] text-muted-foreground flex items-center gap-0.5 font-medium">
                    <ArrowUpRight className="w-2.5 h-2.5 text-green-500 dark:text-green-400" />
                    {metric.change}
                  </span>
                </div>

                <div className="text-xl font-semibold text-foreground mb-1 leading-tight">
                  {metric.value}
                </div>

                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium mb-2">
                  {metric.label}
                </div>

                {/* Colorful Mini Trend Sparkline */}
                <div className="relative h-8 bg-background/50 rounded-lg p-1 border border-border/50">
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
                    <span className="text-[8px] text-muted-foreground font-medium">
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
      <div className="mb-6">
        <div className="bg-secondary/30 border border-border rounded-2xl p-6">
          {/* Chart Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                Sales Trend
              </h3>
              <p className="text-xs text-muted-foreground">Last 12 Months</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-deepBlue to-teal"></div>
                <span className="text-xs text-muted-foreground font-medium">
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
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-muted-foreground font-medium pr-2">
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
                    <div key={i} className="border-t border-border" />
                  ))}
                </div>
              </div>

              {/* Baseline - Clear bottom border */}
              <div className="absolute left-0 right-0 bottom-8 border-b-2 border-border"></div>

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
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg z-10 pointer-events-none">
                          ${(item.value * 1000).toLocaleString()}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
                        </div>
                      </div>

                      {/* Month Label - positioned below baseline */}
                      <div className="absolute -bottom-6 text-xs font-medium text-muted-foreground">
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
          <Activity className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-semibold text-foreground">
            Recent Activity
          </span>
        </div>
        <div className="space-y-2">
          {recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between text-sm p-3 bg-secondary/30 rounded-xl border border-border hover:border-teal/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-teal dark:bg-teal-light" />
                <span className="text-muted-foreground font-medium">
                  {activity.type}
                </span>
                <span className="text-foreground">{activity.description}</span>
              </div>
              <span className="text-muted-foreground text-xs">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
