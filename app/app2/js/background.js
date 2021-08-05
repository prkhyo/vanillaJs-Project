

const images = [
   "img1.jpg",
   "img2.jpg",
   "img3.jpg",
   "img4.jpg",
   "img5.jpg",
   "img6.jpg"
]


//이미지 랜덤 출력


console.log(images[Math.floor(Math.random()*images.length)]);
const chosenImage = images[Math.floor(Math.random()*images.length)];


//이미지를 랜덤으로 출력하는 이미지 태그 생성
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);

//이미지 태그를 html 내에 추가
document.body.appendChild(bgImage);