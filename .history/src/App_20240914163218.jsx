import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app">
      <h1>COLDPLAY DISCOGRAPHY</h1>
      <div className='content'>
        <img className="band-img" src="/public/Coldplay-All-Members.jpg" alt="coldplay members"></img>
        <div className='accordion-container'>
          <div>
            <h2>Albums</h2>
            <details className="accordion">
            <summary className='accordion-header'>A Head Full of Dreams</summary>
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
            <details className="accordion">
              <summary className='accordion-header'>Live from Climate Pledge Arena</summary>
                <p>Viva la Vida</p>
                <p>Human Heart</p>
                <p>People of Pride</p>
                <p>Fix you</p>
            </details>
            <details className="accordion">
              <summary className='accordion-header'>Music of the Spheres</summary>
                <p>Music of the Spheres</p>
                <p>Higher power</p>
                <p>Humankind</p>
                <p>Alien Choir</p>
                <p>Let somebody go</p>
                <p>Biutyful</p>
                <p>my universe</p>
                <p>infinity sign</p>
                <p>Coloratura</p>
                <p>higher power</p>
                <p>My Universe</p>
            </details>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default App;

