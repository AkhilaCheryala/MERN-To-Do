import React, { useState } from "react";
import './TaskForm.css';

const TaskForm = ({ onTaskCreated }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        team: "",
        assignee: "",
        priority: "",
        status: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form data if needed
        onTaskCreated(formData);
        // Clear form fields after submission if needed
        setFormData({
            title: "",
            description: "",
            team: "",
            assignee: "",
            priority: "",
            status: "",
        });
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <div className="form_inputs">
                <div className='status-bar'></div>
                <label htmlFor="title">Title</label>
                <input name="title" className='title-input' value={formData.title} onChange={handleChange} />
                <label htmlFor="description">Description</label>
                <input name="description" className='description-input' value={formData.description} onChange={handleChange} />
                <label htmlFor="team">Team</label>
                <input name="team" className='team-input' value={formData.team} onChange={handleChange} />
                <label htmlFor="assignee">Assignee</label>
                <input name="assignee" className='assignee-input' value={formData.assignee} onChange={handleChange} />
                <div>
                    <label htmlFor='priority'>Priority:</label>
                    <select name='priority' id='priority' value={formData.priority} onChange={handleChange}>
                        <option value={""}></option>
                        <option value={"one"}>p0</option>
                        <option value={"two"}>p1</option>
                        <option value={"three"}>p2</option>
                    </select>
                    <label htmlFor='status'>Status</label>
                    <select name='status' value={formData.status} onChange={handleChange}>
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
