import React from 'react'
import jwtDecode from 'jwt-decode'
import { Outlet } from 'react-router-dom'
// import PettakerHome from '../Components/PetrowHome/PettakerHome'
import BoardHome from '../Petboard/BoardHome';
import AdminHome from '../Components/admin/AdminHome/AdminHome';
import Home from '../Components/PetrowHome/Home';
import PetTakerHome from '../Components/Petcare/PetTakerHome';

const BoardProtected = () => {
 
    const token =localStorage.getItem('token')
    const decode=jwtDecode(token)
    console.log(token);
    if(token){
        if(decode.roles==='boarduser'){
            return <Outlet/>;
        }
        else if(decode.roles==='taker'){
            return<PetTakerHome/>
        }
        else if(decode.roles === "admin" && decode.is_admin){
            <AdminHome/>
        }
        else{
            return<Home/>
        }
    }
    else{
        return<Home/>
    }
}

export default BoardProtected
