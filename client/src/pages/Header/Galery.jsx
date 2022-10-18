import image1 from "../../assets/images/home/header/1.webp";
import image2 from "../../assets/images/home/header/2.webp";
import image3 from "../../assets/images/home/header/3.webp";

export default function Galery() {
   return (
      <div className='mt-10 grid place-items-center relative'>
         <hr className='absolute -left-20 w-14 border-white/10 2xl:block xl:hidden hidden lg:hidden md:hidden sm:hidden' />
         <hr className='absolute -right-20 w-14 border-white/10 2xl:block xl:hidden hidden lg:hidden md:hidden sm:hidden' />
         <div className='flex 2xl:h-[600px] xl:h-[600px] lg:h-auto md:h-auto sm:h-auto h-auto  w-full mx-auto 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col 2xl:px-0 xl:px-0 lg:px-0 md:px-5 sm:px-5 px-5'>
            <div className='flex flex-1 relative'>
               <img className='w-full h-full object-cover' src={image1} alt={image1} />
               <div className='absolute w-full h-full bg-black/40 flex flex-col justify-end items-start text-white gap-5 hover:bg-black/50 transition-colors 2xl:p-14 xl:p-14 lg:p-14 md:p-8 sm:p-5 p-5'>
                  <span className='bg-blue-400 text-xs py-1 px-4'>MUSIC</span>
                  <span className='sans-font font-medium  cursor-pointer text-underline inline-flex flex-col items-start 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl text-xl 2xl:leading-[55px] xl:leading-[55px] lg:leading-[55px] md:leading-[45px] sm:leading-[35px] leading-[25px]'>
                     <span className='whitespace-nowrap'>What Your Music Preference</span>
                     <span className='whitespace-nowrap'>Says About You and Your</span>
                     <span className='whitespace-nowrap'>Personality.</span>
                  </span>
                  <div className='flex items-center gap-4'>
                     <a href='/'>
                        <img
                           className=' w-10 h-10 object-cover rounded-full'
                           src='https://picsum.photos/50'
                           alt='https://picsum.photos/50'
                        />
                     </a>
                     <div className='flex items-center gap-8 text-white/60'>
                        <a
                           href='/'
                           className='right-dot hover:text-white transition-colors'>
                           John Doe
                        </a>
                        <span>December 29, 2017</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className='flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-row sm:flex-row flex-row 2xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-auto sm:w-auto w-auto'>
               <div className='flex-1 overflow-hidden relative'>
                  <img className='object-cover h-full w-full' src={image2} alt={image2} />
                  <div className='absolute w-full h-full bg-black/40 inset-0 flex flex-col justify-end items-start p-7 text-white gap-2 hover:bg-black/60 transition-colors'>
                     <span className='bg-green-700 text-[11px] py-0.5 px-4'>
                        MANAGEMENT
                     </span>
                     <span className='sans-font text-xl font-semibold cursor-pointer text-underline inline-flex flex-col items-start'>
                        <span>The Pomodoro Technique</span>
                        <span>Really Works.</span>
                     </span>
                     <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-8 text-sm text-white/60'>
                           <a
                              href='/'
                              className='right-mini-dot hover:text-white transition-colors'>
                              John Doe
                           </a>
                           <span>December 27, 2017</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='flex-1 overflow-hidden relative 2xl:inline-block xl:inline-block lg:inline-block md:inline-block sm:hidden hidden'>
                  <img className='object-cover h-full w-full' src={image3} alt={image3} />
                  <div className='absolute w-full h-full bg-black/40 inset-0 flex flex-col justify-end items-start p-7 text-white gap-2 hover:bg-black/70 transition-colors'>
                     <span className='bg-green-700 text-[11px] py-0.5 px-4'>
                        LIFESTYLE
                     </span>
                     <span className='sans-font text-xl font-semibold cursor-pointer text-underline inline-flex flex-col items-start'>
                        <span>Throwback To The Good Old</span>
                        <span>Days.</span>
                     </span>
                     <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-8 text-sm text-white/60'>
                           <a
                              href='/'
                              className='right-mini-dot hover:text-white transition-colors'>
                              John Doe
                           </a>
                           <span>December 21, 2017</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
