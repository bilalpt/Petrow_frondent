import { createSlice } from '@reduxjs/toolkit';


const initialState={
    TakerAbout: [],
    TakerInitialDesc: [],
    Takeruserinitial:[],
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
        },
        Takeruserfun:(state,action)=>{
            state.Takeruserinitial.push(action.payload);

        },
    }
})

export const{TakerAboutfun,TakerDescriptionfun,UpdateDescription,Takeruserfun}=Takersplice.actions

export default Takersplice.reducer