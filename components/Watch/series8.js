/* eslint-disable @next/next/no-img-element */
import React from 'react';
import CTAButtons from '../UI/CTAButton/CTAButtons';

export default function Series8() {
  return (
    <section className='series-8'>
      <div className='series-8__header'>
        <img
          src='https://www.apple.com/v/home/ar/images/logos/apple-watch-series-8/hero_logo_apple_watch_series_8__ezarmmoobhg2_largetall.png'
          alt=''
          className='series-8__title'
        />
        <p className='series-8__subtitle'>A healthy leap ahead.</p>
        <CTAButtons />
      </div>
      <img
        src='https://www.apple.com/v/home/ar/images/heroes/apple-watch-series-8/hero_apple_watch_series_8__bjc1ok5mkjua_mediumtall.jpg'
        alt=''
        className='series-8__image'
      />
    </section>
  );
}
