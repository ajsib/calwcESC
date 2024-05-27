import { useState, useEffect } from "react";
import StatusOverview from "./StatusOverview";
import { fetchTaskData } from "../services/fetchTaskData";
import { Task } from "@/public/Types/GlobalTypes";
import NewTaskCon from "./Slideouts/NewTaskCon";
import BucketsSlideoutCon from "./Slideouts/BucketsSlideoutCon";
import { useProjectManagement } from "../../ProjectManagementContext";
import { useUserProfile } from "@/globalContexts/userContext";

const StatusOverviewCon = () => {
    const { selectedStatus, handleSelectStatus, myFilteredTasks } = useProjectManagement();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [toDoCount, setToDoCount] = useState<number>(0);
    const [inProgressCount, setInProgressCount] = useState<number>(0);
    const [overdueCount, setOverdueCount] = useState<number>(0);
    const [showNewTaskModal, setShowNewTaskModal] = useState(false);
    const [showManageTeamsModal, setShowManageTeamsModal] = useState(false);

    const { profile } = useUserProfile();
    if (!profile) return null;

    useEffect(() => {
        fetchTaskData().then((data) => {
            setTasks(data);
        });
    }, []);

    useEffect(() => {
        const tasksToCount = profile.role === "Staff" ? myFilteredTasks : tasks;

        const counts = tasksToCount.reduce(
            (acc: { toDo: number; inProgress: number; overdue: number }, task:Task) => {
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
    }, [tasks, myFilteredTasks, profile.role]);

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
