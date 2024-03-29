import React, { useState } from 'react';
import './slide.css';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  setInterval(nextSlide, 3000);

  return (
    <section className='slider'>
      {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div className='sliderdiv'>
                <h2 className='coursetitle'>{slide.title}</h2>
                <img src={slide.image} alt={slide.alt} className='image' />
                <p className='coursecontent'>{slide.content}</p>
              </div>
              
            )}

          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
