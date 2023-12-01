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
import TakeraboutEdit from '../Components/Petcare/TakerAbout/TakeraboutEdit'
import TakerDescription from '../Components/Petcare/TakerDescription/TakerDescription'
import TakerWithPet from '../Components/Petcare/TakerWithPet/TakerWithPet'

//thats two are same user details different methord
import TakerIdproof from '../Components/Petcare/TakerIdproof/TakerIdproof'
import TakerwithidForm from '../Components/Petcare/TakerIdproof/TakerwithidForm'
// end that thats two are same user details different methord

//taker multiple form routers
import TakermultstepForm from '../Components/Petcare/Pettakermultiform/TakermultstepForm'
import Mainform from '../Components/Petcare/Pettakermultiform/Mainform'
// navbar

import { CareNavbar } from '../Navbar/CareNavbar'
import { useState } from 'react'










const TakerRouters = () => {

    // const [takernav,settakernav]=useState(false)
    // const [currentUser, setCurrentUser] = useState(null);


    // const SubmitPettakernav=(user)=>{
    //     settakernav(true)
    //     setCurrentUser(user)

    // }



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
                    <Route exact path='/TakerIdproof' element={<TakerIdproof/>}/>
                    <Route exact path='/TakerwithidForm' element={<TakerwithidForm/>}/>

                    <Route exact path='/TakermultstepForm' element={<TakermultstepForm />}/>
                    <Route exact path='/Mainform' element={<Mainform/>}/>
                    <Route exact path='/CareNavbar' element={<CareNavbar />}/>
                    <Route exact path='/TakeraboutEdit' element={<TakeraboutEdit/>}/>

                </Route>



                {/* <Route exact path='/CareHome' element={<CareHome/>}/> */}



            </Routes>



        </div>
    )
}

export default TakerRouters
