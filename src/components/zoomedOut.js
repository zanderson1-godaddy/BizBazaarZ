import Card from './smallCard.js';
import React from 'react';
import "./zoomedOut.css";

const ZoomedOut = ({indexesArr}) => {
    return (
    <div className="grid">
        {indexesArr.map((data, index) => (
          <Card key={index} index={data} />
        ))}
    </div>
    )
}

export default ZoomedOut;