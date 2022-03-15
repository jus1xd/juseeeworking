import {IProduct} from "../../types/products";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addProduct, deleteProduct, getAllProducts, getProduct, updateProduct} from "../thunks/productThunk";

const initialState = {
    products: [{} as IProduct],
    product: {},
    errors: ''
}

const productSlice = createSlice ( {
    name: "productSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [addProduct.fulfilled.type]: ( state, action ) => {
            state.products.push ( action.payload )
        },
        [getAllProducts.fulfilled.type]: ( state, action ) => {
            state.products = action.payload
        },
        [getAllProducts.rejected.type]: ( state, action ) => {
            state.errors = action.error.message
        },
        [getProduct.fulfilled.type]: ( state, action ) => {
            state.product = action.payload
        },
        [getProduct.rejected.type]: ( state, action ) => {
            state.errors = action.error.message
        },
        [deleteProduct.fulfilled.type]: ( state, action ) => {
            state.products = state.products.filter ( product => product._id !== action.payload._id )
        },
        [updateProduct.fulfilled.type]: ( state, action: PayloadAction<IProduct> ) => {
            const product = state.products.find( product => product._id == action.payload._id)
            const productId = state.products.indexOf (product)
            state.products[productId] = action.payload
        }
    }
} )
export default productSlice.reducer