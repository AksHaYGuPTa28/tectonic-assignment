import React from 'react';
import Slider from '../../molecules/slider/slider';
import './sliderContainer.css';
import Button from '../../atoms/Button/Button';
import { LuShoppingCart } from 'react-icons/lu';
import SmallContainer from '../../atoms/Container/smallContainer';

const SliderContainer = ({ slidersData }) => {
  return (
    <div className="slider-container">
      {slidersData.map(sliderData => (
        <div key={sliderData.id} className="slider-wrapper">
          <Slider slides={sliderData.slides} />
          <div className='shop'>
          <Button variant="block">
            <LuShoppingCart />
            Shop
          </Button>
          {sliderData.thumbnails && (
            <SmallContainer thumbnails={sliderData.thumbnails} />
          )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderContainer;
