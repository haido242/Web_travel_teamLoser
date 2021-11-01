let btn = document.querySelector(".play_btn_circle")
let video = document.querySelector(".video_content")

window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 0)
})

btn.onclick = function(){
    video.classList.toggle("active")
}

$(document).ready(function(){
    $('.slide_img').slick({
        centerMode: true,
        centerPadding: '140px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '10px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
  });