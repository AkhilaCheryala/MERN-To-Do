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
        <button className='status'>Status</button>
     </div>
  </form>
    );
 }
 export default TaskForm