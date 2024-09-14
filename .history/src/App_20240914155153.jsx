import React from 'react';
import './index.css';
import Accordion from './Components/Accordion';

function App() {
  return (
    <div className="app">
      <h1>Coldplay Discography</h1>
      <div className='content'>
        <img className="band-img" src="/public/Coldplay-All-Members.jpg" alt="coldplay members"></img>
        <details>
          <summary>A Head Full of Dreams</summary>
          A Head Full of Dreams', 'Birds', 'Hymn For the Weekend', 'Everglow', 'Adventure of a Lifetime', 'Fun', 'keleidoscope', 'Army of One', 'Amazing day', 'Color Spectrum', 'Up&Up', 'Something just like this
          </details>
      </div>
    </div>
  );
}

export default App;

