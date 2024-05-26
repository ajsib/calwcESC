/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TaskEditForm from './EditForm';
import TaskDisplay from './TaskDisplay';
import { useState, useEffect } from 'react';
import Modal from './Modal';
import { Subtask, Person as Profile } from '@/public/Types/GlobalTypes';
import { TaskDetailsModalProps } from '../../Types';
import { useProjectManagement } from '../../../ProjectManagementContext';
import { fetchPeopleData } from '../../services/fetchTaskData';

const containerStyle = css`
  padding: 1.5rem;
`;



const TaskDetailsModal = ({ task, isOpen, close }: TaskDetailsModalProps) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [bucket, setBucket] = useState<string>('');
  const [people, setPeople] = useState<number[]>([]);
  const [peopleNames, setPeopleNames] = useState<string[]>([]);
  const [subTasks, setSubTasks] = useState<Subtask[]>([]);
  const [hoverProfile, setHoverProfile] = useState<Profile | undefined>(undefined);
  const [peopleData, setPeopleData] = useState<Profile[]>([]);
  const { updateTask } = useProjectManagement();

  const convertIdsToNames = (ids: number[], allProfiles: Profile[]): string[] => {
    return ids.map(id => {
      const profile = allProfiles.find(profile => profile.employee_id === id);
      return profile ? profile.name : '';
    });
  };

  useEffect(() => {
    setTitle(task.title);
    setDueDate(task.dueDate);
    setStatus(task.status);
    setBucket(task.bucket);
    setPeople(task.people);
    setPeopleNames(convertIdsToNames(task.people, peopleData));
    setSubTasks(task.subTasks);

    fetchPeopleData().then((data) => {
      setPeopleData(data);
    });
  }, [task]);

  const handleSubTaskChange = (id:number, title:string) => {
    const updatedSubTasks = subTasks.map(sub => sub.subtask_id === id ? {...sub, title} : sub);
    setSubTasks(updatedSubTasks);
  };

  const handleDeleteSubTask = (id:number) => {
    const updatedSubTasks = subTasks.filter(sub => sub.subtask_id !== id);
    setSubTasks(updatedSubTasks);
  };

  const handleMouseEnter = (profileId: number) => {
    const profile = peopleData.find(p => p.employee_id === profileId);
    setHoverProfile(profile);
  };

  const handleMouseLeave = () => {
    setHoverProfile(undefined);
  };

  const convertNamesToIds = (names: string[], allProfiles: Profile[]): number[] => {
    return names.map(name => {
      const profile = allProfiles.find(profile => profile.name === name);
      return profile ? profile.employee_id : -1;
    }).filter(id => id !== -1);
  };

  const handleSaveChanges = () => {
    const newTask = {
      ...task,
      title,
      dueDate,
      status,
      bucket,
      people: convertNamesToIds(peopleNames, peopleData),
      subTasks
    };

    setEditMode(false);
    updateTask(newTask);
    return newTask;
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <div css={containerStyle}>
        {editMode ? (
          <TaskEditForm
            task={{ ...task, title, dueDate, status, bucket, people }}
            subTasks={subTasks}
            onTitleChange={(e) => setTitle(e.target.value)}
            onDueDateChange={(e) => setDueDate(e.target.value)}
            onStatusChange={(e) => setStatus(e.target.value)}
            onBucketChange={(e) => setBucket(e.target.value)}
            onPeopleChange={(e) => setPeopleNames(e.target.value.split(', '))}
            onSubTaskChange={handleSubTaskChange}
            onDeleteSubTask={handleDeleteSubTask}
            onSaveChanges={handleSaveChanges}
          />
        ) : (
          <TaskDisplay
            task={{ ...task, title, dueDate, status, bucket, people }}
            subTasks={subTasks}
            profiles={peopleData}
            hoverProfile={hoverProfile}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            onEdit={() => setEditMode(true)}
          />
        )}
      </div>
    </Modal>
  );
};

export default TaskDetailsModal;
