


const body = document.querySelector("body");
body.innerText = "Hello!";
body.style.color = "white";
const colors = [
  "#4ff0e3",
  "#aa4ff0",
  "#d67a9c",
  "#bdd67a",
  "#4c5185",
  "#f05a4f"
];
body.style.backgroundColor = colors[0];

function handleWindowResize() {
  let width = window.innerWidth;
  if (width <= 600) {
    body.style.backgroundColor = colors[1];
  } else if (width > 600 && width <= 800) {
    body.style.backgroundColor = colors[2];
  } else if (width > 800 && width <= 1000) {
    body.style.backgroundColor = colors[3];
  } else if (width > 1000 && width <= 1200) {
    body.style.backgroundColor = colors[4];
  } else if (width > 1200) {
    body.style.backgroundColor = colors[5];
  }
}

window.addEventListener("resize", handleWindowResize);
