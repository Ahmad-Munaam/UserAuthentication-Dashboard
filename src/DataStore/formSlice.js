import { createSlice } from "@reduxjs/toolkit";
export const formSlice = createSlice({
    name: "FORM DATA",
    initialState: {
        FormData: JSON.parse(localStorage.getItem("storedData")) || [],
        apiUiData: []
    },
    // the reducers area added for rebase and merge conflict
    reducers: {
        addformData: (state, action) => {
            state.FormData.push(action.payload)
            localStorage.setItem("storedData", JSON.stringify(state.FormData))
        },
        addrealData: (state, action) => {
            state.apiUiData = [...action.payload]
        },
        updatedData: (state, action) => {
            state.FormData = state.FormData.map((value, index) => {
                if (index === action.payload.Objindex) {
                    return {
                        ...value, password: action.payload.newPassword, Cpassword: action.payload.confirmNewPassword
                    }
                }
                return state.FormData
            })
            localStorage.clear()
            localStorage.setItem("storedData", JSON.stringify(state.FormData))

        }

    }
})
export default formSlice.reducer
export const { addformData, addrealData, updatedData } = formSlice.actions