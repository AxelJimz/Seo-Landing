const $NAV_MENU = document.querySelector(".navbar-menu");
const $NAV_UL = document.querySelector(".navbar-ul");

let navbarUlVisible = false;

const isVisibleNavbarUl = () => {
    if (navbarUlVisible === false) {
        $NAV_UL.classList.add("navbar-ul-visible");
        $NAV_MENU.src = "src/images/icons/close-black.png"
        navbarUlVisible = true;
    } else {
        $NAV_UL.classList.remove("navbar-ul-visible");
        $NAV_MENU.src = "src/images/icons/menu-black.png"
        navbarUlVisible = false;
    }
}

$NAV_MENU.addEventListener("click", isVisibleNavbarUl);