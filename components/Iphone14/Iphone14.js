/* eslint-disable @next/next/no-img-element */
import React from 'react';
import CTAButtons from '../UI/CTAButton/CTAButtons';

export default function Iphone14() {
  return (
    <section className='iphone-14'>
      <div className='iphone-14__header'>
        <h2 className='iphone-14__title'>iPhone 14</h2>
        <h4 className='iphone-14__subtitle'>Big and bigger.</h4>
        <p className='iphone-14__desc'>
          iPhone&nbsp;14&nbsp;Plus available starting 10.7
        </p>
        <CTAButtons />
      </div>
      <img
        src='https://www.apple.com/v/home/ar/images/heroes/iphone-14/hero_iphone14_preorder__c4g2wjzuugqe_medium.jpg'
        alt=''
        className='iphone14__image'
      />
    </section>
  );
}
