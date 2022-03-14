import {IProduct} from "../../types/products";
import {createSlice} from "@reduxjs/toolkit";
import {getAllProducts, getProduct} from "../thunks/productThunk";

const initialState = {
    products: [{} as IProduct],
    product: {},
    errors: ''
}

const productSlice = createSlice ( {
    name: "productSlice",
    initialState,
    reducers: {
        deleteProductLocal: ( state, action ) => {
            state.products = state.products.filter ( product => product._id !== action.payload )
        },
        addProductLocal: ( state, action ) => {
            state.products.push ( action.payload )
        },
    },
    extraReducers: {
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
    }
} )
export const {deleteProductLocal, addProductLocal} = productSlice.actions
export default productSlice.reducer