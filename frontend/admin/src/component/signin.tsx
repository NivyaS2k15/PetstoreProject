import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  username: string;
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:4561/api/login', {
          username: username,
          email: email,
          password: password,
        });

        // Assuming your backend returns a token and user data in the response
        const { token, userData } = response.data;

        // Store the token in localStorage or a state management solution
        localStorage.setItem('token', token);

        // Redirect to the user-list page or perform any other actions as needed
        navigate('/listorder');
      } catch (error) {
        // Handle login failure, show an alert or error message
        console.error('Login failed:', error);
      }
    } else {
      // Show an error message or handle the case where fields are empty
      console.error('Please enter valid credentials');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body" style={{ backgroundColor: ' #8f93d4' }}>
              <h2 className="card-title mb-4">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <input
                    style={{ backgroundColor: '#a484b9' }}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    style={{ backgroundColor: '#a484b9' }}
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    style={{ backgroundColor: '#a484b9' }}
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Admin Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
