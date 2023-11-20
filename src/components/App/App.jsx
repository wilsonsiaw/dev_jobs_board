import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Button from '../Button/Button';

function App() {
  return (
    <div>
      <Header 
      heading='devjobs'
      />
      <Button 
      value='Load More'
      />
    </div>
  )
}

export default App
