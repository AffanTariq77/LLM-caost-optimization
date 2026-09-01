import { Suspense, lazy } from "react";
import ArchitectureSection from "@/components/foodtech/ArchitectureSection";
import HeroSection from "@/components/foodtech/HeroSection";
import SiteNav from "@/components/foodtech/SiteNav";
import SolutionsSection from "@/components/foodtech/SolutionsSection";
import TechMarquee from "@/components/foodtech/TechMarquee";

// Below-the-fold sections are split out of the initial bundle
const TemplatesSection = lazy(() => import("@/components/foodtech/TemplatesSection"));
const PackagesSection = lazy(() => import("@/components/foodtech/PackagesSection"));
const FinOpsSection = lazy(() => import("@/components/foodtech/FinOpsSection"));
const UseCasesSection = lazy(() => import("@/components/foodtech/UseCasesSection"));
const ProcessSection = lazy(() => import("@/components/foodtech/ProcessSection"));
const ContactSection = lazy(() => import("@/components/foodtech/ContactSection"));
const SiteFooter = lazy(() => import("@/components/foodtech/SiteFooter"));

const SectionFallback = () => <div className="h-64 border-b ab-hairline bg-panel/40" aria-hidden="true" />;

const Index = () => (
  <div className="min-h-screen overflow-x-hidden bg-background">
    <SiteNav />
    <main>
      <HeroSection />
      <TechMarquee />
      <SolutionsSection />

      <Suspense fallback={<SectionFallback />}>
        <TemplatesSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <PackagesSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FinOpsSection />
      </Suspense>

      <ArchitectureSection />

      <Suspense fallback={<SectionFallback />}>
        <UseCasesSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ProcessSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>
    </main>

    <Suspense fallback={<SectionFallback />}>
      <SiteFooter />
    </Suspense>
  </div>
);

export default Index;
