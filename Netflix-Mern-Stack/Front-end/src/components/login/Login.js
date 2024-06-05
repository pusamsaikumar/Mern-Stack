import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {toast,ToastContainer} from "react-toastify";
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../redux/API';

const Login = () => {
  
    const dispatch = useDispatch();

    const [isLogin,setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [value,setValue] = useState({
      
        email:"",
        password:""

    })
   
    const handleInput =(e,name) => {
    //   setValue({
    //     ...value,
    //     [name]:e.target.value
    //   })
    setValue((prev) => {
        return {
            ...prev,
            [name]:e.target.value
        }
    })
    };
    const handleSubmit=(e)=>{
     e.preventDefault();
     console.log("vlaue",value);
     dispatch(loginUser(value));
    }
  return (
    <div >  
      
      <div className='absolute'>
      <img className='w-[100vw] h-[100vh] bg-cover' src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png" alt="banner" />
      </div>
      {/* <form className='flex flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90 text-white' >
        <h1 className='font-bold text-3xl mb-5  text-white'>{isLogin ? "Login" :"Sign Up"}</h1>
          <div className='flex flex-col'>
            {
                !isLogin && <input type="text" placeholder='Full Name' className='outline-none p-3 my-2 rounded-sm bg-gray-800  text-white' />
            }
            <input type="email" placeholder='Email Address' className='outline-none p-3 my-2 rounded-sm bg-gray-800  text-white'  />
            <input type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800  text-white'  />
            <button type='submit' className='bg-red-600 mt-6 p-3 rounded-sm text-white'>Sign In</button>
            <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"} <span className='ml-1 text-blue-900 font-medium curso'
            onClick={()=>navigate("/register")}
            >
                    {
                        isLogin ? "Sign Up" :"Login"
                    }
                </span></p>

          </div>
      </form> */}

<form onSubmit={(e) =>handleSubmit(e)} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90 text-white' >
        <h1 className='font-bold text-3xl mb-5  text-white'>{"Login" }</h1>
          <div className='flex flex-col'>
           
             
          <input type="email" value={value.email} name="email"  onChange={(e) =>handleInput(e,"email")} placeholder='Email Address' className='outline-none p-3 my-2 rounded-sm bg-gray-800  text-white'  />
              <input type='password' value={value.password} name="password" onChange={(e) =>handleInput(e,"password")} placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800  text-white'  />
            <button type='submit' className='bg-red-600 mt-6 p-3 rounded-sm text-white'>Login</button>
            <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"} <span className='ml-1 text-blue-900 font-medium curso'
            onClick={()=>navigate("/register")}
            >
                    {
                        "Signup" 
                    }
                </span></p>

          </div>
      </form>
    </div>
  )
}

export default Login