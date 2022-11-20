import React from "react"
import Navbar from "../components/nav"
const Fc=()=>{
  return(
    <>
        <Navbar/>
        <div class="ma">
    <div class="bc">
        <h2 class="head-title">Fight Club(2014)</h2>
        <span id="cer">R-rated</span>
     </div>
    
     <video width="900" height="450" controls autoplay muted>
        <source src="https://res.cloudinary.com/digpxlioq/video/upload/v1668938133/vid/Y2Mate.is_-_Fight_Club_1999_Trailer_1_Movieclips_Classic_Trailers-qtRKdVHc-cE-1080p-1654901447677_zcbihh.mp4" type="video/mp4"></source>
      </video> 
      <div class="syno">
        <div class="syn">
            <div class="head">
                Synopsis:
            </div>
            <div class="con">
            An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.
            </div>
        </div>

        <div class="headn">
            <div class="tit">Top Cast</div>
            <div class="wrap">
                <div class="im">
                    <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843957/black%20adam/fightclub/pitt_vxhe6f_jmjecy.jpg" alt="" ></img>
                    <h4>Brad Pitt</h4>
              </div>
              <div class="im">
                <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843957/black%20adam/fightclub/met_joizkz_oxv2cc.jpg" alt="" ></img>
                <h4>Michael Lee Aday</h4>
          </div>
          <div class="im">
            <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843958/black%20adam/fightclub/ed_sm1qkn_o1dqkz.jpg" alt="" ></img>
            <h4>Edward Norton</h4>
        </div>
        <div class="im">
          <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843958/black%20adam/fightclub/zac_o6blqw_kvou8s.jpg" alt="" ></img>
          <h4>Zach Grenier</h4>
      </div>
      </div>
     <div class="rev">
        <div class="sec"></div>
        <div class="top">
            Reviews:
        </div>
        <div class="to" id="to">
            <div class="h">
            An unpredictable movie ⭐10
            </div>
                <div class="cont">
                Everything about Fight Club is simply amazing. The acting, the directing, and the story is simply superb. However, going into this film I had already had had some of the major twists spoiled for me, and this is a movie that relies so heavily on those twists that knowing them will detract from the experience significantly. Because of that, the film is really only worth seeing of you have no prior knowledge of it whatsoever.
                </div>
                
            
            <div class="h">
            The first rule of Fight Club: You never talk about how over-hyped Fight Club is ⭐7
            </div>
                <div class="cont">
                I'm not sure if it's just the fact that Ed Norton really grates on me in this film, but I never really bought into the idea of Fight Club being some kind of cultural phenomenon. Yes it's an innovative story, told via a strong script, engaging characters and intense cinematography. But is it really worthy of such high praise? Personally, I find it starts to fall apart halfway through and actually becomes quite tedious towards the end. Everything just becomes a little bit childish and contrived as the story loses touch with its base elements and the rage against the machine vibe takes over. I have huge respect for the way this film was made but, much like The Matrix, I feel like people attach way more importance to this movie than it deserves.

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
export default Fc
