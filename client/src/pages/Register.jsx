import React from "react";
import { useState } from "react";
import { register } from "../axios";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {
   const navigate = useNavigate();

   const [registerData, setRegisterData] = useState({
      fullname: "",
      email: "",
      password: "",
   });

   const registerSubmit = (e) => {
      e.preventDefault();

      register({ ...registerData })
         .then((res) => {
            navigate("/login");
         })
         .catch((err) => console.log(err));
   };
   return (
      <div className='flex justify-center h-full full-bg pt-20'>
         <form className='space-y-6 w-96' onSubmit={registerSubmit}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='-space-y-px rounded-md shadow-sm flex flex-col gap-3'>
               <div>
                  <label htmlFor='fullname' className='text-sm text-white/80'>
                     Name
                  </label>
                  <input
                     id='fullname'
                     name='fullname'
                     type='text'
                     required
                     className='relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
                     placeholder='Name'
                     onChange={(e) =>
                        setRegisterData({ ...registerData, fullname: e.target.value })
                     }
                  />
               </div>
               <div>
                  <label htmlFor='email-address' className='text-sm text-white/80'>
                     Email address
                  </label>
                  <input
                     id='email-address'
                     name='email'
                     type='email'
                     required
                     className='relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
                     placeholder='Email address'
                     onChange={(e) =>
                        setRegisterData({ ...registerData, email: e.target.value })
                     }
                  />
               </div>
               <div>
                  <label htmlFor='password' className='text-sm text-white/80'>
                     Password
                  </label>
                  <input
                     id='password'
                     name='password'
                     type='password'
                     required
                     className='relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm'
                     placeholder='Password'
                     onChange={(e) =>
                        setRegisterData({ ...registerData, password: e.target.value })
                     }
                  />
               </div>
            </div>
            <div className='flex gap-10 items-center'>
               <NavLink to='/login' className='whitespace-nowrap text-blue-500'>
                  Sign in
               </NavLink>
               <button
                  disabled={!registerData.email || !registerData.password}
                  type='submit'
                  className='group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white transition-colors group disabled:text-white/70 disabled:bg-blue-600/80'>
                  Sign in
               </button>
            </div>
         </form>
      </div>
   );
}
