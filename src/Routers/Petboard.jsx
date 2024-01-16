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

import Chat from '../Petboard/Chating/Chat';

//private routers

import PrivateRouters from '../ProtectedRouters/PrivateRouters';

//protected routers 

import BoardProtected from '../ProtectedRouters/BoardProtected';

//board form
import BordingForm from '../Petboard/BoardingForm/BordingForm';

// summary
import Summary from '../Petboard/BoardingForm/Summary';
// edit boardform
import EditBoardingForm from '../Petboard/BoardingForm/EditBoardingForm';
//invitation page
import Boardinginvitation from '../Petboard/Boardinginvitation/Boardinginvitation';

import Boardhistory from '../Petboard/BoardHistory/Boardhistory';






import React from 'react'

function Petboard() {
  return (
    <div>
      {/* <Router> */}

        <Routes>

          <Route element={<PrivateRouters/>}>
          <Route exact path="/Signup" element={<Signup/>}/>
          <Route exact path='/CareSignup'  element={<CareSignup/>}/>
          <Route exact path='/CareLogin'  element={<CareLogin/>}/>
          < Route exact path='/LoginNavigation' element={<LoginNavigation/>}/>
          <Route exact path='/BoardLogin' element={<BoardLogin/>}/>
          </Route>
          
          <Route element={<BoardProtected/>}>
          {/* petrow home */}
          {/* <Route exact path='/CareHome' element={<CareHome/>}/> */}

          {/* petboard home */}
          <Route exact path='/BoardHome' element={<BoardHome/>}/>

          {/* board profile */}

         <Route exact path='/BoardProfile' element={<BoardProfile/>} />

          {/* boarding form */}
          <Route exact path='/BordingForm' element={<BordingForm/>}/>
          {/* summary */}
          <Route exact path='/Summary' element={<Summary/>}/>

          {/* editboardform */}
          <Route exact path='/EditBoardingForm' element={<EditBoardingForm/>}/>

          {/* boarding invitation  */}

          <Route exact path='/Boardinginvitation' element={<Boardinginvitation/>}/>

          <Route exact path='/Boardhistory' element={<Boardhistory/>}/>
          <Route exact path='/Chat' element={<Chat/>}/>
         
         </Route>





        </Routes>


      {/* </Router> */}
      
    </div>
  )
}

export default Petboard
