import Header from "@/components/modules/shared/Header/Header";
import SearchBar from "@/components/modules/Files/SearchBar";
import Navigation from "@/components/modules/Files/Navigation";
import RecentFiles from "@/components/modules/Files/RecentFiles";
import SharepointWrapperPage from "@/components/modules/Files/SharepointWrapper";

export default function Files() {
    return (
        <>
            <Header />
            <SearchBar />
            <Navigation />
            <RecentFiles />
            <SharepointWrapperPage />
        </>
    );
}