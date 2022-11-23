import React from 'react'
import Navbar from '../components/nav'
import Review from '../components/review'
const In=()=>{
    return(
        <>
      <Navbar/>
      <div class="ma">
  <div class="bc">
      <h2 class="head-title">Interstellar(2014)</h2>
      <span id="cer">R-rated</span>
   </div>
  
   <iframe width="1000" height="500" src="https://www.youtube.com/embed/zSWdZVtXT7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                  <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843968/black%20adam/interstellar/mat_yyqaha_srrvby.jpg" alt="" ></img>
                  <h4>Matthew McConaughey</h4>
            </div>
            <div class="im">
              <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843968/black%20adam/interstellar/ann_ttnhsx_h56j2t.jpg" alt="" ></img>
              <h4>Anne Hathaway</h4>
        </div>
        <div class="im">
          <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843968/black%20adam/interstellar/tim_hj0hqi_wfy0wy.jpg" alt="" ></img>
          <h4>Timothée Chalamet</h4>
      </div>
      <div class="im">
        <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843968/black%20adam/interstellar/mic_wmkomc_lf2wdo.jpg" alt="" ></img>
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
      
     <Review/>
          </div>
      
      
        </div>
          
    </div>
  </div>


</>
    )
}

export default In
    