import Banner from "@/components/Shared/Banner/Banner";
import ServiceContent from "@/components/Pages/ServicePage/ServiceContent";
import Separator from "@/components/Shared/Separator";
import Cards from "@/components/Pages/ServicePage/Operations/OperationsContent"
import Impact from "@/components/Pages/ServicePage/Impact/Impact";
import Footer from "@/components/Shared/Footer";
import { useRouter } from 'next/router'; 

export default function Service() {
    const router = useRouter(); 
    const { locale } = router; 

    const bannerText = locale === 'en' ? 'Discover, Test, Demonstrate, Explore' : 'Découvrir, Tester, Démontrer, Explorer';
    const title = locale === 'en' ? 'Services' : 'Services';

    return (
        <>
            <Banner src="/images/service/service1.png" alt="Services Banner" bannerText={bannerText} title={title}/>
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
