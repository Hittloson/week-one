import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import headerStyle from './headerStyle.css'


function Header() {
  return (
    <div className='header'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Header;