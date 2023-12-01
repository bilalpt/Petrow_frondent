import { createSlice } from '@reduxjs/toolkit';


const initialState={
    TakerAbout: [],
    TakerInitialDesc: [],
    Takeruserinitial:{},
    TakeridInitial:{}
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
        },
        //id images
        
        TakeridImages:(state,action)=>{
            state.TakeridInitial=action.payload.TakeridInitial

        },
        UpdateAboutpage:(state,action)=>{
            const{index, UpdateAboutpage}=action.payload;
            state.TakerAbout[index]=UpdateAboutpage
          }
          
    }
})

export const{TakerAboutfun,TakerDescriptionfun,UpdateDescription,Takeruserfun,Updateuser,TakeridImages,UpdateAboutpage}=Takersplice.actions

export default Takersplice.reducer