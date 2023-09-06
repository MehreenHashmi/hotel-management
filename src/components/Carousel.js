import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import carousel from '../assets/carousel.jpg';
import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';
import carousel4 from '../assets/carousel4.jpg';
import './style.css';

export default function Carousel() {
  return (
    <div className='container'>
    <MDBCarousel showControls fade>
      <MDBCarouselItem
        className='w-100 d-block carouselstyle'
        itemId={1}
        src={carousel}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block carouselstyle'
        itemId={2}
        src={carousel1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block carouselstyle'
        itemId={3}
        src={carousel2}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block carouselstyle'
        itemId={4}
        src={carousel3}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block carouselstyle'
        itemId={5}
        src={carousel4}
        alt='...'
      />
    </MDBCarousel>
    </div>
  );
}