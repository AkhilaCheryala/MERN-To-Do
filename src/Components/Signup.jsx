import { Link } from 'react-router-dom';
import './Signup.css';
const Signup =()=>{
    return(
<form className="signup-form" action ="POST">
    <h2><u>Register</u></h2>
    <div className='x'>
    <label htmlFor='username'>Username:</label>
    <input name="username" placeholder="Enter" onChange={(e)=>{setUsername(e.target.value)}}/>
    </div>
    <div className='x'>
    <label htmlFor='email'>Email:</label>
    <input name="email" placeholder="Enter" onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div className='x'>
    <label htmlFor='password'>Password:</label>
    <input name="password" placeholder="Enter" onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
<button type='submit' className="signup-btn">Signup</button>
<p>Already have an account <Link to="/Login">Login Now</Link></p>
</form>
    );
}
export default Signup;