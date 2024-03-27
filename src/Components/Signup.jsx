import './Signup.css'
const Signup =()=>{
    return(
<div className="signup-form">
    <h2><u>Register</u></h2>
    <div className='x'>
    <label htmlFor='username'>Username:</label>
    <input name="username" placeholder="Enter"/>
    </div>
    <div className='x'>
    <label htmlFor='email'>Email:</label>
    <input name="email" placeholder="Enter"/>
    </div>
    <div className='x'>
    <label htmlFor='password'>Password:</label>
    <input name="password" placeholder="Enter"/>
    </div>
<button className="signup-btn">Signup</button>
<p>Already have an account Login Now</p>
</div>
    );
}
export default Signup;