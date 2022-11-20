import React from "react"
import Navbar from "../components/nav"
const Inc=()=>{
  return(
    <>
    <Navbar/>
    <div class="ma">
<div class="bc">
<h2 class="head-title">Inception(2010)</h2>
<span id="cer">PG-13</span>
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
        A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.
        </div>
    </div>

    <div class="headn">
        <div class="tit">Top Cast</div>
        <div class="wrap">
            <div class="im">
                <img src="dwn.jfif" alt="" ></img>
                <h4>Leonardo DiCaprio</h4>
          </div>
          <div class="im">
            <img src="superman.jfif" alt="" ></img>
            <h4>Joseph Gordon-Levitt</h4>
      </div>
      <div class="im">
        <img src="noah.jfif" alt="" ></img>
        <h4>Tom Hardy</h4>
    </div>
    <div class="im">
      <img src="sara.jfif" alt="" ></img>
      <h4>Cillian Murphy</h4>
  </div>
  </div>
 <div class="rev">
    <div class="sec"></div>
    <div class="top">
        Reviews:
    </div>
    <div class="to" id="to">
        <div class="h">
        Is it possible the makers understand how incredible this film is?  ⭐10
        </div>
            <div class="cont">
            You only get to watch this for the first time once, so choose your state of mind carefully. It is a film about movies and dreams and reality, and what sort of life it is best to find when you leave the cinema and return to whatever you left to enter. It is spectacular, and brutal, and enigmatic and disturbing. It is beautiful and absorbing. It is about one of my favourite characters ever to grace the screen. I don't see it often, in case it's not as good as I like to remember it. That is my secret, that I lock away in my safe in the basement. That somewhere there is a perfect world for us all. For some, perhaps it is in the cinema watching this.

               </div>
            
        
        <div class="h">
        Dream invasion is the focus of a strange and ambiguous film...  ⭐6

        </div>
            <div class="cont">
            I'll be the first one to admit that INCEPTION is the kind of thinking man's thriller that has something going on every second of its two-hour and 28 minute running time. But only director Chris Nolan knows what it's all about and I don't believe I'll find out all the explanations until I get the DVD commentary.
                It's a heady mixture of sci-fi, comic book stuff and fantasy and all of it is focused on the mastery of dream invasion in order to gather secrets held in the human mind. Foremost among the players is LEONARDO DiCAPRIO, playing his role in a very authoritative manner with no shortage of barking orders and furrowed brow, all highly intense, as he gathers a team around him to investigate the dreamscape.
                There's plenty of action along the way, interspersed with quieter moments of explanatory dialog so the audience has at least some semblance of what's going on. But the whole concept of the story lacks the kind of credibility that would have made the film more engaging than it really is.
                Credit the actors with doing their best despite the fact that none of them have roles that are fully fleshed out. And this includes Joseph GORDON-LEVITT, ELLEN PAGE, TOM HARDY, CILLIAN MURPHY, KEN WATANABE and TOM BERENGER.
                If you're a MATRIX fan, you'll love this one. If not, you may wonder what all the fuss was about.
                Frankly, I had more fun exploring dream invasion in NIGHTMARE ON ELM STREET, less intellectual but a lot more fun.
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
export default Inc