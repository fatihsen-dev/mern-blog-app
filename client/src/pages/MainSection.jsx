import React from "react";
import Post from "../components/MainSectionPosts/Post";
import { posts } from "../fakeData/Post";

export default function MainSection() {
   return (
      <div className='w-full bg-light pt-24 2xl:px-64'>
         <div className='w-full container mx-auto flex flex-col pb-72'>
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
         </div>
      </div>
   );
}
