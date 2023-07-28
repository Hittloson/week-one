import React from 'react';
import ContentStyle from './ContentStyle.css';



function content() {
  return (
    <main className='main-content'>
      <div className='content'>
        <div className='content-text'>
          <h3>Text</h3>
        </div>
        <div className='content-img'>
          <img src='image/img-1.jpg'/>
        </div>
      </div>
    </main>
  )
}

export default content