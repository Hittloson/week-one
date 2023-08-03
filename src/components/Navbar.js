import React from 'react'
import { Link } from 'react-router-dom';
import headerStyle from './headerStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 




function Navbar() {
  return (
    <>
    <div className='navBar'>
      <h2>PerFume</h2>
      <div className='navLinks'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      
      <div className='navIcons'>
      <FontAwesomeIcon icon={faSearch} />
      <FontAwesomeIcon icon={faCartShopping} />
        <button className='login'>Login</button>
        
      </div>
      
      
    </div>
    </>
  )
}

export default Navbar;