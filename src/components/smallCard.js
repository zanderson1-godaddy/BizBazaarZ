import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './card.css'; // Import the CSS file for the component
import db from '../data.js';

//{ name: "Dog", tag: "dog", substitle: "Labrador", url: "www.google.com", text: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem", image: "https://cdn.wallpapersafari.com/59/60/SBwHrV.jpg"},



const Card = (props) => {
    const { index } = props;
    const { name, tag, businessImage } = db.getByIndex(index);

    const [redirect, setRedirect] = useState('');
    if (redirect) {
        return <Redirect to={redirect} />
    }
  return (
    <div className="card" onClick={() => {setRedirect(`/store/${index}`)}}>
      <img
        className="card-image"
        src={businessImage}
        alt="Card Image"
      />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-link">
          {tag}
        </p>
      </div>
    </div>
  );
};

export default Card;
