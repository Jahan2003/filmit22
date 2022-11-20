import React from "react";
import Navbar from "../components/nav"
const Off=()=>{
    return (
<>
      <Navbar/>
      <div class="ma">
  <div class="bc">
  <h2 class="head-title">The Office(2005–2013)</h2>
  <span id="cer">TV-14</span>
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
          A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.
          </div>
      </div>
  
      <div class="headn">
          <div class="tit">Top Cast</div>
          <div class="wrap">
              <div class="im">
                  <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844006/black%20adam/office/ste_vadpuh_qishct.jpg" alt="" ></img>
                  <h4>Steve Carell</h4>
            </div>
            <div class="im">
              <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844006/black%20adam/office/jen_p8ipue_weuxwq.jpg" alt="" ></img>
              <h4>Jenna Fischer</h4>
        </div>
        <div class="im">
          <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844006/black%20adam/office/joh_rurnbc_k1o5ze.jpg" alt="" ></img>
          <h4>John Krasinski</h4>
      </div>
      <div class="im">
        <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844006/black%20adam/office/rain_n8lx9g_dfsmcd.jpg" alt="" ></img>
        <h4>Rainn Wilson</h4>
    </div>
    </div>
   <div class="rev">
      <div class="sec"></div>
      <div class="top">
          Reviews:
      </div>
      <div class="to" id="to">
          <div class="h">
          No Laugh Tracks!!!  ⭐10
          </div>
              <div class="cont">
              The best thing of this show is there are no background audiences laughing at even poor jokes. There are many sitcoms who use these tricks to add laughter and it is sometimes little bit irritating. The show depends on great dialogues, one liners and Steve Carell.
                PLEASE PLEASE DO NOT FORGET TO WATCH S4E8. This one is my favourite after Threat Level Midnight episode!!!                
                Michael Scott's character carries the show on its shoulders. After Steve Carell's departure, I find it difficult to binge watch all the episodes. That's my opinion!! Some people liked the show after Steve but few episodes were becoming excruciatingly long and boring. But still there were some gags and laughs.    
                Must watch!! Everyone for sure will like it. My personal favourites are one liners and how Michael jokes around with every character like Oscar, Daryll, Stanley etc.                     </div>
              
          
          <div class="h">
          The Show you should be watching!  ⭐10
  
          </div>
              <div class="cont">
              The Office regardless of the British version is probably one of the best comedies out there. Steve Carrell is a comic genius and I remember him from his days at the Daily Show on Comedy Central. The other cast members are really unknown. They look like office workers that you and I work beside five days a week. His character of Michael Scott is purely genius. This guy is somebody we all know who thinks he's all that and a bag of chips but he's not. The characters in the Office do need to be more clear. They are all rather vague so far to me. Sometimes, I don't know who is which but I can tell you something. This show makes me want to watch it again because I work in an office and I have colleagues like them too. When they were standing outside during a fire, it was interesting to see that a simple fire like a toaster burning because the new temp and business school college student left something there in the wrong spot. They made the experience watchable and interesting to see who would do who on a desert island much like Lost and what movies they would see. I bet there are people who have the same movies on their list too. Long live the Office.

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
export default Off