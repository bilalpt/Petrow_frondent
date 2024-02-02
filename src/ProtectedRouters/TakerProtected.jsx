import React from 'react'
import jwtDecode from 'jwt-decode'
import { Outlet } from 'react-router-dom'
// import PettakerHome from '../Components/PetrowHome/PettakerHome'
import AdminHome from '../Components/admin/AdminHome/AdminHome';
import Home from '../Components/PetrowHome/Home';
import BoardHome from '../Petboard/BoardHome';





const TakerProtected = () => {

    const token =localStorage.getItem('token')
    const decode=jwtDecode(token)
    console.log(token);
    if(token){
        if(decode.roles==='taker'){
            return <Outlet/>;
        }
        else if(decode.roles==='boarduser'){
            return<BoardHome/>
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

export default TakerProtected
