
import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Browser from './components/browser/Browser';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import SearchMovie from './components/searchMovie/SearchMovie';
function App() {
  const path = window.location.pathname;
  const location = [
    "/",
    "/login",
    "/register"
  ]
  
  
  return (
  <React.Fragment>
    {/* {
      !location.contains(path) && <Header />
    } */}
    <Header />
    <BrowserRouter>
      <Routes>
         <Route path='/login' element={<Login />} />
         <Route path='/' element={<Login />} /> 
         <Route path="/register" element={<Register />} />
         <Route element={<PrivateRoute />}>
         <Route path="/browser" element={<Browser />} />
         <Route path="/search" element={<SearchMovie />} />
         </Route>
       
      </Routes>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
