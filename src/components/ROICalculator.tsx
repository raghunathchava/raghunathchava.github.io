/**
 * https://raghunathchava.com
 * ROI Calculator Component
 *
 * Interactive ROI calculator for Economic Buyers.
 *
 * Requirements: 3.1
 */
import { useState } from "react";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

interface ROICalculatorInputs {
  currentERPCost: number;
  currentERPUsers: number;
  currentERPSupportCost: number;
  employees: number;
  expectedEfficiencyGain: number; // percentage
  implementationTimeline: number; // months
}

interface ROICalculatorProps {
  onCalculate?: (results: ROICalculatorResults) => void;
  defaultValues?: Partial<ROICalculatorInputs>;
  variant?: "compact" | "full";
}

interface ROICalculatorResults {
  annualSavings: number;
  threeYearROI: number;
  paybackPeriod: number; // months
  efficiencyValue: number;
  totalSavings: number;
}

export function ROICalculator({
  onCalculate,
  defaultValues = {},
  variant: _variant = "full",
}: ROICalculatorProps) {
  const { trackEvent } = useAnalytics();
  const [inputs, setInputs] = useState<ROICalculatorInputs>({
    currentERPCost: defaultValues.currentERPCost || 50000,
    currentERPUsers: defaultValues.currentERPUsers || 50,
    currentERPSupportCost: defaultValues.currentERPSupportCost || 20000,
    employees: defaultValues.employees || 100,
    expectedEfficiencyGain: defaultValues.expectedEfficiencyGain || 15,
    implementationTimeline: defaultValues.implementationTimeline || 3,
  });

  const [results, setResults] = useState<ROICalculatorResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    // Raghunath Chava costs (simplified)
    // const saraiseAnnualCost = 0; // Free tier
    const saraiseProfessionalCost = 299 * 12; // $3,588/year
    // const saraiseEnterpriseCost = 0; // Custom pricing, estimate $50K/year

    // Current ERP annual cost
    const currentAnnualCost =
      inputs.currentERPCost +
      inputs.currentERPUsers * 1000 + // $1K per user
      inputs.currentERPSupportCost;

    // Raghunath Chava cost (use Professional as default)
    const saraiseAnnualCostSelected = saraiseProfessionalCost;

    // Direct cost savings
    const directSavings = currentAnnualCost - saraiseAnnualCostSelected;

    // Efficiency gains (15% of employee cost, assuming $50K avg salary)
    const avgSalary = 50000;
    const employeeCost = inputs.employees * avgSalary;
    const efficiencyValue =
      (employeeCost * inputs.expectedEfficiencyGain) / 100;

    // Total annual savings
    const annualSavings = directSavings + efficiencyValue;

    // Three-year ROI
    const threeYearROI = annualSavings * 3 - saraiseAnnualCostSelected * 3;

    // Payback period (months)
    const paybackPeriod =
      (saraiseAnnualCostSelected / (annualSavings / 12)) *
      inputs.implementationTimeline;

    const calculatedResults: ROICalculatorResults = {
      annualSavings,
      threeYearROI,
      paybackPeriod,
      efficiencyValue,
      totalSavings: annualSavings * 3,
    };

    setResults(calculatedResults);
    setShowResults(true);

    // Track ROI calculation
    trackEvent({
      name: "roi_calculator_used",
      category: "conversion",
      properties: {
        annualSavings,
        threeYearROI,
        paybackPeriod,
        currentERPCost: inputs.currentERPCost,
        employees: inputs.employees,
      },
    });

    onCalculate?.(calculatedResults);
  };

  const handleInputChange = (
    field: keyof ROICalculatorInputs,
    value: number,
  ) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    setShowResults(false);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-deepBlue" />
        <h3 className="text-2xl font-bold">Calculate Your ROI</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Current ERP Annual Cost ($)
          </label>
          <input
            type="number"
            value={inputs.currentERPCost}
            onChange={(e) =>
              handleInputChange(
                "currentERPCost",
                parseFloat(e.target.value) || 0,
              )
            }
            className="w-full px-4 py-2 border border-border rounded-lg bg-background"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Current ERP Users
          </label>
          <input
            type="number"
            value={inputs.currentERPUsers}
            onChange={(e) =>
              handleInputChange(
                "currentERPUsers",
                parseInt(e.target.value) || 0,
              )
            }
            className="w-full px-4 py-2 border border-border rounded-lg bg-background"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Current ERP Support Cost ($/year)
          </label>
          <input
            type="number"
            value={inputs.currentERPSupportCost}
            onChange={(e) =>
              handleInputChange(
                "currentERPSupportCost",
                parseFloat(e.target.value) || 0,
              )
            }
            className="w-full px-4 py-2 border border-border rounded-lg bg-background"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Total Employees
          </label>
          <input
            type="number"
            value={inputs.employees}
            onChange={(e) =>
              handleInputChange("employees", parseInt(e.target.value) || 0)
            }
            className="w-full px-4 py-2 border border-border rounded-lg bg-background"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Expected Efficiency Gain (%)
          </label>
          <input
            type="number"
            value={inputs.expectedEfficiencyGain}
            onChange={(e) =>
              handleInputChange(
                "expectedEfficiencyGain",
                parseFloat(e.target.value) || 0,
              )
            }
            className="w-full px-4 py-2 border border-border rounded-lg bg-background"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Implementation Timeline (months)
          </label>
          <input
            type="number"
            value={inputs.implementationTimeline}
            onChange={(e) =>
              handleInputChange(
                "implementationTimeline",
                parseInt(e.target.value) || 0,
              )
            }
            className="w-full px-4 py-2 border border-border rounded-lg bg-background"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={calculateROI}
        className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-deepBlue to-teal text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:-translate-y-1"
      >
        Calculate ROI
      </button>

      {showResults && results && (
        <div className="mt-8 p-6 bg-gradient-to-br from-deepBlue/10 to-teal/10 rounded-xl border border-deepBlue/20">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Your ROI Results
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-muted-foreground mb-1">
                Annual Savings
              </div>
              <div className="text-3xl font-extrabold text-green-600">
                ${results.annualSavings.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">
                3-Year Total Savings
              </div>
              <div className="text-3xl font-extrabold text-green-600">
                ${results.totalSavings.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">
                3-Year ROI
              </div>
              <div className="text-3xl font-extrabold text-deepBlue">
                ${results.threeYearROI.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">
                Payback Period
              </div>
              <div className="text-3xl font-extrabold text-deepBlue">
                {results.paybackPeriod.toFixed(1)} months
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <a
              href="/company/contact?type=enterprise&roi=true"
              className="inline-flex items-center gap-2 px-6 py-3 bg-deepBlue text-white rounded-lg font-semibold hover:bg-teal transition-colors"
            >
              <DollarSign className="w-5 h-5" />
              Get Custom Pricing
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
