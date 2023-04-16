import {createSlice} from "@reduxjs/toolkit";

export const selectedServicesSlice = createSlice({
    name: 'selectedServices',
    initialState:{
        selectedServices: []
    },
    reducers:{
        setSelectedServices: (state, action) => {
            state.selectedServices = [...state.selectedServices, action.payload]
        }
    }
})

export const {setSelectedServices} = selectedServicesSlice.actions
export default selectedServicesSlice.reducer