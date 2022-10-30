import { GET_CITY, ADD_CITY, REMOVE_CITY, GET_LOCATION } from '../actions';

const initialState = {
    cities: [{
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
      }],
    city: {},
    location: {}
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_CITY:
            return{
                ...state,
                city: action.payload
            }

        case ADD_CITY:
            return{
                ...state,
                cities: [ ...state.cities, action.payload ]
            }

        case REMOVE_CITY:
            return {
                ...state,
                cities: state.cities.filter(c => c.id !== action.payload)
            }

        case GET_LOCATION:
            return{
                ...state,
                location: action.payload
            }
        
        default:
            return { ...state }
    }
}