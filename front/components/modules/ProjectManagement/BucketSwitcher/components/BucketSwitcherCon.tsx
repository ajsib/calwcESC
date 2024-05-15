import { useEffect, useState } from "react";
import BucketTeamSelector from "./BucketSwitcher";
import { useProjectManagement } from "../../ProjectManagementContext";
import { fetchBucketData } from "../services/fetchBucketData";

const BucketSwitcherCon = () => {
    const { selectedBucket, handleSelectBucket, updateTeams, teams} = useProjectManagement();
    const [showDropdown, setShowDropdown] = useState(false);
    const [buckets, setBuckets] = useState<string[]>([]);

    useEffect(() => {
        fetchBucketData().then(data => {
            updateTeams(["All", ...data]);
        });
    }, []);

    useEffect(() => {
        setBuckets(teams);
    }, [teams]);

    const onSelect = (team: string) => {
        handleSelectBucket(team);
        setShowDropdown(false);
    };

    return (
        <BucketTeamSelector
            currentTeam={selectedBucket}
            teams={buckets}
            onTeamSelect={onSelect}
            showDropdown={showDropdown}
            setShowDropdown={() => setShowDropdown(!showDropdown)}
        />
    );

};

export default BucketSwitcherCon;
