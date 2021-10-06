let btn = document.querySelector(".play_btn_circle")
let video = document.querySelector(".video_content")

window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 0)
})

btn.onclick = function(){
    video.classList.toggle("active")
}