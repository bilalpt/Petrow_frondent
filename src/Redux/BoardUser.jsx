import { createSlice } from '@reduxjs/toolkit';

// const initialState={
//     id:"",
//     username:"",
//     email:"",
//     phone:"",

// };

// const Boardslice=createSlice({

//     name:"boarduser",
//     initialState,
//     reducers:{
//         setboarduserdetails:(state,action)=>{
//         const {id,username,email,phone}=action.payload;
        
//         return {
//             ...state,
//             id: id||state.id,
//             username:username||state.username,
//             email:email||state.email,
//             phone:phone||state.phone,


//         }
//     }


//     }



// })




const initialState={
    id:"",
    username:"",
    email:"",
    password:"",
}

const Boardsplice=createSlice({
    name:"boarduser",
    initialState,

    reducers:{
        boarduserstore:(state,action)=>{
            const {id,email,password,username}=action.payload

            return{
                ...state,
                id:id||state.id,
                email:email||state.email,
                password:password||state.password,
                username:username||state.username,
            }
        }
    }

})




