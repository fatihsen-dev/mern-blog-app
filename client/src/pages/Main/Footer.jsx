import { AiOutlineMail } from "react-icons/ai";
export default function Footer() {
   const liStyle =
      "border-b border-white/5 w-[60%] 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-[60%] text-center pb-2 2xl:pb-0 xl:pb-0 lg:pb-0 md:pb-0 sm:pb-2 2xl:border-none xl:border-none lg:border-none md:border-none sm:border-b cursor-pointer";

   return (
      <div className='bg-[#19191b]'>
         <div className='flex flex-col container mx-auto 2xl:px-48 py-20 gap-20'>
            <div className='flex flex-col items-center gap-40 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col'>
               <div className='flex-1 flex gap-16 text-gray w-full px-5 2xl:px-0 xl:px-0 lg:px-0 md:px-5 sm:px-5 flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col'>
                  <ul className='flex flex-col gap-1 flex-1 items-center 2xl:items-start xl:items-start lg:items-start md:items-start sm:items-center'>
                     <span className='flex mb-5 text-white'>QUICK LINKS</span>
                     <hr className='border-white/5 mb-2 w-[60%]' />
                     <li className={liStyle}>Home</li>
                     <li className={liStyle}>Blog</li>
                     <li className={liStyle}>Styles</li>
                     <li className={liStyle}>About</li>
                     <li className={liStyle}>Contact</li>
                     <li className={liStyle}>Privacy Policy</li>
                  </ul>
                  <ul className='flex flex-col gap-1 flex-1 items-center 2xl:items-start xl:items-start lg:items-start md:items-start sm:items-center'>
                     <span className='flex mb-5 text-white'>ARCHIVES</span>
                     <hr className='border-white/5 mb-2 w-[60%]' />
                     <li className={liStyle}>January 2018</li>
                     <li className={liStyle}>December 2017</li>
                     <li className={liStyle}>November 2017</li>
                     <li className={liStyle}>October 2017</li>
                     <li className={liStyle}>September 2017</li>
                     <li className={liStyle}>August 2017</li>
                  </ul>
                  <ul className='flex flex-col gap-1 flex-1 items-center 2xl:items-start xl:items-start lg:items-start md:items-start sm:items-center'>
                     <span className='flex mb-5 text-white'>SOCIAL</span>
                     <hr className='border-white/5 mb-2 w-[60%]' />
                     <li className={liStyle}>Facebook</li>
                     <li className={liStyle}>Instagram</li>
                     <li className={liStyle}>Twitter</li>
                     <li className={liStyle}>Pinterest</li>
                     <li className={liStyle}>Google+</li>
                     <li className={liStyle}>LinkedIn</li>
                  </ul>
               </div>
               <div className='flex-[0.8] flex flex-col gap-3 text-gray px-5 2xl:px-0 xl:px-0 lg:px-0 md:px-5 sm:px-5'>
                  <span className='text-white'>OUR NEWSLETTER</span>
                  <hr className='border-white/10 w-28 mt-7' />
                  <span className='leading-7'>
                     Sit vel delectus amet officiis repudiandae est voluptatem. Tempora
                     maxime provident nisi et fuga et enim exercitationem ipsam. Culpa
                     consequatur occaecati.
                  </span>
                  <div className='text-white flex items-stretch mt-5 relative rounded-sm overflow-hidden'>
                     <AiOutlineMail className='absolute text-2xl left-4 top-4' />
                     <input
                        className='pl-14 outline-none bg-[#161618] py-4 placeholder-white/10 flex-1'
                        type='text'
                        placeholder='Email Address'
                     />
                     <button className='px-4 bg-blue-500'>SEND</button>
                  </div>
               </div>
            </div>
            <div className='text-gray flex items-center gap-3 text-xs justify-center 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[15px] sm:text-xs'>
               <span className=''>© Copyright Philosophy 2018</span>
               <div className='h-3 w-[2px] bg-gray/30'></div>
               <span>
                  Site Template by
                  <a
                     href='/'
                     className='text-white text-sm hover:text-black transition-colors pl-2'>
                     Colorlib
                  </a>
               </span>
            </div>
         </div>
      </div>
   );
}
