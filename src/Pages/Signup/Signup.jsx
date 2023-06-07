import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import LoginExtaForm from "../Shared/LoginExtaForm/LoginExtaForm";

// import React from 'react';

const Signup = () => {
  const { usercreateWithEmailAndPassword, updateProfile1 } =
    useContext(AuthContext);

   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


   const onSubmit = (data) => {

    // console.log(data.email)

    usercreateWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

    updateProfile1(data.name, data.url)
      .then(() => {

        const saverUser= {name : data.name, email: data.email}
        fetch("http://localhost:3000/users",{
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(saverUser)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
              Swal.fire({
                icon: "success",
                title: "Sign Up successfully",
                showConfirmButton: false,
                timer: 1000,
              });
              reset();
              navigate(from, { replace: true });
          }
        })


        
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
        // ...
      });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        // ..
      });

  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl w-96 font-bold">Sign Up now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600 mt-1">
                    Name field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  {...register("url", { required: false })}
                  type="text"
                  placeholder="Your photo url"
                  className="input input-bordered"
                />
                {errors.url && (
                  <span className="text-red-600 mt-1">
                    url field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600 mt-1">
                    Email field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600 mt-1">
                    Password field is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <p>password Must be 6 Length</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600  mt-1">
                    password Must have one uppercase,one lowercase,one number
                    and one special case lette
                  </p>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control bg-[rgba(209, 160, 84, 0.7) mt-6">
                <input
                  className="btn btn-warning"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p className="text-[#D1A054] text-lg text-center">
                Already registered?
                <Link className="font-bold" to={"/login"}>
                  Go to log in
                </Link>
              </p>
              <LoginExtaForm></LoginExtaForm>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;