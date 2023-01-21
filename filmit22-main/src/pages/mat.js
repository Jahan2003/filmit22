import React from "react"
import Navbar from "../components/nav"
import Review from "../components/review"
import SSide from "../components/sside"
const Mat=()=>{
    return(
      <>
      <Navbar/>
      <SSide/>
      <div class="ma">
  <div class="bc">
  <h2 class="head-title">The Matrix(1999)</h2>
  <span id="cer">R-Rated</span>
   </div>
  
   <iframe width="1000" height="500" src="https://www.youtube.com/embed/nUEQNVV3Gfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="syno">
      <div class="syn">
          <div class="head">
              Synopsis:
          </div>
          <div class="con">
          When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.
          </div>
      </div>
  
      <div class="headn">
          <div class="tit">Top Cast</div>
          <div class="wrap">
              <div class="im">
                  <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843993/black%20adam/matrix/kea_aaap8g_phviyz.jpg" alt="" ></img>
                  <h4>Keanu Reeves</h4>
            </div>
            <div class="im">
              <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843993/black%20adam/matrix/lau_y8jbfp_vfyt2d.jpg" alt="" ></img>
              <h4>Laurence Fishburne</h4>
        </div>
        <div class="im">
          <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843993/black%20adam/matrix/car_jtmhrr_zvq4if.jpg" alt="" ></img>
          <h4>Carrie-Anne Moss</h4>
      </div>
      <div class="im">
        <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843993/black%20adam/matrix/hug_p6ipnu_zcgcgd.jpg" alt="" ></img>
        <h4>Hugo Weaving</h4>
    </div>
    </div>
   <div class="rev">
      <div class="sec"></div>
      <div class="top">
          Reviews:
      </div>
      <div class="to" id="to">
          <div class="h">
          ...it is not the spoon that bends, it is only yourself.  ⭐9
          </div>
              <div class="cont">
              I remember taking a class in social psychology many years ago. The Joy Luck Club figured prominently in the course. I like the idea of combining movies and theory.
                I am now studying metaphysics, and any study of reality begins with René Descartes, the father of modern philosophy. Descartes began his intellectual odyssey with this question: How do we know that there is a reality outside our own minds? We each know that we have experiences, and we can be sure of these experiences; therefore, each of us can be sure that we exist. But how do we know that the internal experiences we have corresponds to objects outside our minds?
                This is the whole theme of The Matrix. Watching this film is like studying metaphysics.                 </div>
              
          
          <div class="h">
          Guns. Leather. Keanu Reeves. How cool can it get?  ⭐8
  
          </div>
              <div class="cont">
              You walk into this film not knowing what the Matrix is. You take your seat and watch the trailers. The green Warner Brothers (green? you ask) trademark comes up, and without warning you are thrust into the Wachowski brothers grand vision. 2 hours of excitement later, you stumble out of the cinema, knowing what the Matrix is.
                This is one great movie. Keanu Reeves is cooler than cool as Neo. The Wachowski brothers skilful direction is brilliant. The special effects sequences will blow you away, did I mention the government lobby scene?
              </div>
              
          
          <div class="h"></div>
          <div class="cont"></div>
         
          
      </div>
      
      
     <Review/>
          </div>
      
      
        </div>
          
    </div>
  </div>
  
  
  </>
    )
}
export default Mat