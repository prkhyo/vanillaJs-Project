// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  handleWindowResize: function () {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },
  handleWindowContextmenu: function () {
    h2.innerText = "That was a right click!";
    h2.style.color = colors[4];
  },
  handleH2Mouseenter: function () {
    h2.innerText = "Mouse is hear!";
    h2.style.color = colors[0];
  },
  handleH2Mouseleave: function () {
    h2.innerText = "Mouse is gone!";
    h2.style.color = colors[1];
  }
};

const h2 = document.querySelector("body h2");

window.addEventListener("resize", superEventHandler.handleWindowResize);

window.addEventListener(
  "contextmenu",
  superEventHandler.handleWindowContextmenu
);

h2.addEventListener("mouseenter", superEventHandler.handleH2Mouseenter);
h2.addEventListener("mouseleave", superEventHandler.handleH2Mouseleave);
