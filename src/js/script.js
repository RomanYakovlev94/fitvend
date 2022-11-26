const muteButton = document.getElementById("general__inside-moot");
const muteVideo = document.getElementById("general__inside-video");

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
