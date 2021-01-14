import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards2() {
  return (
    <div className='cards'>
      <h2>Popular Topics</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              text='..........'
            />
            <CardItem
              text='.......' 
            />
            <CardItem
              text='......'
            />
          </ul>
        </div>
      </div>
      <h3>Recomanded for you</h3>
    </div>
  );
}

export default Cards2;
