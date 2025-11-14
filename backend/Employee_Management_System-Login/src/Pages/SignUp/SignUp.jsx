import React from 'react'
import loginpic2 from '../../assets/login2.png'
import Form from '../../Components/LoginForm'
import { Link } from 'react-router'
import signup from '../../assets/signup.png'

export const SignUp = () => {
  return (
    
  <div className='w-full flex justify-center mx-auto min-h-screen pt-12 bg-linear-to-r from-sky-100 to-sky-400'>
   
        <div className=' w-2/3 mx-auto h-full py-10 shadow-2xl rounded-4xl'>
       <p className=" text-right text-4xl px-6 font-semibold tracking-widest">
    Hello! Please Tell us a little bit about yourself.
  </p>
  
         <div className='w-full h-full  flex justify-center  items-center mx-6'>
           <div className="relative w-1/2 md:w-1/3 flex justify-center items-center">
  


 
  <img
    src={signup}
    alt="Signup"
    className="w-[450px] h-96 "
  />
</div>


          <div className='w-[450px] mx-8 h-full '>
         <div className="w-full h-[600px] rounded-4xl my-6 text-blue-600 shadow bg-slate-200  p-5 sm:p-8 drop-shadow-lg ">
           
           
            <form className="space-y-6 text-black">
           
             <div className="space-y-6">
  <div className="relative">
    <input
      id="text"
      type="text"
      placeholder="First Name"
      className="w-full h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B7D235]"
    />
  </div>


                <div className="space-y-2">
                    <div className="relative bg-transparent">
                        <input
                            id="pass"
                             className="w-full h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B7D235]"
                             placeholder='Last Name'
                            name="Lastname"
                            type="text"
                        />
                       
                    </div>
                </div>
           </div>

             <div className="space-y-2">
  <div className="relative">
    <input
      id="text"
      type="Email"
      placeholder="Email"
      className="w-full h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B7D235]"
    />
  </div>


               
           </div>
            <div className='flex justify-between gap-2 w-full'>
             <div className="space-y-2">
  <div className="relative">
    <input
      id="text"
      type="text"
      placeholder="Department"
      className="w-48 h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B7D235]"
    />
  </div>
</div>
 <div className="space-y-2">
                    <div className="relative bg-transparent">
                        <input
                            id="DOB"
                             className="w-48 h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B7D235]"
                             placeholder='Date of Birth'
                            name="DOB"
                            type="date"
                        />
                       
                    </div>
                </div>
           </div>
            <div className='flex justify-between gap-2 w-full'>
             <div className="space-y-2">
  <div className="relative">
    <input
      id="text"
      type="Password"
      placeholder="Password"
      className="w-48 h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B7D235]"
    />
  </div>
</div>
 <div className="space-y-2">
                    <div className="relative bg-transparent">
                        <input
                            id="DOB"
                             className="w-48 h-14 rounded-lg border border-[#2b12bb] bg-transparent pl-4  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B7D235]"
                             placeholder='Confirm Password'
                            name="pass"
                            type="password"
                        />
                       
                    </div>
                </div>
           </div>
<div className='flex items-center gap-2 justify-start'>
  <input className='checked:bg-[#D0FD3E] w-8' type="checkbox" />
  <p className='text-lg text-gray-600 '>Accept Terms and Conditions</p>
</div>

                 <div className=" flex items-center">
                
                <div className="w-full text-center font-semibold text-gray-600">Already Have an Account? <Link to='/'> <span className='hover:font-bold text-blue-500'>Login </span> </Link>
                    </div>
            
            </div>
                <Link to='/dashboard'
                >
                     <button className="rounded w-full h-12 font-bold text-lg  bg-linear-to-r from-sky-500 to-sky-200">Sign Up</button>
                </Link>
            </form>
           
       
            
        </div>
  
          </div>
         
         </div>
        </div>
  
      
      </div>
  )
}
