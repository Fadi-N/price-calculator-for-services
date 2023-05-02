import {configureStore} from '@reduxjs/toolkit'
//import selectedServicesSlice from "../reducers/selectedServicesSlice";
import mainServicesSlice from "../reducers/mainServicesSlice";
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist";
import {combineReducers} from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    services: mainServicesSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)
export default configureStore({
    reducer: persistedReducer
        //selectedServices: selectedServicesSlice,
        //services: mainServicesSlice

})