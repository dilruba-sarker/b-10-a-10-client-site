import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { setUser, createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const regEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regEx.test(password)) {
      setError("Password must be at least 6 characters long, contain an uppercase and a lowercase letter.");
      return;
    }

    try {
      // ✅ Create User
      const result = await createUser(email, password);
      const currentUser = result.user;

      // ✅ Update User Profile
      await updateProfile(currentUser, {
        displayName: name,
        photoURL: photo,
      });

      // ✅ Manually update state
      setUser({
        ...currentUser,
        displayName: name,
        photoURL: photo,
      });

      setSuccess(true);
      Swal.fire("Registration successful!");
      e.target.reset();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <label className="fieldset-label">Name</label>
              <input type="text" name="name" className="input" required placeholder="Your name" />
              
              <label className="fieldset-label">Photo URL</label>
              <input type="text" name="photo" className="input" required placeholder="Photo URL" />
              
              <label className="fieldset-label">Email</label>
              <input type="email" name="email" className="input" required placeholder="Email" />
              
              <label className="fieldset-label">Password</label>
              <input type="password" name="password" className="input" required placeholder="Password" />
              
              <button type="submit" className="btn btn-neutral mt-4">Register</button>
              {success && <p className="text-green-600 mt-2">Registration successful!</p>}
              {error && <p className="text-red-600 mt-2">{error}</p>}
              <p className='text-lg text-green-500'>Already Have an Account? <Link to="/login">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
