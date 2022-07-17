import React from 'react'
import Dashboard from '../pages/dashboard/Dashboard';
import Profile from '../pages/profile/Profile';
import AboutUs from '../pages/aboutus/AboutUs';
import {Link, Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar'
function NavRoute() {
  return (
   <>
     <Navbar /> 
      <Outlet />
    </>
  )
}

export default NavRoute