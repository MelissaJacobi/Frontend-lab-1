import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app">
      <h1>Coldplay Discography</h1>
      <div className='content'>
        <img className="band-img" src="/public/Coldplay-All-Members.jpg" alt="coldplay members"></img>
        <details className="accordion">
          <summary>A Head Full of Dreams</summary>
            <p>A Head Full of Dreams</p>
            <p>Birds</p>
            <p>Hymn For the Weekend</p>
            <p>Everglow</p>
            <p>Adventure of a Lifetime</p>
            <p>Fun</p>
            <p>keleidoscope</p>
            <p>Army of One</p>
            <p>Amazing day</p>
            <p>Color Spectrum</p> 
            <p>Up&Up</p> 
            <p>Something just like this</p>
          </details>
      </div>
    </div>
  );
}

export default App;

