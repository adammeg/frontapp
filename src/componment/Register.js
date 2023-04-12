import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddress } from "@thirdweb-dev/react";
import axios from "./axios";
const Register = () => {
    const [name, setUsername] = useState(localStorage.getItem('name'));
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [password, setPassword] = useState("");
    const Navigate = useNavigate()
    const notifyy = () => toast("WELCOME !", name);
    const notify = () => toast("PLEASE VERIFY YOUR INFORMATIONS AND YOU CONNECT YOUR WALLET !")
    const walletnotify = () => toast("CONNECT YOU WALLET PLEASE !");
    const address = useAddress()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/auth/signup", JSON.stringify({ name, email, password, address }), {
                headers: { "Content-Type": "application/json" }
            })
            console.log({ name, email, password, address });
            console.log(res?.status)
            if (address != null){
                if (res?.status === 201) {
                    notifyy()
                    Navigate("/")
                }
            }else{
                walletnotify()
            }

        } catch (err) {
            if (!err?.res) {
                console.log("No Server res");
            } else if (err.res?.status === 409) {
                console.log("Username Taken");
                notify()
            } else {
                console.log("Registration Failed");
            }
        }
    };
    return (
        <main className='register'>
            <div className="card">
                <h1 className='registerTitle'>Create an account</h1>
                <form className='registerForm' onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            required
                            value={name}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor='email'>Email Address</label>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className='registerBtn'>REGISTER</button>
                    <p>
                        Have an account? <Link to='/'>Sign in</Link>
                        <ToastContainer />
                    </p>
                    
                </form>
            </div>
        </main>
    );
};

export default Register;
