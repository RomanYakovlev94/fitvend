const muteButton = document.getElementById("general__inside-moot");
const muteVideo = document.getElementById("general__inside-video");
const burgerNav = document.getElementById("navbar-toggler-icon");
const togglerNav = document.getElementById("navbar-toggler");

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
        console.log(1);
    }else{
        burgerNav.classList.add("navbar-close")
    };
});