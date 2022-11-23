import { useState } from "react";
const Review=()=>{
   
    const[head,setHead]=useState(null);
    const[star,setStar]=useState(null);
    const[rev,setRev]=useState(null);
    const[print,setPrint]=useState(false);

    function getHead(val){
        setHead(val.target.value)
        setPrint(false);
    
    }
    function getStar(val){
        setStar(val.target.value)
        setPrint(false);
    
    }
    function getRev(val){
        setRev(val.target.value)
        setPrint(false);
    
    }

 
    return(
        <>
        {
            print?
            <div class="h">{head}  ⭐{star}</div>
            :null
            
        }
         {
            print?
            <div class="cont">{rev}</div>
            :null
        }
    <div class="headi">
    <div class="h">
        Your Review:
    </div>
    <div class="quantity">
    <span id="star">Star Rating ⭐- </span>
<input type="number" min="1" max="10" step="0.5" onChange={getStar}/>
</div>
        <div id="headline">
            <textarea id="text1" placeholder="Write a headline of your review" rows="1" required onChange={getHead}  ></textarea>
        </div>
        <div id="conte">
            <textarea id="text2" placeholder="Write your review (Minimum 100 characters)" rows="5" required minlength="1" onChange={getRev}></textarea>
        
    </div>
    
</div>
    <center>

        <button onClick={()=>setPrint(true)}>Submit</button>
    </center>
   
    </>

    );
}
export default Review;
