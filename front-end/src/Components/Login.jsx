import { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] =useState('');
    const[password,  setPassword] = useState('');
    const handleLoginSubmit = async (e) =>{
        e.preventDefault();
        try{
const response = await fetch('http://localhost:8080/login',{
     method:'POST',
     headers:{
        'Content-Type':'application/json'
     },
     body:JSON.stringify({username,password})
});
const data = await response.json();
console.log(data);
        }catch(error){
            console.error('Error',error);
        }
    }
    return (
        <form className="signup-form" onSubmit={handleLoginSubmit}>
            <h2><u>Login</u></h2>
            <div className='x'>
                <label htmlFor='username'>Username:</label>
                <input name="username" placeholder="Enter" onChange={(e) => { setUsername(e.target.value) }} />
            </div>
            <div className='x'>
                <label htmlFor='password'>Password:</label>
                <input name="password" placeholder="Enter" onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <button type='submit' className="login-btn">Login</button>
            <p>Don't have an account yet? <Link to="/Signup">Register Now</Link></p>
        </form>
    );
}
export default Login;