import Banner from "@/components/Shared/Public/Banner/Banner";
import ServiceContent from "@/components/Pages/publicPages/ServicePage/ServiceContent";
import Separator from "@/components/Shared/Public/Separator";
import Cards from "@/components/Pages/publicPages/ServicePage/Operations/OperationsContent"
import Impact from "@/components/Pages/publicPages/ServicePage/Impact/Impact";
import Footer from "@/components/Shared/Public/Footer";
import { useRouter } from 'next/router';

export default function Service() {
    const router = useRouter(); 
    const { locale } = router; 

    const bannerText = locale === 'en' ? 'Discover, Test, Demonstrate, Explore' : 'Découvrir, Tester, Démontrer, Explorer';
    const title = locale === 'en' ? 'Services' : 'Services';

    return (
        <>
            <Banner src="/images/landing/flicker12.jpg" alt="Services Banner" bannerText={bannerText} title={title}/>
            <div style={{background: 'white'}}>
              <ServiceContent />
              <Separator />
              <Cards />
              <Separator />
              <Impact />
            </div>
            <Footer/>
        </>
    );
}
