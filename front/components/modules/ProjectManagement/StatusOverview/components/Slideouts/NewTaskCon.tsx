import { useState, useEffect } from "react";
import NewTaskModal from "./NewTask";
import { Subtask, Person as Profile } from '@/public/Types/GlobalTypes';
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent form from submitting early
        const newTask = {
          id: task_id,
          title,
          subTasks,
          people,
          bucket,
          status,
          dueDate
        };
        addTask(newTask);
        close();
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = parseInt(e.target.value);
        if (!people.includes(selectedId)) {
          setPeople([...people, selectedId]); // Add the selected person's ID to the array
        }
    };

    return (
        <NewTaskModal
            isOpen={isOpen}
            close={close}
            teams={teams}
            addTask={addTask}
            handleSelectChange={handleSelectChange}
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
        />
    );
};

export default NewTaskCon;