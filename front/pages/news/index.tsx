import Footer from "@/components/Shared/Public/Footer";
import Header from "@/components/Shared/Public/Header/Header";
import AllNews from "@/components/landing/News/AllNews/AllNews";

export default function News() {
    return (
        <>
            <Header backgroundColor='var(--primary-color)' />
            <AllNews />
            <Footer />
        </>
    );
}