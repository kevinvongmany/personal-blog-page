// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleIcon = document.querySelector("#toggle-icon");
const body = document.querySelector("body");
const moonIcon = "./assets/images/moon.png";
const sunIcon = "./assets/images/sun.png";
// assign a variable to a css var(--bg-color) value

let mode = getMode();

function updateCircleGradient(angle) {
  let backgroundGradient = `linear-gradient(${angle}deg, var(--light-accent), var(--circle-color), var(--dark-accent))`
  const circle = document.querySelector(".circle");
  circle.setAttribute("style", `background: ${backgroundGradient}`)
}

if (mode === "dark") {
  body.classList.add("dark");
  updateCircleGradient(0);
} else {
  body.classList.add("light");
  updateCircleGradient(180);
}

const toggleMode = function (event) {
  event.preventDefault();
  mode = getMode();
  if (mode === "light") {
    body.classList.remove("light");
    body.classList.add("dark");
    toggleIcon.setAttribute("src", moonIcon)
    updateCircleGradient(0);
    setMode("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    toggleIcon.setAttribute("src", sunIcon)
    updateCircleGradient(180);
    setMode("light");
  }
};
const toggleButton = document.querySelector("#toggle"); 
console.log(toggleButton);

toggleButton.addEventListener("click", toggleMode);

// TODO: Create functions to read and write from local storage
function getMode() {
  return localStorage.getItem("mode");
}

function setMode(mode) {
  localStorage.setItem("mode", mode);
}