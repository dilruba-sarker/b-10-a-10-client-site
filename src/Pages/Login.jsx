import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();  // To navigate after successful login

  const handleLogin = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError('');
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        setSuccess(true);
        Swal.fire({
          title: "Good job!",
          text: "Successfully logged in!",
          icon: "success"
        });
        navigate('/');  // Redirect to home or dashboard after login
      })
      .catch(err => {
        console.log(err.message);
        setError(err.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" name="email" className="input" required placeholder="Email" />

                <label className="fieldset-label">Password</label>
                <input type="password" name="password" className="input" required placeholder="Password" />

                <div><a className="link link-hover">Forgot password?</a></div>
                
                <button type="submit" className="btn btn-neutral mt-4">Login</button>
                
                {error && <p className="text-red-600 mt-2">{error}</p>} 
                <p className='text-lg text-green-500'>
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
