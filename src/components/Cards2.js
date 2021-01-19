import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItem1 from './CardItem1';
import CardItem3 from './CardItem3';

function Cards2() {
  return (
    <div className='cards'>
      <h2 className='pop'>Popular Topics</h2>
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
      <h3 className='Rec'>Recomanded for you</h3><br></br><br></br>
      <div className='cards__container'>
          <ul className='cards__items'>
            <CardItem1
              text='...............'
            />
            <CardItem1
              text='...............'
            />
             <CardItem1
              text='................'
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

export default Cards2;
