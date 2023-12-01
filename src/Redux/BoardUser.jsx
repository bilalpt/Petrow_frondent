import { createSlice } from '@reduxjs/toolkit';



const initialState={
    id:"",
    username:"",
    email:"",
    password:"",
    BordFormRedux : [],
    BoarduserRedux:{},
    
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
        // petboard form
        
        setBorderFormRedux: (state, action) => {
            state.BordFormRedux.push(action.payload);
          },
          
          UpdateBoardForm: (state, action) => {
            const { index, upadateboardform } = action.payload;
            state.BordFormRedux[index] = upadateboardform;
          },

          BoarduserDetails:(state,action)=>{
            state.BoarduserRedux=action.payload.BoarduserRedux
          }

    }

})

export const {boarduserstore,setBorderFormRedux,UpdateBoardForm,BoarduserDetails}=Boardsplice.actions

export default  Boardsplice.reducer;




