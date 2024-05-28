import { useState, useEffect } from "react";
import NewTaskModal from "./NewTask";
import { Task, Subtask, Person as Profile } from '@/public/Types/GlobalTypes';
import { useProjectManagement } from '../../../ProjectManagementContext';
import { fetchPeopleData } from "../../services/fetchPeopleData";

const NewTaskCon = ({ isOpen, close }: { isOpen: boolean, close: () => void }) => {
  const [title, setTitle] = useState('');
  const [subTasks, setSubTasks] = useState<Subtask[]>([]);
  const [subTaskInput, setSubTaskInput] = useState('');
  const [people, setPeople] = useState<number[]>([]);
  const [bucket, setBucket] = useState('');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [peopleData, setPeopleData] = useState<Profile[]>([]);
  const [task_id, setTaskId] = useState(0);

  const { teams, addTask } = useProjectManagement();

  useEffect(() => {
    fetchPeopleData().then((data) => {
      setPeopleData(data);
    });
    setTaskId(Math.floor(Math.random() * 10000));
  }, []);

  const handleAddSubTask = () => {
    const newSubTask = { subtask_id: Math.floor(Math.random() * 10000), title: subTaskInput, complete: false, task_id: task_id };
    setSubTasks([...subTasks, newSubTask]);
    setSubTaskInput('');
  };

  const handleRemoveSubTask = (subtask_id: number) => {
    setSubTasks(subTasks.filter((subtask) => subtask.subtask_id !== subtask_id));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form from submitting early
    const newTask: Task = {
      task_id,
      ticket_id: Math.floor(Math.random() * 10000), // Assign a new ticket_id
      title,
      bucket,
      status,
      due_date: dueDate,
      complete: false,
    };
    //this will be replaced with a call to the API to place the Task, Subtasks, and People in the database
    addTask(newTask);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    if (!people.includes(selectedId)) {
      setPeople([...people, selectedId]); // Add the selected person's ID to the array
    }
  };

  const handlePeopleCheckboxChange = ({ value, checked }: { value: number, checked: boolean }) => {
    if (checked) {
      setPeople([...people, value]);
    } else {
      setPeople(people.filter(id => id !== value));
    }
  };

  return (
    <NewTaskModal
      isOpen={isOpen}
      close={close}
      teams={teams}
      addTask={addTask} // Pass the addTask prop
      handleSelectChange={handleSelectChange} // Pass the handleSelectChange prop
      handleAddSubTask={handleAddSubTask}
      handleSubmit={handleSubmit}
      title={title}
      subTasks={subTasks}
      people={people}
      bucket={bucket}
      status={status}
      dueDate={dueDate}
      subTaskInput={subTaskInput}
      setTitle={setTitle}
      setSubTaskInput={setSubTaskInput}
      setPeople={setPeople}
      setBucket={setBucket}
      setStatus={setStatus}
      setDueDate={setDueDate}
      peopleData={peopleData}
      handleRemoveSubTask={handleRemoveSubTask}
      handlePeopleCheckboxChange={handlePeopleCheckboxChange}
    />
  );
};

export default NewTaskCon;
