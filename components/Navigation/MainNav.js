/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Menu from './Menu';

export default function MainNav() {
  return (
    <header className='main-nav main-nav--backdrop'>
      <div className='main-nav__container'>
        <img src='/log.svg' alt='' className='main-nav__logo' />
        <Menu />
      </div>
    </header>
  );
}
