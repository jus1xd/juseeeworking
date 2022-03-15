import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IProduct} from "../../types/products";

export const addProduct = createAsyncThunk (
    "addProduct",
    async ( data: any, thunkAPI ) => {
        const product = data.productToCreate
        const res = await axios.post<Promise<IProduct>> (
            "http://localhost:5000/products", {product}, {
                headers: {
                    "adminUsername": data.username
                }
            } );
        return res.data;
    }
);
export const getAllProducts = createAsyncThunk (
    "getAllProducts",
    async ( _, thunkAPI ) => {
        const res = await axios.get<Promise<IProduct>> (
            "http://localhost:5000/products", );
        return res.data;
    }
);
export const getProduct = createAsyncThunk (
    "getProduct",
    async ( id: any, thunkAPI ) => {
        const res = await axios.get<Promise<IProduct>> (
            `http://localhost:5000/product/${id}`, );
        return res.data;
    }
);
export const deleteProduct = createAsyncThunk (
    "deleteProduct",
    async ( data: any, thunkAPI ) => {
        console.log ( data )
        const res = await axios.delete<Promise<IProduct>> (
            `http://localhost:5000/product/${data.id}`, {
                headers: {
                    "adminUsername": data.username
                }
            } );
        return res.data;
    }
);
export const getByCategory = createAsyncThunk (
    "getByCategory",
    async ( category: string, thunkAPI ) => {
        const res = await axios.get<Promise<IProduct>> (
            `http://localhost:5000/products/${category}`, );
        return res.data;
    }
);
export const addComment = createAsyncThunk (
    "addComment",
    async ( data: any, thunkAPI ) => {
        const comment = data.comment
        const res = await axios.post<Promise<IProduct>> (
            `http://localhost:5000/products/${data.id}`, {comment}, );
        return res.data;
    }
);
export const deleteComment = createAsyncThunk (
    "deleteComment",
    async ( data: any, thunkAPI ) => {
        const comment = data.comment
        const res = await axios.post<Promise<IProduct>> (
            `http://localhost:5000/products/${data.id}`, {comment}, {
                headers: {
                    "adminUsername": data.username
                }
            } );
        return res.data;
    }
);


