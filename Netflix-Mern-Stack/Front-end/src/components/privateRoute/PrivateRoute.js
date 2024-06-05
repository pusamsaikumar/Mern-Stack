import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from "js-cookie";

const PrivateRoute = () => {
    var token = document?.cookie?.split("token=")[1];
   // var Token = Cookies.get("token");
  return (
    token ? <Outlet /> : <Navigate to={"/login"} replace />
  )
}

export default PrivateRoute