import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {adminLogin} from "../thunks/adminThunk";
import {IAdminData} from "../../types/admin";

const initialState = {
    username: '',
    error: '',
    isAuth: false
}

export const adminSlice = createSlice ( {
    name: "adminSlice",
    initialState,
    reducers:{
        logout: ( state, action) => {
            state.username = ''
        }
    },
    extraReducers: {
        [adminLogin.fulfilled.type]: ( state, action) => {
            state.username = action.payload.data.username
            state.isAuth = true
            state.error = ''
        },
        [adminLogin.rejected.type]: ( state, action) => {
            state.error = action.error.message;
            state.isAuth = false
        }
    }
} )

export const {logout} = adminSlice.actions
export default adminSlice.reducer