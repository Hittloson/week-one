import React from 'react'
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
          <u><li><a href='#'>Home</a></li></u>
          <u><li><a href='#'>Categories</a></li></u>
          <u><li><a href='#'>About</a></li></u>
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