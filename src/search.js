import React from "react"
import { useState, useEffect } from "react"
import db from "./data"
import { Redirect } from 'react-router-dom';

const Search = () => {
    const [search, setSearch] = useState('');
    const [redirect, setRedirect] = useState('');
    const tags = db.getAllTags();
    
    if (redirect) {
        return <Redirect to={redirect} />
    }
    return (
        <div>
            <h1>Search</h1>
            <img src="https://cdn.wallpapersafari.com/59/60/SBwHrV.jpg" alt="dog" style={{width: '69px'}}/>
            <input type="text" value={search} onChange={(e) => {setSearch(e.target.value)}} />
            <button onClick={() => {setRedirect(`/gallery/${search}`)}}>Go</button>
            {
                tags.map((tag, index) => {
                    return(<button key={index} onClick={() => {setRedirect(`/gallery/${index}`)}}>{tag}</button>)
                })
            }
        </div>
    )
}

export default Search;