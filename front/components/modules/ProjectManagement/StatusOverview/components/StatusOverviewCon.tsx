import { useState, useEffect } from "react";
import StatusOverview from "./StatusOverview";
import { fetchTaskData } from "../services/fetchTaskData";
import { Task } from "@/public/Types/GlobalTypes";
import NewTaskCon from "./Slideouts/NewTaskCon";
import BucketsSlideoutCon from "./Slideouts/BucketsSlideoutCon";
import { useProjectManagement } from "../../ProjectManagementContext";

const StatusOverviewCon = () => {
    const { selectedStatus, handleSelectStatus, allTasks } = useProjectManagement();
    const [toDoCount, setToDoCount] = useState<number>(0);
    const [inProgressCount, setInProgressCount] = useState<number>(0);
    const [overdueCount, setOverdueCount] = useState<number>(0);
    const [showNewTaskModal, setShowNewTaskModal] = useState(false);
    const [showManageTeamsModal, setShowManageTeamsModal] = useState(false);

    useEffect(() => {
            const counts = allTasks.reduce(
                (acc: { toDo: number; inProgress: number; overdue: number }, task: Task) => {
                    switch (task.status) {
                        case 'To Do':
                            acc.toDo++;
                            break;
                        case 'In Progress':
                            acc.inProgress++;
                            break;
                        case 'Overdue':
                            acc.overdue++;
                            break;
                        default:
                            break;
                    }
                    return acc;
                },
                { toDo: 0, inProgress: 0, overdue: 0 }
            );

        setToDoCount(counts.toDo);
        setInProgressCount(counts.inProgress);
        setOverdueCount(counts.overdue);
    }, [allTasks]);

    return (
        <>
            <StatusOverview
                selectedStatus={selectedStatus}
                onSelectStatus={handleSelectStatus}
                toDoCount={toDoCount}
                inProgressCount={inProgressCount}
                overdueCount={overdueCount}
                onNewTaskModalOpen={() => setShowNewTaskModal(true)}
                onNewTaskModalClose={() => setShowNewTaskModal(false)}
                onManageTeamsModalOpen={() => setShowManageTeamsModal(true)}
                onManageTeamsModalClose={() => setShowManageTeamsModal(false)}
            />
            {showNewTaskModal && <NewTaskCon close={() => setShowNewTaskModal(false)} isOpen={showNewTaskModal} />}
            {showManageTeamsModal && <BucketsSlideoutCon close={() => setShowManageTeamsModal(false)} isOpen={showManageTeamsModal} />}
        </>
    );
};

export default StatusOverviewCon;
