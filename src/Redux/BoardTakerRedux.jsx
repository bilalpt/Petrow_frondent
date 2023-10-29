import { createSlice } from '@reduxjs/toolkit';


const initialState={
    TakerAbout: [],
    TakerInitialDesc: [],
    Takeruserinitial:{},
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
            state.Takeruserinitial = action.payload.Takeruserinitial

        },
        Updateuser:(state,action)=>{
            const {index,Updateuser}=action.payload;
            state.Takeruserinitial[index]=Updateuser
        }
    }
})

export const{TakerAboutfun,TakerDescriptionfun,UpdateDescription,Takeruserfun,Updateuser}=Takersplice.actions

export default Takersplice.reducer