import React, { useState } from "react";
import "./SearchBar.scss";

import search from "../../assets/svg/search.svg";

export default function SearchBar({ darkMode, getCity }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    getCity(city);
  }

  return (
    <form
      className={`search-bar search-bar${darkMode.class} to-left`}
      onSubmit={handleSubmit}
    >
      <img className="icon" src={search} alt="" />
      <div className="emergente">
        <input
          type="text"
          placeholder="City..."
          onChange={(e) => setCity(e.target.value)}
        />
        <button className={ `sear-bar__btn btn btn${ darkMode.class }` } type="submit">
          Search
        </button>
      </div>
    </form>
  );
}
