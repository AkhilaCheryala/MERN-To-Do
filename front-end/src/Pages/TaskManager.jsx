import TaskForm from '../Components/TaskForm';
import { useState } from "react";
import Filter from "../Components/Filter";
import './TaskManager.css';
const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [showTaskForm ,setShowTaskForm] =useState(false);

    const handleAddTask =()=>{
        setShowTaskForm(true);
    };
    const handleTaskCreated = (formData) => {
        const newTask = {
            id: tasks.length + 1, // Generate unique ID for the task
            ...formData
        };

        setTasks([...tasks, newTask]);
        
        setShowTaskForm(false); // Hide the task form after task creation
    };
    return (
        <div className="main-page">
            <nav>
                <h1> Task Board</h1>
                <button className="login-btn">Log in <span className="bi bi-person-circle"></span></button>
            </nav>
            <div className="task-mg">
                <div>
                    <Filter onAddTask={handleAddTask} />
                </div>
                {showTaskForm &&<TaskForm onTaskCreated={handleTaskCreated}/>}
                <div className="task-list">
                    {tasks.map(task => (
                        <div key={task.id} className="task-item">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            {/* Render other task details */}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
export default TaskManager;