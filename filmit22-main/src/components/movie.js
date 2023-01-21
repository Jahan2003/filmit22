
import { Link } from "react-router-dom";
import Navbar from "./nav";
import SSide from "./sside1";
import Slider from "./slider";
const Movies = () =>{
    return( 
        <div className="moviep">
        <Navbar/>
        <SSide/>
        <section id="trending">
        <Slider/></section>
    <section class="popular container" id="popular">

    <div class="heading">
        <h2 class="heading-tit1e">Popular Movies</h2>
    </div>
    
    
        <div class="swipe">
             
                
                <div class="movie-box"><Link to={'/bc'}>
                    <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668836019/Filmit/movie%20cont/black_adam_tmojfl.jpg" alt="" class="movie-box-img"></img>
                        <div class="box-text" id="bc">
                            <h2 class="movie-tit1e">Black Adam</h2>
                            <span class="movie-type">Superhero</span>
                        
                                    <span class="play-btn">⭐ 7.1</span>
                                    
                        </div>       
                        </Link>
            </div>
             
             
                <div class="movie-box"><Link to={'/in'} className="Link">
                    <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668836020/Filmit/movie%20cont/interstellar_2_ikojzb.jpg" alt="" class="movie-box-img"></img>
                        <div class="box-text">
                            <h2 class="movie-tit1e">Interstellar</h2>
                            <span class="movie-type">Sci-Fi</span>
                        
                                    <span class="play-btn">⭐ 8.6</span>
                                
                        
                </div>
                </Link>
            </div>
             
             
                <div class="movie-box"><Link to={'/shaw'}>
                    <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843949/black%20adam/shawshank/the_shawshank_redemption_2_ibnhp0_xubnih.jpg" alt="" class="movie-box-img"></img>
                        <div class="box-text">
                            <h2 class="movie-tit1e">The Shawshank Redemption</h2>
                            <span class="movie-type">Crime</span>
                                    <span class="play-btn">⭐ 9.1</span>
                                
                        </div>
                        </Link>
            </div>
             
             
                <div class="movie-box"><Link to={'/god'}>
                    <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844012/black%20adam/godfather/godfather_gtnyoz.jpg"  alt="" class="movie-box-img"></img>
                        <div class="box-text">
                            <h2 class="movie-tit1e">The Godfather</h2>
                            <span class="movie-type">Crime</span>
                                    <span class="play-btn">⭐ 9.2</span>
                                    
                        </div>
                        </Link>
            </div>
            

        </div>

        <div class="swipe">
            
           
               <div class="movie-box"><Link to={'/fc'}>
                   <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843958/black%20adam/fightclub/fightclub_2_afe9ni_j0i0se.jpg"alt="" class="movie-box-img"></img>
                       <div class="box-text">
                           <h2 class="movie-tit1e">Fight Club</h2>
                           <span class="movie-type">Action</span>
                               
                                <span class="play-btn">⭐ 8.8</span>
                               
                       </div>
               </Link>
           </div>
            
            
               <div class="movie-box"><Link to={'/nwh'}>
                   <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843976/black%20adam/no%20way%20home/spidey_ev2pdx_tbhalw.jpg" alt="" class="movie-box-img"></img>
                       <div class="box-text">
                           <h2 class="movie-tit1e">Spider-Man: No Way Home</h2>
                           <span class="movie-type">Action</span>
                               
                                   <span class="play-btn">⭐ 8.3</span>
                                  
               </div>
               </Link>
           </div>
            
            
               <div class="movie-box"><Link to={'/inc'}>
                   <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843983/black%20adam/inception/incep_rilhv3_zzj6f1.jpg" alt="" class="movie-box-img"></img>
                       <div class="box-text">
                           <h2 class="movie-tit1e">Inception</h2>
                           <span class="movie-type">Sci-Fi</span>
                               
                                <span class="play-btn">⭐ 8.7</span>
                               
                       </div>
               </Link>
           </div>
            
            
               <div class="movie-box"><Link to={'/mat'}>
                   <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668843994/black%20adam/matrix/matrix_b0tpnx_oby20c.jpg" alt="" class="movie-box-img"></img>
                       <div class="box-text">
                           <h2 class="movie-tit1e">Matrix</h2>
                           <span class="movie-type">Sci-Fi</span>
                                   <span class="play-btn">⭐ 8.3</span>
                               
                       </div>
               </Link>
           </div>
           

       </div>
</section>
<section id="srs" class="popular container">
       <div class="heading">
        <h2 class="heading-tit1e">Series and Tv Shows</h2>
    </div>
    <div class="swipe">
        
       
           <div class="movie-box"><Link to={'/bra'}>
               <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844002/black%20adam/brba/breaking_bad_kdqyip_emy2ns.jpg" alt="" class="movie-box-img"></img>
                   <div class="box-text">
                       <h2 class="movie-tit1e">Breaking Bad</h2>
                       <span class="movie-type">Suspence</span>
                           
                               <span class="play-btn">⭐ 9.5</span>
                           
                   </div>
                   </Link>
       </div>
        
        
           <div class="movie-box"><Link to={'/off'}>
               <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844006/black%20adam/office/the_office_cfamta_ectbqm.jpg" alt="" class="movie-box-img"></img>
                   <div class="box-text">
                       <h2 class="movie-tit1e">The Office</h2>
                       <span class="movie-type">Sitcom</span>
                           
                               <span class="play-btn">⭐ 9</span>
                           
           </div>
           </Link>
       </div>
        
        
           <div class="movie-box">
               <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844067/black%20adam/series%20posters/Dark_qwxpii_f1rafm.jpg"alt="" class="movie-box-img"></img>
                   <div class="box-text">
                       <h2 class="movie-tit1e">Dark</h2>
                       <span class="movie-type">Drama</span>
                           
                               <span class="play-btn">⭐ 8.7</span>
                           
                   </div>
           
       </div>
        
        
           <div class="movie-box">
               <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844067/black%20adam/series%20posters/grey_s_anatomy_h0gnrp_mqyixf.jpg" alt="" class="movie-box-img"></img>
                   <div class="box-text">
                       <h2 class="movie-tit1e">Grey's Anatomy</h2>
                       <span class="movie-type">Romance</span>
                           
                               <span class="play-btn">⭐ 7.6</span>
                           
                   </div>
           
       </div>
    </div>
       <div class="swipe">
                   
       
                   <div class="movie-box">
                    <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844067/black%20adam/series%20posters/mh_txz3bt_dzh094.jpg" alt="" class="movie-box-img"></img>
                        <div class="box-text">
                            <h2 class="movie-tit1e">Money Heist</h2>
                            <span class="movie-type">Action</span>
                                
                                    <span class="play-btn">⭐ 8.2</span>
                                
                        </div>
                
            </div>
             
             
                <div class="movie-box">
                    <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668881508/black%20adam/series%20posters/got_ehy6ba.webp" alt="" class="movie-box-img"></img>
                        <div class="box-text">
                            <h2 class="movie-tit1e">Game Of Thrones</h2>
                            <span class="movie-type">Adventure</span>
                                
                                    <span class="play-btn">⭐ 9.2</span>
                                
                        
                </div>
            </div>
             
             
                <div class="movie-box">
                    <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668881610/black%20adam/series%20posters/rick_and_morty_jvmhbc.jpg" alt="" class="movie-box-img"></img>
                        <div class="box-text">
                            <h2 class="movie-tit1e">Ricky and Morty</h2>
                            <span class="movie-type">Comedy</span>
                                
                                    <span class="play-btn">⭐ 9.2</span>
                                
                        </div>
                
            </div>
             
             
                <div class="movie-box">
                    <img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844067/black%20adam/series%20posters/death_note_grfimo_c4rn1f.jpg" alt="" class="movie-box-img"></img>
                        <div class="box-text">
                            <h2 class="movie-tit1e">Death Note</h2>
                            <span class="movie-type">Horror/Anime</span>
                                
                                    <span class="play-btn">⭐ 9</span>
                                
                        </div>
                
            </div>
        </div>
       

  

    
</section>
</div>
)
}
export default Movies;
   