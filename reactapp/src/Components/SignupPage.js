import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            // Placeholder for signup logic
            navigate('/login');
        } else {
            alert("Passwords don't match!");
        }
    };

    return (
        <div>
            <h2>Sign Up for Hotel Booking System</h2>
            <form onSubmit={handleSignup}>
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Log in here</Link></p>
        </div>
    );
}

export default SignupPage;
