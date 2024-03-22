import Banner from "@/components/Shared/Banner/Banner";
import Picture from "@/components/Pages/AboutPage/Pictures";
import Personel from "@/components/Pages/AboutPage/Personel";
import Separator from "@/components/Shared/Separator";
import Mission from "@/components/Pages/AboutPage/Mission";


export default function About() {
    return (
        <>
            <Banner src="/images/about/about1.png" alt="About Us Banner" bannerText="Protect, Innovate, Lead" title="About Us"/>
            <Picture>
                <Personel image="/images/about/head.svg" name="John Doe" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
                <Personel image="/images/about/head.svg" name="Jane Doe" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
                <Personel image="/images/about/head.svg" name="John Smith" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
            </Picture>
            <Separator/>
            <Mission/>
        </>
    );
}