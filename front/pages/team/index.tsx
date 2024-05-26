import Header from "@/components/modules/shared/Header/Header";
import SearchBar from "@/components/modules/People/SearchBar";
import Team from "@/components/modules/People/Team"
import { useAuth } from "@/globalContexts/authContext";
import { useUserProfile } from "@/globalContexts/userContext";

export default function People() {
    const { loggedIn } = useAuth();
    const { profile } = useUserProfile();
    if (!loggedIn || !profile || profile.role === "Client") {
        return <div>Either you&apos;re not logged in or you don&apos;t have a profile.</div>;
      }
    return (
        <>
            <Header />
            <SearchBar />
            <Team/>
        </>
    );
}