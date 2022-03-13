import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ISiteConfig} from "../../types/config";

export const getSiteConfig = createAsyncThunk (
    "getSiteConfig",
    async ( _, thunkAPI ) => {
        const res = await axios.get<Promise<ISiteConfig>> (
            "http://localhost:5000/config/getConfig"
        );
        return res.data;
    }
);
export const changeSiteConfig = createAsyncThunk (
    "changeSiteConfig",
    async ( data: any, thunkAPI ) => {
        const config = data.config
        const res = await axios.put<Promise<ISiteConfig>> (
            "http://localhost:5000/config/updateConfig", {config}, {
                headers: {
                    "adminUsername": data.username
                }
            } );
        return res.data;
    }
);
