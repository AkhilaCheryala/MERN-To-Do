import React, { useEffect, useState } from "react";
import './TaskForm.css';

const TaskForm = ({ onTaskCreated, editingTask, onClose}) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        team: "",
        assignee: "",
        priority: "",
        status: "",
    });
    
    const [formErrors, setFormErrors] =useState({
        title:false,
        description: false,
        team: false,
        assignee: false,
        priority: false,
        status: false,
    })
useEffect(()=>{
    if(editingTask !==null){
        setFormData(editingTask);
    }else{
        setFormData({
            title: "",
            description: "",
            team: "",
            assignee: "",
            priority: "",
            status: "",
        })
    }
},[editingTask]);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       const isEmpty = Object.values(formData).some(value => value ==='')
       if(isEmpty){
        const errors = {};
        for(const key in formData){
            if(formData[key]===''){
                errors[key]= true;
            }
        }
        setFormErrors(errors);
       }else{

        onTaskCreated(formData);
       
        setFormData({
            title: "",
            description: "",
            team: "",
            assignee: "",
            priority: "",
            status: "",
        });
        setFormErrors({
            title: false,
            description: false,
            team: false,
            assignee: false,
            priority: false,
            status: false,
        });
    }
    };
    const handleFormClose = () => {
        // Close the form by calling the onClose function passed as prop
        onClose();
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="form_inputs">
                <button onClick={handleFormClose} className="close-btn">X</button>
                <label htmlFor="title">Title</label>
                <input name="title" className='title-input' value={formData.title} onChange={handleChange}  required/>
                <label htmlFor="description">Description</label>
                <input name="description" className='description-input' value={formData.description} onChange={handleChange} required/>
                <label htmlFor="team">Team</label>
                <input name="team" className='team-input' value={formData.team} onChange={handleChange} required/>
                <label htmlFor="assignee">Assignee</label>
                <input name="assignee" className='assignee-input' value={formData.assignee} onChange={handleChange}required />
                <div>
                    <label htmlFor='priority'>Priority:</label>
                    <select name='priority' id='priority' value={formData.priority} onChange={handleChange} required>
                        <option value={""}></option>
                        <option value={"p0"}>p0</option>
                        <option value={"p1"}>p1</option>
                        <option value={"p2"}>p2</option>
                    </select>
                    <label htmlFor='status'>Status</label>
                    <select name='status' value={formData.status} onChange={handleChange} required>
                        <option value={""}></option>
                        <option value={"progress"}>In Progress</option>
                        <option value={"completed"}>completed</option>
                        <option value={"deployed"}>Deployed</option>
                    </select>
                </div>
                <button type="submit" className='create-btn'>Create</button>
            </div>
        </form>
    );
};

export default TaskForm;
