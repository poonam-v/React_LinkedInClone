import React, { useState } from 'react';
import './LoginForm.css';
import { FaGoogle, FaApple } from "react-icons/fa";

const LoginForm = () => {
    const [isLoginForm, setIsLoginForm] = React.useState(true);
    const [visible, setVisible] = useState(false);
  return (
    <div className='wrapper'>
        <form action="">
            {isLoginForm ? <h1>Sign in</h1> : < h1></h1>}
            {isLoginForm ? <p>Stay updated on your professional world.</p> : <p className='register-font-size'>Make the most of your professional life</p>}
            <div className="input-box">
                <input type="text" placeholder="Email or Phone" required />
            </div>
            <div className="input-box">
                <input 
                type={visible ? "text" :"password"}  
                placeholder="Password" required />
                <div className="show-hide"><span onClick={(e) =>setVisible(!visible)}>{visible ? "Hide" : "Show"}</span></div>
                
            </div>
            <div className="remember-forgot">
                <a href="#">Forgot Password?</a>
            </div>

            <div className="keep-logged">
                <label><input type='checkbox' /> Keep me logged in </label>            
            </div>

            <button type="submit">{isLoginForm ? "Sign In" : "Agree & Join"}</button>
            <div className="or-separator"> 
                <span>-------------------------------or------------------------------</span> 
                </div>
            
            <div className='google-link'>
                <FaGoogle className='icon'/>
                <p>Continue with Google</p>
            </div>

            <div className='google-link'>
                <FaApple  className='icon'/>  
                <p>Sign in with Apple</p>
            </div>
            {isLoginForm ? <div className="signup-link"> New to LinkedIn? <a href="#" onClick={(e) => setIsLoginForm(!isLoginForm)}>Join now</a></div> : <div className="signup-link"> Already on LinkedIn? <a href="#" onClick={(e) => setIsLoginForm(!isLoginForm)}>Sign in</a></div>}
            
        </form>
    </div>
  )
}

export default LoginForm

