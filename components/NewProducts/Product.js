/* eslint-disable @next/next/no-img-element */
import React from 'react';
import CTAButtons from '../UI/CTAButton/CTAButton-sm';

export default function Product({ img }) {
  return (
    <div className='product'>
      <div className='product__header'>
        <img src={img} alt='' className='product__title' />
        <p className='product__subtitle'>A great deal to love.</p>
        <CTAButtons />
      </div>
      <img
        src={
          'https://www.apple.com/v/home/ar/images/promos/apple-watch-se/promo_apple_watch_se__f9702l6odgi2_medium.jpg'
        }
        alt=''
        className='product__image'
      />
    </div>
  );
}
