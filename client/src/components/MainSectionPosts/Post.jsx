export default function Post({ src, date, title, text, tags }) {
   return (
      <div className='flex flex-col bg-white'>
         <img src={src} alt={src} />
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
