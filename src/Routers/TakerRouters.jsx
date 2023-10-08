import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PettakerHome from '../Components/PetrowHome/PettakerHome'
import PettakerProfile from '../Components/Petcare/PettakerProfile/PettakerProfile'


const TakerRouters = () => {
    return (
        <div>


            <Routes>

                <Route exact path='/PettakerHome' element={<PettakerHome />} />
                <Route exact path='/PettakerProfile' element={<PettakerProfile />} />




            </Routes>



        </div>
    )
}

export default TakerRouters
