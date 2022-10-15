import logo from "../../assets/images/logo.svg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImInstagram, ImPinterest } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";

export default function Logo() {
   return (
      <>
         <div className='flex items-center justify-between py-7'>
            <div className='flex text-white gap-3 text-xl items-center'>
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
            <img className='h-12' src={logo} alt={logo} />
            <button className='relative flex justify-center items-center gap-2.5 text-white'>
               <span className='text-sm'>SEARCH</span>
               <AiOutlineSearch className='text-2xl' />
            </button>
         </div>
         <hr className='border-gray-500/10' />
      </>
   );
}
