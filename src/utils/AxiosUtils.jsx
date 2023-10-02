import axios from 'axios'
import { PETBOARDHOME } from '../Constents/Constents'

const CreateAxiosClint=(baseurl)=>{
    const board=axios.create({
        baseurl,
        timeout:8000,
        timeoutErrorMessage:"Request timed out please try again!!!"
    })
    return board
}

const attachToken = (req,tokenName) => {
    let authToken = localStorage.getItem(tokenName.access)
    if(authToken){
        req.headers.Authorization = `Bearer ${authToken}`;
    }
    return req
}


const PETBOARDHOMEAxiosInstant = CreateAxiosClint(PETBOARDHOME)
HomeownerAxiosInstant.interceptors.request.use(async (req) =>{
    const modifiedReq = attachToken(req, 'token')
    return modifiedReq
})

export{PETBOARDHOMEAxiosInstant}