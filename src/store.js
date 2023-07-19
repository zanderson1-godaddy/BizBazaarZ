import React from 'react';
import db from './data.js';
import { useState } from 'react';
import BigCard from './components/bigCard.js';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import 'react-awesome-slider/dist/styles.css';
import Navbar from './components/navbar';
import './store.css';
import { Redirect } from "react-router-dom";


const Store = (props) => {
    const [redirect, setRedirect] = useState('');
    const id = props.match.params.id;
    const data = db.getTenAboveAndBelow(id);
    //set the first half of the array to the end of the array
    const firstHalf = data.slice(0, Math.floor(data.length / 2));
    const secondHalf = data.slice(Math.floor(data.length / 2));
    const newData = secondHalf.concat(firstHalf);
    const [currentIndex, setCurrentIndex] = useState((Math.floor(data.length / 2) + 1));
    if (redirect) {
        return <Redirect to={redirect} />
    }

    console.log(newData);
    return (
        <div className='store'>
            <Navbar/>
            <div className='store-left'>
                <h1 className='storeH1' onClick={() => {setRedirect("/gallery/explore")}}> {'← Explore the market'} </h1>
                <div className='sliderContainer'>
                    <AwesomeSlider bullets={false} >
                        {newData.map((data, index) => (
                            <div key={index} style={{width: "100%", height: '100%'}}>
                                <BigCard index={data} />
                            </div>
                        ))}
                    </AwesomeSlider>
                </div>
            </div>
            


        </div>
    )
}

export default Store;