import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {
 const {user,setUser,createUser}=useContext(AuthContext)
const [success,setSuccess]=useState(false)
const [error,setError]=useState(" ")

console.log('sdsdsds',user);

  const handleRegister = (e) => {

    e.preventDefault();
    setSuccess(false)
    setError("")
      
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo,password);
   
const regEx=/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
if(!regEx.test(password)){
  setError( "Password must be at least 6 characters long, contain an uppercase and a lowercase letter.")
  return 
}

    createUser(email, password)
    .then(result=>{
      const user=result.user
      console.log(result.user);
      setUser(user)
      setSuccess(true)
      Swal.fire("!Registration successful!");
      e.target.reset(); 
    }).catch(err=>{
      console.log(err.message);
      setError(err.message)
    })

  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6"></p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister} className="fieldset">
                <label className="fieldset-label">Name</label>
                <input type="text" name="name" className="input"  required placeholder="Your name" />
                
                <label className="fieldset-label">PhotoUrl</label>
                <input type="text" name="photo" className="input"  required placeholder="PhotoUrl" />
                
                <label className="fieldset-label">Email</label>
                <input type="email" name="email" className="input"  required placeholder="Email" />
                
                <label className="fieldset-label">Password</label>
                <input type="password" name="password" className="input"  required placeholder="Password" />
                
                <div><a className="link link-hover">Forgot password?</a></div>
                
                <button type="submit" className="btn btn-neutral mt-4">Register</button>
                {success&&<p className="text-green-600 mt-2">Registration successful!</p>}
                {error && <p className="text-red-600 mt-2">{error}</p>}
                <p>Already Have Account First <Link to="/login">Login</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
