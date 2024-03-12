// pages/index.tsx
import Header from '@/components/Shared/Header/Header';
import HeroSection from '@/components/Pages/Landing/Hero/HeroSection';
import MissionSection from '@/components/Pages/Landing/Mission/MissionSection';
import ActionSection from '@/components/Pages/Landing/Action/ActionSection';
import Footer from '@/components/Shared/Footer';


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