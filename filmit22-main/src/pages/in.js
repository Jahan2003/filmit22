import React from 'react'
import Navbar from '../components/nav'
const In=()=>{
    return(
        <>
      <Navbar/>
      <div class="ma">
  <div class="bc">
      <h2 class="head-title">Interstellar(2014)</h2>
      <span id="cer">R-rated</span>
   </div>
  
   <video width="900" height="450" controls autoplay muted>
      <source src="../website/Black Adam – Official Trailer 1.mp4" type="video/mp4"></source>
    </video> 
    <div class="syno">
      <div class="syn">
          <div class="head">
              Synopsis:
          </div>
          <div class="con">
          Earth's future has been riddled by disasters, famines, and droughts.<br/> 
          There is only one way to ensure mankind's survival: Interstellar travel.<br/> 
          A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before<br/> 
          a planet that may have the right environment to sustain human life</div>
      </div>

      <div class="headn">
          <div class="tit">Top Cast</div>
          <div class="wrap">
              <div class="im">
                  <img src="dwn.jfif" alt="" ></img>
                  <h4>Matthew McConaughey</h4>
            </div>
            <div class="im">
              <img src="superman.jfif" alt="" ></img>
              <h4>Anne Hathaway</h4>
        </div>
        <div class="im">
          <img src="noah.jfif" alt="" ></img>
          <h4>Timothée Chalamet</h4>
      </div>
      <div class="im">
        <img src="sara.jfif" alt="" ></img>
        <h4>Michael Caine</h4>
    </div>
    </div>
   <div class="rev">
      <div class="sec"></div>
      <div class="top">
          Reviews:
      </div>
      <div class="to" id="to">
          <div class="h">
          Masterpiece  ⭐10
          </div>
              <div class="cont">
              Amongst the best movies of all time. The story, the acting, the script, the cinematography, the effects, the sound and the production as a whole is all absolute 10/10's.
                But what beats all of that is Hans Zimmers compositions. How he continues to churn out perfection to the senses is mindblowing.             </div>
              
          
          <div class="h">
          I would rate 11/10  ⭐10

          </div>
              <div class="cont">
              I hadn't seen this but movie and caught it on a flight back from the DR. One of my favorite movies of all time. I would give the first half of the movie an 11/10, just completely enjoyed it as a sci fi/ thriller(in the sense of so much always being on the line). I loved the acting and just yeah, a great movie and one you should go see if you never have 

              </div>
              
          
         
          
      </div>
      
      
      <div class="headi">
          <div class="h">
              Your Review:
          </div>
              <div id="headline">
                  <textarea id="text1" placeholder="Write a headline of your review" rows="1" required></textarea>
              </div>
              <div id="conte">
                  <textarea id="text2" placeholder="Write your review (Minimum 100 characters)" rows="5" required minlength="1"></textarea>
              
          </div>
          
      </div>
          <center>
  
              <button onclick="review()">Submit</button>
          </center>
          </div>
      
      
        </div>
          
    </div>
  </div>


</>
    )
}

export default In
    