import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItem1 from './CardItem1';

function Cards1() {
  return (
    <div className='cards'>
      <h2>Popular Topics</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-13.jpg'
              text='Policies'
              path='/Policies'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Sellers Hub'
              path='/SellerHub' 
            />
            <CardItem
              src='images/img-12.jpg'
              text='Withdrawals'
              path='/Withdrawals'
            />
          </ul>
        </div>
      </div>
      <h3>Recomanded for you</h3>
      <div className='cards__container'>
          <ul className='cards__items'>
            <CardItem1
              text='Seller FAQs'
            />
            <CardItem1
              text='Account and profile settings'
            />
             <CardItem1
              text='How to Start Selling'
            />
        </ul>
        </div>
    </div>
  );
}

export default Cards1;
