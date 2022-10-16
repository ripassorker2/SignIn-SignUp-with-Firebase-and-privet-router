import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/forebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [loading, setLoding] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    return signOut(auth);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscripe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
      // console.log("state changes", currentUser);
    });
    return () => {
      unsubscripe();
    };
  }, []);
  const userInfo = { user, loading, createUser, signIn, LogOut, googleSignIn };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
