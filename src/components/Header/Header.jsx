import React from 'react';
import './Header.css';
import menu from '../../assets/logos/burger.svg';

const Header = ( { heading }) => {
  return (
    <div className='header'>
        <h1 className='heading'>{heading}</h1>
        <div className='header-image'>
            <img src={menu} alt="burger menu icon"/>
        </div>
    </div>
  )
}

export default Header
