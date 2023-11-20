import React from 'react';


const Button = ({ value }) => {
  return (
    <div className='btn'>
      <button type='submit'>{value}</button>
    </div>
  )
}

export default Button
