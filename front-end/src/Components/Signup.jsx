import { Link, useNavigate} from 'react-router-dom';

import './Signup.css';
import { useState } from 'react';
import { useEffect } from 'react';



const Signup = () => {
     const [signupForm, setSignupForm]=useState({});
     const navigate = useNavigate();
  
const handleSignup = (e)=>{
    
    setSignupForm({
        ...signupForm,
        [e.target.name]:e.target.value
    })
}
const handleSignupSubmit = async(e)=>{
    e.preventDefault();

   const response =  await fetch('http://localhost:8080/signup',{
        method:'POST',
        body:JSON.stringify(signupForm),
        headers:{
            'Content-Type':'application/json'
        }
    })
 const data =  await response.json();
    console.log(data);
    alert('Registration successfull');
    navigate('/TaskManager');
    setSignupForm({username:'',email:'',password:''})
}
const getUsers= async()=>{
    const response =  await fetch('http://localhost:8080/signup',{
        method:'GET',
 })
 const data = await response.json();
setUsers(data);
}
useEffect(()=>{
    getUsers();
},[])

 return (
    <div>
        <form className="signup-form" onSubmit={handleSignupSubmit}>
            
            <h2><u>Register</u></h2>
            <div className='x'>
                <label htmlFor='username'>Username:</label>
                <input name="username" placeholder="Enter" 
        onChange={handleSignup} />
            </div>
            <div className='x'>
                <label htmlFor='email'>Email:</label>
                <input name="email" placeholder="Enter" 
        onChange={handleSignup} />
            </div>
            <div className='x'>
                <label htmlFor='password'>Password:</label>
                <input name="password" placeholder="Enter" 
        onChange={handleSignup} />
            </div>
            <button type='submit' className="signup-btn">Signup</button>
            <p>Already have an account <Link to="/Login">Login Now</Link></p>
        </form>
        
        </div>
    );
}
export default Signup;