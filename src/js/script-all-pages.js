const burgerNav = document.getElementById("navbar-toggler-icon");
const togglerNav = document.getElementById("navbar-toggler");

togglerNav.addEventListener('click', () => {
    if(togglerNav.classList.contains("collapsed")){
        burgerNav.classList.remove("navbar-close");
    }else{
        burgerNav.classList.add("navbar-close")
    };
});