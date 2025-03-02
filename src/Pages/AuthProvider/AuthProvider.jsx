import React, { createContext, useState } from 'react';
import { auth } from './../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
const [user,setUser]=useState()


const createUser=( email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
   

const authInfo={user,setUser ,createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;