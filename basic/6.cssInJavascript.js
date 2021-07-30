

//css in javascript

//if사용하여 조건에 따라 css변경하기
const h1 = document.querySelector("h1");

function handleTitleClick(){

    const currentColor = h1.style.color;
    let newColor;
   if(currentColor === "blue"){
    newColor ="tomato";
   }else{
    newColor ="blue";
   } 
   h1.style.color = newColor;
   
}

h1.addEventListener("click", handleTitleClick);




//style 작업에 적합한 도구 => css
//animation 작업에 적합한 도구  => javascript



//javascript 와 HTML, CSS 간의 상호작용
//javascript는 HTML를 변경하고, CSS는 변경된 HTML의 영향을 받음.

//javascript 내 style 코드 수정하지 않고 css변경하기
//더 적은 js코드로 동일한 결과를 얻을 수 있음

//className 추가 방법1 -> className을 제거하고 새로운 값을 추가
const h11 = document.querySelector("#hi1");

function handleTitleClick2(){
    const clickClass = "active";     //"acticve" 와 같이 중복해서 사용되는 코드는 변수에 담아 사용하는 것이 보기에도, 에러 잡기에도 더 좋음
if(h11.className === clickClass){
    h11.className ="";  //className 전부 제거 (h1  nice-font  active-> '')  -> 전부 제거
} else{
    h11.className =clickClass;  //className 추가
}
   
}
h11.addEventListener("click", handleTitleClick2);




//className append
//className을 추가 방법2 -> className을 제거하지 않고 기존의 값을 유지한 채 새로운 값을 추가

//className -> 기존의 가지고 있던 class들을 상관하지 않고, 단순히 모든걸 교체해버림
//classList  -> 제공하는 다양한 함수를 사용하여 class들의 목록으로 선택적으로 작업할 수 있음
//           -> 즉, classList를 사용하면, element의 class 내용물을 조작하는 것이 허용 됨.


//add(), remove(), contains(), 

const h12 = document.querySelector("#hi2");

function handleTitleClick2(){
    const clickClass = "active";     
if(h12.classList.contains(clickClass)){  //h12 element가 clickClass를 포함하고 있으면 true, 포함하지 않으면 false
    h12.classList.remove(clickClass);    //해당 className만 제거  (h2  nice-font  active-> h2  nice-font)  -> active만 제거
} else{
    h12.classList.add(clickClass);     //해당 className만 추가
}
   
}
h12.addEventListener("click", handleTitleClick2);




//toggle() -> classname이 존재한다면 classname을 제거, classname이 존재하지 않는다면 classname을 추가
// toggle을 사용하면 위 코드에서 if문 생략이 가능해짐

const h13 = document.querySelector("#hi3");

function handleTitleClick2(){
  
h13.classList.toggle("active"); //해당 element className에 "active"가 존재한다면 "active"를 제거, "active"가 존재하지 않는다면 "active"를 추가

}
h13.addEventListener("click", handleTitleClick2);


window.addEventListener("resize", function(){

console.log(window.screenLeft);
});



 
 
