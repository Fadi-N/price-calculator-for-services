import {createSlice} from "@reduxjs/toolkit";

export const mainServicesSlice = createSlice({
    name: 'services',
    initialState:{
        data: {
            'year-2023': [{
                'internet': 39,
                'tv': 49,
                'phone-subscription': 29,
                '4k-decoder': 29,
                'internet-tv': 79,
                'internet-phone-subscription': 64
            }],
            'year-2024': [{
                'internet': 49,
                'tv': 49,
                'phone-subscription': 29,
                '4k-decoder': 29,
                'internet-tv': 89,
                'internet-phone-subscription': 64
            }],
            'year-2025': [{
                'internet': 59,
                'tv': 59,
                'phone-subscription': 29,
                '4k-decoder': 29,
                'internet-tv': 99,
                'internet-phone-subscription': 64
            }]
        }
    },
    reducers:{

    }
})

export const {} = mainServicesSlice.actions
export default mainServicesSlice.reducer