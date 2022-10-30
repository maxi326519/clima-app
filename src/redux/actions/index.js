export const GET_CITY =  'GET_CITY';
export const ADD_CITY =  'ADD_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';
export const GET_LOCATION = 'GET_LOCATION';

let apiKey = '4ae2636d8dfbdc3044bede63951a019b';
let token = 'b7d92a461335b6';

export function getCity(city){
    return dispatch => {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(r => r.json())
            .then( data => {
                dispatch({
                    type: GET_CITY,
                    payload: data
                });
            });
    }
}

export function addCity(city){
    return {
        type: ADD_CITY,
        payload: city
    }
}

export function removeCity(id){
    return {
        type: REMOVE_CITY,
        payload: id
    }
}

export function getLocation(){
    return dispatch => {
        return fetch(`https://ipinfo.io/186.22.16.148?token=${token}`)
            .then( res => res.json() )
            .then( data => {
                dispatch({
                    type: GET_LOCATION,
                    payload: data
                });
            });
    }
}