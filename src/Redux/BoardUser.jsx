import { createSlice } from '@reduxjs/toolkit';



const initialState={
    id:"",
    username:"",
    email:"",
    password:"",
    BordFormRedux : [],
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
        },
        setBorderFormRedux: (state, action) => {
            state.BordFormRedux.push(action.payload);
          },
          UpdateBoardForm: (state, action) => {
            const { index, upadateboardform } = action.payload;
            state.BordFormRedux[index] = upadateboardform;
          }
          
    }

})

export const {boarduserstore,setBorderFormRedux,UpdateBoardForm}=Boardsplice.actions

export default  Boardsplice.reducer;




