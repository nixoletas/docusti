import React, { useState } from 'react';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  const login = async () => {
    const response = await fetch('http://seu-servidor-jwt.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.token) {
      setToken(data.token);
      localStorage.setItem('token', data.token);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <div>
      {!token ? (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login}>Login</button>
        </div>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
};

export default Auth;