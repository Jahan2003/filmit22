import { useState } from "react";
const Review=()=>{
   
    const[head,setHead]=useState(null);
    const[star,setStar]=useState(null);
    const[rev,setRev]=useState(null);
    const[print,setPrint]=useState([]);
  
 
    return(
        <>
        <div>
        <ul>
        {print.map(artist => (
          <>
          <li class="h">{artist.head}⭐{artist.star}<br/></li>
          <li class="cont">{artist.rev}</li>
          </>
          ))}
        </ul>
        </div>
        
        <form>
    <div class="headi">
    
    <div class="h">
        Your Review:
    </div>
    
    <div class="quantity">
    <span id="star">Star Rating ⭐- </span>
<input type="number" min="0.5" max="10" step="0.5" value={star} onChange={val=>setStar(val.target.value)}/>
</div>
        <div id="headline">
            <textarea id="text1" placeholder="Write a headline of your review" rows="1" required value={head} onChange={val=>setHead(val.target.value)}></textarea>
        </div>
        <div id="conte">
            <textarea id="text2" placeholder="Write your review (Minimum 100 characters)" rows="5" required minlength="1" value={rev} onChange={val=>setRev(val.target.value)}></textarea>
    </div>
    
</div>
    <center>

        <button type="button" onClick={() => {
        setStar('');
        setHead('');
        setRev('');
        setPrint([
          ...print,
          { star: star ,head: head,rev: rev}
        ]);
      }}>Submit</button>
    </center>
    </form>
   
    </>

    );
}
export default Review;