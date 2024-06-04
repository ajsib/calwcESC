/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TaskDisplay from './TaskDisplay';
import { useState, useEffect } from 'react';
import Modal from '@/components/modules/shared/Modal';
import { useProjectManagement } from '../../../ProjectManagementContext';
import { fetchPeopleData } from '../../../services/fetchTaskData';
import { TaskDetailsModalProps } from '../../Types';
import { Person as Profile } from '@/public/Types/GlobalTypes';

const containerStyle = css`
  padding: 1.5rem;
`;

const TaskDetailsModal = ({ task, isOpen, close }: TaskDetailsModalProps) => {
  const [hoverProfile, setHoverProfile] = useState<Profile | undefined>(undefined);
  const [peopleData, setPeopleData] = useState<Profile[]>([]);
  const { subtasks, people } = useProjectManagement();

  useEffect(() => {
    fetchPeopleData().then((data) => {
      setPeopleData(data);
    });
  }, [task]);

  const handleMouseEnter = (profileId: number) => {
    const profile = peopleData.find(p => p.employee_id === profileId);
    setHoverProfile(profile);
  };

  const handleMouseLeave = () => {
    setHoverProfile(undefined);
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <div css={containerStyle}>
        <TaskDisplay
          task={{ ...task }}
          subTasks={subtasks[task.task_id]}
          profiles={people[task.task_id]}
          hoverProfile={hoverProfile}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
    </Modal>
  );
};

export default TaskDetailsModal;
