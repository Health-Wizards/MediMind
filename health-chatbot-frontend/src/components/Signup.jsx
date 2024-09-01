import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch (error) {
            console.error('Error signing up', error);
        }
    };

    return (
        <div className="container">
            <h2 className="my-4 text-center">Signup</h2>
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
