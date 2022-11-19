import React from "react"
import Navbar from "../components/nav"
const Inc=()=>{
    return(
        <>
        <Navbar/>
        
        <div className="ma">
  <div className="bc">
    <h1 className="head-title">Inception(2010)</h1>
    <span id="cer">PG-13</span>
  </div>
  <video width={900} height={450} controls="" autoPlay="" muted="">
    <source
      src="../website/Black Adam – Official Trailer 1.mp4"
      type="video/mp4"
    />
  </video>
  <div className="syno">
    <div className="syn">
      <div className="head">Synopsis:</div>
      <div className="con">
        A thief who steals corporate secrets through the use of dream-sharing
        technology is given the inverse task of planting an idea into the mind
        of a C.E.O., but his tragic past may doom the project and his team to
        disaster.
      </div>
    </div>
    <div className="headn">
      <div className="tit">Top Cast</div>
      <div className="wrap">
        <div className="im">
          <img src="./leo.jpg" />
          <h4>Leonardo DiCaprio</h4>
        </div>
        <div className="im">
          <img src="./jo.jpg" alt="" />
          <h4>Joseph Gordon-Levitt</h4>
        </div>
        <div className="im">
          <img src="./to.jpg" alt="" />
          <h4>Tom Hardy</h4>
        </div>
        <div className="im">
          <img src="./mur.jpg" alt="" />
          <h4>Cillian Murphy</h4>
        </div>
      </div>
      <div className="rev">
        <div className="top">Reviews:</div>
        <div className="h">
          Is it possible the makers understand how incredible this film is? ⭐10
        </div>
        <div className="cont">
          You only get to watch this for the first time once, so choose your
          state of mind carefully. It is a film about movies and dreams and
          reality, and what sort of life it is best to find when you leave the
          cinema and return to whatever you left to enter. It is spectacular,
          and brutal, and enigmatic and disturbing. It is beautiful and
          absorbing. It is about one of my favourite characters ever to grace
          the screen. I don't see it often, in case it's not as good as I like
          to remember it. That is my secret, that I lock away in my safe in the
          basement. That somewhere there is a perfect world for us all. For
          some, perhaps it is in the cinema watching this.
        </div>
      </div>
      <div className="h">
        Dream invasion is the focus of a strange and ambiguous film... ⭐6
      </div>
      <div className="cont">
        I'll be the first one to admit that INCEPTION is the kind of thinking
        man's thriller that has something going on every second of its two-hour
        and 28 minute running time. But only director Chris Nolan knows what
        it's all about and I don't believe I'll find out all the explanations
        until I get the DVD commentary. It's a heady mixture of sci-fi, comic
        book stuff and fantasy and all of it is focused on the mastery of dream
        invasion in order to gather secrets held in the human mind. Foremost
        among the players is LEONARDO DiCAPRIO, playing his role in a very
        authoritative manner with no shortage of barking orders and furrowed
        brow, all highly intense, as he gathers a team around him to investigate
        the dreamscape. There's plenty of action along the way, interspersed
        with quieter moments of explanatory dialog so the audience has at least
        some semblance of what's going on. But the whole concept of the story
        lacks the kind of credibility that would have made the film more
        engaging than it really is. Credit the actors with doing their best
        despite the fact that none of them have roles that are fully fleshed
        out. And this includes Joseph GORDON-LEVITT, ELLEN PAGE, TOM HARDY,
        CILLIAN MURPHY, KEN WATANABE and TOM BERENGER. If you're a MATRIX fan,
        you'll love this one. If not, you may wonder what all the fuss was
        about. Frankly, I had more fun exploring dream invasion in NIGHTMARE ON
        ELM STREET, less intellectual but a lot more fun.
      </div>
    </div>
    <div className="h">Your Review:</div>
    <div className="cont">
      <textarea placeholder="Enter Your Comments" rows={5} defaultValue={""} />
    </div>
    <center>
      <button id="sub">Submit</button>
    </center>
  </div>
</div>
</>
    )
}
export default Inc