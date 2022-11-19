import React from "react"
import Navbar from "../components/nav"
const Fc=()=>{
  return(
    <>
        <Navbar/>
<div className="ma">
  <div className="bc">
    <h1 className="head-title">Fight Club(2014)</h1>
    <span id="cer">R-rated</span>
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
        An insomniac office worker and a devil-may-care soap maker form an
        underground fight club that evolves into much more.
      </div>
    </div>
    <div className="headn">
      <div className="tit">Top Cast</div>
      <div className="wrap">
        <div className="im">
          <img src="./pitt.jpg" />
          <h4>Brad Pitt</h4>
        </div>
        <div className="im">
          <img src="./met.jpg" alt="" />
          <h4>Michael Lee Aday</h4>
        </div>
        <div className="im">
          <img src="./zac.jpg" alt="" />
          <h4>Zach Grenier</h4>
        </div>
        <div className="im">
          <img src="./ed.jpg" alt="" />
          <h4>Edward Norton</h4>
        </div>
      </div>
      <div className="rev">
        <div className="top">Reviews:</div>
        <div className="h">An unpredictable movie ⭐10</div>
        <div className="cont">
          Everything about Fight Club is simply amazing. The acting, the
          directing, and the story is simply superb. However, going into this
          film I had already had had some of the major twists spoiled for me,
          and this is a movie that relies so heavily on those twists that
          knowing them will detract from the experience significantly. Because
          of that, the film is really only worth seeing of you have no prior
          knowledge of it whatsoever.
        </div>
      </div>
      <div className="h">
        The first rule of Fight Club: You never talk about how over-hyped Fight
        Club is ⭐7
      </div>
      <div className="cont">
        I'm not sure if it's just the fact that Ed Norton really grates on me in
        this film, but I never really bought into the idea of Fight Club being
        some kind of cultural phenomenon. Yes it's an innovative story, told via
        a strong script, engaging characters and intense cinematography. But is
        it really worthy of such high praise? Personally, I find it starts to
        fall apart halfway through and actually becomes quite tedious towards
        the end. Everything just becomes a little bit childish and contrived as
        the story loses touch with its base elements and the rage against the
        machine vibe takes over. I have huge respect for the way this film was
        made but, much like The Matrix, I feel like people attach way more
        importance to this movie than it deserves.
      </div>
    </div>
    <div className="h">Your Review:</div>
    <div className="cont">
      <textarea placeholder="Enter Your Comments" rows={5} />
    </div>
    <center>
      <button id="sub">Submit</button>
    </center>
  </div>
</div>
</>
  )
}
export default Fc
