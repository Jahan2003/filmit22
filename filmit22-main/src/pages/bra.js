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
        <source src="https://res.cloudinary.com/digpxlioq/video/upload/v1668938127/vid/Y2Mate.is_-_Breaking_Bad_Trailer_First_Season_-HhesaQXLuRY-720p-1654901716185_zluzsa.mp4 "type="video/mp4"/>
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
                    <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844002/black%20adam/brba/cra_ui6whh_ksffe6.jpg"/>
                    <h4>Bryan Cranston</h4>
              </div>
              <div class="im">
                <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844002/black%20adam/brba/aar_yfttg6_qe4svj.jpg" alt="" />
                <h4>Aaron Paul</h4>
          </div>
          <div class="im">
            <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844002/black%20adam/brba/dea_fghwsc_igctym.jpg" alt="" />
            <h4>Dean Norris</h4>
        </div>
        <div class="im">
          <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844002/black%20adam/brba/gus_coa6vg_fso1eo.jpg" alt="" />
          <h4>Giancarlo Esposito</h4>
      </div>
      </div>
    <div class="rev">
        <div class="top">
            Reviews:
        </div>
        <div class="to" id="to">
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

            <button id="sub">Submit</button>
        </center>
    </div>
            </div>
            </>
    )
}
export default Bra
    
            
