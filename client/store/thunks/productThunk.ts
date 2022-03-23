import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IProduct} from "../../types/products";
axios.defaults.baseURL = 'http://195.2.76.237:5000/';
export const addProduct = createAsyncThunk (
    "addProduct",
    async ( data: any, thunkAPI ) => {
        const product = data.productToCreate
        const res = await axios.post<Promise<IProduct>> (
            `/products`, {product}, {
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
            `/products`, );
        return res.data;
    }
);
export const getProduct = createAsyncThunk (
    "getProduct",
    async ( id: any, thunkAPI ) => {
        const res = await axios.get<Promise<IProduct>> (
            `/product/${id}`, );
        return res.data;
    }
);
export const deleteProduct = createAsyncThunk (
    "deleteProduct",
    async ( data: any, thunkAPI ) => {
        const res = await axios.delete<Promise<IProduct>> (
            `/product/${data.id}`, {
                headers: {
                    "adminUsername": data.username
                }
            } );
        return res.data;
    }
);
export const updateProduct = createAsyncThunk (
    'updateProduct',
    async ( data: any ) => {
        const product = data.productToUpdate
        const res = await axios.put<Promise<IProduct>> ( `/products`, {product}, {
            headers: {
                "adminUsername": data.username
            }
        } );
        return res.data;
    }
)
export const getByCategory = createAsyncThunk (
    "getByCategory",
    async ( category: string, thunkAPI ) => {
        const res = await axios.get<Promise<IProduct>> (
            `/products/${category}`, );
        return res.data;
    }
);
export const addComment = createAsyncThunk (
    "addComment",
    async ( data: any, thunkAPI ) => {
        const comment = data.user
        const res = await axios.post<Promise<IProduct>> (
            `/products/${data.id}`, {comment}, );
        return res.data;
    }
);
export const deleteComment = createAsyncThunk (
    "deleteComment",
    async ( data: any, thunkAPI ) => {
        const comment = data.comment
        const res = await axios.delete<Promise<IProduct>> ( `/products/${data.id}`, {
            data: comment,
            headers: {"adminUsername": data.username}
        } )
        return res.data;
    }
);


