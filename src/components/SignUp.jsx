import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
import { NavLink } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const { signUp } = useAuth();

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useForm("signup");

  const submit = async ({ username, identifier, password }) => {
    try {
      await signUp(username, identifier, password, "recaptcha-container");

      // Successful email signup
      // or phone signup flow.
      navigate("/login");
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

      {/* Form */}
      <div className="flex flex-col gap-4 w-full max-w-md lg:w-auto lg:max-w-none">
        <p className="text-2xl font-bold font-poppins text-gray-800">
          Create an account
        </p>

        <p className="text-sm text-gray-600">Enter your details below</p>

        <form
          onSubmit={handleSubmit(submit)}
          action="sign-up"
          className="flex flex-col gap-8 w-full"
        >
          <input
            name="username"
            type="text"
            placeholder="Name"
            value={values.username}
            onChange={handleChange}
            className="w-full text-gray-400 border-b-2 border-gray-400 py-2 outline-none focus:border-gray-800"
          />

          {errors.username && (
            <p className="text-sm text-red-500">{errors.username}</p>
          )}

          <input
            name="identifier"
            type="text"
            placeholder="Email or phone number"
            value={values.identifier}
            onChange={handleChange}
            className="w-full text-gray-400 border-b-2 border-gray-400 py-2 outline-none focus:border-gray-800"
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
            className="w-full text-gray-400 border-b-2 border-gray-400 py-2 outline-none focus:border-gray-800"
          />

          {errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}

          <div className="flex w-full h-auto">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-10 py-2 bg-[#DB4444] text-white rounded-sm font-poppins text-sm"
            >
              {isSubmitting ? "Creating account..." : "Create Account"}
            </button>
          </div>

          {/* Firebase phone authentication */}
          <div id="recaptcha-container" />

          <div className="flex w-full h-auto">
            <button
              type="button"
              className="flex items-center justify-center gap-4 w-full px-10 py-2 border-2 border-gray-400 text-gray-600 rounded-sm font-poppins text-sm"
            >
              <span>
                <img
                  src="/assets/google-icon.png"
                  alt="Google"
                  className="w-5 h-5"
                />
              </span>
              Sign Up with Google
            </button>
          </div>
        </form>

        <div className="flex gap-1 items-center justify-center lg:justify-start">
          <p className="text-sm text-gray-400">Already have an account?</p>

          <NavLink to="/Login" className="underline text-gray-400 text-sm">
            Log in
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
