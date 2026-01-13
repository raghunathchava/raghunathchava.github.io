/**
 * https://raghunathchava.com
 * App Router with Complete Sitemap
 *
 * Requirements: 8.1
 */
import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ErrorPage } from "./components/ErrorPage";
import { BackgroundVideo } from "./components/BackgroundVideo";
import { useTheme } from "./hooks/use-theme";
import { useUTMPersistence } from "./hooks/useUTMPersistence";

// Lazy load pages for code splitting
const Home = lazy(() =>
  import("./pages/Home").then((m) => ({ default: m.Home })),
);
const About = lazy(() =>
  import("./pages/About").then((m) => ({ default: m.About })),
);
const Experience = lazy(() =>
  import("./pages/Experience").then((m) => ({ default: m.Experience })),
);
const Projects = lazy(() =>
  import("./pages/Projects").then((m) => ({ default: m.Projects })),
);
const AppleDesignSample = lazy(() =>
  import("./pages/AppleDesignSample").then((m) => ({
    default: m.AppleDesignSample,
  })),
);

// Company pages
const CompanyAbout = lazy(() =>
  import("./pages/Company/About").then((m) => ({ default: m.CompanyAbout })),
);
const CompanyContact = lazy(() =>
  import("./pages/Company/Contact").then((m) => ({
    default: m.CompanyContact,
  })),
);
const CompanyCareers = lazy(() =>
  import("./pages/Company/Careers").then((m) => ({
    default: m.CompanyCareers,
  })),
);

// Product pages
const ProductIndex = lazy(() =>
  import("./pages/Product/Overview").then((m) => ({
    default: m.ProductOverview,
  })),
);
const ProductFeatures = lazy(() =>
  import("./pages/Product/Features").then((m) => ({
    default: m.ProductFeatures,
  })),
);
const ProductModules = lazy(() =>
  import("./pages/Product/Modules").then((m) => ({
    default: m.ProductModules,
  })),
);
const ProductArchitecture = lazy(() =>
  import("./pages/Product/Architecture").then((m) => ({
    default: m.ProductArchitecture,
  })),
);
const ProductIntegrations = lazy(() =>
  import("./pages/Product/Integrations").then((m) => ({
    default: m.ProductIntegrations,
  })),
);
const ProductAIReady = lazy(() =>
  import("./pages/Product/AIReady").then((m) => ({
    default: m.ProductAIReady,
  })),
);

// Solutions pages
const SolutionsManufacturing = lazy(() =>
  import("./pages/Solutions/Manufacturing").then((m) => ({
    default: m.SolutionsManufacturing,
  })),
);
const SolutionsHealthcare = lazy(() =>
  import("./pages/Solutions/Healthcare").then((m) => ({
    default: m.SolutionsHealthcare,
  })),
);
const SolutionsRetail = lazy(() =>
  import("./pages/Solutions/Retail").then((m) => ({
    default: m.SolutionsRetail,
  })),
);
const SolutionsProfessionalServices = lazy(() =>
  import("./pages/Solutions/ProfessionalServices").then((m) => ({
    default: m.SolutionsProfessionalServices,
  })),
);
const SolutionsHospitality = lazy(() =>
  import("./pages/Solutions/Hospitality").then((m) => ({
    default: m.SolutionsHospitality,
  })),
);

// Enterprise pages
const EnterpriseIndex = lazy(() =>
  import("./pages/Enterprise/Overview").then((m) => ({
    default: m.EnterpriseOverview,
  })),
);
const EnterpriseSupport = lazy(() =>
  import("./pages/Enterprise/Support").then((m) => ({
    default: m.EnterpriseSupport,
  })),
);
const EnterpriseCaseStudies = lazy(() =>
  import("./pages/Enterprise/CaseStudies").then((m) => ({
    default: m.EnterpriseCaseStudies,
  })),
);
const EnterpriseCompliance = lazy(() =>
  import("./pages/Enterprise/Compliance").then((m) => ({
    default: m.EnterpriseCompliance,
  })),
);
const EnterpriseGovernance = lazy(() =>
  import("./pages/Enterprise/Governance").then((m) => ({
    default: m.EnterpriseGovernance,
  })),
);
const EnterpriseScalability = lazy(() =>
  import("./pages/Enterprise/Scalability").then((m) => ({
    default: m.EnterpriseScalability,
  })),
);
const EnterpriseIntegrations = lazy(() =>
  import("./pages/Enterprise/Integrations").then((m) => ({
    default: m.EnterpriseIntegrations,
  })),
);

// Resources pages
const ResourcesIndex = lazy(() =>
  import("./pages/Resources/Overview").then((m) => ({
    default: m.ResourcesOverview,
  })),
);
const ResourcesBlog = lazy(() =>
  import("./pages/Resources/Blog").then((m) => ({ default: m.ResourcesBlog })),
);
const ResourcesWebinars = lazy(() =>
  import("./pages/Resources/Webinars").then((m) => ({
    default: m.ResourcesWebinars,
  })),
);

