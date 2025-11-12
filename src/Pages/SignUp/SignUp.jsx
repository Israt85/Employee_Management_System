import React from 'react';
import signup from '../../assets/signup.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='w-full flex justify-center mx-auto min-h-screen pt-12 bg-gradient-to-r from-sky-100 to-sky-400'>
      <div className='w-2/3 mx-auto h-full py-10 shadow-2xl rounded-3xl'>
        <p className="text-right text-4xl px-6 font-semibold tracking-widest">
          Hello! Please tell us a little bit about yourself.
        </p>

        <div className='w-full h-full flex justify-center gap-20 items-center mx-6'>
          {/* Image Section */}
          <div className="relative w-1/2 md:w-1/3 flex justify-center items-center">
            <div className="absolute top-[-100px] left-[150px] rounded-full bg-gradient-to-br from-blue-600 to-pink-300 w-[400px] h-[400px] blur-3xl opacity-60" />
            <div className="absolute top-0 left-0 rounded-full bg-gradient-to-br from-blue-500 to-pink-300 w-[320px] h-[320px] blur-2xl opacity-70" />
            <div className="absolute top-[100px] left-[80px] rounded-full bg-gradient-to-br from-blue-400 to-pink-400 w-[180px] h-[180px] blur-xl opacity-80" />
            <img src={signup} alt="Signup" className="relative w-3/4 md:w-[350px] lg:w-[400px] object-contain" />
          </div>

          {/* Form Section */}
          <div className='w-2/3 mx-8 h-full'>
            <div className="w-full h-[650px] rounded-3xl my-6 text-blue-600 shadow bg-slate-200 p-5 sm:p-8 drop-shadow-lg">
              <form className="space-y-6">
                {/* Name Fields */}
                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B7D235]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="Lastname"
                    className="w-full h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B7D235]"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B7D235]"
                />

                {/* Department & DOB */}
                <div className='flex justify-between w-full'>
                  <input
                    type="text"
                    placeholder="Department"
                    className="w-80 h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B7D235]"
                  />
                  <input
                    type="date"
                    name="DOB"
                    placeholder="Date of Birth"
                    className="w-80 h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B7D235]"
                  />
                </div>

                {/* Password & Confirm Password */}
                <div className='flex justify-between w-full'>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-80 h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B7D235]"
                  />
                  <input
                    type="password"
                    name="pass"
                    placeholder="Confirm Password"
                    className="w-80 h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B7D235]"
                  />
                </div>

                {/* Terms Checkbox */}
                <div className='space-y-2 flex items-center gap-2 justify-start'>
                  <input className='checked:bg-[#D0FD3E] h-7 mt-1 w-6' type="checkbox" />
                  <p className='text-lg'>Accept Terms and Conditions</p>
                </div>

                {/* Already have account */}
                <div className="my-8 flex items-center">
                  <div className="w-full text-center font-semibold text-gray-600">
                    Already have an account? <Link to='/'><span className='hover:font-bold text-blue-500'>Login</span></Link>
                  </div>
                </div>

                {/* Submit Button */}
                <Link to='/dashboard'>
                  <button className="rounded w-full h-12 font-bold text-lg bg-gradient-to-r from-sky-500 to-sky-200">
                    Sign Up
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;