import {combineReducers, configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import configSlice from "./slices/configSlice";
import adminSlice from "./slices/adminSlice";

const rootReducer = combineReducers({
    configSlice,
    adminSlice
})
export const store = configureStore ( {
    reducer: rootReducer,
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware ( {
        serializableCheck: false
    } ).concat ( logger )
} )

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch