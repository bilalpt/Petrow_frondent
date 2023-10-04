import PETCLINT from "../Constents/Mymeta";

import axios  from "axios";

const PetClintAxios=(baseUrl)=>{
    const clint=axios.create({
        baseURL:baseUrl,
        timeout:8000,
        timeoutErrorMessage:"actual time is over"
    })
    return clint
}

const Gettoken=(req,token)=>{
    const token=localStorage.getItem(token)
    if (token){
        req.headers.Authorization='Bearer $(token)'
    }
    return req

}