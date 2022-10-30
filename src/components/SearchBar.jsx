import React, { useState } from 'react';
import './styles/SearchBar.scss'

export default function SearchBar({ darkMode, getCity }) {

  const [city, setCity] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    getCity(city);
  }
  
  return (
    <form className={`search-bar search-bar${ darkMode.class }`} onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='City...'
        onChange={e => setCity(e.target.value)}
      />
      <button className='sear-bar__btn' type='submit'>Search</button>
    </form>
  )
};