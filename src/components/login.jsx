import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
import { NavLink } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { logIn } = useAuth();

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useForm("login");

  const submit = async ({ identifier, password }) => {
    try {
      await logIn(identifier, password, "recaptcha-container");

      //   successful login
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container mx-auto pr-40 py-20 flex gap-6 items-center justify-between">
      <div className="h-full w-auto">
        <img src="/assets/sign-up.png" alt="sign-up landing image" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold font-poppins text-gray-800">
          Log in to Exclusive
        </p>
        <p className="text-sm text-gray-600">Enter your details below</p>
        <form
          onSubmit={handleSubmit(submit)}
          action="login"
          className="flex flex-col gap-8"
        >
          <input
            name="identifier"
            type="text"
            placeholder="Email or phone number"
            value={values.identifier}
            onChange={handleChange}
            className="text-gray-400 border-b-2 border-gray-400"
          />

          {errors.identifier && <p>{errors.identifier}</p>}

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            className="text-gray-400 border-b-2 border-gray-400"
          />

          {errors.password && <p>{errors.password}</p>}

          <div className="flex gap-6 w-auto h-auto">
            <button
              type="submit"
              disabled={isSubmitting}
              className=" w-auto px-10 py-2 bg-[#DB4444] text-white rounded-sm font-poppins text-sm "
            >
              {isSubmitting ? "loging in..." : "login"}
            </button>
            <p className="text-[#DB4444] text-sm">Forgot Password?</p>
          </div>

          {/* for firebase phone authentication */}
          <div id="recaptcha-container" />
        </form>
      </div>
    </div>
  );
};

export default Login;
