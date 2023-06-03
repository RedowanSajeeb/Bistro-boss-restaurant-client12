import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/Firebase.vonf";

const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [lodding,setLodding] = useState(true);

    const usercreateWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
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
    };

    return (
        <AuthContext.Provider value={authINF}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;