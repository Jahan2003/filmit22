
import { Link } from "react-router-dom";
import Navbar from "./nav";
import Slider from "./slider";
const Movies = () =>{
    return( 
        <>
        <Navbar/>
        <Slider/>
    <section class="popular container" id="popular">

    <div class="heading">
        <h2 class="heading-tit1e">Popu1ar Movies</h2>
    </div>
    
    
        <div class="swipe">
             
                
                <div class="movie-box"><Link to={'/bc'}>
                    <img src={require("../images/black adam.jpg")} alt="" class="movie-box-img"></img>
                        <div class="box-text" id="bc">
                            <h2 class="movie-tit1e">Black Adam</h2>
                            <span class="movie-type">Superhero</span>
                        
                                    <span class="play-btn">⭐ 7.1</span>
                                    
                        </div>       
                        </Link>
            </div>
             
             
                <div class="movie-box"><Link to={'/in'} className="Link">
                    <img src={require("../images/interstellar 2.jpg")} alt="" class="movie-box-img"></img>
                        <div class="box-text">
                            <h2 class="movie-tit1e">Interstellar</h2>
                            <span class="movie-type">Sci-Fi</span>
                        
                                    <span class="play-btn">⭐ 8.6</span>
                                
                        
                </div>
                </Link>
            </div>
             
             
                <div class="movie-box"><Link to={'/bra'}>
                    <img src={require("../images/the shawshank redemption 2.jpg")} alt="" class="movie-box-img"></img>
                        <div class="box-text">
                            <h2 class="movie-tit1e">The Shawshank Redemption</h2>
                            <span class="movie-type">Crime</span>
                                    <span class="play-btn">⭐ 9.1</span>
                                
                        </div>
                        </Link>
            </div>
             
             
                <div class="movie-box"><Link to={'/bra'}>
                    <img src={require("../images/godfather.jfif")}  alt="" class="movie-box-img"></img>
                        <div class="box-text">
                            <h2 class="movie-tit1e">The Godfather</h2>
                            <span class="movie-type">Crime</span>
                                    <span class="play-btn">⭐ 9.2</span>
                                    
                        </div>
                        </Link>
            </div>
            

        </div>

        <div class="swipe">
            
           
               <div class="movie-box">
                   <img src={require("../images/fightclub 2.jpg")}alt="" class="movie-box-img"></img>
                       <div class="box-text">
                           <h2 class="movie-tit1e">Fight Club</h2>
                           <span class="movie-type">Action</span>
                               
                                <span class="play-btn">⭐ 8.8</span>
                               
                       </div>
               
           </div>
            
            
               <div class="movie-box">
                   <img src={require("../images/spidey.jfif")} alt="" class="movie-box-img"></img>
                       <div class="box-text">
                           <h2 class="movie-tit1e">Spider-Man: No Way Home</h2>
                           <span class="movie-type">Action</span>
                               
                                   <span class="play-btn">⭐ 8.3</span>
                               
                       
               </div>
           </div>
            
            
               <div class="movie-box">
                   <img src={require("../images/incep.jpg")} alt="" class="movie-box-img"></img>
                       <div class="box-text">
                           <h2 class="movie-tit1e">Inception</h2>
                           <span class="movie-type">Sci-Fi</span>
                               
                                <span class="play-btn">⭐ 8.7</span>
                               
                       </div>
               
           </div>
            
            
               <div class="movie-box">
                   <img src={require("../images/matrix.jfif")} alt="" class="movie-box-img"></img>
                       <div class="box-text">
                           <h2 class="movie-tit1e">Matrix</h2>
                           <span class="movie-type">Sci-Fi</span>
                                   <span class="play-btn">⭐ 8.3</span>
                               
                       </div>
               
           </div>
           

       </div>

       <div class="heading" id="srs">
        <h2 class="heading-tit1e">Series and Tv Shows</h2>
    </div>
    <div class="swipe">
        
       
           <div class="movie-box"><Link to={'/bra'}>
               <img src={require("../images/breaking bad.jpg")} alt="" class="movie-box-img"></img>
                   <div class="box-text">
                       <h2 class="movie-tit1e">Breaking Bad</h2>
                       <span class="movie-type">Suspence</span>
                           
                               <span class="play-btn">⭐ 9.5</span>
                           
                   </div>
                   </Link>
       </div>
        
        
           <div class="movie-box">
               <img src={require("../images/the office.jpg")} alt="" class="movie-box-img"></img>
                   <div class="box-text">
                       <h2 class="movie-tit1e">The Office</h2>
                       <span class="movie-type">Sitcom</span>
                           
                               <span class="play-btn">⭐ 9</span>
                           
                   
           </div>
       </div>
        
        
           <div class="movie-box">
               <img src={require("../images/Dark.jpg")}alt="" class="movie-box-img"></img>
                   <div class="box-text">
                       <h2 class="movie-tit1e">Dark</h2>
                       <span class="movie-type">Drama</span>
                           
                               <span class="play-btn">⭐ 8.7</span>
                           
                   </div>
           
       </div>
        
        
           <div class="movie-box">
               <img src={require("../images/grey's anatomy.jpg")} alt="" class="movie-box-img"></img>
                   <div class="box-text">
                       <h2 class="movie-tit1e">Grey's Anatomy</h2>
                       <span class="movie-type">Romance</span>
                           
                               <span class="play-btn">⭐ 7.6</span>
                           
                   </div>
           
       </div>
    </div>
       <div class="swipe">
                   
       
                   <div class="movie-box">
                    <img src={require("../images/mh.jpg")}alt="" class="movie-box-img"></img>
                        <div class="box-text">
                            <h2 class="movie-tit1e">Money Heist</h2>
                            <span class="movie-type">Action</span>
                                
                                    <span class="play-btn">⭐ 8.2</span>
                                
                        </div>
                
            </div>
             
             
                <div class="movie-box">
                    <img src={require("../images/got")} alt="" class="movie-box-img"></img>
                        <div class="box-text">
                            <h2 class="movie-tit1e">Game Of Thrones</h2>
                            <span class="movie-type">Adventure</span>
                                
                                    <span class="play-btn">⭐ 9.2</span>
                                
                        
                </div>
            </div>
             
             
                <div class="movie-box">
                    <img src={require("../images/rick and morty.jpg")} alt="" class="movie-box-img"></img>
                        <div class="box-text">
                            <h2 class="movie-tit1e">Ricky and Morty</h2>
                            <span class="movie-type">Comedy</span>
                                
                                    <span class="play-btn">⭐ 9.2</span>
                                
                        </div>
                
            </div>
             
             
                <div class="movie-box">
                    <img src={require("../images/death note.jpg")} alt="" class="movie-box-img"></img>
                        <div class="box-text">
                            <h2 class="movie-tit1e">Death Note</h2>
                            <span class="movie-type">Horror/Anime</span>
                                
                                    <span class="play-btn">⭐ 9</span>
                                
                        </div>
                
            </div>
        </div>
       

  

    
</section>
</>
)
}
export default Movies;
   