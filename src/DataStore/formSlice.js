import { createSlice } from "@reduxjs/toolkit";
export const formSlice=createSlice({
    name :"FORM DATA",
    initialState:{ FormData:JSON.parse(localStorage.getItem("storedData")) || []},
    reducers:{
        addformData:(state, action)=>{
            state.FormData.push(action.payload)
           localStorage.setItem("storedData" ,JSON.stringify( state.FormData))
        }
    }
})
export default formSlice.reducer
export const {addformData}= formSlice.actions