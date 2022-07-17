import './App.css';
// import { useState } from 'react';
import NavRoute from './routes/NavRoute';
// import SignIn from './pages/authentication/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter } from "react-router-dom";
import Profile from './pages/profile/Profile';
import Dashboard from './pages/dashboard/Dashboard';
import AboutUs from './pages/aboutus/AboutUs';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignIn from './pages/authentication/SignIn';
import SignUp from './pages/authentication/SignUp';
function App() {
  // const [token,setToken] = useState();

  // if(!token) {
  //   return <SignIn setToken={setToken} />
  // }
  return (
    <BrowserRouter>
    <NavRoute />
     <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="profile" element={<Profile /> } />
        <Route path="aboutus" element={<AboutUs /> } />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
