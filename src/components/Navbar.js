import React from 'react'
import headerStyle from './headerStyle.css'


function Navbar() {
  return (
    <>
    <div className='navBar'>
      <h2><span>Per</span>Fume</h2>
      <ul>
        <li>Home</li>
        <li>Categories</li>
        <li>About</li>
      </ul>

      <i class="fa fa-search" aria-hidden="true"></i>
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      
    </div>
    </>
  )
}

export default Navbar;