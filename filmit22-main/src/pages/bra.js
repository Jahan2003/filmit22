import Navbar from "../components/nav"
const Bra=()=>{
    return(
        <>
        <Navbar/>
<div class="ma">
    <div class="bc">
        <h1 class="head-title">Breaking Bad(2008-2013)</h1>
        <span id="cer">TV-MA</span>
    </div>
    
    <video width="900" height="450" controls autoplay muted>
        <source src={require("../images/Black Adam – Official Trailer 1.mp4")}type="video/mp4"/>
      </video> 
      <div class="syno">
        <div class="syn">
            <div class="head">
                Synopsis:
            </div>
            <div class="con">
                A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.
            </div>
        </div>

        <div class="headn">
            <div class="tit">Top Cast</div>
            <div class="wrap">
                <div class="im">
                    <img src="./cra.jpg"/>
                    <h4>Bryan Cranston</h4>
              </div>
              <div class="im">
                <img src="./aar.jpg" alt="" />
                <h4>Aaron Paul</h4>
          </div>
          <div class="im">
            <img src="./dea.jpg" alt="" />
            <h4>Dean Norris</h4>
        </div>
        <div class="im">
          <img src="./gus.jpg" alt="" />
          <h4>Giancarlo Esposito</h4>
      </div>
      </div>
    <div class="rev">
        <div class="top">
            Reviews:
        </div>
        <div class="h">
            If I could rate it 20/10, I would.  ⭐10
        </div>
            <div class="cont">
                Where do I even begin? The writing is near perfect, the actors and characters are all amazing, the over-arching story just gets only better and better. This show is just a bullet train, this just goes and refuses to stop. It pulls no punches, everything that happens has all the impact. And honestly, there isn't a single bad episode. Every episode, yes even "Fly", serves a purpose, and honestly, shouldn't be skipped over upon first viewing. And for a show that ended in 2013, it's still relatively popular and beloved among people. Everyone I know still loves the show and loves it to death.
                There isn't much else to say, other than that this show is perfect. 10/10.
            </div>
            
        </div>
        <div class="h">
            Was the best then, still the best now.  ⭐10
        </div>
            <div class="cont">
                I finished watching Breaking Bad 8 years ago and was blown away by how brilliant it was. Original story, great character building, comedy, drama... edge of your seat moments...this show has it all.
                After all these years I've started rewatching on Netflix and I'm every bit as obsessed with it now as I was back then.
                It is absolutely unrivalled television.
            </div>
            
        </div>
        <div class="h">
            Your Review:
        </div>
            <div class="cont">
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
export default Bra
    
            
