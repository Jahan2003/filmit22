import React from "react"
import Navbar from "../components/nav"
const God=()=>{
    return(
        <>
        <Navbar/>
        
<div className="ma">
  <div className="bc">
    <h1 className="head-title" />
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
        The Godfather "Don" Vito Corleone is the head of the Corleone mafia
        family in New York. He is at the event of his daughter's wedding.
        Michael, Vito's youngest son and a decorated WW II Marine is also
        present at the wedding. Michael seems to be uninterested in being a part
        of the family business. Vito is a powerful man, and is kind to all those
        who give him respect but is ruthless against those who do not. But when
        a powerful and treacherous rival wants to sell drugs and needs the Don's
        influence for the same, Vito refuses to do it. What follows is a clash
        between Vito's fading old values and the new ways which may cause
        Michael to do the thing he was most reluctant in doing and wage a mob
        war against all the other mafia families which could tear the Corleone
        family apart.
      </div>
    </div>
    <div className="headn">
      <div className="tit">Top Cast</div>
      <div className="wrap">
        <div className="im">
          <img src="./bra.jpg" />
          <h4>Marlon Brando</h4>
        </div>
        <div className="im">
          <img src="./al.jpg" alt="" />
          <h4>Al Pacino</h4>
        </div>
        <div className="im">
          <img src="./jam.jpg" alt="" />
          <h4>James Caan</h4>
        </div>
        <div className="im">
          <img src="./du.jpg" alt="" />
          <h4>Robert Duvall</h4>
        </div>
      </div>
      <div className="rev">
        <div className="top">Reviews:</div>
        <div className="h">One of the best of all time. ⭐10</div>
        <div className="cont">
          A masterclass in film making, is The Godfather a contender for the
          best film of all time? I'd argue the case that it is, this is the
          ultimate gangster movie. Before you panic at the thought of a film
          being almost three hours long, you needn't, you won't even notice the
          time, it flies by. Production values are incredible, it looks sublime
          the whole way through, it's so well produced, at roughly fifty years
          old it puts many new films to shame. Brandon, Pacino and Castellano,
          just a few of the Incredible performances, I could add a whole lot
          more. This film has had a huge influence down the years, it is still,
          and will forever be, one of the greatest, 10/10.
        </div>
      </div>
      <div className="h">Truly the Godfather of movies ⭐10</div>
      <div className="cont">
        Don Vito Corleone (Marlon Brando) is the head of a Mafia family. Sonny
        (James Caan) is his eldest and heir apparent. Michael (Al Pacino) is a
        return WWII hero and wants to keep out of the family business. The Don
        refuses to go into the drug business which precipitate a mob war. There
        is no doubt that this is one of the greatest movie of all times.
        Director Francis Ford Coppola has crafted a masterpiece from Mario
        Puzo's novel. It is not just a great story, but great characters and
        great actors playing them. Forty years later, it's still as compelling
        as ever. The pacing is slower than today's standard, but it packs a
        punch more potent than anything recent. The acting power alone is
        incredible. When you consider that Al Pacino is the new unknown kid, the
        cast is unquestionable the best that Hollywood has to offer in that era.
        Every 10 minutes, there is an iconic scene. There is no way I can list
        them all. I rarely give a 10. Rarer still do I give it with no
        reservation. A perfect movie is not enough. It has to have cultural
        significance and some originality. That is 'The Godfather'. It is still
        being referenced today. May all the haters sleep with the fishes.
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
export default God