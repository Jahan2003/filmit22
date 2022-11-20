import React from "react"
import Navbar from "../components/nav"
const Nwh=()=>{
    return( 
      <>
      <Navbar/>
      <div class="ma">
  <div class="bc">
  <h2 class="head-title">Spider-Man: No Way Home</h2>
  <span id="cer">PG-13</span>
   </div>
  
   <video width="900" height="450" controls autoplay muted>
      <source src="https://res.cloudinary.com/digpxlioq/video/upload/v1668938136/vid/Y2Mate.is_-_SPIDER-MAN_NO_WAY_HOME_-_Official_Trailer-ZYzbalQ6Lg8-1080p-1654901529159_zyjlw6.mp4" type="video/mp4"></source>
    </video> 
    <div class="syno">
      <div class="syn">
          <div class="head">
              Synopsis:
          </div>
          <div class="con">
          With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.
          </div>
      </div>
  
      <div class="headn">
          <div class="tit">Top Cast</div>
          <div class="wrap">
              <div class="im">
                  <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843976/black%20adam/no%20way%20home/tom_bvtzqm_m4jzdt.jpg" alt="" ></img>
                  <h4>Tom Holland</h4>
            </div>
            <div class="im">
              <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843976/black%20adam/no%20way%20home/zen_sbv5y3_p8ovsr.jpg" alt="" ></img>
              <h4>Zendaya</h4>
        </div>
        <div class="im">
          <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843976/black%20adam/no%20way%20home/ben_eektkx_sfsfuw.jpg" alt="" ></img>
          <h4>Benedict Cumberbatch</h4>
      </div>
      <div class="im">
        <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843976/black%20adam/no%20way%20home/wi_hbnawf_bur0fu.jpg" alt="" ></img>
        <h4>Willem Dafoe</h4>
    </div>
    </div>
   <div class="rev">
      <div class="sec"></div>
      <div class="top">
          Reviews:
      </div>
      <div class="to" id="to">
          <div class="h">
          SUPERHERO EXTRAVAGANZA!!! ⭐7
          </div>
              <div class="cont">
              Superhero extravaganza! Spider-Man NWH didn't meet my expectations, it exceeded them. The most emotionally resonant MCU film so far. This movie is worth every excruciating moment we had to wait. The visuals, the score, the emotions, the story, and ofc the fan-service. This film understands spider-man fans like no other spider-man film before it. Truly a celebration of the most beloved character in the best way possible!
                 </div>
              
          
          <div class="h">
          Idiotic childish movie  ⭐5
  
          </div>
              <div class="cont">
              I really do NOT understand the high score for this movie.
                The storyline is idiotic and childish with monsters and spider-men coming from different dimensions all because some spell from dr. Strange went bad.
                My God, what a piece of crap this movie... The special effects are as expected great but the rest is really a bunch of nonsense!
                I love Spider-man, Batman, the Hulk etc but this movie is really terrible and I wasted 148minutes precious time.
                Take my word for it: the best thing to do is to skip this movie and wait for something better to watch, which is not hard as there are not many movies as dumb as this one!
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
export default Nwh