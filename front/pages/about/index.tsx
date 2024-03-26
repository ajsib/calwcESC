import Banner from "@/components/Shared/Banner/Banner"
import Separator from "@/components/Shared/Separator"
import OurPeople from "@/components/Pages/AboutPage/OurPeople"
import AboutUsContent from "@/components/Pages/AboutPage/AboutUsContent"
import Publications from "@/components/Pages/AboutPage/Publications/PublicationsSection"
import Footer from "@/components/Shared/Footer";


export default function About() {
    return (
        <>
            <Banner src="/images/about/about1.png" alt="About Us Banner" bannerText="Protect, Innovate, Lead" title="About Us"/>
            <OurPeople />
            <AboutUsContent />
            <Separator />
            <Publications />
            <Footer/>

        </>
    );
}