/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function NavItem() {
  return (
    <ul className='menu'>
      <li className='menu__item'>Store</li>
      <li className='menu__item'>Mac</li>
      <li className='menu__item'>iPad</li>
      <li className='menu__item'>iPhone</li>
      <li className='menu__item'>Watch</li>
      <li className='menu__item'>AirPods</li>
      <li className='menu__item'>TV & Home</li>
      <li className='menu__item'>Only on Apple</li>
      <li className='menu__item'>Accessories</li>
      <li className='menu__item'>Support</li>
      <li className='menu__item'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-4 h-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </li>
      <li className='menu__item'>
        <img src='/shop.svg' alt='' className='menu__image' />
      </li>
    </ul>
  );
}
