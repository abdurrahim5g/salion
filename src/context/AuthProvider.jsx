/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  // obserb the auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  // signUp with email & pass
  const signUp = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // signIn
  const signIn = (email, pass) => signInWithEmailAndPassword(auth, email, pass);

  // update user displayName
  const updateDisplayName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  /**
   *
   * Provider sign in Like [google]
   */
  const providerSignIn = (provider) => signInWithPopup(auth, provider);

  // authInfo is the contex value
  const authInfo = {
    user,
    loading,
    signUp,
    signIn,
    updateDisplayName,
    providerSignIn,
  };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
