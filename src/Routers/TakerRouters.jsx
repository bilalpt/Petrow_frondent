import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PettakerHome from '../Components/PetrowHome/PettakerHome'
import PettakerProfile from '../Components/Petcare/PettakerProfile/PettakerProfile'
import CareHome from '../Components/Petcare/CareHome'
// import BoardProtected from '../ProtectedRouters/BoardProtected';
import PrivateRouters from '../ProtectedRouters/PrivateRouters';
import TakerProtected from '../ProtectedRouters/TakerProtected';
// import CareHome from '../Components/Petcare/CareHome';
import PetTakerHome from '../Components/Petcare/PetTakerHome';
import PetTakerterms from '../Components/Petcare/PetTaker/PetTakerterms';
import TakerAbout from '../Components/Petcare/TakerAbout/TakerAbout'
import TakerDescription from '../Components/Petcare/TakerDescription/TakerDescription'
import TakerWithPet from '../Components/Petcare/TakerWithPet/TakerWithPet'






const TakerRouters = () => {
    return (
        <div>


            <Routes>

                <Route element={<PrivateRouters/>}>

                
                </Route>
                <Route element={<TakerProtected/>}>
                    <Route exact path='/PetTakerHome'element={<PetTakerHome/>}/>
                    <Route exact path='/CareHome' element={<CareHome/>}/>

                    <Route exact path='/PettakerProfile' element={<PettakerProfile />} />
                    <Route exact path='/PetTakerterms'element={<PetTakerterms/>}/>
                    <Route exact path='/TakerAbout' element={<TakerAbout/>}/>
                    <Route exact path='/TakerDescription' element={<TakerDescription/>}/>
                    <Route exact path='/TakerWithPet' element={<TakerWithPet/>}/>

                </Route>



                {/* <Route exact path='/CareHome' element={<CareHome/>}/> */}



            </Routes>



        </div>
    )
}

export default TakerRouters
