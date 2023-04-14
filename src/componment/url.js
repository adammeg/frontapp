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
<>
</>
);
}

export default User;


//   http://localhost:3000/url?email=johndoe@example.com&name=John%20Doe&advantages=free%20google%20card   //