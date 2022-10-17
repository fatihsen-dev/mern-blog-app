import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

export default function Navbar() {
   const { user } = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   return (
      <div className='flex items-center justify-between'>
         <ul className='flex justify-center gap-10 text-white/60 text-[15px]'>
            <li className='py-5 cursor-pointer hover:text-white/80 transition-colors'>
               <a href='/'>Home</a>
            </li>
            <li className='relative flex justify-center py-5 group cursor-pointer'>
               <span className='cursor-pointer flex items-center gap-1 hover:text-white/80 transition-colors'>
                  Categories
                  <MdOutlineKeyboardArrowDown className='text-sm group-hover:rotate-180 transition-all' />
               </span>
               <ul className='absolute z-10 bg-black py-5 px-5 opacity-0 group-hover:opacity-100 top-20 group-hover:top-14 home-li-menu flex flex-col gap-1 pointer-events-none group-hover:pointer-events-auto'>
                  <a
                     href='/'
                     className='whitespace-nowrap hover:text-white/90 transition-colors'>
                     Lifestyle
                  </a>
                  <a
                     href='/'
                     className='whitespace-nowrap hover:text-white/90 transition-colors'>
                     Health
                  </a>
                  <a
                     href='/'
                     className='whitespace-nowrap hover:text-white/90 transition-colors'>
                     Family
                  </a>
                  <a
                     href='/'
                     className='whitespace-nowrap hover:text-white/90 transition-colors'>
                     Management
                  </a>
                  <a
                     href='/'
                     className='whitespace-nowrap hover:text-white/90 transition-colors'>
                     Travel
                  </a>
                  <a
                     href='/'
                     className='whitespace-nowrap hover:text-white/90 transition-colors'>
                     Work
                  </a>
               </ul>
            </li>
            <li className='relative flex justify-center py-5 group cursor-pointer'>
               <span className='cursor-pointer flex items-center gap-1 hover:text-white/80 transition-colors'>
                  Blog
                  <MdOutlineKeyboardArrowDown className='text-sm group-hover:rotate-180 transition-all' />
               </span>
               <ul className='absolute z-10 bg-black py-5 px-5 opacity-0 group-hover:opacity-100 top-20 group-hover:top-14 home-li-menu flex flex-col gap-1 pointer-events-none group-hover:pointer-events-auto'>
                  <a
                     href='/'
                     className='whitespace-nowrap hover:text-white/90 transition-colors'>
                     Video Post
                  </a>
                  <a
                     href='/'
                     className='whitespace-nowrap hover:text-white/90 transition-colors'>
                     Audio Post
                  </a>
                  <a
                     href='/'
                     className='whitespace-nowrap hover:text-white/90 transition-colors'>
                     Gallery Post
                  </a>
                  <a
                     href='/'
                     className='whitespace-nowrap hover:text-white/90 transition-colors'>
                     Standard Post
                  </a>
               </ul>
            </li>
            <li className='py-5 cursor-pointer hover:text-white/80 transition-colors'>
               <a href='/'>Styles</a>
            </li>
            <li className='py-5 cursor-pointer hover:text-white/80 transition-colors'>
               <a href='/'>About</a>
            </li>
            <li className='py-5 cursor-pointer hover:text-white/80 transition-colors'>
               <a href='/'>Contact</a>
            </li>
         </ul>
         {user ? (
            <div className='text-white/80 flex items-center gap-5 text-sm'>
               <span>{user.fullname}</span>
               <button className='text-xl' onClick={() => dispatch(logout())}>
                  <IoIosLogOut />
               </button>
            </div>
         ) : (
            <div className='text-white/80 flex items-center gap-2 text-sm'>
               <NavLink to='/login'>Login</NavLink>
               <NavLink to='/register'>Register</NavLink>
            </div>
         )}
      </div>
   );
}
