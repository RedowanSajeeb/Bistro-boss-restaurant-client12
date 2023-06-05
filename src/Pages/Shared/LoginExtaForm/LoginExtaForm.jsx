import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const LoginExtaForm = () => {
     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || "/";
  
    const { google, github } = useContext(AuthContext);
    const googleHandler = ( ) =>{
        google()
          .then((result) => {
           
            const user = result.user;
          
            console.log(user);
             Swal.fire({
               icon: "success",
               title: "Login successfully",
               showConfirmButton: false,
               timer: 1000,
             });
            navigate(from, { replace: true });
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage,errorCode);
          });
   
    }
    const githubHandler = ( ) => {
           github()
             .then((result) => {
               const user = result.user;

               console.log(user);
               Swal.fire({
                 icon: "success",
                 title: "Login successfully",
                 showConfirmButton: false,
                 timer: 1000,
               });
               navigate(from, { replace: true });
             })
             .catch((error) => {
               // Handle Errors here.
               const errorCode = error.code;
               const errorMessage = error.message;
               console.log(errorMessage, errorCode);
             });
    }
    return (
      <div className="md:flex space-x-4">
        <div>
          <button
            onClick={googleHandler}
            href="#"
            className="flex items-center justify-center px-6 py-3 mt-4  transition-colors duration-300 transform border rounded-lg dark:border-gray-700  hover:bg-gray-50"
          >
            <img
              className="w-6 h-6 mx-2"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt=""
            />

            <span className="mx-2">Google</span>
          </button>
        </div>
        <div>
          <button onClick={githubHandler}
            href="#"
            className="flex items-center justify-center px-6 py-3 mt-4  transition-colors duration-300 transform border rounded-lg dark:border-gray-700  hover:bg-gray-50"
          >
            <img
              className="w-6 h-6 mx-2"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt=""
            />
            <span className="mx-2">GitHub</span>
          </button>
        </div>
      </div>
    );
};

export default LoginExtaForm;