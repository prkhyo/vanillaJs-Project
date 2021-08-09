

const images = [
   "img1.jpg",
   "img2.jpg",
   "img3.jpg",
   "img4.jpg",
   "img5.jpg",
   "img6.jpg"
]



console.log(images[Math.floor(Math.random()*images.length)]);
const chosenImage = images[Math.floor(Math.random()*images.length)];



const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);

//document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundSize = "1550px";






