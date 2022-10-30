import { GET_CITY, REMOVE_CITY, GET_LOCATION } from '../actions';
import dataTest from '../weather.json'

const initialState = {
    cities: {
        error: {},
        data: [ dataTest ] 
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
                    data: state.cities.data.filter(c => c.id !== action.payload)
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