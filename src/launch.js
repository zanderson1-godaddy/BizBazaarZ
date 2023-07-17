import React from 'react';
import { useState } from 'react';
import './launch.css';
import { Redirect } from 'react-router-dom';

const Launch = () => {
    const [redirect, setRedirect] = useState('');
    if (redirect) {
        return <Redirect to={redirect} />
    }

    const goToStore = () => {
        setRedirect('/store');
    }

    const goToGallary = () => {
        setRedirect('/gallary');
    }

  return (
    <div className="launch-container">
      <button className="launch-button"
      onClick={goToStore} >Fun Mode</button>
      <button className="launch-button" onClick={goToGallary}>Lame mode</button>
    </div>
  );
}

export default Launch;
