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
    if (!loggedIn || !profile || profile.role === "Client") {
        return <div>Either you&apos;re not logged in or you don&apos;t have a profile.</div>;
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