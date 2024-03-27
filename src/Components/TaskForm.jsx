import './TaskForm.css';

 const TaskForm =({title,description,team,assignee})=>{

    return (
   <form className="task-form" >
     <div className="form_inputs">
        <div className='status-bar'></div>
        <label htmlFor="title">Title</label>
        <input name="title" className='title-input'  value={title}/>
        <label htmlFor="description">Description</label>
        <input name="description" className='description-input' value={description}/>
        <label htmlFor="team">Team</label>
        <input name="team"className='team-input' value={team}/>
        <label htmlFor="assignee">Assignee</label>
        <input name="assignee" className='assignee-input' value={assignee}/>
        <label htmlFor='priority'>Priority:</label>
        <select name='priority' id='priority'> 
         <option value={""}>select</option>
         <option value={"one"}>p0</option>
         <option value={"two"}>p1</option>
         <option value={"three"}>p2</option>
        </select>
        <label htmlFor='status'>Status</label>
        <select name='status'>
         <option value={""}>select</option>
         <option value={"progress"}>In Progress</option>
         <option value={"completed"}>completed</option>
         <option value={"deployed"}>Deployed</option>
        </select>
     
        <button className='create-btn'>Create</button>
        
     </div>
  </form>
    );
 }
 export default TaskForm