import React from 'react';

//IF NO RESULTS CAN BE FOUND FOR A SEARCH VALUE
const NotFound = props => (
  <li className='not-found'>
    <h1>No results found</h1>
    <h3>That search did not return any results, please try again.</h3>
  </li>
);

export default NotFound;