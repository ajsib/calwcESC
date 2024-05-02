/** @jsxImportSource @emotion/react */
import React from 'react';
import Modal from './Modal'; // Reusing the existing Modal component
import TaskCard from '../TaskCard';
import SubTaskCard from '../SubTaskCard';
import { css } from '@emotion/react';

const listContainerStyle = css`
  display: flex;
  flex-direction: column;
  max-height: 80vh; // Setting a max height for scrolling
  overflow-y: auto;
`;

interface SubTask {
  id: number;
  title: string;
  isChecked?: boolean;
}

interface Task {
  id: number;
  title: string;
  subTasks: SubTask[];
  people: number[];
  bucket: string;
  status: string;
  dueDate: string;
}

interface ArchiveModalProps {
  isOpen: boolean;
  close: () => void;
  tasks: Task[];
}

const ArchiveModal: React.FC<ArchiveModalProps> = ({ isOpen, close, tasks }) => {
  const completedTasks = tasks.filter(task => task.status === 'Complete');

  return (
    <Modal isOpen={isOpen} close={close}>
      <div css={listContainerStyle}>
        {completedTasks.map((task) => (
          <div key={task.id}>
            <TaskCard
              title={task.title}
              isComplete={true}
              onToggleSubtasks={() => {}} // Assuming we might not need to toggle in archive
              expandSubtasks={false}
              subTasks={task.subTasks}
              people={task.people}
              bucket={task.bucket}
              status={task.status}
              dueDate={task.dueDate}
            />
            {task.subTasks && task.subTasks.length > 0 && (
              <SubTaskCard subTasks={task.subTasks} expanded={true} /> // Always expanded in the archive view
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ArchiveModal;
