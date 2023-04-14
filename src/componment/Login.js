import React, { useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddress } from "@thirdweb-dev/react";
import axios from "./axios"
const Login = () => {
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [password, setPassword] = useState("");
    var isVerified = false
    var token = 0
    const Navigate = useNavigate();
    const address = useAddress();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const notifyy = () => toast("WELCOME !");
        const notify = () => toast("PLEASE VERIFY YOUR INFORMATIONS !")
        const walletnotify = () => toast("CONNECT YOU WALLET PLEASE !");
        try {
            if (address != null) {
                let res = await axios.post("/auth/login", JSON.stringify({ email, password, address }),
                    { headers: { "Content-Type": "application/json" } })
                console.log(res.status)
                let data = res.data
                console.log(JSON.stringify(data))
                if (res.status === 201) {
                    token = data
                    isVerified = true
                    localStorage.setItem('isVerified', true)
                    Navigate("/dashboard")
                    console.log(isVerified, "////")
                }
            } else {
                walletnotify()
            }
        } catch (err) {
            if (err.res?.status === 400) {
                console.log("missing user name or pass")
                notify()
            } else if (err.res?.status === 401) {
                console.log("Unauthorized")
                notify()
            } else {
                console.log("login faild")
                notify()
            }
        }
    };
    return (
        <>
            <h1 className="title">WELCOME TO MES CODE DIGITAUX</h1>
            <p className="description">GET START YOUR NFT EXPERIENCE FROM HERE</p>
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
                                placeholder="nome@email.com" />
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
        </>
    );
};
export default Login;