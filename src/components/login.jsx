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
    <div className="container mx-auto px-4 sm:px-8 lg:pr-40 py-10 sm:py-16 lg:py-20 flex flex-col lg:flex-row gap-10 lg:gap-6 items-center justify-between">
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/assets/sign-up.png"
          alt="sign-up landing image"
          className="w-full max-w-md lg:max-w-none h-auto object-contain"
        />
      </div>

      {/* Login Form */}
      <div className="flex flex-col gap-4 w-full max-w-md lg:w-auto lg:max-w-none">
        <p className="text-2xl font-bold font-poppins text-gray-800">
          Log in to Exclusive
        </p>

        <p className="text-sm text-gray-600">Enter your details below</p>

        <form
          onSubmit={handleSubmit(submit)}
          action="login"
          className="flex flex-col gap-8 w-full"
        >
          <input
            name="identifier"
            type="text"
            placeholder="Email or phone number"
            value={values.identifier}
            onChange={handleChange}
            className="w-full text-gray-400 border-b-2 border-gray-400 py-2 outline-none"
          />

          {errors.identifier && (
            <p className="text-sm text-red-500">{errors.identifier}</p>
          )}

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            className="w-full text-gray-400 border-b-2 border-gray-400 py-2 outline-none"
          />

          {errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full h-auto sm:items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-10 py-2 bg-[#DB4444] text-white rounded-sm font-poppins text-sm"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <p className="text-[#DB4444] text-sm cursor-pointer">
              Forgot Password?
            </p>
          </div>

          {/* Firebase phone authentication */}
          <div id="recaptcha-container" />
        </form>
      </div>
    </div>
  );
};

export default Login;
