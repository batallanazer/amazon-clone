import React, {useState} from 'react'
import './Login.css'
import { Link,useHistory } from 'react-router-dom'
import {auth} from './firebase'


function Login() {
    const history = useHistory();
  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event)=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push("/");
            })
            .catch((e)=>alert(e.message));
    }
    const register = (event) =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/");
        })
        .catch((e)=>alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                            src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
                            alt="Amazon Logo" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={login} className="login__signInButton">Sign In</button>
                </form>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button onClick={register} className="login__registerButton">Create Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
