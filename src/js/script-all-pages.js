const burgerNav = document.getElementById("navbar-toggler-icon");
const togglerNav = document.getElementById("navbar-toggler");
const playVideoAbout = document.getElementById("about-video-item");
const playVideoAboutBtn = document.getElementById("about-video-play");

togglerNav.addEventListener('click', () => {
    if(togglerNav.classList.contains("collapsed")){
        burgerNav.classList.remove("navbar-close");
    }else{
        burgerNav.classList.add("navbar-close")
    };
});

playVideoAboutBtn.addEventListener('click', () => {
    playVideoAboutBtn.style.display = "none";
    playVideoAbout.play();
    playVideoAbout.setAttribute("controls", "controls");
});