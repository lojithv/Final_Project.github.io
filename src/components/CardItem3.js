import React from 'react';
import { Link } from 'react-router-dom';

function CardItem3(props) {
  return (
    <>
      <li className='cards__item1'>
        <Link className='cards__item__link1' to={props.path}>
          <div className='cards__item__info1'>
            <h3 className='cards__item__text1'>{props.text}</h3>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem3;
