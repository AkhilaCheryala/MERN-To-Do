import TaskForm from "../Components/TaskForm";
import Filter from "../Components/Filter";
import './TaskManager.css';
const TaskManager =()=>{
    return(
        <div className="main-page">
            <nav>
                <h1> Task Board</h1>
                    <button className="login-btn">Log in <span className="bi bi-person-circle"></span></button>
            </nav>
            <div className="task-mg">
                <div>
                <Filter/>
                 <TaskForm/>
                </div>
                 </div>
       
        </div>
    );
}
export default  TaskManager;