import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const { user, lodding } = useContext(AuthContext);
    if (lodding){
        return <span className="loading loading-bars mx-auto w-full"></span>;
    }
      if (user) {
        return children;
      }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;