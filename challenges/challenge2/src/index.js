const h1 = document.querySelector("h1");
h1.style.color = "white";

function handleWindiwResize() {
  if (window.innerWidth > 1000) {
    document.body.style.backgroundColor = "gold";
  } else if (window.innerWidth > 800) {
    document.body.style.backgroundColor = "mediumpurple";
  } else {
    document.body.style.backgroundColor = "dodgerblue";
  }
}

window.addEventListener("resize", handleWindiwResize);
