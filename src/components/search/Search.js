import React from "react";
import "./Search.css";


const Search = ({title, placeholder}) => {
    return (
        <div className="search">
            <span className="title">{title}</span>
            <input type="text" placeholder={placeholder} />
        </div>
    );
};


export default Search;