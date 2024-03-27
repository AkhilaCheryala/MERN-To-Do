import TaskForm from "../Components/TaskForm";
import './Home.css';
const Home =()=>{
    return(
        <div className="home">
            <nav>
                <h1> Task Board</h1>
                <span className="bi bi-person-circle"></span>
            </nav>
        <TaskForm/>
        </div>
    );
}
export default  Home;