import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Helmett from "../../Components/Helmet/Helmett";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Signup = () => {
  
    const {
      register,
      handleSubmit,
      // reset ,
      formState: { errors },
    } = useForm();
    const { usercreateWithEmailAndPassword } = useContext(AuthContext);

     const onSubmit = (data) => {
        console.log(data.email, data.password);
        usercreateWithEmailAndPassword(data.email, data.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
          });

        // reset
    };
    //  console.log(watch("example")); 

    return (
      <div className="hero min-h-screen bg-base-200">
        <Helmett title={"Sign Up "}></Helmett>;
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
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
                  <span className="mt-1 text-red-600">
                    Name field is required*
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="mt-1 text-red-600">
                    Email field is required*
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
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].)(?=.*[a-z])/,
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="mt-1 text-red-600">
                    password field is required*{" "}
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="mt-1 text-red-600">password must be 6 Length</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="mt-1 text-red-600">
                    password must should be one special case letter , one
                    uppercase letter And one lowercase ,at least one digit,
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
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
            </form>
          </div>
        </div>
      </div>
    );
};

export default Signup;