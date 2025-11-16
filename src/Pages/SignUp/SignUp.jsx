import React, { useState } from "react";
import signup from "../../assets/signup.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const SignUp = () => {
  const { signup: firebaseSignup } = useAuth();
  const navigate = useNavigate();

  // States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Submit handler
const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (password !== confirmPass) {
    return setError("Passwords do not match!");
  }

  try {
    setLoading(true);
    await firebaseSignup(email, password);

    // ✅ Alert user to check email
    alert("Verification email sent! Please check your inbox and verify before logging in.");

    // Optional: redirect to login page instead of dashboard
    navigate("/login");
  } catch (err) {
    setError(err.message);
  }
  setLoading(false);
};


  return (
    <div className="w-full flex justify-center mx-auto min-h-screen pt-12 bg-linear-to-r from-sky-100 to-sky-400">
      <div className="w-2/3 mx-auto h-full py-10 shadow-2xl rounded-4xl">

        <p className="text-right text-4xl px-6 font-semibold tracking-widest">
          Hello! Please Tell us a little bit about yourself.
        </p>

        <div className="w-full h-full flex justify-center items-center mx-6">
          {/* Left Image */}
          <div className="relative w-1/2 md:w-1/3 flex justify-center items-center">
            <img src={signup} alt="Signup" className="w-[450px] h-96" />
          </div>

          {/* Right Form */}
          <div className="w-[450px] mx-8 h-full">
            <div className="w-full h-[600px] rounded-4xl my-6 text-blue-600 shadow bg-slate-200 p-5 sm:p-8 drop-shadow-lg">

              {/* Error message */}
              {error && (
                <p className="text-red-600 text-center font-semibold mb-3">{error}</p>
              )}

              <form className="space-y-6 text-black" onSubmit={handleSubmit}>

                {/* Names */}
                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4 placeholder-gray-500 focus:ring-2 focus:ring-[#B7D235]"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4 placeholder-gray-500 focus:ring-2 focus:ring-[#B7D235]"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4 placeholder-gray-500 focus:ring-2 focus:ring-[#B7D235]"
                />

                {/* Department + DOB */}
                <div className="flex justify-between gap-2 w-full">
                  <input
                    type="text"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-48 h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4 placeholder-gray-500 focus:ring-2 focus:ring-[#B7D235]"
                  />

                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-48 h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4 placeholder-gray-500 focus:ring-2 focus:ring-[#B7D235]"
                  />
                </div>

                {/* Passwords */}
                <div className="flex justify-between gap-2 w-full">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-48 h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4 placeholder-gray-500 focus:ring-2 focus:ring-[#B7D235]"
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    className="w-48 h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4 placeholder-gray-500 focus:ring-2 focus:ring-[#B7D235]"
                  />
                </div>

                {/* Terms checkbox */}
                <div className="flex items-center gap-2 justify-start">
                  <input className="w-8" type="checkbox" required />
                  <p className="text-lg text-gray-600">
                    Accept Terms and Conditions
                  </p>
                </div>

                <div className="text-center font-semibold text-gray-600">
                  Already Have an Account?
                  <Link to="/">
                    <span className="hover:font-bold text-blue-500"> Login </span>
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded w-full h-12 font-bold text-lg bg-linear-to-r from-sky-500 to-sky-200"
                >
                  {loading ? "Creating Account..." : "Sign Up"}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
