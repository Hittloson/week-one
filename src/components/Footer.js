import React from 'react'

function footer() {
  return (
    <>
      <div className='footer-container'>
        <div className='footer-content'>
          <h2>Quick Links</h2>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Categories</a></li>
            <li><a href='#'>Cart</a></li>
            <li><a href='#'>About Us</a></li>
          </ul>
        </div>
        <div className='footer-content'>
          <h2>Help</h2>
          <ul>
            <li><a href='#'>Payment</a></li>
            <li><a href='#'>Help/FAQ</a></li>
            <li><a href='#'>Terms of Use</a></li>
            <li><a href='#'>Privacy</a></li>
          </ul>
        </div>
        <div className='footer-content'>
          <h2>Download App</h2>
          <ul>
            <li><a href='#'>Google play</a></li>
            <li><a href='#'>App store</a></li>
            
          </ul>
        </div>
        <div className='footer-content'>
          <h2>Account</h2>
          <ul>
            <li><a href='#'>Create account</a></li>
            <li><a href='#'>Login</a></li>
            
          </ul>
        </div>
      </div>
      <div className='copy-right'>
        <hr/>
        <p>All Copyright Are Preserved By Master Hittloson</p>
      </div>
    </>
  )
}

export default footer