import axios from 'axios';
import {React, useState} from 'react';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');

    const onRegister = (register) => {
        console.log(register)  
        
        axios
            .post('http://127.0.0.1:8000/api/register', {
                name: register.name,
                email: register.email,
                password: register.password,
                password_confirmation: register.password_confirmation,
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

        onRegister({name, email, password, password_confirmation})
    }

    

    return (
        <div>
            <h1>This is the Register page...</h1>
            <form onSubmit={onSubmit} className='flex flex-col gap-4'>
                <label>Name</label>
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-black"
                />
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
                <label>Confirm Password</label>
                <input 
                    type="password"
                    required
                    value={password_confirmation}
                    onChange={(e) => setPassword_confirmation(e.target.value)}
                    className="border border-black"
                />
                <button type="submit" className="border border-black">Register</button>
            </form>
        </div>

        
    )
}