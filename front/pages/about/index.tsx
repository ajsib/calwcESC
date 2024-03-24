import Banner from "@/components/Shared/Banner/Banner";
import Picture from "@/components/Pages/AboutPage/Pictures";
import Personel from "@/components/Pages/AboutPage/Personel";
import Separator from "@/components/Shared/Separator";
import Mission from "@/components/Pages/AboutPage/Mission";
import OurPeople from "@/components/Pages/AboutPage/OurPeople";
import AboutUsContent from "@/components/Pages/AboutPage/AboutUsContent"
import Cards from "@/components/Pages/AboutPage/Cards"


export default function About() {
    return (
        <>
            <Banner src="/images/about/about1.png" alt="About Us Banner" bannerText="Protect, Innovate, Lead" title="About Us"/>
            <OurPeople />
            <AboutUsContent />
            <Separator />
            <Cards />


        </>
    );
}