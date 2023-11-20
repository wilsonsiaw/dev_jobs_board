import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Card from '../Card/Card';

function App() {
  return (
    <div className='body'>
      <Header 
      heading='devjobs'
      />
      <Card />
      <Button 
      value='Load More'
      />
    </div>
  )
}

export default App
