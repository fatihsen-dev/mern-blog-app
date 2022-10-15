import Menu from "./Menu";
import Logo from "./Logo";
import Galery from "./Galery";

export default function Header() {
   return (
      <div className='navbar-ctnr w-full '>
         <div className='container h-full mx-auto 2xl:px-36'>
            <Logo />
            <Menu />
            <Galery />
         </div>
      </div>
   );
}
