import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItem1 from './CardItem1';
import CardItem3 from './CardItem3';

function Cards1() {
  return (
    <div className='cards'>
      <h2 className='pop'>Popular Topics</h2>
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
      <h3 className='Rec'>Recomanded for you</h3><br></br><br></br>
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
        <div className='cards__container1'>
            <h2 className='contactus'>Didn't find an answer to your question?</h2><br></br>
            <ul className='cards__items1'>
            <CardItem3 
              src='images/img-15.jpg'
              text='Contact Us'
            />
          </ul>
          </div>
    </div>
  );
}

export default Cards1;
