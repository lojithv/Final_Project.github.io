import React from 'react';
import { Link } from 'react-router-dom';

function CardItem2(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <div className='cards__item__info'>
            <h3 className='cards__item__text'>{props.text}</h3>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem2;
