import Footer from "@/components/landing/shared/Footer";
import Header from "@/components/landing/shared/Header/Header";
import AllNews from "@/components/modules/News/AllNews";

export default function News() {
    return (
        <>
            <Header backgroundColor='var(--primary-color)' />
            <AllNews />
            <Footer />
        </>
    );
}