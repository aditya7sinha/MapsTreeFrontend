import React from 'react'
import Dashboard from '../pages/dashboard/Dashboard';
import Profile from '../pages/profile/Profile';
import AboutUs from '../pages/aboutus/AboutUs';
import {Link, Outlet} from 'react-router-dom';
import NavBars from '../components/NavBars'
function NavRoute({token}) {
  return (
   <>
     <NavBars /> 
      <Outlet />
    </>
  )
}

export default NavRoute