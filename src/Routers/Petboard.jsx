import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from '../Petboard/Signup';
import BoardLogin from '../Petboard/login';
import CareSignup from '../Components/Petcare/CareSignUp';
import CareLogin from '../Components/Petcare/CareLogin';
import Home from '../Components/PetrowHome/Home';
import CareHome from '../Components/Petcare/CareHome';
import { CareNavbar } from '../Navbar/CareNavbar';
import { BoardNavbar } from '../Navbar/BoardNavbar';
import BoardHome from '../Petboard/BoardHome';
import LoginNavigation from '../Components/LoginNavigation/LoginNavigation';
import BoardProfile from '../Petboard/BoardProfile/BoardProfile';




import React from 'react'

function Petboard() {
  return (
    <div>
      {/* <Router> */}
        <Routes>
          <Route exact path="/Signup" element={<Signup/>}/>
          <Route exact path='/BoardLogin' element={<BoardLogin/>}/>
          <Route exact path='/CareSignup'  element={<CareSignup/>}/>
          <Route exact path='/CareLogin'  element={<CareLogin/>}/>
          {/* petrow home */}
          <Route exact path='/Home' element={<Home/>}/>
          <Route exact path='/CareHome' element={<CareHome/>}/>
          <Route exact path="/CareNavbar" element={<CareNavbar/>}/>
          <Route exact path="/BoardNavbar" element={<BoardNavbar/>} />
          {/* petboard url */}
          <Route exact path='/BoardHome' element={<BoardHome/>}/>

          {/* loginnavigation */}

          < Route exact path='/LoginNavigation' element={<LoginNavigation/>}/>

         {/* board profile */}

         <Route exact path='/BoardProfile' element={<BoardProfile/>} />





        </Routes>


      {/* </Router> */}
      
    </div>
  )
}

export default Petboard
