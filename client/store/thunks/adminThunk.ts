import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IAdminData} from "../../types/admin";

export const adminLogin = createAsyncThunk (
    "adminLogin",
    async ( adminData: IAdminData, thunkAPI ) => {
        return await axios.post<Promise<IAdminData>> (
            "http://localhost:5000/admin/login", {...adminData},
            {
                headers: {
                    "adminUsername": adminData.username
                }
            } );
    }
);