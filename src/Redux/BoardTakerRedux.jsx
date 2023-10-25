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
        },
        UpdateDescription: (state,action)=>{
            const { index,UpdateDescription }=action.payload;
            state.TakerInitialDesc[index]=UpdateDescription
        }
    }
})

export const{TakerAboutfun,TakerDescriptionfun,UpdateDescription}=Takersplice.actions

export default Takersplice.reducer