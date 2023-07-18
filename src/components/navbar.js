import React from "react";
import GoDaddy from "../assets/gd-the-go.png";
import searchIcon from "../assets/search.png";
import "./navbar.css";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const Navbar = () => {
    const [redirect, setRedirect] = useState('');
    if (redirect) {
        return <Redirect to={redirect} />
    }
    return (
    <div className="navbar">
        <div className="left">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="44" viewBox="0 0 50 44" fill="none">
                <path d="M43.1293 2.00894C37.9331 -1.19343 31.0923 -0.437343 24.9911 3.35356C18.909 -0.435249 12.064 -1.19343 6.87413 2.00894C-1.33564 7.07954 -2.33378 20.1403 4.64685 31.1779C9.79226 39.319 17.8389 44.0859 25.0017 43.9979C32.1646 44.0859 40.2112 39.319 45.3566 31.1779C52.3288 20.1403 51.3391 7.07954 43.1293 2.00894ZM8.42114 28.849C6.98136 26.5933 5.89534 24.1352 5.19996 21.5583C4.58167 19.3221 4.34531 16.9996 4.50063 14.6865C4.81215 10.6086 6.49268 7.4314 9.23068 5.73911C11.9687 4.04681 15.5883 3.94838 19.4431 5.45845C20.0291 5.69135 20.6027 5.95349 21.1618 6.24386C19.0192 8.173 17.1565 10.3854 15.6264 12.8182C11.388 19.5204 10.0953 26.9807 11.5745 32.9247C10.3961 31.6671 9.34034 30.3024 8.42114 28.849ZM44.8056 21.5583C44.1093 24.1349 43.0234 26.5928 41.5844 28.849C40.6656 30.3053 39.6098 31.6727 38.4311 32.9331C39.7535 27.6028 38.8549 21.0745 35.6126 14.9504C35.5612 14.8491 35.4889 14.7597 35.4002 14.6879C35.3116 14.6161 35.2086 14.5636 35.098 14.5337C34.9875 14.5039 34.8718 14.4974 34.7585 14.5147C34.6452 14.532 34.5369 14.5727 34.4406 14.6341L24.3321 20.8776C24.2399 20.9342 24.16 21.0083 24.0969 21.0956C24.0338 21.1828 23.9888 21.2815 23.9644 21.386C23.94 21.4905 23.9367 21.5987 23.9547 21.7045C23.9727 21.8102 24.0116 21.9114 24.0693 22.0023L25.5527 24.3459C25.6101 24.437 25.685 24.516 25.7733 24.5783C25.8616 24.6407 25.9614 24.6852 26.0672 24.7093C26.1729 24.7335 26.2824 24.7367 26.3894 24.7189C26.4964 24.7011 26.5988 24.6626 26.6907 24.6057L33.2433 20.5613C33.4552 21.1897 33.6671 21.8075 33.8261 22.4463C34.4442 24.6825 34.6805 27.005 34.5254 29.3181C34.2139 33.398 32.5334 36.5753 29.7954 38.2676C28.3831 39.1209 26.7649 39.5839 25.1098 39.608H24.8979C23.2427 39.5844 21.6244 39.1214 20.2124 38.2676C17.4722 36.5753 15.7917 33.398 15.4802 29.3181C15.3261 27.005 15.5625 24.6827 16.1795 22.4463C17.6005 17.2732 20.5363 12.6303 24.6182 9.10065C26.3787 7.57276 28.3839 6.34475 30.5519 5.46683C34.3961 3.95675 38.0221 4.05519 40.7622 5.74748C43.5023 7.43978 45.1807 10.617 45.4922 14.6949C45.6498 17.0045 45.4177 19.3239 44.8056 21.5583Z" fill="#358FC0"/>
            </svg>
            <h1>BizBazaar</h1>
        </div>
        <div className="right">
            <p
            onClick={() => {setRedirect("/gallery/explore")}}
            >EXPLORE</p>
            <p
            onClick={() => {setRedirect("/")}}
            >SAVE</p>
            <img id = "searchIcon" src={searchIcon}
            onClick={() => {setRedirect("/search")}}
            />
        </div>
    </div>
    )
}

export default Navbar;