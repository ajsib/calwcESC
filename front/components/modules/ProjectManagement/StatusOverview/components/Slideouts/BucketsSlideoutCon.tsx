import { useState } from "react";
import { useProjectManagement } from "../../../ProjectManagementContext";
import ManageTeamsModal from "./BucketsSlideout";

const BucketsSlideoutCon = ({close, isOpen}: {close: () => void, isOpen: boolean}) => {
    const { teams, addTeam, removeTeam, updateTeams } = useProjectManagement();

    const [newTeam, setNewTeam] = useState<string>('');

    const handleAddTeam = () => {
        if (newTeam && !teams.includes(newTeam)) {
            addTeam(newTeam);
            setNewTeam('');
        }
    };

    return (
        <>
            <ManageTeamsModal
                isOpen={isOpen}
                close={close}
                addTeam={handleAddTeam}
                removeTeam={removeTeam}
                updateTeams={updateTeams}
                newTeam={newTeam}
                setNewTeam={setNewTeam}
                teams={teams}
            />
        </>
    );

};

export default BucketsSlideoutCon;
