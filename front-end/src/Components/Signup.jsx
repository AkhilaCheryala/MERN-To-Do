import { Link} from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
import { useState } from 'react';


const Signup = () => {

    const[formData, setFormData]= useState({
        username:'',
        email:'',
        password:''
    })
    const handleChange =e=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
 const handleSubmit = async e =>{
    e.preventDefault();
    try{
        const res = await axios.post('/api/Users/signup',formData);
        console.log(res.data);
        window.location.href = '/TaskManager';
    }
    catch(err){
console.error(err);
    }
 
    }


    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <h2><u>Register</u></h2>
            <div className='x'>
                <label htmlFor='username'>Username:</label>
                <input name="username" placeholder="Enter" value={formData.username}
        onChange={handleChange} />
            </div>
            <div className='x'>
                <label htmlFor='email'>Email:</label>
                <input name="email" placeholder="Enter" value={formData.email}
        onChange={handleChange} />
            </div>
            <div className='x'>
                <label htmlFor='password'>Password:</label>
                <input name="password" placeholder="Enter" value={formData.password}
        onChange={handleChange} />
            </div>
            <button type='submit' className="signup-btn">Signup</button>
            <p>Already have an account <Link to="/Login">Login Now</Link></p>
        </form>
    );
}
export default Signup;