import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import app from "../Firebase/Firebase.vonf";

const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const usercreateWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIN = (email, password) => {
      setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = ( ) => {
        setLoading(true)
        return signOut(auth)

    }

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser);
            setLoading(false)
          } else {
            // User is signed out
            setLoading(false)
          }
        });
          return () => {
            return unsubscribe()
          }
    },[])

    const authINF = {
      user,
      loading,
      usercreateWithEmailAndPassword,
      signIN,
      logOut,
    };

    return (
        <AuthContext.Provider value={authINF}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;