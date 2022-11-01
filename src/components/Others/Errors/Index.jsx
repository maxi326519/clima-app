import { useEffect, useState } from 'react';
import './ErrorAlert.scss'

export default function ErrorAlert({ darkMode, error }){

    const [state, setState] = useState({ display: 'none' });
    const [animation, setAnimation] = useState('to-up')

    function handleActive(){
        setAnimation('hidden');
        setTimeout(()=>{
            setState({ display: 'none' });
        },200);
    }

    useEffect(()=>{
        if(error.hasOwnProperty('cod')){
            setAnimation('to-up');
            setState({ display: 'flex' });
        }else{
            handleActive();
        }
    }, [error]);

    return (
        <div className={`alert alert${darkMode.class}`} style={ state }>
            <div className={`alert__error ${animation}`}>
                <span><b>Error: { error.cod }</b></span>
                <span>{ error.message }</span>
                <button className='btn' onClick={handleActive}>Acept</button>
            </div>
        </div>
    )
}