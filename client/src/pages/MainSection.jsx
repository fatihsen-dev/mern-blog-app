import React from "react";
import Post from "../components/MainSectionPosts/Post";
import { posts } from "../fakeData/Post";
import { BsArrowLeft, BsArrowRight, BsThreeDots } from "react-icons/bs";
import { GrFacebookOption, GrTwitter, GrPinterest } from "react-icons/gr";
import { ImInstagram } from "react-icons/im";

export default function MainSection() {
   return (
      <div className='w-full bg-light pt-24'>
         <div className='w-full container mx-auto flex flex-col 2xl:px-24'>
            <div className='grid grid-cols-4 gap-10'>
               <div className='flex flex-col gap-10'>
                  {posts.map((post, index) => {
                     if (index < 3) {
                        return (
                           <div key={index} className='self-start'>
                              <Post
                                 src={post.image}
                                 date={post.date}
                                 title={post.title}
                                 text={post.text}
                                 tags={post.tags}
                              />
                           </div>
                        );
                     }
                  })}
               </div>
               <div className='flex flex-col gap-10'>
                  {posts.map((post, index) => {
                     if (index > 3 && index < 7) {
                        return (
                           <div key={index} className='self-start'>
                              <Post
                                 src={post.image}
                                 date={post.date}
                                 title={post.title}
                                 text={post.text}
                                 tags={post.tags}
                              />
                           </div>
                        );
                     }
                  })}
               </div>
               <div className='flex flex-col gap-10'>
                  {posts.map((post, index) => {
                     if (index > 7 && index < 11) {
                        return (
                           <div key={index} className='self-start'>
                              <Post
                                 src={post.image}
                                 date={post.date}
                                 title={post.title}
                                 text={post.text}
                                 tags={post.tags}
                              />
                           </div>
                        );
                     }
                  })}
               </div>
               <div className='flex flex-col gap-10'>
                  {posts.map((post, index) => {
                     if (index > 11 && index < 15) {
                        return (
                           <div key={index} className='self-start'>
                              <Post
                                 src={post.image}
                                 date={post.date}
                                 title={post.title}
                                 text={post.text}
                                 tags={post.tags}
                              />
                           </div>
                        );
                     }
                  })}
               </div>
            </div>
            <div className='w-full py-5 my-20 flex justify-center'>
               <ul className='flex items-center gap-5 font-semibold'>
                  <li className='text-xl bg-white p-3 hover:text-white hover:bg-black cursor-pointer transition-colors shadow-md rounded-full'>
                     <BsArrowLeft />
                  </li>
                  <li className='hover:bg-gray/40 px-2 py-1 rounded-sm cursor-pointer transition-colors'>
                     1
                  </li>
                  <li className='px-2 py-1 rounded-sm cursor-pointer transition-colors bg-black/95 text-white'>
                     2
                  </li>
                  <li className='hover:bg-gray/40 px-2 py-1 rounded-sm cursor-pointer transition-colors'>
                     3
                  </li>
                  <li className='hover:bg-gray/40 px-2 py-1 rounded-sm cursor-pointer transition-colors'>
                     4
                  </li>
                  <li className='hover:bg-gray/40 px-2 py-1 rounded-sm cursor-pointer transition-colors'>
                     5
                  </li>
                  <li className='hover:bg-gray/40 px-2 py-2 rounded-sm cursor-pointer transition-colors'>
                     <BsThreeDots />
                  </li>
                  <li className='hover:bg-gray/40 px-2 py-1 rounded-sm cursor-pointer transition-colors'>
                     8
                  </li>
                  <li className='text-xl bg-white p-3 hover:text-white hover:bg-black cursor-pointer transition-colors shadow-md rounded-full'>
                     <BsArrowRight />
                  </li>
               </ul>
            </div>
         </div>
         <div className='bg-white w-full'>
            <div className='flex flex-col container mx-auto 2xl:px-48 py-20 gap-20'>
               <div className='flex'>
                  <div className='flex flex-col flex-1 gap-5'>
                     <span className='text sans-font font-bold text-2xl'>
                        Popular Posts
                     </span>
                     <div className='grid grid-cols-2 gap-5'>
                        {posts &&
                           posts.map((post, index) => {
                              if (index > 9) {
                                 return (
                                    <div className='flex gap-4 items-center' key={index}>
                                       <img
                                          className='w-16 h-16 object-cover'
                                          src={post.image}
                                          alt={post.image}
                                       />
                                       <div className='flex flex-col gap-1'>
                                          <span className='font-bold'>{post.title}</span>
                                          <span className=' text-xs text-gray'>
                                             By{" "}
                                             <span className='text-black hover:text-blue-600 cursor-pointer'>
                                                John Doe
                                             </span>{" "}
                                             on Dec 14, 2017
                                          </span>
                                       </div>
                                    </div>
                                 );
                              }
                           })}
                     </div>
                  </div>
                  <div className='flex flex-col flex-[0.5] gap-5 pl-20'>
                     <span className='text sans-font font-bold text-2xl'>
                        About Philosophy
                     </span>
                     <span className='text-black/70 leading-6'>
                        Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero
                        malesuada feugiat. Pellentesque in ipsum id orci porta dapibus.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                        vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut
                        lacinia in, elementum id enim. Donec sollicitudin molestie
                        malesuada.
                     </span>
                     <div className='inline-flex gap-3 text-xl items-center'>
                        <GrFacebookOption className='hover:text-blue-500 cursor-pointer transition-colors text-2xl' />
                        <GrTwitter className='hover:text-blue-500 cursor-pointer transition-colors' />
                        <ImInstagram className='hover:text-blue-500 cursor-pointer transition-colors' />
                        <GrPinterest className='hover:text-blue-500 cursor-pointer transition-colors' />
                     </div>
                  </div>
               </div>
               <div className='flex flex-col justify-center text-center gap-4 px-40'>
                  <span className='text sans-font font-bold text-2xl'>Tags</span>
                  <ul className='flex gap-5 justify-center flex-wrap'>
                     <li className='bg-gray/20 py-1 px-5 rounded-sm font-medium hover:bg-black/90 hover:text-white transition-colors cursor-pointer'>
                        SALAD
                     </li>
                     <li className='bg-gray/20 py-1 px-5 rounded-sm font-medium hover:bg-black/90 hover:text-white transition-colors cursor-pointer'>
                        RECIPE
                     </li>
                     <li className='bg-gray/20 py-1 px-5 rounded-sm font-medium hover:bg-black/90 hover:text-white transition-colors cursor-pointer'>
                        PLACES
                     </li>
                     <li className='bg-gray/20 py-1 px-5 rounded-sm font-medium hover:bg-black/90 hover:text-white transition-colors cursor-pointer'>
                        TIPS
                     </li>
                     <li className='bg-gray/20 py-1 px-5 rounded-sm font-medium hover:bg-black/90 hover:text-white transition-colors cursor-pointer'>
                        FRIENDS
                     </li>
                     <li className='bg-gray/20 py-1 px-5 rounded-sm font-medium hover:bg-black/90 hover:text-white transition-colors cursor-pointer'>
                        TRAVEL
                     </li>
                     <li className='bg-gray/20 py-1 px-5 rounded-sm font-medium hover:bg-black/90 hover:text-white transition-colors cursor-pointer'>
                        EXERCISE
                     </li>
                     <li className='bg-gray/20 py-1 px-5 rounded-sm font-medium hover:bg-black/90 hover:text-white transition-colors cursor-pointer'>
                        READING
                     </li>
                     <li className='bg-gray/20 py-1 px-5 rounded-sm font-medium hover:bg-black/90 hover:text-white transition-colors cursor-pointer'>
                        RUNNING
                     </li>
                     <li className='bg-gray/20 py-1 px-5 rounded-sm font-medium hover:bg-black/90 hover:text-white transition-colors cursor-pointer'>
                        SELF-HELP
                     </li>
                     <li className='bg-gray/20 py-1 px-5 rounded-sm font-medium hover:bg-black/90 hover:text-white transition-colors cursor-pointer'>
                        VACATION
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className='bg-[#19191b]'>
            <div className='flex flex-col container mx-auto 2xl:px-48 py-20 gap-20'></div>
         </div>
      </div>
   );
}
