import React from 'react'
import Navbar from '../components/nav'
const In=()=>{
    return(
        <>
        <Navbar/>
        
        <div className="ma">
        <div className="bc">
            <h1 className="head-title">Interstellar(2014)</h1>
            <span id="cer">PG-13</span>
        </div>
        
        <video width="900" height="450" controls autoplay muted>
            <source src="../website/Black Adam – Official Trailer 1.mp4" type="video/mp4"/>
          </video> 
        <div className="syno">
            <div className="syn">
                <div className="head">
                    Synopsis:
                </div>
                <div className="con">
                    Earth's future has been riddled by disasters, famines, and droughts.<br/> There is only one way to ensure mankind's survival: Interstellar travel.<br/> A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before,<br/> a planet that may have the right environment to sustain human life
                </div>
            </div>
    
            <div className="headn">
                <div className="tit">Top Cast</div>
                <div className="wrap">
                    <div className="im">
                        <img src="./mat.jpeg"/>
                        <h4>Matthew McConaughey</h4>
                  </div>
                  <div className="im">
                    <img src="./ann.jpg" alt="" />
                    <h4>Anne Hathaway</h4>
              </div>
              <div className="im">
                <img src="./tim.jpg" alt="" />
                <h4>Timothée Chalamet</h4>
            </div>
            <div className="im">
              <img src="./mic.jpg" alt="" />
              <h4>Michael Caine</h4>
          </div>
        </div>
        <div className="rev">
            <div className="top">
                Reviews:
            </div>
            <div className="h">
                Masterpiece  ⭐10
            </div>
                <div className="cont">
                    Amongst the best movies of all time. The story, the acting, the script, the cinematography, the effects, the sound and the production as a whole is all absolute 10/10's.
                    But what beats all of that is Hans Zimmers compositions. How he continues to churn out perfection to the senses is mindblowing.
                </div>
                
            </div>
            <div className="h">
                I would rate 11/10  ⭐10
            </div>
                <div className="cont">
                    I hadn't seen this but movie and caught it on a flight back from the DR. One of my favorite movies of all time. I would give the first half of the movie an 11/10, just completely enjoyed it as a sci fi/ thriller(in the sense of so much always being on the line). I loved the acting and just yeah, a great movie and one you should go see if you never have 
                </div>
                
            </div>
            <div className="h">
                Your Review:
            </div>
                <div className="cont">
                    <textarea placeholder="Enter Your Comments" rows="5"></textarea>
                
            </div>
            <center>
    
                <button id="sub">Submit</button>
            </center>
        </div>
                </div>
                
                </>
    )
}

export default In
    