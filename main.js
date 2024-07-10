var menuBar = document.querySelector("menu_bar")
var navLinks = document.querySelector(".nav_links")

navLinks.style.top = '-450px'

menuBar.onlick = function () {
    if (navLinks.style.top == '-450px') {
        navLinks.stye.top = '50px';

    } else {
        navLinks.style.top = '-450px'
    }
}