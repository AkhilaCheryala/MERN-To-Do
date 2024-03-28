import './Signup.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <form className="signup-form" action="POST">
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