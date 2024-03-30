import TaskForm from '../Components/TaskForm';
import { useState } from "react";
import Filter from "../Components/Filter";
import './TaskManager.css';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [editingTask, setEditingTask] = useState(null);

    const handleAddTask = () => {
        if(editingTask !==null){
            setShowTaskForm(false);
        }else{
        setShowTaskForm(true);}
    };
    

    const handleTaskCreated = (formData) => {
        if(editingTask !==null){
            const updatedTasks = tasks.map(task =>{
                if(task.id ===editingTask.id){
                    return{...task,...formData};
                }
                return task;
            });
            setTasks(updatedTasks);
            setEditingTask(null);
        }else{

        
        const newTask = {
            id: tasks.length + 1, // Generate unique ID for the task
            ...formData
        };
    
        setTasks([...tasks, newTask]);
    }
        setShowTaskForm(false);
        setFormData({
            title: "",
            description: "",
            team: "",
            assignee: "",
            priority: "",
            status:""
        });
    };
    const handleEdit = (taskId) => {
        const taskToEdit = tasks.find(task => task.id === taskId);
        setEditingTask(taskToEdit);
        setShowTaskForm(true);
    };

    const handleDelete = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        setSelectedTaskId(null); // Deselect the task after deletion
        setEditingTask(null); // Clear editing task
    };

    const handleEditOptions = (taskId) => {
        setSelectedTaskId(taskId === selectedTaskId ? null : taskId); // Toggle the selected task ID
    };
    const handleCloseForm = () => {
        setShowTaskForm(false);
        setEditingTask(null);
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
                {showTaskForm && <TaskForm onTaskCreated={handleTaskCreated} editingTask={editingTask} onCancel={() => {setShowTaskForm(false); setEditingTask(null);}}onClose={handleCloseForm}/>}
                <div className="task-list">
                    {tasks.map(task => (
                        <div key={task.id} className="task-item">
                            <div className='task-options'>
                                <h2>Task {task.id}</h2>
                                <div className='task-dropdown'>
                                <span className='bi bi-three-dots-vertical' onClick={() => handleEditOptions(task.id)}></span>
                                {selectedTaskId === task.id && (
                                    <div className='dropdown-content'>
                                        <button onClick={()=>handleEdit(task.id)}>Edit</button>
                                        <button onClick={()=>handleDelete(task.id)}>Delete</button>
                                    </div>
                                )}
                                </div>
                            </div>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <div className='task-prior-clm'>
                                <p>@{task.assignee}</p>
                                <p className='task-priority'>{task.priority}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
 export default TaskManager