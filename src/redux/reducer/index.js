import { GET_CITY, REMOVE_CITY, GET_LOCATION } from '../actions';
import dataTest from '../weather.json'
import locationTest from '../location.json'
import TEST from '../test.json'

console.log(TEST);

const initialState = {
    cities: {
        error: {},
        data: TEST.isActive ? dataTest.filter(data => data.nro < 10) : []
    },
    location: {
        error: {},
        data: TEST.isActive ? locationTest : {}
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