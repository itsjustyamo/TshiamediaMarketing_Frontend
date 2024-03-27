import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../components/navbar"; 
import Footer from "../components/footer";


// const Dashboard = () => {
//   const { logout } = useAuth();

//   const handleClick = () => {
//     logout();
//   };
  function LogIn (){

  return (
   <>
        <Navbar/>
      <h1>This is Log in Page</h1>
        <Footer/>
  </>
  );
};

export default LogIn;