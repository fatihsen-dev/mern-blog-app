import { Player } from "@lottiefiles/react-lottie-player";
import { NavLink } from "react-router-dom";

export default function NotFound() {
   return (
      <div className='h-full w-full flex justify-center items-center flex-col'>
         <Player
            autoplay
            loop
            src='https://assets8.lottiefiles.com/packages/lf20_GIyuXJ.json'
            style={{ height: "200px", width: "300px" }}></Player>
         <span className='font-medium'>
            This page isn't available. Sorry about that.{" "}
            <NavLink className='text-blue-500' to='/'>
               Get Home
            </NavLink>
         </span>
      </div>
   );
}
