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

// set darkmode to true
let isDarkMode = false;
toggleDarkMode();


const darkModeButton = document.getElementById("darkmode");

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
    } else {
        r.style.setProperty('--main-background', mainBackground);
        r.style.setProperty('--heading-color', headingColor);
        r.style.setProperty('--main-text-color', mainTextColor);
        r.style.setProperty('--container-background', containerBackground);
        r.style.setProperty('--sub-container-background', subContainerBackground);
    }
}