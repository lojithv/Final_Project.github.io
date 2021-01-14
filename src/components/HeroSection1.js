import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection1() {
  return (
    <div className='hero-container'>
      <h1>Help & Surpport</h1>
      <p>Seller</p>
      <p></p>
      <section className='hero'>
          <div className='input-areas'>
          <form>
            <input
              className='herosection-input'
              name='question'
              type='question'
              placeholder='I have a quetion about...'
            />
            <Button buttonStyle='btn--outline'>Get Help</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default HeroSection1;
