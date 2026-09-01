import { lazy } from "react";
import ArchitectureSection from "@/components/foodtech/ArchitectureSection";
import HeroSection from "@/components/foodtech/HeroSection";
import SectionBoundary from "@/components/foodtech/SectionBoundary";
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

      <SectionBoundary fallback={<SectionFallback />}>
        <TemplatesSection />
      </SectionBoundary>

      <SectionBoundary fallback={<SectionFallback />}>
        <PackagesSection />
      </SectionBoundary>

      <SectionBoundary fallback={<SectionFallback />}>
        <FinOpsSection />
      </SectionBoundary>

      <ArchitectureSection />

      <SectionBoundary fallback={<SectionFallback />}>
        <UseCasesSection />
      </SectionBoundary>

      <SectionBoundary fallback={<SectionFallback />}>
        <ProcessSection />
      </SectionBoundary>

      <SectionBoundary fallback={<SectionFallback />}>
        <ContactSection />
      </SectionBoundary>
    </main>

    <SectionBoundary fallback={<SectionFallback />}>
      <SiteFooter />
    </SectionBoundary>
  </div>
);

export default Index;
