import { PETBOARDHOMEAxiosInstant } from "../utils/AxiosUtils";




export const HomeownerGoogleSignup = (value) => {

    const values = {
        email : value.email,
        name  : value.given_name,
        password : value.id
    };
    return PETBOARDHOMEAxiosInstant.post("/homeowners/googlehomeowner/", values ,{withCredentials:true})
}


export const BoardLogin = (values) =>{
    return PETBOARDHOMEAxiosInstant.post("/petboarding/token_obtain_pair/token'/", values, {withCredentials:true})
        .catch((error) => error.response);

}

export const TakerUserInfo = (id) =>{
    return PETBOARDHOMEAxiosInstant.get("/petcare/takeruserinfo/" +id+ "/" ,{withCredentials:true})
}