// Blog articles
const OpenSourceERPBenefits = lazy(() =>
  import("./pages/Resources/Blog/OpenSourceERPBenefits").then((m) => ({
    default: m.OpenSourceERPBenefits,
  })),
);
const SelfHostedVsSaaS = lazy(() =>
  import("./pages/Resources/Blog/SelfHostedVsSaaS").then((m) => ({
    default: m.SelfHostedVsSaaS,
  })),
);
const AIAgentsInERP = lazy(() =>
  import("./pages/Resources/Blog/AIAgentsInERP").then((m) => ({
    default: m.AIAgentsInERP,
  })),
);
const ROICalculation = lazy(() =>
  import("./pages/Resources/Blog/ROICalculation").then((m) => ({
    default: m.ROICalculation,
  })),
);

// Pricing page
const Pricing = lazy(() =>
  import("./pages/Pricing").then((m) => ({ default: m.Pricing })),
);

// Legal pages
const PrivacyPolicy = lazy(() =>
  import("./pages/PrivacyPolicy").then((m) => ({ default: m.PrivacyPolicy })),
);
const TermsOfService = lazy(() =>
  import("./pages/TermsOfService").then((m) => ({ default: m.TermsOfService })),
);
const Compliance = lazy(() =>
  import("./pages/Compliance").then((m) => ({ default: m.Compliance })),
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useTheme(); // Initialize theme system
  useUTMPersistence(); // Capture and persist UTM parameters

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log("✅ Raghunath Chava Website: App loaded, hiding loading screen");
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="min-h-screen text-foreground relative">
        <BackgroundVideo />
        <div className="relative z-10">
          <BrowserRouter>
            <ErrorBoundary>
              <Suspense fallback={<LoadingScreen />}>
                <Routes>
                  {/* Home */}
                  <Route path="/" element={<Home />} />
                  
                  {/* Personal Portfolio Pages */}
                  <Route path="/about" element={<About />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/projects" element={<Projects />} />

                  {/* Product */}
                  <Route path="/product" element={<ProductIndex />} />
                  <Route
                    path="/product/features"
                    element={<ProductFeatures />}
                  />
                  <Route path="/product/modules" element={<ProductModules />} />
                  <Route
                    path="/product/architecture"
                    element={<ProductArchitecture />}
                  />
                  <Route
                    path="/product/integrations"
                    element={<ProductIntegrations />}
                  />
                  <Route
                    path="/product/ai-ready"
                    element={<ProductAIReady />}
                  />

                  {/* Solutions */}
                  <Route
                    path="/solutions/manufacturing"
                    element={<SolutionsManufacturing />}
                  />
                  <Route
                    path="/solutions/healthcare"
                    element={<SolutionsHealthcare />}
                  />
                  <Route
                    path="/solutions/retail"
                    element={<SolutionsRetail />}
                  />
                  <Route
                    path="/solutions/professional-services"
                    element={<SolutionsProfessionalServices />}
                  />
                  <Route
                    path="/solutions/hospitality"
                    element={<SolutionsHospitality />}
                  />

                  {/* Enterprise */}
                  <Route path="/enterprise" element={<EnterpriseIndex />} />
                  <Route
                    path="/enterprise/compliance"
                    element={<EnterpriseCompliance />}
                  />
                  <Route
                    path="/enterprise/governance"
                    element={<EnterpriseGovernance />}
                  />
                  <Route
                    path="/enterprise/scalability"
                    element={<EnterpriseScalability />}
                  />
                  <Route
                    path="/enterprise/integrations"
                    element={<EnterpriseIntegrations />}
                  />
                  <Route
                    path="/enterprise/support"
                    element={<EnterpriseSupport />}
                  />
                  <Route
                    path="/enterprise/case-studies"
                    element={<EnterpriseCaseStudies />}
                  />

                  {/* Pricing */}
                  <Route path="/pricing" element={<Pricing />} />

                  {/* Resources */}
                  <Route path="/resources" element={<ResourcesIndex />} />
                  <Route path="/resources/blog" element={<ResourcesBlog />} />
                  <Route
                    path="/resources/blog/open-source-erp-benefits"
                    element={<OpenSourceERPBenefits />}
                  />
                  <Route
                    path="/resources/blog/self-hosted-vs-saas"
                    element={<SelfHostedVsSaaS />}
                  />
                  <Route
                    path="/resources/blog/ai-agents-in-erp"
                    element={<AIAgentsInERP />}
                  />
                  <Route
                  />
                  <Route
                    path="/resources/blog/roi-calculation"
                    element={<ROICalculation />}
                  />
                  <Route
                    path="/resources/webinars"
                    element={<ResourcesWebinars />}
                  />

                  {/* Company */}
                  <Route path="/company/about" element={<CompanyAbout />} />
                  <Route path="/company/contact" element={<CompanyContact />} />
                  <Route path="/company/careers" element={<CompanyCareers />} />
                  {/* Legacy routes for backward compatibility */}
                  <Route path="/about" element={<CompanyAbout />} />
                  <Route path="/contact" element={<CompanyContact />} />

                  {/* Legal */}
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsOfService />} />
                  <Route path="/compliance" element={<Compliance />} />

                  {/* Design Samples */}
                  <Route path="/design/apple" element={<AppleDesignSample />} />

                  {/* 404 */}
                  <Route path="*" element={<ErrorPage statusCode={404} />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
