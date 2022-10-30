import { GET_CITY, REMOVE_CITY, GET_LOCATION } from '../actions';

const initialState = {
    cities: {
        error: {},
        data: [{
            min: 32,
            max: 35,
            img: "03n",
            id: 2172797,
            wind: 3.6,
            temp: 300.15,
            name: "Bueno Aires",
            weather: "Clouds",
            clouds: 40,
            latitud: -16.92,
            longitud: 145.77
          }] 
    },
    location: {
        error: {},
        data: {}
    }
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_CITY:
            if(action.payload.cod === 200){
                return{
                    ...state,
                    cities: {
                        error: {},
                        data: [ ...state.cities.data, action.payload ]
                    }
                }
            }else{
                return{
                    ...state,
                    cities: {
                        ...state.cities,
                        error: action.payload
                    }
                }
            }

        case REMOVE_CITY:
            return {
                ...state,
                cities: {
                    error: {},
                    cities: state.cities.filter(c => c.id !== action.payload)
                }
            }

        case GET_LOCATION:
            if(action.payload.hasOwnProperty('status')){
                return {
                    ...state,
                    location: {
                        ...state.location,
                        error: action.payload
                    }
                }
            }else{
                return{
                    ...state,
                    location: {
                        ...state.location,
                        data: action.payload
                    }
                }
            }
        
        default:
            return { ...state }
    }
}