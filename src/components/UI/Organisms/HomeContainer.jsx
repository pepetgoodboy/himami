import DefaultLayout from "../../Layouts/DefaultLayout";
import BenefitSection from "../Molecules/BenefitSection";
import DivisionSection from "../Molecules/DivisionSection";
import HeroSection from "../Molecules/HeroSection";
import SuggestionSection from "../Molecules/SuggestionSection";

export default function HomeContainer() {
  return (
    <>
      <DefaultLayout>
        <HeroSection />
        <DivisionSection />
        <BenefitSection />
        <SuggestionSection />
      </DefaultLayout>
    </>
  );
}
