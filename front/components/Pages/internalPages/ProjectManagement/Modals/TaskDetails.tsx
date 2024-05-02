/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import Modal from '@/components/Shared/Internal/Modal';
import { css } from '@emotion/react';
import profiles from '@/components/Shared/API/Data/profiles-dummy.json';

const containerStyle = css`
  padding: 1.5rem;
`;

const headerStyle = css`
  font-size: 2rem; /* Increased font size */
  margin-bottom: 1rem;
`;

const labelStyle = css`
  font-weight: bold;
  margin-top: 1rem; /* Added margin for spacing */
  font-size: 1.2rem; /* Increased font size */
`;

const inputStyle = css`
  padding: 0.5rem;
  margin-top: 0.5rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem; /* Increased font size */
`;

const buttonStyle = css`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem; /* Increased font size */
`;

const listStyle = css`
  margin-top: 0.5rem; /* Added margin for spacing */
  font-size: 1.2rem; /* Increased font size */
`;

interface SubTask {
  id: number;
  title: string;
  isChecked?: boolean;
};

interface TaskDetailsModalProps {
  task: {
    title: string;
    dueDate: string;
    status: string;
    subTasks: SubTask[];
    people: number[]; 
    bucket: string;
    id: number;
  };
  isOpen: boolean;
  close: () => void;
}

interface Profile {
  id: number;
  name: string;
  profilePhoto: string;
  rank: string;
  email: string;
  department: string;
  reportsTo: string;
};

const TaskDetailsModal = ({ task, isOpen, close }: TaskDetailsModalProps) => {

    // Converts an array of profile IDs to an array of names
  const convertIdsToNames = (ids: number[], profiles: Profile[]) => {
    console.log(ids);
    console.log(profiles);
    return ids.map(id => {
      const profile = profiles.find(profile => profile.id === id);
      return profile ? profile.name : ''; // Fallback to empty string if not found
    });
  };

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState<string>(task.title);
  const [dueDate, setDueDate] = useState<string>(task.dueDate);
  const [status, setStatus] = useState<string>(task.status);
  const [bucket, setBucket] = useState<string>(task.bucket);
  const [people, setPeople] = useState<string[]>(convertIdsToNames(task.people, profiles));
  const [subTasks, setSubTasks] = useState<SubTask[]>(task.subTasks);

  // Converts an array of names back to an array of IDs
  const convertNamesToIds = (names: string[], profiles: Profile[]) => {
    return names.map(name => {
      const profile = profiles.find(profile => profile.name === name);
      return profile ? profile.id : -1; // Fallback to -1 if not found
    }).filter(id => id !== -1);
  };

  useEffect(() => {
    setTitle(task.title);
    setDueDate(task.dueDate);
    setStatus(task.status);
    setBucket(task.bucket);
    setPeople(convertIdsToNames(task.people, profiles));
    setSubTasks(task.subTasks);
  }, [task]);

  const handleSaveChanges = () => {
    const updatedTask = {
      ...task,
      title,
      dueDate,
      status,
      bucket,
      people: convertNamesToIds(people, profiles),
      subTasks,
    };
    console.log(updatedTask);
    setEditMode(false);
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <div css={containerStyle}>
        {editMode ? (
          <>
            <div css={headerStyle}>Edit Task</div>
            <div>
              <label css={labelStyle}>Title:</label>
              <input css={inputStyle} value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <label css={labelStyle}>Due Date:</label>
              <input type="date" css={inputStyle} value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            </div>
            <div>
              <label css={labelStyle}>Status:</label>
              <select css={inputStyle} value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
            <div>
              <label css={labelStyle}>Bucket:</label>
              <input css={inputStyle} value={bucket} onChange={(e) => setBucket(e.target.value)} />
            </div>
            <div>
              <label css={labelStyle}>People:</label>
              <input css={inputStyle} value={people.join(', ')} onChange={(e) => setPeople(e.target.value.split(', '))} />
            </div>
            <div>
              <label css={labelStyle}>Subtasks:</label>
              <ul css={listStyle}>
                {subTasks.map(subTask => (
                  <li key={subTask.id}>{subTask.title}</li>
                ))}
              </ul>
            </div>
            <button css={buttonStyle} onClick={handleSaveChanges}>Save Changes</button>
          </>
        ) : (
          <>
            <div css={headerStyle}>{task.title}</div>
            <div>
              <label css={labelStyle}>Due Date:</label>
              <span>{task.dueDate}</span>
            </div>
            <div>
              <label css={labelStyle}>Status:</label>
              <span>{task.status}</span>
            </div>
            <div>
              <label css={labelStyle}>Bucket:</label>
              <span>{task.bucket}</span>
            </div>
            <div>
              <label css={labelStyle}>People:</label>
              <span>{people.join(', ')}</span>
            </div>
            <div>
              <label css={labelStyle}>Subtasks:</label>
              <ul css={listStyle}>
                {task.subTasks.map(subTask => (
                  <li key={subTask.id}>{subTask.title}</li>
                ))}
              </ul>
            </div>
            <button css={buttonStyle} onClick={() => setEditMode(true)}>Edit Task</button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default TaskDetailsModal;
