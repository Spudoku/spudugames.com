// This script provides all functionality for the navbar, including
// darkmode, mouse hovering over certain elements, etc.
// not to be confused with the similar functionaility in the Blog site.

// ====== darkmode implementation ======
// Coloration variables
let mainBackground = "#82859b";
let mainBackgroundDark = "#3e4749";

let headingColor = "#000000";
let headingColorDark = "#bebebe";

let mainTextColor = "#000000";
let mainTextColorDark = "#bebebe";

let containerBackground = "#9FB3DB";
let containerBackgroundDark = "#2f418f";

let subContainerBackground = "#dae2f1";
let subContainerBackgroundDark = "#314d81";

let linkTextColor = "#353535ff";
let linkTextColorDark = "#beacacff";


// CSS variable references
var r = document.querySelector(':root');

const darkModeButton = document.getElementById("darkmode");

const darkModeLabel = document.getElementById("darkmode-label");

const navItems = document.querySelectorAll('.nav-item');

// set darkmode to true
let isDarkMode = !(localStorage.getItem("isDarkMode") === "true");
toggleDarkMode();

darkModeButton.addEventListener("click", () => {
    toggleDarkMode();
});

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    console.log(isDarkMode);

    if (isDarkMode) {
        r.style.setProperty('--main-background', mainBackgroundDark);
        r.style.setProperty('--heading-color', headingColorDark);
        r.style.setProperty('--main-text-color', mainTextColorDark);
        r.style.setProperty('--container-background', containerBackgroundDark);
        r.style.setProperty('--sub-container-background', subContainerBackgroundDark);
        r.style.setProperty('--link-text-color', linkTextColorDark);
        darkModeLabel.textContent = "Dark";
    } else {
        r.style.setProperty('--main-background', mainBackground);
        r.style.setProperty('--heading-color', headingColor);
        r.style.setProperty('--main-text-color', mainTextColor);
        r.style.setProperty('--container-background', containerBackground);
        r.style.setProperty('--sub-container-background', subContainerBackground);
        r.style.setProperty('--link-text-color', linkTextColor);
        darkModeLabel.textContent = "Light";
    }

    // store current state in storage
    localStorage.setItem("isDarkMode", isDarkMode);

    navItems.forEach(item => { onMouseLeave(item) });
}

// ====== Navbar hovering functionality ======
const navbar = document.getElementById("nav-area");

navItems.forEach(item => {
    item.addEventListener("mouseenter", () => { onMouseEnter(item) })
    item.addEventListener("mouseleave", () => { onMouseLeave(item) })
})


function onMouseEnter(item) {

    if (isDarkMode) {
        // show bright
        item.style.backgroundColor = subContainerBackground;
        item.style.color = mainTextColor;
    } else {
        // show not bright
        item.style.backgroundColor = subContainerBackgroundDark;
        item.style.color = mainTextColorDark;
    }
}

function onMouseLeave(item) {

    if (isDarkMode) {
        // show bright
        // show not bright
        item.style.backgroundColor = subContainerBackgroundDark;
        item.style.color = mainTextColorDark;
    } else {


        item.style.backgroundColor = subContainerBackground;
        item.style.color = mainTextColor;
    }
}
