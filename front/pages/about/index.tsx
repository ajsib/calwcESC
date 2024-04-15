import Banner from "@/components/Shared/Banner/Banner"
import Separator from "@/components/Shared/Separator"
import OurPeople from "@/components/Pages/AboutPage/OurPeople"
import AboutUsContent from "@/components/Pages/AboutPage/AboutUsContent"
import Publications from "@/components/Pages/AboutPage/Publications/PublicationsSection"
import Footer from "@/components/Shared/Footer";
import { useRouter } from 'next/router'; 

export default function About() {
    const router = useRouter(); 
    const { locale } = router; 

    const BannerText = locale === 'en' ? 'Protect, Innovate, Lead' : 'Protéger, Innover, Diriger';
    const Title = locale === 'en' ? 'About Us' : 'Notre mission';

    return (
        <>
            <Banner src="/images/about/about1.png" alt="About Us Banner" bannerText={BannerText} title={Title}/>
            <OurPeople />
            <AboutUsContent />
            <Separator />
            <Publications />
            <Footer/>
        </>
    );
}
