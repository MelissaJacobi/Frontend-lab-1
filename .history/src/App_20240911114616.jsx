import React from 'react';
import './index.css';
import Accordion from './Components/Accordion';

function App() {
  return (
    <div className="App">
      <h1>Coldplay Discography</h1>
      <img src="./assets/Coldplay-All-Members.jpg" alt="coldplay members"></img>
      <Accordion />
    </div>
  );
}

export default App;

