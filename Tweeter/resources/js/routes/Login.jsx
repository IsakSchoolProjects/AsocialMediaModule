import axios from 'axios';
import {React, useState} from 'react';


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (Login) => {
        console.log(Login)  
        
        axios
            .post('http://127.0.0.1:8000/api/login', {
                email: Login.email,
                password: Login.password,
            })
            .then(function (res) {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.response.data);
            })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onLogin({email, password})
    }
    return (
        <div>
        <h1>This is the login page...</h1>
        <form onSubmit={onSubmit} className='flex flex-col gap-4'>
            <label>Email</label>
            <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-black"
            />
            <label>Password</label>
            <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-black"
            />
            <button type="submit" className="border border-black">Login</button>
        </form>
    </div>
    )
}