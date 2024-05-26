import Header from "@/components/modules/shared/Header/Header";
import SearchBar from "@/components/modules/Files/SearchBar";
import Navigation from "@/components/modules/Files/Navigation";
import RecentFiles from "@/components/modules/Files/RecentFiles";
import SharepointWrapperPage from "@/components/modules/Files/SharepointWrapper";
import { useAuth } from "@/globalContexts/authContext";
import { useUserProfile } from "@/globalContexts/userContext";

export default function Files() {
    const { loggedIn } = useAuth();
    const { profile } = useUserProfile();
    if (!loggedIn || !profile) {
      return <div>Either you're not logged in or you don't have a profile.</div>;
    }

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