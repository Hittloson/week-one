import React, { useState } from 'react';
import AboutStyle from './AboutStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';

function About() {
  const [visibleTestimonials, setVisibleTestimonials] = useState(2);

  const showNextTestimonials = () => {
    setVisibleTestimonials(prevVisible => prevVisible + 2);
  };

  const showPreviousTestimonials = () => {
    setVisibleTestimonials(prevVisible => prevVisible - 2);
  };

  // Define the array of testimonials
const testimonials = [
  {
    name: 'Mark Wood',
    job: 'Web Developer',
    description:
      'This has always been one of my fave scent, since University days. It has provided me several other scents like, Drakkar, Cool Water and Hot Water by Davidoff, and Benetton for 5 years now!',
    image: 'image/human1.jpeg',
  },
  {
    name: 'M Crook',
    job: 'UI/UX Designer',
    description:
      'This has always been one of my fave scent, since University days. It has provided me several other scents like, Drakkar, Cool Water and Hot Water by Davidoff, and Benetton for 5 years now!',
    image: 'image/human4.jpg',
  },
  {
    name: 'Dan Wood',
    job: 'Web Developer',
    description:
      'This has always been one of my fave scent, since University days. It has provided me several other scents like, Drakkar, Cool Water and Hot Water by Davidoff, and Benetton for 5 years now!',
    image: 'image/human2.jpeg',
  },
  {
    name: 'M.L Mila',
    job: 'UI/UX Designer',
    description:
      'This has always been one of my fave scent, since University days. It has provided me several other scents like, Drakkar, Cool Water and Hot Water by Davidoff, and Benetton for 5 years now!',
    image: 'image/human5.jpg',
  },
  {
    name: 'Mark W',
    job: 'Web Developer',
    description:
      'This has always been one of my fave scent, since University days. It has provided me several other scents like, Drakkar, Cool Water and Hot Water by Davidoff, and Benetton for 5 years now!',
    image: 'image/human3.jpg',
  },
  {
    name: 'Sheella K',
    job: 'UI/UX Designer',
    description:
      'This has always been one of my fave scent, since University days. It has provided me several other scents like, Drakkar, Cool Water and Hot Water by Davidoff, and Benetton for 5 years now!',
    image: 'image/human6.jpg',
  },
  
];

  return (
    <div className='About-us'>
      <div className='about-us-header'>
        <h2>
          What our loving users are <br />
          saying <span>about us</span>
        </h2>

        <div className='scrol-btn'>
          <button onClick={showPreviousTestimonials}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button onClick={showNextTestimonials}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>

      <div className='testimony'>
        {testimonials.slice(0, visibleTestimonials).map((testimonial, index) => (
          <div className='testimony-details' key={index}>
            <div className='image-names-job'>
              <div className='testimonial-image'>
                <img src={testimonial.image} alt={`User ${index + 1}`} />
              </div>
              <div className='name-job'>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.job}</p>
              </div>
            </div>
            <div className='description'>
              <p>
                <center>{testimonial.description}</center>
              </p>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;





