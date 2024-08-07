document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const mainNav = document.getElementById("main-nav");
    const overlay = document.getElementById("overlay");

    hamburgerMenu.addEventListener("click", () => {
        mainNav.classList.toggle("show");
        overlay.classList.toggle("show");
    });

    overlay.addEventListener("click", () => {
        mainNav.classList.remove("show");
        overlay.classList.remove("show");
    });
});
