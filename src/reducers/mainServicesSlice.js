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
                    'internetAndTv': {'price': 79, 'content': 'Free 4K decoder', 'disabled': false},
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
        selectedYear: '2023',
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
            let count = 0;
            state.selectedServices.map(service => {
                count += service.price;
            })
            state.totalPrice = count
        },
        setNewYear: (state, action) => {
            state.data = {
                ...state.data,
                [`year-${action.payload}`]: {"services": [{}]}
            };
        },
        setNewService: (state, action) => {
            const service = action.payload.service
                .split(' ')
                .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
                .join('');
            const year = `year-${action.payload.year}`;
            const price = action.payload.price;
            const benefit = action.payload.benefit;

            const newService = {};
            newService[service] = {price: price, disabled: false, benefit: benefit};

            state.data[year].services.push(newService);
            console.log(JSON.stringify(state.data[year]))
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
        },
        removeFromBasket: (state, action) => {
            state.selectedServices.splice(action.payload, 1)
        }
    }
})

export const {
    setSelectedYear,
    setSelectedServices,
    countSelectedServices,
    setNewYear,
    setNewService,
    deleteYear, deleteService, disableYear, disableService,
    removeFromBasket
} = mainServicesSlice.actions
export default mainServicesSlice.reducer