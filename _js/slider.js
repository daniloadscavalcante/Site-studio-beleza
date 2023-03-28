new Glider(document.querySelector('.slider-container'), {
    slidesToShow: 1,    
    draggable: true,
    dots: '.dots',    
    scrollLock: true,
  });
  
const glider = new Glider(document.getElementById('glider'));

function sliderAuto(slider, miliseconds) {
 const slidesCount = slider.track.childElementCount;
 let slideTimeout = null;
 let nextIndex = 1;

 function slide () {
   slideTimeout = setTimeout(
     function () {
       if (nextIndex >= slidesCount ) {
         nextIndex = 0;
       }
       slider.scrollItem(nextIndex++);
     },
     miliseconds
   );
 }

 slider.ele.addEventListener('glider-animated', function() {
   window.clearInterval(slideTimeout);
   slide();
 });

 slide();
}

sliderAuto(glider, 4000)


$('.depo-carrosel').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});