import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from '../Petboard/Signup';
import BoardLogin from '../Petboard/login';
import CareSignup from '../Components/Petcare/CareSignUp';
import CareLogin from '../Components/Petcare/CareLogin';
import Home from '../Components/PetrowHome/Home';



import React from 'react'

function Petboard() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/Signup" element={<Signup/>}/>
          <Route exact path='/BoardLogin' element={<BoardLogin/>}/>
          <Route exact path='/CareSignup'  element={<CareSignup/>}/>
          <Route exact path='/CareLogin'  element={<CareLogin/>}/>
          {/* petrow home */}
          <Route exact path='/Home' element={<Home/>}/>


        </Routes>


      </Router>
      
    </div>
  )
}

export default Petboard
