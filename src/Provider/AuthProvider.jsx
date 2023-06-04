import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import app from "../Firebase/Firebase.vonf";

const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [lodding,setLodding] = useState(false);

    const usercreateWithEmailAndPassword = (email, password) => {
        setLodding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIN = (email, password) => {
      setLodding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = ( ) => {
        setLodding(true)
        return signOut(auth)

    }

    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser);
            setLodding(false)
          } else {
            // User is signed out
          }
        });
          return () => {
            return unsubscribe
          }
    },[])

    const authINF = {
      user,
      lodding,
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