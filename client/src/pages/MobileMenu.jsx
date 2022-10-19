import { useDispatch, useSelector } from "react-redux";
import { VscChromeClose } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";
import { changeMenuStatus } from "../store/siteSlice";

export default function MobileMenu() {
   const { navMenuStatus } = useSelector((state) => state.site);
   const dispatch = useDispatch();

   window.addEventListener("resize", () => {
      const mediaQuery = window.matchMedia("(min-width: 768px)");
      mediaQuery.matches && dispatch(changeMenuStatus(false));
   });

   return (
      <div
         style={navMenuStatus ? { pointerEvents: "auto", opacity: "1" } : {}}
         className='absolute w-full h-full inset-0 bg-[#151515] z-20 pointer-events-none opacity-0 transition-all'>
         <div className='flex flex-col items-center mt-8 gap-5 text-white'>
            <button
               className='text-[22px]'
               onClick={() => dispatch(changeMenuStatus(false))}>
               <VscChromeClose />
            </button>
            <span className='tracking-[3px] font-semibold text-[14px]'>
               SITE NAVIGATION
            </span>
         </div>
         <ul className='w-[80%] mx-auto mt-10'>
            <li className='py-3 text-white cursor-pointer border-white/5 border-b border-t'>
               <a href='/'>Home</a>
            </li>
            <li className='py-3 text-white cursor-pointer border-white/5 border-b menu-list'>
               <input className="hidden peer" id='menu1' type='checkbox' />
               <label
                  htmlFor='menu1'
                  className='flex justify-between items-center cursor-pointer'>
                  <span>Categories</span>
                  <RiArrowDropDownLine className='menu-icon text-white/50' />
               </label>
            </li>
            <li className='py-3 text-white cursor-pointer border-white/5 border-b menu-list'>
               <input className="hidden peer" id='menu2' type='checkbox' />
               <label
                  htmlFor='menu2'
                  className='flex justify-between items-center cursor-pointer'>
                  <span>Blog</span>
                  <RiArrowDropDownLine className='menu-icon text-white/50' />
               </label>
            </li>
            <li className='py-3 text-white cursor-pointer border-white/5 border-b'>
               <a href='/'>Styles</a>
            </li>
            <li className='py-3 text-white cursor-pointer border-white/5 border-b'>
               <a href='/'>About</a>
            </li>
            <li className='py-3 text-white cursor-pointer border-white/5 border-b'>
               <a href='/'>Contact</a>
            </li>
         </ul>
      </div>
   );
}
