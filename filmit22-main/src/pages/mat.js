import React from "react"
import Navbar from "../components/nav"
const Mat=()=>{
    return(
        <>
        <Navbar/>
        <div className="ma">
  <div className="bc">
    <h1 className="head-title">The Matrix(1999)</h1>
    <span id="cer">R-Rated</span>
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
        When a beautiful stranger leads computer hacker Neo to a forbidding
        underworld, he discovers the shocking truth--the life he knows is the
        elaborate deception of an evil cyber-intelligence.
      </div>
    </div>
    <div className="headn">
      <div className="tit">Top Cast</div>
      <div className="wrap">
        <div className="im">
          <img src="./kea.jpg" alt="" />
          <h4>Keanu Reeves</h4>
        </div>
        <div className="im">
          <img src="./lau.jpg" alt="" />
          <h4>Laurence Fishburne</h4>
        </div>
        <div className="im">
          <img src="./car.jpg" alt="" />
          <h4>Carrie-Anne Moss</h4>
        </div>
        <div className="im">
          <img src="./hug.jpg" alt="" />
          <h4>Hugo Weaving</h4>
        </div>
      </div>
      <div className="rev">
        <div className="top">Reviews:</div>
        <div className="h">
          ...it is not the spoon that bends, it is only yourself. ⭐9
        </div>
        <div className="cont">
          I remember taking a class in social psychology many years ago. The Joy
          Luck Club figured prominently in the course. I like the idea of
          combining movies and theory. I am now studying metaphysics, and any
          study of reality begins with René Descartes, the father of modern
          philosophy. Descartes began his intellectual odyssey with this
          question: How do we know that there is a reality outside our own
          minds? We each know that we have experiences, and we can be sure of
          these experiences; therefore, each of us can be sure that we exist.
          But how do we know that the internal experiences we have corresponds
          to objects outside our minds? This is the whole theme of The Matrix.
          Watching this film is like studying metaphysics.
        </div>
      </div>
      <div className="h">
        Guns. Leather. Keanu Reeves. How cool can it get? ⭐8
      </div>
      <div className="cont">
        You walk into this film not knowing what the Matrix is. You take your
        seat and watch the trailers. The green Warner Brothers (green? you ask)
        trademark comes up, and without warning you are thrust into the
        Wachowski brothers grand vision. 2 hours of excitement later, you
        stumble out of the cinema, knowing what the Matrix is. This is one great
        movie. Keanu Reeves is cooler than cool as Neo. The Wachowski brothers
        skilful direction is brilliant. The special effects sequences will blow
        you away, did I mention the government lobby scene?
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
export default Mat