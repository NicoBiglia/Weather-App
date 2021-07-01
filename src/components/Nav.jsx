import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Weather App by Nico Biglia</a>
    <SearchBar onSearch= {onSearch}/>
  </div>
</nav>
    {/* <img src={Logo} alt="Image not found"/> */}
    </div>
  )
};

export default Nav;
