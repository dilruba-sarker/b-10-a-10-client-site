// import React, { createContext, useState, useEffect } from 'react';
// import { auth } from './../../firebase.init';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading,setLoading]=useState(true)
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };


//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         // Ensure updated user data is set, including photoURL
//         setUser({
//           uid: currentUser.uid,
//           email: currentUser.email,
//           displayName: currentUser.displayName,
//           photoURL: currentUser.photoURL, // ✅ Ensure photoURL is included
//         });
//         setLoading(false)
//       } else {
//         setUser(null);
//         setLoading(false)
//       }
//     });

//     return () => unsubscribe(); // Cleanup subscription
//   }, []);

//   const createUser = (email, password) => {
//     setLoading(true)
//     return createUserWithEmailAndPassword(auth, email, password)
//   };
//   const signInUser = (email, password) => {
//     setLoading(true)
//     return signInWithEmailAndPassword(auth, email, password);
//   }
//   const logOut = () => {
//     setLoading(true)
//     return signOut(auth)
//   };
//   const updateProfileData=(updatedDate)=>{
//     return updateProfile(auth.currentUser,updatedDate)
//   }
//   const authInfo = {
//     toggleTheme,isDarkMode,
//     user,
//     signInUser,
//     logOut,
//     setUser,
//     createUser,
//     updateProfileData,loading,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
// src/context/AuthProvider.js
import React, { createContext, useState, useEffect } from 'react';
import { auth } from './../../firebase.init';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const provider = new GoogleAuthProvider();
 

  // Firebase auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  // Firebase auth functions
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateProfileData = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // Context value
  const authInfo = {
    googleSignIn,
    user,setUser,
    loading,
    createUser,
    signInUser,
    logOut,
    updateProfileData,
   
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;