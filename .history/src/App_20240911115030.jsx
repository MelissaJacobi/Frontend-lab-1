import React from 'react';
import './index.css';
import Accordion from './Components/Accordion';

function App() {
  return (
    <div className="app">
      <h1>Coldplay Discography</h1>
      <div className='content'>
        <img className="accordion" src="/public/Coldplay-All-Members.jpg" alt="coldplay members"></img>
        <Accordion />
      </div>
    </div>
  );
}

export default App;

