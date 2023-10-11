import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PettakerHome from '../Components/PetrowHome/PettakerHome'
import PettakerProfile from '../Components/Petcare/PettakerProfile/PettakerProfile'
import CareHome from '../Components/Petcare/CareHome'



const TakerRouters = () => {
    return (
        <div>


            <Routes>

                {/* <Route exact path='/PettakerHome' element={<PettakerHome />} /> */}
                <Route exact path='/PettakerProfile' element={<PettakerProfile />} />

                {/* <Route exact path='/CareHome' element={<CareHome/>}/> */}



            </Routes>



        </div>
    )
}

export default TakerRouters
