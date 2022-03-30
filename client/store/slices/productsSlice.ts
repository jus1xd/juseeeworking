import {IProduct} from "../../types/products";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    addComment,
    addProduct,
    deleteComment,
    deleteProduct,
    getAllProducts, getByCategory,
    getProduct,
    updateProduct
} from "../thunks/productThunk";

interface IInitialState {
    products: IProduct[],
    sortedProducts: IProduct[],
    product: IProduct
    errors: string
    searchString: string
}

const initialState: IInitialState = {
    products: [],
    sortedProducts: [],
    product: {} as IProduct,
    errors: '',
    searchString: ''
}

const productSlice = createSlice ( {
    name: "productSlice",
    initialState,
    reducers: {
        deleteSorted: ( state ) => {
            state.sortedProducts.length = 0
        },
        changeSortString: ( state, action ) => {
            state.searchString = action.payload
        }
    },
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
            const product = state.products.find ( product => product._id == action.payload._id )
            // @ts-ignore
            const productId = state.products.indexOf ( product )
            state.products[productId] = action.payload
        },
        [addComment.fulfilled.type]: ( state, action: PayloadAction<IProduct> ) => {
            const product = state.products.findIndex ( product => product._id == action.payload._id )
            // @ts-ignore
            state.products[product].comments.push ( action.payload.comments[action.payload.comments.length - 1] )
        },
        [deleteComment.fulfilled.type]: ( state, action: PayloadAction<IProduct> ) => {
            const product = state.products.findIndex ( product => product._id == action.payload._id )
            state.products[product].comments = action.payload.comments
        },
        [getByCategory.fulfilled.type]: ( state, action: PayloadAction<IProduct[]> ) => {
            state.sortedProducts = action.payload
        },
    }
} )
export const {deleteSorted, changeSortString} = productSlice.actions
export default productSlice.reducer