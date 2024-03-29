import Banner from "@/components/Shared/Banner/Banner";
import ServiceContent from "@/components/Pages/ServicePage/ServiceContent";
import Separator from "@/components/Shared/Separator";
import Cards from "@/components/Pages/ServicePage/Operations/OperationsContent"
import Impact from "@/components/Pages/ServicePage/Impact/Impact";
import Footer from "@/components/Shared/Footer";


export default function Service() {
    return (
        <>
            <Banner src="/images/service/service1.png" alt="Services Banner" bannerText="Discover, Test, Demonstrate, Explore" title="Services"/>
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