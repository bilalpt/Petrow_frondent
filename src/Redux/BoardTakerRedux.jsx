import { createSlice } from '@reduxjs/toolkit';


const initialState={
    TakerAbout: [],
    TakerInitialDesc: [],
}

const Takersplice=createSlice({
    name:"BoardTaker",
    initialState,

    reducers:{
        TakerAboutfun:(state,action)=>{
            state.TakerAbout.push(action.payload);
        },
        
        TakerDescriptionfun:(state,action)=>{
            state.TakerInitialDesc.push(action.payload);
        }
    }
})

export const{TakerAboutfun,TakerDescriptionfun}=Takersplice.actions

export default Takersplice.reducer