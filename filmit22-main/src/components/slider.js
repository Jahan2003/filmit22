const Slider = () =>{
    var responsiveSlider = function() {

        var slider = document.getElementById("slider");
        var slideList = document.getElementById("slideWrap");
        var prev = document.getElementById("prev");
        var next = document.getElementById("next");
        
        var count = 1;
        var sliderWidth = slider.offsetWidth;
        var items = slideList.querySelectorAll("li").length;
        
        
        window.addEventListener('resize', function() {
          sliderWidth = slider.offsetWidth;
        });
        
        
        var nextSlide = function() {
          if(count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
          }
          else if(count = items) {
            slideList.style.left = "0px";
            count = 1;
          }
        };
        
        
        var prevSlide = function() {
          if(count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
          }
          else if(count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
          }
        };
        
        
        next.addEventListener("click", function() {
          nextSlide();
        });
        
        prev.addEventListener("click", function() {
          prevSlide();
        });
        
        
        setInterval(function() {
          nextSlide()
        }, 5000);
        
        };
        
        
        window.onload = function() {
        responsiveSlider();
        }
    return(
        <div id="slider">
            <ul id="slideWrap">
                <li><a href="https://youtu.be/d9MyW72ELq0"><img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844098/black%20adam/sliding%20posters%20idk%20bro/avtar_yq4mp7_ehnbaf.png" alt="" ></img></a></li>
                <li><a href="https://youtu.be/qEVUtrk8_B4"><img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844099/black%20adam/sliding%20posters%20idk%20bro/joh_ky6nav_wmglnt.jpg" alt=""></img></a></li>
                <li><a href="https://youtu.be/ZlNFpri-Y40"><img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844099/black%20adam/sliding%20posters%20idk%20bro/ant-man_klrigp_ff9beu.png" alt=""></img></a></li>
                <li><img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844098/black%20adam/sliding%20posters%20idk%20bro/open_shdnz2_i3v8mz.jpg" alt=""></img></li>
                <li><a href="https://youtu.be/BbXJ3_AQE_o"><img src="https://res.cloudinary.com/digpxlioq/image/upload/v1668844098/black%20adam/sliding%20posters%20idk%20bro/spd_rtbaxe_gfseqv.jpg" alt=""></img></a></li>
              </ul>
              <a id="prev" href="#">&#8810;</a>
              <a id="next" href="#">&#8811;</a>
        </div>
    )
}
export default Slider;