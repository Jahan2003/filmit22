import { React, useState } from 'react'
import data from "./ListData.json"
import { Link } from 'react-router-dom';
function List(props) {
    
    //create a new array by filtering the original array
    const filteredData = data.filter((x) => {
        //if no input the return the original
        if (props.input === '') {
            // document.getElementById('aaa').scrollTo({left:0,behavior:'smooth'});
            return x;
        }
        //return the item which contains the user input
        else {
            document.getElementById('aaa').scrollTo({left:0,behavior:'smooth'});
            return x.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <div className='searchel'>
            {filteredData.map((item) => (
                <Link to={item.link}>
                <div class="movie-box">
                <img src={item.imageUrl} alt="" class="movie-box-img" />
                    <div class="box-text">
                        <h2 class="movie-tit1e">{item.text}</h2>
                                <span class="play-btn">⭐ {item.r}</span>
                            
                    
            </div>
        </div></Link>
            ))}
        </div>
    )
}

export default List