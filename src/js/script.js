const muteButton = document.getElementById("general__inside-moot");
const muteVideo = document.getElementById("general__inside-video");
const burgerNav = document.getElementById("navbar-toggler-icon");
const togglerNav = document.getElementById("navbar-toggler");
const playBtn = document.getElementsByClassName("swiper-slide_play");
const videosArr = document.getElementsByClassName("swiper-slide_video");
const soundBtn = document.getElementsByClassName("swiper-slide_sound")


muteButton.addEventListener('click', () => {
    if(muteButton.classList.contains("general__inside-moot1")){
        muteButton.classList.remove("general__inside-moot1");
        muteVideo.muted = true;
    }else{
        muteButton.classList.add("general__inside-moot1")
        muteVideo.removeAttribute("muted");
        muteVideo.muted = false;
    };
});

togglerNav.addEventListener('click', () => {
    if(togglerNav.classList.contains("collapsed")){
        burgerNav.classList.remove("navbar-close");
    }else{
        burgerNav.classList.add("navbar-close")
    };
});


for (let i = 0; i < playBtn.length; i++) {
    playBtn[i].addEventListener('click', () =>{
        
        for (let j =0; j < videosArr.length; j++){
            videosArr[j].pause();
            videosArr[j].muted = true;
            playBtn[j].style.display = "block";
        }
        videosArr[i].play();
        playBtn[i].style.display = "none";
        soundBtn[i].style.display = "block";
    })
};

for (let i = 0; i < soundBtn.length; i++) {
    soundBtn[i].addEventListener('click', () =>{
        videosArr[i].muted = false;
        soundBtn[i].style.display = "none";
    })
};

for (let g = 0; g < videosArr.length; g++) {
    videosArr[g].addEventListener('click', () =>{
        videosArr[g].pause();
        soundBtn[g].style.display = "none";
        playBtn[g].style.display = "block";
    })
};

new Swiper (".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    // simulateTouch: true,
    // touchRatio: 1,
    // touchAngle: 45,
    // grabCursor: true,
    // touchAngle: 45,
    // mousewheel: true,
    //keyboard: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerView: 1,
    // effect: 'coverflow',
    // slidesPerView: 1,
    // breakpoints:{
    //     990: {
    //         slidesPerView: 2,
    //         coverflowEffect : {
    //             rotate: 0,
    //             // stretch: 30,
    //             slideShadows: true,
    //         }
    //     },
    //     1025:{
    //         slidesPerView: 3,
    //     }
    // },
    

});