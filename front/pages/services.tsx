import Banner from "@/components/Shared/Banner/Banner";
import ServiceContent from "@/components/Pages/ServicePage/ServiceContent";
import Separator from "@/components/Shared/Separator";
import Cards from "@/components/Pages/ServicePage/Operations/Cards";
import Impact from "@/components/Pages/ServicePage/Impact/Impact";


export default function Service() {
    return (
        <>
            <Banner src="/images/service/service1.png" alt="Services Banner" bannerText="Discover, Test, Demonstrate, Explore" title="Services"/>
            <ServiceContent />
            <Separator />
            <Cards />
            <Separator />
            <Impact />
        </>
    );
}