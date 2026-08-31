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
    <div className="container mx-auto pr-40 py-20 flex  items-center justify-between">
      <div className="h-full w-auto">
        <img src="/assets/sign-up.png" alt="sign-up landing image" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold font-poppins text-gray-800">
          Create an account
        </p>
        <p className="text-sm text-gray-600">Enter your details below</p>
        <form
          onSubmit={handleSubmit(submit)}
          action="sign-up"
          className="flex flex-col gap-8"
        >
          <input
            name="username"
            type="text"
            placeholder="name"
            value={values.username}
            onChange={handleChange}
            className="text-gray-400 border-b-2 border-gray-400"
          />

          {errors.username && <p>{errors.username}</p>}

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

          <div className="flex w-auto h-auto">
            <button
              type="submit"
              disabled={isSubmitting}
              className=" w-full px-10 py-2 bg-[#DB4444] text-white rounded-sm font-poppins text-sm "
            >
              {isSubmitting ? "Creating account..." : "Create Account"}
            </button>
          </div>

          {/* for firebase phone authentication */}
          <div id="recaptcha-container" />

          <div className="flex w-auto h-auto">
            <button className=" flex items-center justify-center gap-4 w-full px-10 py-2 border-2 border-gray-400 text-gray-600 rounded-sm font-poppins text-sm ">
              <span>
                <img src="/assets/google-icon.png" alt="google-icon" />
              </span>
              Sign Up with Google
            </button>
          </div>
        </form>
        <div className="flex gap-1 items-center">
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
