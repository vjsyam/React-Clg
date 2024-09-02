import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        if (email === 'user@hotel.com' && password === 'password123') {
            navigate('/home');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Login to Hotel Booking System</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
        </div>
    );
}

export default LoginPage;
