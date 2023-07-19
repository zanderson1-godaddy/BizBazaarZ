import React from 'react';
import { useState } from 'react';
import './launch.css';
import { Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import Stalls from './assets/1.png';
import Exploring from './assets/2.png';
import Search from './assets/3.png';

const Launch = () => {
    const [redirect, setRedirect] = useState('');
    if (redirect) {
        return <Redirect to={redirect} />
    }

  return (
    <div className='launch'>
      <Navbar />
        <h1>Millions of small businesses, in one place.</h1>
        <div className='launch-images'>
          <div className='launch-image'
          onClick={() => {setRedirect("/gallery/explore")}}
          >
            <img src={Stalls} alt='stalls' />
            <h2>See All Stalls</h2>
          </div>
          <div className='launch-image'
          onClick={() => {setRedirect("/store/1")}}
          >
            <img src={Exploring} alt='exploring' />
            <h2
            >Start Exploring</h2>
          </div>
          <div className='launch-image'
            onClick={() => {setRedirect("/search")}}
          >
            <img src={Search} alt='search' />
            <h2>Search for a Stall</h2>
          </div>
        </div>
    </div>
  );
}

export default Launch;
