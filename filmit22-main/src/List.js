import { React, useState } from 'react'
import data from "./ListData.json"
import { Link } from 'react-router-dom';
function List(props) {
    
    //create a new array by filtering the original array
    const filteredData = data.filter((x) => {
        //if no input the return the original
        if (props.input === '') {
        return x;
        }
        //return the item which contains the user input
        else {
            return x.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <Link to={item.link}>
                <li><div class="movie-box">
                <img src={item.imageUrl} alt="" class="movie-box-img"/>
                    <div class="box-text">
                        <h2 class="movie-tit1e">{item.text}</h2>
                                <span class="play-btn">⭐ {item.r}</span>
                            
                    
            </div>
        </div></li></Link>
            ))}
        </ul>
    )
}

export default List