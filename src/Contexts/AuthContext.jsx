// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      console.log("User logged in:", firebaseUser);
    } else {
      console.log("No user logged in");
    }
    setUser(firebaseUser);
    setLoading(false);
  });
  return unsubscribe;
}, []);


const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      setUser(result.user);
      console.log("Signed in user:", result.user);
      return result;
    });
};

const signup = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(result.user);
  setUser(result.user);
  console.log("Signed up user:", result.user);
  return result;
};


  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
      return result;
    });
  };

  const signout = () =>{
    fbSignOut(auth).then(() => setUser(null));}
 

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        signin,
        signinWithGoogle,
        signout,
        resetPassword,
      }}
    >
      {!loading ? children : <div className="p-6 text-center">Checking auth...</div>}
    </AuthContext.Provider>
  );
};
