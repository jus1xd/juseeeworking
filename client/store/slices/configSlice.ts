import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getSiteConfig} from "../thunks/condifigThunk";
import {ISiteConfig} from "../../types/config";

const initialState = {
    config: {} as ISiteConfig,
    error: "",
}
export const configSlice = createSlice ( {
    name: 'configSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getSiteConfig.fulfilled.type]: ( state, action: PayloadAction<ISiteConfig> ) => {
            state.error = "";
            state.config = action.payload;
        },
        [getSiteConfig.rejected.type]: ( state, action: PayloadAction<string> ) => {
            state.error = action.payload
        }
    }
} )
export default configSlice.reducer