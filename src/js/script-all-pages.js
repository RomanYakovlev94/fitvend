const burgerNav = document.getElementById("navbar-toggler-icon");
const togglerNav = document.getElementById("navbar-toggler");
const playVideoAbout = document.getElementById("about-video-item");
const playVideoAboutBtn = document.getElementById("about-video-play");
const playBtnVideo = document.getElementsByClassName("top-video__wrapper-play");
const videosArrVideo = document.getElementsByClassName("top-video__wrapper-item");


togglerNav.addEventListener('click', () => {
    if(togglerNav.classList.contains("collapsed")){
        burgerNav.classList.remove("navbar-close");
    }else{
        burgerNav.classList.add("navbar-close")
    };
});

if(playVideoAboutBtn){
    playVideoAboutBtn.addEventListener('click', () => {
        playVideoAboutBtn.style.display = "none";
        playVideoAbout.play();
        playVideoAbout.setAttribute("controls", "controls");
    });
}
for (let i = 0; i < playBtnVideo.length; i++) {
    playBtnVideo[i].addEventListener('click', () =>{
        videosArrVideo[i].play();
        videosArrVideo[i].setAttribute("controls", "controls");
        playBtnVideo[i].style.display = "none";
    })
};

new Swiper (".apparat-slider-swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerView: 5,
    loop: true,
});