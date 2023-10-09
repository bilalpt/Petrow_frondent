import React from 'react'
import jwtDecode from 'jwt-decode'
import { Outlet } from 'react-router-dom'
import PettakerHome from '../Components/PetrowHome/PettakerHome'
import BoardHome from '../Petboard/BoardHome';
import AdminHome from '../Components/admin/AdminHome/AdminHome';
import Home from '../Components/PetrowHome/Home';


const PrivateRouters = () => {

    const token=localStorage.getItem('token')
    if(token){
        const decode=jwtDecode(token)

        if(decode.roles==='boarduser'){
            return<BoardHome/>
        }
        else if(decode.roles==='taker'){
            return<PettakerHome/>
        }
        else if(decode.roles === 'admin' && decode.is_admin){
            return<AdminHome/>
        }
        else{
            return<Home/>

        }
    }
    return <Outlet/>

}

export default PrivateRouters
