// This script provides all functionality for the navbar, including
// darkmode, mouse hovering over certain elements, etc.

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

let subContainerBackground = "#9FB3DB";
let subContainerBackgroundDark = "#2f418f";

// CSS variable references
var r = document.querySelector(':root');

const darkModeButton = document.getElementById("darkmode");

const darkModeLabel = document.getElementById("darkmode-label");

// set darkmode to true
let isDarkMode = false;
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
        darkModeLabel.textContent = "Dark";
    } else {
        r.style.setProperty('--main-background', mainBackground);
        r.style.setProperty('--heading-color', headingColor);
        r.style.setProperty('--main-text-color', mainTextColor);
        r.style.setProperty('--container-background', containerBackground);
        r.style.setProperty('--sub-container-background', subContainerBackground);
        darkModeLabel.textContent = "Light";
    }
}

// ====== Navbar hovering functionality ======
const navbar = document.getElementById("nav-area");

navbar.addEventListener("mouseenter", (event) => { onMouseEnter(event.target) })
navbar.addEventListener("mouseleave", (event) => { onMouseLeave(event.target) })

function onMouseEnter(target) {
    console.log(target);
    target.style.backgroundColor = 'red';
}

function onMouseLeave(target) {
    console.log(target);
    target.style.backgroundColor = 'blue';
}
