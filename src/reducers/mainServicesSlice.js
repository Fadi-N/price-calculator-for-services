import {createSlice} from "@reduxjs/toolkit";

export const mainServicesSlice = createSlice({
    name: 'services',
    initialState:{
        data: {
            'year-2023': [{
                'internet': 39,
                'tv': 49,
                'phoneSubscription': 29,
                'decoder': 29,
                'internetAndTv': 79,
                'internetAndPhoneSubscription': 64
            }],
            'year-2024': [{
                'internet': 49,
                'tv': 49,
                'phoneSubscription': 29,
                'decoder': 29,
                'internetAndTv': 89,
                'internetAndPhoneSubscription': 64
            }],
            'year-2025': [{
                'internet': 59,
                'tv': 59,
                'phoneSubscription': 29,
                'decoder': 29,
                'internetAndTv': 99,
                'internetAndPhoneSubscription': 64
            }]
        },
        selectedYear: 2023,
    },
    reducers:{
        setSelectedYear: (state, action) =>{
            state.selectedYear = action.payload
        }
    }
})

export const {setSelectedYear} = mainServicesSlice.actions
export default mainServicesSlice.reducer