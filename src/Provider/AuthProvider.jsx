import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.vonf";
import axios from "axios";

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const usercreateWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIN = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // Google with
  const google = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };
  //  githubHandler;
  const github = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGithub);
  };

  //  Update a user's profile

  const updateProfile1 = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      
        // get token from JWT and update

        // fetch('',{
        //   method: 'POST',
        // })
        if (currentUser) {
          axios
            .post("http://localhost:3000/jwt", { email: currentUser.email })
            .then((data) => {
              console.log(data.data.token);

              localStorage.setItem("access-Token", data.data.token);
            });
        }
      } else {
        // User is signed out
        localStorage.removeItem("access-Token");

        setLoading(false);
      }
        setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authINF = {
    user,
    loading,
    usercreateWithEmailAndPassword,
    updateProfile1,
    signIN,
    logOut,
    google,
    github,
  };

  return (
    <AuthContext.Provider value={authINF}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
