import React, { Children, useContext } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user ,loading}=useContext(AuthContext)
    console.log(loading,user );
    const location=useLocation()
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user&& user?.email){
        return children
    }
  return <Navigate state={location.pathname} to='/login'>Login</Navigate>
    // const {loading,user}=useContext(AuthContext)
    // const location=useLocation()
    // if(loading){
    //     return <span className="loading loading-bars loading-lg"></span>
    // }
    // if(user&& user?.email){
    //     return children
    // }
    // // return <Navigate state={location.pathname} to='/login'>Login</Navigate>
    // return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;