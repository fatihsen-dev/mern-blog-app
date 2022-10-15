import React, { useState } from "react";
import { login } from "../axios";
import { NavLink, useNavigate } from "react-router-dom";
import { signin } from "../store/authSlice";
import { useDispatch } from "react-redux";

export default function Login() {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const [loginData, setLoginData] = useState({
      email: "",
      password: "",
   });
   const loginSubmit = (e) => {
      e.preventDefault();

      login({ ...loginData })
         .then((res) => {
            localStorage.setItem("key", res.data._id);
            const { fullname, email, createdDate, userType } = res.data;
            dispatch(signin({ fullname, email, createdDate, userType }));
            navigate("/");
         })
         .catch((err) => console.log(err));
   };
   return (
      <div className='flex justify-center h-full full-bg pt-20'>
         <form className='space-y-6 w-96' onSubmit={loginSubmit}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='-space-y-px rounded-md shadow-sm flex flex-col gap-3'>
               <div>
                  <label htmlFor='email-address' className='text-sm text-gray-700'>
                     Email address
                  </label>
                  <input
                     id='email-address'
                     name='email'
                     type='email'
                     required
                     className='relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                     placeholder='Email address'
                     onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                     }
                  />
               </div>
               <div>
                  <label htmlFor='password' className='text-sm text-gray-700'>
                     Password
                  </label>
                  <input
                     id='password'
                     name='password'
                     type='password'
                     required
                     className='relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                     placeholder='Password'
                     onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                     }
                  />
               </div>
            </div>
            <div className='flex gap-10 items-center'>
               <NavLink to='/register' className='whitespace-nowrap text-indigo-500'>
                  Sign up
               </NavLink>
               <button
                  disabled={!loginData.email || !loginData.password}
                  type='submit'
                  className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white transition-colors group disabled:text-white/50 disabled:bg-indigo-600/80'>
                  Sign in
               </button>
            </div>
         </form>
      </div>
   );
}
