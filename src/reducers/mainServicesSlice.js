import {createSlice} from "@reduxjs/toolkit";

export const mainServicesSlice = createSlice({
    name: 'services',
    initialState: {
        data: {
            'year-2023': {
                "disabled": false,
                "services": [{
                    'internet': {'price': 39, 'disabled': false},
                    'tv': {'price': 49, 'disabled': false},
                    'phoneSubscription': {'price': 29, 'disabled': false},
                    'decoder': {'price': 29, 'disabled': false},
                    'internetAndTv': {'price': 79, 'disabled': false},
                    'internetAndPhoneSubscription': {'price': 64, 'disabled': false},
                }],
            },
            'year-2024': {
                "disabled": false,
                "services": [{
                    'internet': {'price': 49, 'disabled': false},
                    'tv': {'price': 49, 'disabled': false},
                    'phoneSubscription': {'price': 29, 'disabled': false},
                    'decoder': {'price': 29, 'disabled': false},
                    'internetAndTv': {'price': 89, 'disabled': false},
                    'internetAndPhoneSubscription': {'price': 64, 'disabled': false},
                }],
            },
            'year-2025': {
                "disabled": false,
                "services": [{
                    'internet': {'price': 59, 'disabled': false},
                    'tv': {'price': 59, 'disabled': false},
                    'phoneSubscription': {'price': 29, 'disabled': false},
                    'decoder': {'price': 29, 'disabled': false},
                    'internetAndTv': {'price': 99, 'disabled': false},
                    'internetAndPhoneSubscription': {'price': 64, 'disabled': false},
                }],
            }
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
            console.log(state.selectedServices)
        },
        countSelectedServices: (state, action) => {
            state.data[`year-${state.selectedYear}`].services.map((service, index) => {
                state.selectedServices.forEach(selectedService => {

                    if (selectedService.toLowerCase() === 'internet') {
                        state.totalPrice += service.internet.price
                    } else if (selectedService.toLowerCase() === 'tv') {
                        state.totalPrice += service.tv.price
                    } else if (selectedService.toLowerCase().includes('phone')) {
                        state.totalPrice += service.phoneSubscription.price
                    } else if (selectedService.toLowerCase().includes('decoder')) {
                        state.totalPrice += service.decoder.price
                    } else if (selectedService.toLowerCase().includes('+ tv')) {
                        state.totalPrice += service.internetAndTv.price
                    } else if (selectedService.toLowerCase().includes('+ phone')) {
                        state.totalPrice += service.internetAndPhoneSubscription.price
                    }
                })
            })
        },
        setNewYear: (state, action) => {
            state.data = {
                ...state.data,
                [`year-${action.payload}`]: {"services": [{}]}
            };
        },
        setNewService: (state, action) => {
            console.log(action.payload)
        },
        deleteYear: (state, action) => {
            delete state.data[action.payload]
        },
        deleteService: (state, action) => {
            const service = action.payload.key
            delete state.data[action.payload.year].services[0][service]
        },
        disableYear: (state, action) => {
            state.data[action.payload.year].disabled = !action.payload.status;
        },
        disableService: (state, action) => {
            const service = action.payload.key
            state.data[action.payload.year].services[0][service].disabled = !action.payload.status
        }
    }
})

export const {
    setSelectedYear,
    setSelectedServices,
    countSelectedServices,
    setNewYear,
    setNewService,
    deleteYear, deleteService, disableYear, disableService
} = mainServicesSlice.actions
export default mainServicesSlice.reducer