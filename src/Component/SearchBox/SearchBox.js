import React from "react";
import Form from "react-bootstrap/Form";
import './searchbox.style.scss'


export const SearchBox = ({placeholder, handleChange}) =>{
    return(
        <div className="searchBoxContainer">
            <Form.Control clase="search-field" type="text" onChange={handleChange} placeholder={placeholder}/>

        </div>
    )
}
