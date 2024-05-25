import Banner from "@/components/landing/shared/Banner/Banner";
import ServiceContent from "@/components/landing/ServicePage/ServiceContent";
import Separator from "@/components/landing/shared/Separator";
import Cards from "@/components/landing/ServicePage/Operations/OperationsContent"
import Impact from "@/components/landing/ServicePage/Impact/Impact";
import Footer from "@/components/landing/shared/Footer";
import { useRouter } from 'next/router';

export default function Service() {
    const router = useRouter(); 
    const { locale } = router; 

    const bannerText = locale === 'en' ? 'Discover, Test, Demonstrate, Explore' : 'Découvrir, Tester, Démontrer, Explorer';
    const title = locale === 'en' ? 'Services' : 'Services';

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    return (
        <>
            <Banner src={`${backendUrl}api/images/landing/f12.jpg?quality=10`} alt="Services Banner" bannerText={bannerText} title={title}/>
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
