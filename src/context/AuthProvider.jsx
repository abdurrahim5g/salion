/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContex = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  // obserb the auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
    return unsubscribe;
  }, [auth]);

  // signUp with email & pass
  const signUp = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // update user displayName
  const updateDisplayName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // authInfo is the contex value
  const authInfo = {
    user,
    signUp,
    updateDisplayName,
  };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
