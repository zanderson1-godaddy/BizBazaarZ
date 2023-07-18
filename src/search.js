import React from "react"
import { useState, useEffect } from "react"
import db from "./data"
import { Redirect } from 'react-router-dom';
import Find from './assets/find.png';
import './search.css';
import Navbar from "./components/navbar";
const Search = () => {
    const [search, setSearch] = useState('');
    const [redirect, setRedirect] = useState('');
    const tags = db.getAllTags();
    
    if (redirect) {
        return <Redirect to={redirect} />
    }
    return (
        <div className="search">
          <Navbar />
          <h1 className="search1">Find a Stall</h1>
            <img src={Find} id='fjasdiofjasiofjasdiof'/>
            <div className="search-bar-row">
                <div className="search-bar">
                    <svg id='thisSearchThing' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.5303 19.46L16.0545 14.9842C17.2621 13.5514 17.8734 11.7097 17.7622 9.83919C17.651 7.96871 16.8258 6.21234 15.457 4.93273C14.0882 3.65313 12.2803 2.948 10.4066 2.96294C8.53286 2.97788 6.73642 3.71176 5.38818 5.01304C4.03995 6.31431 3.24288 8.08363 3.16156 9.95564C3.08023 11.8277 3.72086 13.6594 4.95116 15.0727C6.18146 16.486 7.90749 17.3729 9.77286 17.5503C11.6382 17.7277 13.5005 17.182 14.9751 16.0259L19.4697 20.5205C19.6105 20.6607 19.8011 20.7393 19.9997 20.7392C20.1983 20.739 20.3888 20.66 20.5293 20.5195C20.6697 20.379 20.7487 20.1886 20.7489 19.99C20.7491 19.7913 20.6705 19.6007 20.5303 19.46ZM4.75001 10.3335C4.74889 9.3855 4.98218 8.45193 5.42911 7.6159C5.87604 6.77986 6.52274 6.0673 7.31165 5.54164C8.10056 5.01598 9.0072 4.69353 9.95086 4.60299C10.8945 4.51245 11.8459 4.65664 12.7204 5.02271C13.5949 5.38879 14.3653 5.96539 14.963 6.7012C15.5607 7.437 15.9673 8.30918 16.1464 9.2401C16.3256 10.171 16.2718 11.1318 15.9898 12.0369C15.7078 12.942 15.2065 13.7633 14.5303 14.4278C14.502 14.4514 14.4765 14.4715 14.4517 14.4992C13.6375 15.2746 12.6136 15.7938 11.5069 15.9926C10.4003 16.1913 9.25965 16.0608 8.22652 15.6171C7.19339 15.1735 6.31323 14.4364 5.69522 13.4971C5.07721 12.5579 4.74855 11.4578 4.75001 10.3335Z" fill="#111111"/>
                    </svg>
                    <input type="text" value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder="Search for a stall or product"/>
                </div>
                <button onClick={() => {setRedirect(`/gallery/${search}`)}}>SEARCH</button>
            </div>
            <div className="buttons-search">
                {
                    tags.map((tag, index) => {
                        return(<button key={index} onClick={() => {setRedirect(`/gallery/${tag}`)}}>{tag}</button>)
                    })
                }
            </div>
        </div>
    )
}

export default Search;