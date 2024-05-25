import Banner from "@/components/landing/shared/Banner/Banner"
import Separator from "@/components/landing/shared/Separator"
import OurPeople from "@/components/landing/AboutPage/OurPeople"
import AboutUsContent from "@/components/landing/AboutPage/AboutUsContent"
import Publications from "@/components/landing/AboutPage/Publications/PublicationsSection"
import Footer from "@/components/landing/shared/Footer";
import { useRouter } from 'next/router'; 

export default function About() {
    const router = useRouter(); 
    const { locale } = router; 

    const BannerText = locale === 'en' ? 'Protect, Innovate, Lead' : 'Protéger, Innover, Diriger';
    const Title = locale === 'en' ? 'About Us' : 'Notre mission';

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    return ( 
        <>
            <Banner src={`${backendUrl}api/images/landing/f7.jpg?quality=10`} alt="About Us Banner" bannerText={BannerText} title={Title}/>
            <OurPeople />
            <AboutUsContent />
            <Separator />
            <Publications />
            <Footer/>
        </>
    );
}
