import React from "react"
import Navbar from "../components/nav"
const Nwh=()=>{
    return( 
        <>
        <Navbar/>
        <div className="ma">
  <div className="bc">
    <h1 className="head-title">Spider-Man: No Way Home</h1>
    <span id="cer">PG-13</span>
  </div>
  <video width={900} height={450} controls="" autoPlay="" muted="">
    <source
      src="../images/Black Adam – Official Trailer 1.mp4 Adam – Official Trailer 1.mp4"
      type="video/mp4"
    />
  </video>
  <div className="syno">
    <div className="syn">
      <div className="head">Synopsis:</div>
      <div className="con">
        With Spider-Man's identity now revealed, Peter asks Doctor Strange for
        help. When a spell goes wrong, dangerous foes from other worlds start to
        appear, forcing Peter to discover what it truly means to be Spider-Man.
      </div>
    </div>
    <div className="headn">
      <div className="tit">Top Cast</div>
      <div className="wrap">
        <div className="im">
          <img src="./tom.jpg" />
          <h4>Tom Holland</h4>
        </div>
        <div className="im">
          <img src="./zen.jpg" alt="" />
          <h4>Zendaya</h4>
        </div>
        <div className="im">
          <img src="./ben.jpg" alt="" />
          <h4>Benedict Cumberbatch</h4>
        </div>
        <div className="im">
          <img src="./wi.jpg" alt="" />
          <h4>Willem Dafoe</h4>
        </div>
      </div>
      <div className="rev">
        <div className="top">Reviews:</div>
        <div className="h">SUPERHERO EXTRAVAGANZA!!! ⭐7</div>
        <div className="cont">
          Superhero extravaganza! Spider-Man NWH didn't meet my expectations, it
          exceeded them. The most emotionally resonant MCU film so far. This
          movie is worth every excruciating moment we had to wait. The visuals,
          the score, the emotions, the story, and ofc the fan-service. This film
          understands spider-man fans like no other spider-man film before it.
          Truly a celebration of the most beloved character in the best way
          possible!
        </div>
      </div>
      <div className="h">Idiotic childish movie ⭐5</div>
      <div className="cont">
        I really do NOT understand the high score for this movie. The storyline
        is idiotic and childish with monsters and spider-men coming from
        different dimensions all because some spell from dr. Strange went bad.
        My God, what a piece of crap this movie... The special effects are as
        expected great but the rest is really a bunch of nonsense! I love
        Spider-man, Batman, the Hulk etc but this movie is really terrible and I
        wasted 148minutes precious time. Take my word for it: the best thing to
        do is to skip this movie and wait for something better to watch, which
        is not hard as there are not many movies as dumb as this one!
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
export default Nwh