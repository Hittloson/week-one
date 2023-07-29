import React from 'react';
import ContentStyle from './ContentStyle.css';



function content() {
  return (
    <main className='main-content'>
      <div className='content'>
        <div className='content-text'>
          <h3><span>Welcome</span> to our store</h3>
          <p>Our website is your perfect destination to find the 
          perfect fragrance that reflect your personality and 
          enhances your elegance you can choose the scent 
          that aligns with your lifestyle</p>
        </div>
        <div className='content-img'>
          <img src='image/img5.jpg'/>
        </div>
      </div>
      <div className='content'>
        
        <div className='content-img'>
          <img src='image/header-bg4.jpg'/>
        </div>
        <div className='content-text'>
          <h3><span>Best</span> product</h3>
          <p>Our products are distinguished by their high 
          quality and the unique longervity of their scents.
          You will find a collection of captivating 
          orriental fragrances, floral scents,
          woody perfumes, and much more</p>
        </div>
      </div>
      <div className='content'>
        <div className='content-text'>
          <h3><span>Your</span> journey</h3>
          <p>Get ready to experience an exceptional shopping 
          journey. We are excitedto meet your needs and assist
          you in discovering the scent of your dreams. We
          are here to help you find the perfeect fragrance.</p>
        </div>
        <div className='content-img'>
          <img src='image/img-group2.jpg'/>
        </div>
      </div>

      
      <div className='our-store'>
      <h3>Our Store</h3>
        <div className='store-content'>
        <div className='store-img'>
        <img src='image/img-group2.jpg'/>
      </div>
      <div className='content-text'>
        <h3><span>Your</span> journey</h3>
        <p>Get ready to experience an exceptional shopping 
        journey. We are excitedto meet your needs and assist
        you in discovering the scent of your dreams. We
        are here to help you find the perfeect fragrance.</p>
      </div>
      <div className='store-img'>
        <img src='image/img-group2.jpg'/>
      </div>
        </div>
      </div>
    </main>
  )
}

export default content