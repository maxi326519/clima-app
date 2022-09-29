import React, { useState } from 'react';
import './styles/SearchBar.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState("");

  return (
    <div className='container'>
      <input
        className='input-city'
        placeholder='City...'
        type='text'
        onChange={e => setCity(e.target.value)}
      />
      <button className='search' onClick={()=>{onSearch(city)}}>Search</button>
    </div>
  )
};