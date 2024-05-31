import { useState, useEffect } from "react";
import StatusOverview from "./StatusOverview";
import { Task } from "@/public/Types/GlobalTypes";
import NewTaskCon from "./Slideouts/NewTaskCon";
import BucketsSlideoutCon from "./Slideouts/BucketsSlideoutCon";
import { useProjectManagement } from "../../ProjectManagementContext";

const StatusOverviewCon = () => {
    const { selectedStatus, handleSelectStatus, allTasks } = useProjectManagement();
    const [toDoCount, setToDoCount] = useState<number>(0);
    const [inProgressCount, setInProgressCount] = useState<number>(0);
    const [overdueCount, setOverdueCount] = useState<number>(0);
    const [completedCount, setCompletedCount] = useState<number>(0);
    const [showNewTaskModal, setShowNewTaskModal] = useState(false);
    const [showManageTeamsModal, setShowManageTeamsModal] = useState(false);
    const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
    const [isManageTeamsModalVisible, setIsManageTeamsModalVisible] = useState(false);

    useEffect(() => {
        const counts = allTasks.reduce(
            (acc: { toDo: number; inProgress: number; overdue: number; completed: number }, task: Task) => {
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
                    case 'Completed':
                        acc.completed++;
                        break;
                    default:
                        break;
                }
                return acc;
            },
            { toDo: 0, inProgress: 0, overdue: 0, completed: 0 }
        );

        setToDoCount(counts.toDo);
        setInProgressCount(counts.inProgress);
        setOverdueCount(counts.overdue);
        setCompletedCount(counts.completed);
    }, [allTasks]);

    const handleNewTaskModalOpen = () => {
        setIsNewTaskModalVisible(true);
        setShowNewTaskModal(true);
    };

    const handleNewTaskModalClose = () => {
        setShowNewTaskModal(false);
        setTimeout(() => setIsNewTaskModalVisible(false), 300); // Match the animation duration
    };

    const handleManageTeamsModalOpen = () => {
        setIsManageTeamsModalVisible(true);
        setShowManageTeamsModal(true);
    };

    const handleManageTeamsModalClose = () => {
        setShowManageTeamsModal(false);
        setTimeout(() => setIsManageTeamsModalVisible(false), 300); // Match the animation duration
    };

    return (
        <>
            <StatusOverview
                selectedStatus={selectedStatus}
                onSelectStatus={handleSelectStatus}
                toDoCount={toDoCount}
                inProgressCount={inProgressCount}
                overdueCount={overdueCount}
                completedCount={completedCount}
                onNewTaskModalOpen={handleNewTaskModalOpen}
                onNewTaskModalClose={handleNewTaskModalClose}
                onManageTeamsModalOpen={handleManageTeamsModalOpen}
                onManageTeamsModalClose={handleManageTeamsModalClose}
            />
            {isNewTaskModalVisible && (
                <NewTaskCon close={handleNewTaskModalClose} isOpen={showNewTaskModal} />
            )}
            {isManageTeamsModalVisible && (
                <BucketsSlideoutCon close={handleManageTeamsModalClose} isOpen={showManageTeamsModal} />
            )}
        </>
    );
};

export default StatusOverviewCon;
