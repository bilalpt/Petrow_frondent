import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Petboard from './Routers/Petboard'
import Signup from './Petboard/Signup'
import TakerRouters from './Routers/TakerRouters'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminRouters from './Routers/AdminRouters'
import Home from './Components/PetrowHome/Home'


function App() {

  return (
    <>

    <div>
    <Router>

      <Routes>
      <Route exact path='/' element={<Home/>}/>
              <Route path='/PetBoards/*' element={<Petboard/>}/>
              <Route path='/PetTakers/*' element={<TakerRouters/>}/>
              <Route path='/AdminRouters/*' element={<AdminRouters/>}/>
      </Routes>


    </Router>
      
    </div>



    </>
  )
}

export default App
