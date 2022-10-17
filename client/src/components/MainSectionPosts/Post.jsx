import { HiOutlineDotsHorizontal } from "react-icons/hi";
export default function Post({ src, date, title, text, tags }) {
   return (
      <div className='flex flex-col bg-white'>
         {src && (
            <div className='relative cursor-pointer group overflow-hidden'>
               <img
                  className='w-full h-full object-cover group-hover:scale-105 transition-all'
                  src={src}
                  alt={src}
               />
               <div className='absolute w-full h-full inset-0 grid place-items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all'>
                  <HiOutlineDotsHorizontal className='text-xl text-white group-hover:scale-125 transition-all' />
               </div>
            </div>
         )}
         <div className='flex flex-col gap-2 p-7'>
            <span className='text-sm text-gray'>{date}</span>
            <span className='sans-font font-bold text-2xl'>{title}</span>
            <span className='text-gray text-[15px] leading-7 my-4'>{text}</span>
            <div className='flex gap-2 text-[15px] text-blue-600 font-semibold'>
               {tags && tags.map((tag, index) => <span key={index}>{tag},</span>)}
            </div>
         </div>
      </div>
   );
}
