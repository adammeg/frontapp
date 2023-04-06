import React, { useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddress } from "@thirdweb-dev/react";
import axios from "./axios"
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVerified, setIsVerified] = useState(false);
    const Navigate = useNavigate();

    const address = useAddress();
    /* (!address) return <div>No wallet connected</div>;
     <div>My wallet address is {address}</div>; */

    const handleSubmit = async (e) => {
        e.preventDefault();
        const notifyy = () => toast("WELCOME !");
        const notify = () => toast("PLEASE VERIFY YOUR INFORMATIONS AND YOU CONNECT YOUR WALLET !")
        try {

            let res = await axios.post("/auth/login", JSON.stringify({ email, password, address }),
                { headers: { "Content-Type": "application/json" } })
            console.log(res.status)
            let data = res.data
            console.log(JSON.stringify(data))
            if (res.status === 201) {
                notifyy()
                Navigate("/dashboard")
                setIsVerified(true)
                console.log(isVerified)
            }

        } catch (err) {
            if (err.res?.status === 400) {
                console.log("missing user name or pass")
                notify()
            } else if (err.res?.status === 401) {
                console.log("missing user name or pass")
                notify()
            } else {
                console.log("login faild")
                notify()
            }
        }

        /* const notify = () => toast("PLEASE VERIFY YOUR INFORMATIONS AND YOU CONNECT YOUR WALLET !");
         const notifyy = () => toast("WELCOME !");
         const mail = "adam.benhadjaissa@esprit.tn";
         const pass = "123456";
         console.log({ email, password, address });
         if (email === mail && password === pass) {
             if (!address) {
                 setIsVerified(true); // Update state variable
                 Navigate("/");
                 localStorage.setItem('isVerified', true)
 
                 notify();
             } else {
                 setIsVerified(false); // Update state variable
                 notifyy()
                 localStorage.setItem('isVerified', false)
                 Navigate("/dashboard");
             }
         } */
    };
    return (
        <>
            <h1 className="title">WELCOME TO MES CODE DIFITAUX</h1>
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
        </>
    );
};
export default Login;