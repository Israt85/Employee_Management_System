import React from 'react'
import loginpic2 from '../../assets/login2.png'
import Form from '../../Components/LoginForm'

export const Login = () => {
  console.log("Login rendered");

  return (

    <div className='w-full mx-auto min-h-screen pt-12 bg-linear-to-r from-sky-100 to-sky-400'>
      <div className=' w-[1000px] mx-auto h-auto py-10 shadow-2xl rounded-4xl'>
     <p className="w-full  text-right text-4xl px-6 font-bold tracking-widest">
  WELCOME TO THE EMPLOYEE <br /> MANAGEMENT SYSTEM
</p>

       <div className='w-[900px] h-full  flex justify-center items-center mx-auto'>
        <div className='w-2/3  h-full'>
      <Form></Form>

        </div>
        <div className='w-[300px] h-[600px] pt-32  mx-auto'>
          
          <img className='w-full h-full' src={loginpic2} alt="" />

        </div>
       </div>
      </div>

    
    </div>
  )
}
