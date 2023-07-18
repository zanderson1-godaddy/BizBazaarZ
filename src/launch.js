import React from 'react';
import { useState } from 'react';
import './launch.css';
import { Redirect } from 'react-router-dom';
import Navbar from './components/navbar';

const Launch = () => {
    const [redirect, setRedirect] = useState('');
    if (redirect) {
        return <Redirect to={redirect} />
    }

    const goToStore = () => {
        setRedirect('/store/5');
    }

    const goToGallery = () => {
        setRedirect('/search');
    }

  return (
    <div className='launch'>
      <Navbar />
        <h1>
            welcome to biz bazzaar
        </h1>
        <div className="launch-container">
        <button className="launch-button"
      onClick={goToStore} >Fun Mode</button>
        <button className="launch-button" onClick={goToGallery}>Lame mode</button>
    </div>
    </div>

  );
}

export default Launch;
