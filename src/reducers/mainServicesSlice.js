import {createSlice} from "@reduxjs/toolkit";

export const mainServicesSlice = createSlice({
    name: 'services',
    initialState: {
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
        totalPrice: 0,
        selectedServices: []
    },
    reducers: {
        setSelectedYear: (state, action) => {
            state.selectedYear = action.payload
        },
        setSelectedServices: (state, action) => {
            state.selectedServices = [...state.selectedServices, action.payload]
        },
        countSelectedServices: (state, action) => {
            state.data[`year-${state.selectedYear}`].map((service, index) => {
                state.selectedServices.forEach(selectedService => {
                    if (selectedService.toLowerCase() === 'internet') {
                        state.totalPrice += service.internet
                    } else if (selectedService.toLowerCase() === 'tv') {
                        state.totalPrice += service.tv
                    } else if (selectedService.toLowerCase().includes('phone')) {
                        state.totalPrice += service.phoneSubscription
                    } else if (selectedService.toLowerCase().includes('decoder')) {
                        state.totalPrice += service.decoder
                    } else if (selectedService.toLowerCase().includes('+ tv')) {
                        state.totalPrice += service.internetAndTv
                    } else if (selectedService.toLowerCase().includes('+ phone')) {
                        state.totalPrice += service.internetAndPhoneSubscription
                    }
                })
            })
        },
        setNewYear: (state, action) => {
            state.data = {
                ...state.data,
                [`year-${action.payload}`]: [{}]
            };
        },
        setNewService: (state, action) => {
            console.log(action.payload)
        }
    }
})

export const {setSelectedYear, setSelectedServices, countSelectedServices, setNewYear, setNewService} = mainServicesSlice.actions
export default mainServicesSlice.reducer