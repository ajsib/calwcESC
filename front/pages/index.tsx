// pages/index.tsx
import ActionSection from "@/components/Pages/publicPages/HomePage/Action/ActionSection"
import HeroSection from "@/components/Pages/publicPages/HomePage/Hero/HeroSection";
import MissionSection from "@/components/Pages/publicPages/HomePage/Mission/MissionSection";
import Footer from "@/components/Shared/Public//Footer";
import Header from "@/components/Shared/Public//Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <MissionSection />
      <ActionSection />
      <Footer />
    </>
  );
}
