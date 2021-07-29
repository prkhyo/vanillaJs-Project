

//javascript에서 html element의 css 변경하기
const title = document.querySelector("div.hello h1#title1");
console.log(title); //<h1 id="title1" class="hi">Grab me!</h1>

title.style.color = "blue";




//event

//event 사용방법1
//가져온 element에 event listener 추가 -> event 가 발생하면 특정 함수 실행
//element.addEventListener("listen하고 싶은 이벤트 종류", 이벤트 발생시 수행할 기능);
//방법1의 event.addEventListener() 사용 시, event.removeEventListener()로 이벤트 제거 가능.


//click event

//event target element
const title2 = document.querySelector("div.hello:first-child h1");

//event 발생시 실행될 함수
function handleTitleClick(){
    title2.innerText = 'clicked!';
    title2.style.color = 'pink';
    console.log("title was clicked!")
}

//event 종류
title2.addEventListener("click", handleTitleClick); 
//수행할 기능에는 click event 발생 시 실행될 function의 이름만 써줘야 함 -> 실행시키지 않고, function만 넘겨줘야 함
//handleTitleClick() -> 실행버튼과 같기 때문에 무조건 실행되버림.
//click event가 발생 했을 때 실행되어야 하는 function의 이름만 넘겨줌으로써 
//function이 곧바로 실행되지 않고 이벤트 발생 시에만 javascript에 의해 실행되도록 함. 
//즉, 사용자 직접 실행버튼을 누르는 대신, 이벤트 발생 여부에 따라 javascript가 알아서 실행버튼을 누르도록 하기 위해!





// mouseenter & mouseleave event
//event target element
const title3 = document.querySelector("div.hello h1#title2");


//event 종류 및 event 발생시 실행될 함수 한 번에 정의
title3.addEventListener("mouseenter", function(){

    console.log('mouse in!');
    title3.innerText = 'Mouse is hear!';
    title3.style.color = 'red';

});
title3.addEventListener("mouseleave", function(){

    console.log('mouse out!');
    title3.innerText = 'Mouse is gone!';
    title3.style.color = 'black';

});








//event 사용방법2
//element.이벤트 종류 = 이벤트 발생시 수행할 기능;

//click & mouseover & mouseout event

//event target element
const title4 = document.querySelector("div.hello h1#title3");

//event 발생시 실행될 함수
function hadleTitle3Click(){
  
    console.log('title3 clicked!');
    title4.innerText ='clicked!';
}
function hadleTitle3Mouseover(){
  
    console.log('title3 mouseover!');
    title4.innerText ='mouseover!';

}
function hadleTitle3Mouseout(){
  
    console.log('title3 mouseout!');
    title4.innerText ='mouseout!';
}

//event 종류
title4.onclick = hadleTitle3Click;
title4.onmouseover = hadleTitle3Mouseover;
title4.onmouseout = hadleTitle3Mouseout;




 


//winow
//document와 마찬가지로 기본적으로 제공

//window event

//window - resize event
//window 창의 크기를 재조정할 때 발생하는 이벤트

function hadleWindowResize(){
    document.body.style.backgroundColor = 'tomato';
}

window.addEventListener("resize", hadleWindowResize);



//window - copy event
//window 창 내부에서 copy행위를 할 때 발생하는 이벤트

function handleWindowCopy(){

   alert('copy!');

}


window.addEventListener("copy", handleWindowCopy);




//window - offline event
//해당 브라우저가 wifi에 연결되어 있지 않을 때 발생하는 이벤트

function hadleWidowOffline(){
    alert("SOS no WIFI");
}

window.addEventListener("offline", hadleWidowOffline);




//window - online event
//해당 브라우저가 wifi에 연결됐을 때 발생하는 이벤트

function hadleWidowOnline(){
    alert("ALL GOOOOD");
}

window.addEventListener("online", hadleWidowOnline);