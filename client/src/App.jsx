import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { userControl } from "./axios";
import Login from "./pages/Login";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import { signin, logout } from "./store/authSlice";

function App() {
   const { key, user } = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   useState(() => {
      if (key.length > 0) {
         userControl({ id: key })
            .then((response) => {
               const { fullname, email, createdDate, userType } = response.data;
               dispatch(signin({ fullname, email, createdDate, userType }));
            })
            .catch((err) => {
               console.log(err);
            });
      } else {
         dispatch(logout());
      }
   }, []);

   return (
      <div className='w-full h-full'>
         <Routes>
            <Route path='/' element={<Main />} />
            {user ? (
               <></>
            ) : (
               <>
                  <Route path='/register' element={<Register />} />
                  <Route path='/login' element={<Login />} />
               </>
            )}
            <Route path='*' element={<NotFound />} />
         </Routes>
      </div>
   );
}

export default App;
