import React, { createContext, useState, useEffect } from 'react';
import { auth } from './../../firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Ensure updated user data is set, including photoURL
        setUser({
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL, // ✅ Ensure photoURL is included
        });
        setLoading(false)
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  };
  const updateProfileData=(updatedDate)=>{
    return updateProfile(auth.currentUser,updatedDate)
  }
  const authInfo = {
    user,
    signInUser,
    logOut,
    setUser,
    createUser,
    updateProfileData,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
