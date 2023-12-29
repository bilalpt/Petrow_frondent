import { createSlice } from '@reduxjs/toolkit';


const initialState={
    TakerAbout: {},
    TakerInitialDesc: {},
    Takeruserinitial:{},
    TakeridInitial:[],
    Petwithimage:{},
}

const Takersplice=createSlice({
    name:"BoardTaker",
    initialState,

    reducers:{

        LogoutTakeruser:(state,action)=>{
            state.Takeruserinitial = {};
            state.TakerAbout = {};
            state.TakerInitialDesc={};
            state.TakeridInitial=[];

        },
        RemoveTakeridinitial:(state,action)=>{
        },


        PetwithImagefun:(state,action)=>{
            state.Petwithimage=action.payload.Petwithimage
        },
        TakerAboutfun:(state,action)=>{
            state.TakerAbout=action.payload.TakerAbout
        },
        
        TakerDescriptionfun:(state,action)=>{
            state.TakerInitialDesc=action.payload.TakerInitialDesc
        },
        UpdateDescription: (state,action)=>{
            const { index,updatedescription }=action.payload;
            state.TakerInitialDesc[index]=updatedescription
        },
        Takeruserfun:(state,action)=>{
            state.Takeruserinitial = action.payload.Takeruserinitial

        },
        UpdateUser:(state,action)=>{
            const {index,updateuser}=action.payload;
            state.Takeruserinitial[index]=updateuser
        },
        //id images
        
        TakeridImages:(state,action)=>{
            state.TakeridInitial=action.payload.TakeridInitial

        },
        UpdateAboutpage:(state,action)=>{
            const{index, updateaboutpage }=action.payload;
            state.TakerAbout[index]=updateaboutpage
          }
          
    }
})

export const{RemoveTakeridinitial,TakerAboutfun,TakerDescriptionfun,UpdateDescription,Takeruserfun,UpdateUser,TakeridImages,UpdateAboutpage,LogoutTakeruser}=Takersplice.actions

export default Takersplice.reducer