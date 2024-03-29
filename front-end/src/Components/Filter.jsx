import React from "react";
const  Filter =({onAddTask})=>{
const handleAddTaskClick =()=>{
    onAddTask();
};
    return(
<div className="filter-part">
  
    <label htmlFor="assignee" >Filter by:</label>
    <input name="assignee" />
    <input name="priority"/>
    <input name="date"  />
    <button className="filter-btn">Apply</button>
    
    <button className="add-task" onClick={handleAddTaskClick}>Add new task <span className="bi bi-pen-fill"></span></button>
</div>
    );
}
export default Filter; 