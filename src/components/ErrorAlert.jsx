import { useEffect, useState } from 'react';
import './styles/ErrorAlert.scss'

export default function ErrorAlert({ darkMode, error }){

    const [state, setState] = useState({ display: 'none' });

    function handleActive(){
        setState({ display: 'none' });
    }

    useEffect(()=>{
        if(error.hasOwnProperty('cod')){
            setState({ display: 'flex' });
        }
    }, [error]);

    return (
        <div className={`alert alert${darkMode.class}`} style={ state }>
            <div className='alert__error'>
                <span><b>Error: { error.cod }</b></span>
                <span>{ error.message }</span>
                <button onClick={handleActive}>Acept</button>
            </div>
        </div>
    )
}