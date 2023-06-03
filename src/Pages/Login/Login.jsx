// import React from 'react';
import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const useCaptchaRef = useRef(null);

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
  };

  const captchaHAndelerChange = () => {
    const value = useCaptchaRef.current.value;
    console.log(value);
    if (validateCaptcha(value)) {
      // alert("Captcha Matched");
      setDisabled(false);
      useCaptchaRef.current.value = " ";
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
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
                ref={useCaptchaRef}
                type="text"
                name="captcha"
                placeholder="Type captcha above"
                className="input input-bordered"
              />
              <button
                onClick={captchaHAndelerChange}
                className="btn btn-xs btn-outline mt-3"
              >
                Captcha Match
              </button>
            </div>
            <div className="form-control mt-6 bg-[rgba(209, 160, 84, 0.7)]">
              <button disabled={disabled} className="btn btn-warning  text-white">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
