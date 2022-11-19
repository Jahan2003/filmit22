import React from "react";
import Navbar from "../components/nav"
const Shaw=()=>{
    return (
        <>
        <Navbar/>
        <div className="ma">
  <div className="bc">
    <h1 className="head-title">The Shawshank Redemption(1994)</h1>
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
        Chronicles the experiences of a formerly successful banker as a prisoner
        in the gloomy jailhouse of Shawshank after being found guilty of a crime
        he did not commit.
        <br /> The film portrays the man's unique way of dealing with his new,
        torturous life; along the way he befriends a number of fellow prisoners,
        most notably a wise long-term inmate named Red.
      </div>
    </div>
    <div className="headn">
      <div className="tit">Top Cast</div>
      <div className="wrap">
        <div className="im">
          <img src="./rob.jpg" />
          <h4>Tim Robbins</h4>
        </div>
        <div className="im">
          <img src="./mor.jpg" alt="" />
          <h4>Morgan Freeman</h4>
        </div>
        <div className="im">
          <img src="./bob.jpg" alt="" />
          <h4>Bob Gunton</h4>
        </div>
        <div className="im">
          <img src="./will.jpg" alt="" />
          <h4>William Sadler</h4>
        </div>
      </div>
      <div className="rev">
        <div className="top">Reviews:</div>
        <div className="h">This is How Movies Should Be Made ⭐9</div>
        <div className="cont">
          One of the finest films made in recent years. It's a poignant story
          about hope. Hope gets me. That's what makes a film like this more than
          a movie. It tells a lesson about life. Those are the films people talk
          about 50 or even 100 years from you. It's also a story for freedom.
          Freedom from isolation, from rule, from bigotry and hate. Freeman and
          Robbins are majestic in their performances. Each learns from the
          other. Their relationship is strong and you feel that from the first
          moment they make contact with one another. There is also a wonderful
          performance from legend James Whitmore as Brooks. He shines when it is
          his time to go back into the world, only to find that the world grew
          up so fast he never even got a chance to blink. Stephen King's story
          is brought to the screen with great elegance and excitement. It is an
          extraordinary motion that people "will" be talking about in 50 or 100
          years.
        </div>
      </div>
      <div className="h">never give up hope ⭐10</div>
      <div className="cont">
        Two imprisoned men (Tim Robbins and Morgan Freeman) bond over a number
        of years, finding solace and eventual redemption through acts of common
        decency. Is this the greatest film of all time? FILMIT would have you
        believe so. Despite being a box office flop (that barely recouped its
        budget), the film received multiple award nominations and outstanding
        reviews from critics for its acting, story, and realism. It has since
        been successful on cable television, VHS, DVD, and Blu-ray. And it
        deserves this praise that seems to be growing each year. Now twenty
        years old, the film has not aged a day, and instead seems to be getting
        better. This is Tim Robbins' best role, and a fine performance from the
        always wonderful Morgan Freeman.
      </div>
      <div className="h">Your Review:</div>
      <div className="cont">
        <textarea
          placeholder="Enter Your Comments"
          rows={5}
          defaultValue={""}
        />
      </div>
      <center>
        <button id="sub">Submit</button>
      </center>
    </div>
  </div>
</div>
</>
    )
}
export  default Shaw