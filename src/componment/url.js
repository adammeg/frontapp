import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function User() {
    const Navigate = useNavigate()
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const name = urlParams.get('name');
    const advantages = urlParams.get('advantages')
    useEffect(() => {
        localStorage.setItem('email', email);
        localStorage.setItem('name', name);
        localStorage.setItem('advantages', advantages);
        Navigate("/")
    }, [])



    return (
        <div>
            <h1>User Details</h1>
            <p>Email and name parameters saved to local storage</p>
        </div>
    );
}

export default User;


//   http://localhost:3000/url?email=johndoe@example.com&name=John%20Doe   //