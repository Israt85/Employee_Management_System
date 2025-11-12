import React from 'react';
import loginpic2 from '../../assets/login2.png';
import Form from '../../Components/LoginForm';

const Login = () => {
  return (
    <div className='w-full mx-auto min-h-screen pt-12 bg-gradient-to-r from-sky-100 to-sky-400'>
      <div className='w-[1500px] mx-auto h-full py-10 shadow-2xl rounded-4xl'>
        <p className="w-full text-right text-4xl px-6 font-bold tracking-widest">
          WELCOME TO THE EMPLOYEE <br /> MANAGEMENT SYSTEM
        </p>

        <div className='w-full h-full flex justify-between items-center mx-6'>
          <div className='w-1/2 h-full'>
            <Form />
          </div>
          <div className='w-[500px] h-[600px] pt-32 mx-auto'>
            <img className='w-full h-full' src={loginpic2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;