import Image from 'next/image';
import React, { useState } from 'react';
import { SliderItems } from './SliderItems';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
      <h1 className='text-6xl font-bold text-center p-8'>Look Around</h1>
      <div className= 'relative flex justify-center p-4 '>
      

      {SliderItems.map((slide, index) => {
        return (
          <div style={{display:'flex', }}
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-1000'
                : 'opacity-0'
            }
          >
        
          <div className='w-1/2  justify-center items-center'>
          <FaArrowCircleLeft
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px] text-white/60 cursor-pointer select-none '
                size={50}
              />
              {index === current && (
                <div className='flex-col mt-20'>
                  <h1 className='text-bold text-center text-2xl'>{slide.name}</h1>
                  <h2 className=' text-lg text-center mr-2'>{slide.description}</h2>
                </div>
                
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2] '
                size={50}
              />
          </div>
          <div className='w-1/2'>
              <FaArrowCircleLeft
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px] text-black/70 cursor-pointer select-none z-[2] '
                size={50}
              />
              {index === current && (
                <img
                  src={slide.image}
                  alt='/'
                  width='1440'
                  height='600'
                  objectFit='cover'
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={50}
              />
          </div>
          </div>
             
            
        );
    })}
    </div>
    </div>
  );
};

export default Slider;