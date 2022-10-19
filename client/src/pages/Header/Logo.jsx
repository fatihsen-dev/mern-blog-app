import logo from "../../assets/images/logo.svg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImInstagram, ImPinterest } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuStatus } from "../../store/siteSlice";

export default function Logo() {
   // const { navMenuStatus } = useSelector((state) => state.site);
   const dispatch = useDispatch();

   return (
      <>
         <div className='flex items-center justify-between py-7 2xl:px-0 xl:px-0 lg:px-0 md:px-5 sm:px-5 px-5'>
            <button
               onClick={() => dispatch(changeMenuStatus(true))}
               className='text-white text-3xl 2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex'>
               <HiOutlineMenu />
            </button>
            <div className='hidden text-white gap-3 text-xl items-center 2xl:flex xl:flex lg:flex md:flex sm:hidden'>
               <a href='/' target='_blank'>
                  <FaFacebookF />
               </a>
               <a href='/' target='_blank'>
                  <FaTwitter />
               </a>
               <a href='/' target='_blank'>
                  <ImInstagram />
               </a>
               <a className='text-2xl' href='/' target='_blank'>
                  <ImPinterest />
               </a>
            </div>
            <img
               className='2xl:h-12 xl:h-12 lg:h-12 md:h-8 sm:h-8 h-5'
               src={logo}
               alt={logo}
            />
            <button className='relative flex justify-center items-center gap-2.5 text-white'>
               <span className='text-sm hidden 2xl:inline-block xl:inline-block lg:inline-block md:inline-block sm:hidden'>
                  SEARCH
               </span>
               <AiOutlineSearch className='text-2xl' />
            </button>
         </div>
         <hr className='mx-auto border-gray/10 2xl:w-full xl:w-full lg:w-full md:w-[90%] sm:w-[90%] w-[90%]' />
      </>
   );
}
