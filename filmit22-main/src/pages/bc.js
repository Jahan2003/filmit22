   import Navbar from "../components/nav"
   import Review from "../components/review";
   const Bc=()=>{
   return(
        <>
        <Navbar/>

<div class="ma">
    <div class="bc">
        <h2 class="head-title">Black Adam (2022)</h2>
        <span id="cer">PG-13</span>
     </div>
    
     {/* <video width="900" height="450" controls autoplay muted>
        <source src="./" type="video/mp4"></source>
      </video>  */}
      <iframe width="1000" height="500" src="https://www.youtube.com/embed/mkomfZHG5q4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      <div class="syno">
        <div class="syn">
            <div class="head">
                Synopsis:
            </div>
            <div class="con">
                Nearly 5,000 years after he was bestowed with the almighty powers<br/>
                of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from <br/>
                his earthly tomb, ready to unleash his unique form of justice on the modern world.
            </div>
        </div>

        <div class="headn">
            <div class="tit">Top Cast</div>
            <div class="wrap">
                <div class="im">
                    <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843924/black%20adam/black%20adam/dwn_zrxdpt_eqvtqg.jpg" alt="" ></img>
                    <h4>Dwayne Johnson</h4>
              </div>
              <div class="im">
                <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843924/black%20adam/black%20adam/superman_e3fgcp_uxojip.jpg" alt="" ></img>
                <h4>Henry Cavil</h4>
          </div>
          <div class="im">
            <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843924/black%20adam/black%20adam/noah_iygakc_ymfzrn.jpg" alt="" ></img>
            <h4>Noah Centineo</h4>
        </div>
        <div class="im">
          <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843924/black%20adam/black%20adam/sara_ghkmo3_tfysab.jpg" alt="" ></img>
          <h4>Sarah Shahi</h4>
      </div>
      </div>
     <div class="rev">
        <div class="sec"></div>
        <div class="top">
            Reviews:
        </div>
        <div class="to" id="to">
            <div class="h">
                A good and fun superhero movie  ⭐8
            </div>
                <div class="cont">
                Just finished watching black adam. Cgi is so good and visual effects are flawless. 
                Fights scenes are brutal and fun to watch. Action packed from start to finish. Aldis Hodge 
                and Pierce Brosnan are phenomenal and the justice society of America makes it more fun and 
                interesting(except cyclone). Hawkman,Black Adam are the badass in this film. Dwayne Johnson 
                is really born to play this character and watch out for the mid credit scene! 
                </div>
                
            
            <div class="h">
                If Michael Bay & Zack Snyder had a baby  ⭐7.1
            </div>
                <div class="cont">
                    Black Adam is the perfect example of how inaccurate critics can be. 
                    By judging this movie by classic movies standards they end up pointing the obvious : 
                    wow it's just cgi fights after cgi fights.What they don't get is that Black Adam is a very enjoyable 
                    piece of entertainment replicating perfectly the gleeful experience of reading a comic book. 
                </div>
                
            
           
            
        </div>
             <Review/>
        

            </div>
        
        
          </div>
            
      </div>
    </div>

 </>

    

    )
   }
   export default Bc
    