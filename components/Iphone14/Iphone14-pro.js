/* eslint-disable @next/next/no-img-element */
import React from 'react';
import CTAButtons from '../UI/CTAButton/CTAButtons';

export default function Iphone14() {
  return (
    <section className='iphone14-pro'>
      <div className='iphone14-pro__container'>
        <div className='iphone14-pro__header'>
          <h2 className='iphone14-pro__title'>iPhone 14 Pro</h2>
          <p className='iphone14-pro__subtitle'>Pro. Beyond.</p>
          <CTAButtons />
        </div>
        <img
          src='https://www.apple.com/v/home/ar/images/heroes/iphone-14-pro/hero_iphone14pro__e5xbgo5ffhg2_mediumtall.jpg'
          alt=''
          className='iphone14-pro__image'
        />
      </div>
    </section>
  );
}
