import Banner from "@/components/Shared/Public/Banner/Banner"
import Separator from "@/components/Shared/Public/Separator"
import OurPeople from "@/components/Pages/publicPages/AboutPage/OurPeople"
import AboutUsContent from "@/components/Pages/publicPages/AboutPage/AboutUsContent"
import Publications from "@/components/Pages/publicPages/AboutPage/Publications/PublicationsSection"
import Footer from "@/components/Shared/Public/Footer";
import { useRouter } from 'next/router'; 

export default function About() {
    const router = useRouter(); 
    const { locale } = router; 

    const BannerText = locale === 'en' ? 'Protect, Innovate, Lead' : 'Protéger, Innover, Diriger';
    const Title = locale === 'en' ? 'About Us' : 'Notre mission';

    return (
        <>
            <Banner src="/images/landing/flicker7.jpg" alt="About Us Banner" bannerText={BannerText} title={Title}/>
            <OurPeople />
            <AboutUsContent />
            <Separator />
            <Publications />
            <Footer/>
        </>
    );
}
