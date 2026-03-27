import Benefits from "@/component/benefits";
import CTASection from "@/component/cta";
import EmailPopup from "@/component/email";
import Hero from "@/component/hero";
import Highlights from "@/component/highlight";
import SocialProof from "@/component/socialproof";

export default function Task1Page() {
    return (
      <main className="flex flex-col">
        <Hero />
        <Benefits />
        <Highlights />
        <SocialProof />
        <CTASection />
        <EmailPopup />
      </main>
    );
  }
  