import CapitalPayHero from "@/components/hero/CapitalPayHero";
import ContactlessSection from "@/components/sections/ContactlessSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import PaymentFlowNavigator from "@/components/sections/PaymentFlowNavigator";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ProofOfWorkSection from "@/components/sections/ProofOfWorkSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero - Ecosystem positioning */}
      <CapitalPayHero />
      
      {/* 2. What We Deliver - 4 service pillars */}
      <ContactlessSection />
      
      {/* 3. Where We Work - Industries */}
      <IndustriesSection />
      
      {/* 4. How It Works - Interactive process navigator */}
      <PaymentFlowNavigator />
      
      {/* 5. Capabilities - Feature grid */}
      <CapabilitiesSection />
      
      {/* 6. Proof of Work - Case studies teaser */}
      <ProofOfWorkSection />
      
      {/* 7. CTA */}
      <CTASection />
    </main>
  );
}
