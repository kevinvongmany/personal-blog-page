// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleIcon = document.querySelector("#toggle-icon");
const body = document.querySelector("body");
const moonIcon = "./assets/images/moon.png";
const sunIcon = "./assets/images/sun.png";


const updateCircleGradient = (angle) => {
  const backgroundGradient = `linear-gradient(${angle}deg, var(--light-accent), var(--circle-color), var(--dark-accent))`;
  const circle = document.querySelector(".circle");
  if (!circle) return;
  circle.setAttribute("style", `background: ${backgroundGradient}`);
};

const setModeOnLoad = (mode) => {
  setMode(mode);
  if (mode === "dark") {
    updateCircleGradient(0);
  } else {
    updateCircleGradient(180);
  }
};

const getMode = () => {
  return localStorage.getItem("mode");
};

const setMode = (mode) => {
  localStorage.setItem("mode", mode);
  if (mode === "dark") { // sets the mode to dark
    body.classList.remove("light");
    body.classList.add("dark");
    toggleIcon.setAttribute("src", moonIcon)
    updateCircleGradient(0);
  } else { // does the inverse
    body.classList.remove("dark");
    body.classList.add("light");
    toggleIcon.setAttribute("src", sunIcon)
    updateCircleGradient(180);
  }
};

let mode = getMode();

const toggleMode = function (event) {
  event.preventDefault();
  mode = getMode();
  setMode(mode === "light" ? "dark" : "light"); // toggles between `dark` and `light` values based on the current mode

};

const init = () => {
  // Ensures the transition only applies on toggle and not on page load
  document.addEventListener('DOMContentLoaded', () => {
    // Temporarily disable transitions
    document.body.classList.add('no-transition');

    // Check if dark mode is enabled and apply the dark class if necessary
    setModeOnLoad(getMode());

    // Re-enable transitions after a short delay
    setTimeout(() => {
      document.body.classList.remove('no-transition');
    }, 50);
  });
  const toggleButton = document.querySelector("#toggle"); 
  console.log(toggleButton);

  toggleButton.addEventListener("click", toggleMode);
}

init();