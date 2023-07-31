import React from 'react'
import AboutStyle from './AboutStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


function About() {
  return (
    <div className='About-us'>
      <div className='about-us-header'>
        <h2>What our loving users are <br/>
        saying <span>about us</span></h2>

        <div className='scrol-btn'>
          <button><FontAwesomeIcon icon={faAngleLeft} /></button>
          <button><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
      
      </div>
      <div className='testimony'>
        <div >
          <div >picture, name and profession</div>
          <div >testimony and rating</div>
        </div>
        <div >
          <div >picture, name and profession</div>
          <div >testimony and rating</div>
        </div>
      </div>
    </div>
  )
}

export default About;