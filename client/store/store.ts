import {combineReducers, configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import configSlice from "./slices/configSlice";
import adminSlice from "./slices/adminSlice";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
const rootReducer = combineReducers ( {
    configSlice,
    adminSlice
} )
const persistConfig = {
    key: "root",
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore ( {
    reducer: persistedReducer,
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware ( {
        serializableCheck: false
    } ).concat ( logger )
} )

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch