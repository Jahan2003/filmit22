function Slide(){
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
        }, 6000);
        
        };
        
        
        window.onload = function() {
        responsiveSlider();
        }
}
export default Slide;