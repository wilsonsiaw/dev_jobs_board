import React from 'react';
import './Button.css';


const Button = ({ value }) => {
  return (
    <div className='container'>
      <button type='submit' className='btn'>{value}</button>
    </div>
  )
}

export default Button
