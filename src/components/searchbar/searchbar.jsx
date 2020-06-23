import React from 'react';
import './searchbar.css';

export const SearchBar = ({placeholder, handleChange}) =>(
    <div>
        <input className="searchbar" 
        type="search" placeholder={placeholder} 
        onChange={handleChange}/>
    </div>
);