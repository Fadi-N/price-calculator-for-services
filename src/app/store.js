import {configureStore} from '@reduxjs/toolkit'
//import selectedServicesSlice from "../reducers/selectedServicesSlice";
import mainServicesSlice from "../reducers/mainServicesSlice";
export default configureStore({
    reducer:{
        //selectedServices: selectedServicesSlice,
        services: mainServicesSlice
    }
})