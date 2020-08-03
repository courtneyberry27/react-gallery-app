import React from 'react';
import { NavLink } from 'react-router-dom';

//NAV BUTTONS AT TOP FUNCTIONALITY
const Nav = () => {
  return (
    <nav className="main-nav">
    <ul>
      <li><NavLink to='/flowers'>Flowers</NavLink></li>
      <li><NavLink to='/waterfalls'>Waterfalls</NavLink></li>
      <li><NavLink to='/sea'>Sea</NavLink></li>
    </ul>
  </nav>
     );
 } 


export default Nav;