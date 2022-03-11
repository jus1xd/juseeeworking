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
    reducers: {},
    extraReducers: {
        [adminLogin.fulfilled.type]: ( state, action: PayloadAction<IAdminData> ) => {
            state.username = action.payload.username
            state.isAuth = true
            state.error = ''
        },
        [adminLogin.rejected.type]: ( state, action: PayloadAction<string> ) => {
            state.error = action.error.message;
            state.isAuth = false
        }
    }
} )

export default adminSlice.reducer