// import React from 'react';
import { useContext, useEffect,  useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Helmett from "../../Components/Helmet/Helmett";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  
  const { signIN } = useContext(AuthContext);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const loginHandeler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
     
    signIN(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
          Swal.fire({
            icon: "success",
            title: "Login successfully",
            showConfirmButton: false,
            timer: 1000,
          });
        // ...
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });



  };

  const captchaHAndelerChange = (e) => {
    const value = e.target.value;
    console.log(value);
    if (validateCaptcha(value)) {
      // alert("Captcha Matched");
      setDisabled(false);
      e.target.value = " ";
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmett title={"LogIn "}></Helmett>;
      <div className="hero-content   flex-col ">
        <div className="text-center w-96 max-w-sm  lg:text-left">
          <h1 className="text-5xl text-center mb-7 font-bold">Login</h1>
        </div>
        <form
          onSubmit={loginHandeler}
          className="card flex w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <button href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={captchaHAndelerChange}
                type="text"
                name="captcha"
                placeholder="Type captcha above"
                className="input input-bordered"
              />
              <p className=" mt-3">Captcha Match click this text🎯</p>
            </div>
            <div className="form-control mt-6 bg-[rgba(209, 160, 84, 0.7)]">
              <button
                disabled={disabled}
                className="btn btn-warning  text-white"
              >
                Sign In
              </button>
            </div>
            <p className="text-[#D1A054] text-lg text-center">
              New here?{" "}
              <Link className="font-bold" to={"/signup"}>
                Create a New Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
