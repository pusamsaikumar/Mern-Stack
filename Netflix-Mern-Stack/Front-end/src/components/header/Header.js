import React, { useState,useEffect } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { jwtDecode } from "jwt-decode";
import { useDispatch,useSelector } from 'react-redux';
import { logoutUser, setToggle } from '../redux/API';
import Cookies from "js-cookie";
import { ToastContainer } from 'react-toastify';
const Header = () => {

  const loginData = useSelector(state => state.loginData);
  const toggle = useSelector(state => state.toggle);
  console.log("logindata",loginData)
   var acesstoken = document?.cookie?.split("token=")[1];

  // var token = Cookies.get("token");
  
  //   console.log("decode",decode);
  const [token,setToken] = useState(null);
  useEffect(() => {
    if(loginData){
     // setToken(Cookies.get("token"));
     setToken(acesstoken)
    }
  },[loginData]);
    var decode = token && jwtDecode(token);
    console.log("de",decode)
 const dispatch = useDispatch();
 const handleLogout = () => {
dispatch(logoutUser());
 
 }

//  var cookie = document?.cookie;
//   var access_token = cookie?.split("token=")[1];
//   var decodeToken = jwtDecode(access_token);
 
//   console.log("decode token", decodeToken);

  const logoutHandler = () => {
    Cookies?.remove('access_token');
    
    window.location.href = "/login";
  }

  const toggleHandler = ()=> {
    dispatch(setToggle(true));
  }
  return (
   <React.Fragment>
    <ToastContainer />
     <div className="absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black">
    
    <img className='w-56'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158' alt="logo" />
  {
   decode?.email   &&  <div className='flex items-center'>
    <IoIosArrowDropdown color='white'  size={"24px"} />
  <h1 className='text-white font-medium text-lg'>
    {
     decode?.fullName
    }
   </h1>
<div className='ml-4'>
<button className="bg-red-400 text-white px-4 py-2" onClick={handleLogout}>Logout</button>
<button  className="bg-red-400 text-white px-4  py-2 ml-2" onClick={toggleHandler}>{toggle ? " Home" :"Search Movie"}</button>
</div>
  </div>
  }
</div>
   </React.Fragment>
  )
}

export default Header