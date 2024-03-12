import Banner from "@/components/Shared/Banner/Banner";
import ServiceContent from "@/components/Pages/ServicePage/ServiceContent";


export default function Service() {
    return (
        <>
            <Banner src="/images/service/service1.png" alt="Services Banner" bannerText="Discover, Test, Demonstrate, Explore" title="Services"/>
            <ServiceContent />
        </>
    );
}