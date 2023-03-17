import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("adam.benhadjaissa@esprit.tn");
    const [password, setPassword] = useState("123456");
    const [isVerified, setIsVerified] = useState(false);

    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const notify = () => toast("wrong PASSWORD or E-MAIL !");
        const notifyy = () => toast("WELCOME !");
        const mail = "adam.benhadjaissa@esprit.tn";
        const pass = "123456";
        console.log({ email, password });
        if (email === mail && password === pass) {
          setIsVerified(true); // Update state variable
          notifyy()
          Navigate("/dashboard");
        } else {
          setIsVerified(false); // Update state variable
          Navigate("/");
          notify();
        }
      };

    return (
        <main className='login'>
            <div className="card">
                <h1 className='loginTitle'>Log into your account</h1>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type='text'
                            name='email'
                            id='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="nome@email.com.br" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type='password'
                            name='password'
                            id='password'
                            placeholder="*****"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="loginBtn">Login</button>
                    <ToastContainer />
                    <p>
                        Don't have an account? <Link to='/register'>Create one</Link>
                    </p>
                </form>
            </div>
        </main>
    );
};

export default Login;