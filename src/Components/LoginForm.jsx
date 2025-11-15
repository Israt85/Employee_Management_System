import { useContext } from "react";

import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export default function Form() {
  const { signin, signinWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await signin(email, password);
      console.log("Logged in user:", result.user); // ✅ see user in console
      navigate("/"); // redirect after login
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signinWithGoogle();
      console.log("Google user:", result.user);
      navigate("/dashboard");
    } catch (err) {
      console.error("Google login failed:", err);
    }
  };

  return (
    <div className="w-full h-[650px] rounded-4xl my-6 text-blue-600 shadow bg-slate-200 p-5 sm:p-8 drop-shadow-lg">
      <form className="space-y-6" onSubmit={handleLogin}>
        <div className="space-y-2">
          <label htmlFor="email" className="block mt-2">Enter Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jhon324@gmail.com"
            className="w-full h-14 rounded-lg border border-[#2b12bb] pl-4"
          />
        </div>

        <div className="space-y-2">
          <input
            id="pass"
            name="password"
            type="password"
            placeholder="Password"
            className="h-16 border border-[#2b12bb] w-full rounded pl-6"
          />
        </div>

        <button
          type="submit"
          className="rounded w-full h-12 font-bold text-lg bg-gradient-to-r from-sky-500 to-sky-200"
        >
          Login
        </button>
      </form>

      <div className="my-8 flex items-center">
        <hr className="flex-1 border-gray-400" />
        <div className="mx-4 text-gray-500">
          Don’t have an account?{" "}
          <Link to="/signup">
            <span className="hover:font-bold text-blue-500">Signup</span>
          </Link>
        </div>
        <hr className="flex-1 border-gray-400" />
      </div>

      {/* Social login */}
      <div className="flex justify-center gap-4">
        <button
          onClick={handleGoogleLogin}
          aria-label="Log in with Google"
          className="rounded-lg px-12 py-3 border"
        >
          Google
        </button>
      </div>
    </div>
  );
}
