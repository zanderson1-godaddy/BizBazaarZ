import React from 'react';
import ZoomedOut from './components/zoomedOut.js';
import db from './data.js';

const Gallery = (props) => {
    console.log('at gallery');
    console.log(props);
    const tag = props.match.params.id;
    console.log(tag);
    const indexesArr = db.getIndexByTag(tag);
    return (
        <div>
            <h1>gallery</h1>
            <ZoomedOut indexesArr={indexesArr} />
        </div>
    )
}

export default Gallery;