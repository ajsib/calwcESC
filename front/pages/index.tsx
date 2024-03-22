// pages/index.tsx
import ActionSection from "@/components/Pages/Landing/Action/ActionSection";
import HeroSection from "@/components/Pages/Landing/Hero/HeroSection";
import MissionSection from "@/components/Pages/Landing/Mission/MissionSection";
import Footer from "@/components/Shared/Footer";
import Header from "@/components/Shared/Header/Header";

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
