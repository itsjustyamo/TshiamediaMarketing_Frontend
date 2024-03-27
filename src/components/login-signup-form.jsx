import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        // Here you can dispatch an action to your Redux store or handle authentication using any other method
        console.log('Login:', username, password);
    };

    return (
        <div style={{ backgroundColor: '#000', color: '#fff', fontFamily: 'Arial, sans-serif', textAlign: 'center', paddingTop: '20vh' }}>
            <form style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }} onSubmit={handleLogin}>
                <h2>Login</h2>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginTop: '10px', padding: '10px', width: '100%', borderRadius: '5px', fontSize: '16px', border: 'none' }} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginTop: '10px', padding: '10px', width: '100%', borderRadius: '5px', fontSize: '16px', border: 'none' }} />
                <button type="submit" style={{ marginTop: '10px', padding: '10px', width: '100%', borderRadius: '5px', fontSize: '16px', border: 'none', backgroundColor: 'green', color: 'white', cursor: 'pointer' }}>Login</button>
            </form>
        </div>
    );
};

export default Login;
