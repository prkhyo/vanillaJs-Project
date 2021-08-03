
// element 가져오기
//const loginForm = document.getElementById("login-form");
// == document.querySelector("#login-form");


// element의 하위element 가져오기
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
//loginForm은 HTML의 element
//element에 대해서도 그 속에 포함되어 있는 하위 element 검색 가능


// CSS 선택자 형식을 사용하여 한문장으로 하위 element 가져오기
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

//CSS 선택자
//자손 선택자: 문서 구조에서 특정 요소의 자손을 선택하는 선택자
//자손은 자식, 손자, 그리고 그 이후에 후손을 모두 포함.
//A와 B 사이를 공백(space)로 분리하여 표시
//사용 예: div p  -> div의 자손태그 중 p만 선택하여 가져오기

//자식 선택자: 특정 요소의 직계 자식만 선택하는 선택자
//자식 이후 손자, 후손들 포함하지 않음
//A와 B 사이를 >로 분리하여 표시
//사용 예: div > p  -> div의 자식태그 중 p만 선택하여 가져오기




function onLoginBtnClick(){

//javascript에서 user name의 유효성 검사
//즉, input의 value값에 대한 유효성 검사

const username = loginInput.value;  //input text창에 작성한 데이터는 input태그의 속성 중 value의 속성값이 됨

if(username === ""){
    alert("Please write your name!");
}else if(username.length > 15 ){             //string의 길이 구하는 방법 -> 길이 구하고자 하는 데이터.length
    alert("Your name is too long!");
 }      
}

//loginButton.addEventListener("click", onLoginBtnClick);



//Html에서 user name의 유효성 검사
//js가 아니더라도 HTML에서 input 자체적으로 유효성 검사가 가능(필수 지정, 최대 글자수 제한 등)
//input의 유효성 검사를 작동시키기 위해서는 input이 form 안에 있어야 함

function onLoginBtnClick2(){
    const username = loginInput.value;
    console.log(username);
}

// loginButton.addEventListener("click", onLoginBtnClick2);



//submit event
//엔터를 누르거나 버튼을 클릭할 때 발생
//form submit의 기본동작: 새로고침

//form을 submit할 때, 새로고침 없이 입력값을 받아내는 방법

//function이 하나의 argument를 받도록 하고 그것을 js에 넘겨줌
//모든 EventListener function의 첫 번째 argument는 항상 방금 일어난 event에 대한 정보가 됨
//선택적으로 사용(정보가 필요없다면 생략 가능)
function onLoginSubmit(event){  //event == 방금 일어난 event에 대한 정보
    
    event.preventDefault(); //어떤 event의 기본 행동이 발생되지 않도록 막아주는 함수 
                             //즉, 어떤 function에 대해 브라우저가 기본적으로 수행하는 동작을 실행되지 않도록 막아주는 함수
                             //(여기서는 form을 submit할 때 브라우저가 기본적으로 수행하는 페이지 새로고침을 방지)
    console.log(loginInput.value); //입력값 출력


}
const loginForm = document.querySelector("#login-form");

//loginForm.addEventListener("submit", onLoginSubmit); //사용자가 submit을 하면, js가 function을 호출






// 링크의 기본동작 수행을 막는 방법
// a 링크의 기본동작: 링크 클릭 시, 다른 페이지로 이동 
const link = document.querySelector("a");

function handleLinkClick(event){ //방금 일어난 event에 대한 정보를 담고 있는 object
    event.preventDefault();      //기본 동작(페이지 이동) 방지
  alert("click!");
}

link.addEventListener("click",handleLinkClick);




// event 발생 시, HTML요소 제거 후 추가
// 1.CSS 이용해서 숨기기
// CSS에서 hidden이라는 classname으로 수행될 style코드 생성 (display:none)
// 어떤 요소에게든 이classname을 주면, 그 요소를 숨기게 됨

// 2.CSS 이용해서 숨겨진 요소 보이기
// 반대로 hidden이라는 classname을 제거하게 되면, 그 요소는 보이게 됨

//이벤트 발생 시, form 태그는 숨기고, h1태그는 보이도록 하기
//값을 입력받는 요소는 숨기고, 값을 출력하는 요소는 보이도록
const h1 = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = 'hidden';  //변수 대문자표기? 일반적으로 string만 포함된 변수는 대문자로 표기
                                    //중요한 정보가 아닌, 반복해서 사용되는 string을 저장해서 사용하고 싶을 때 사용

function onLoginSubmit3(event){  

    event.preventDefault();  // submit의 기본 동작 방지
    loginForm.classList.add(HIDDEN_CLASSNAME); // form에 hidden이라는 classname을 더해줘서 숨김처리
    const username = loginInput.value; // 유저의 이름을 변수로 저장
    h1.innerText= "hello "+ username;  // 저장한 유저의 이름을 h1요소 안에 넣어줌
    // h1.innerText= `hello ${username}`;  => string과 변수를 합치는 또 다른 방법(= 변수를 string안에 포함시키는 법)
    //                                     =>시작과 끝에 백틱 기호입력, (변수의 경우는 달러Brace 사용 -> string으로 출력)
   
    h1.classList.remove(HIDDEN_CLASSNAME);
}

//loginForm.addEventListener("submit", onLoginSubmit3); //사용자가 submit을 하면, js가 function을 호출






// 입력 받은 username 저장
// local storege: 브라우저에 뭔가를 기억할 수 있게 해주는 API (미니 DB)
//   => 브라우저에 이미 정의 되어있는 기능
//   => 이 곳에 저장되어있는 값은 후에 가져다 사용 가능
//   => 개발자도구 -> Application에서 저장된 데이터 확인 가능
// 정보 저장하는 방법 --> localStorage.setItem(key,value)
// 정보 가져오는 방법 --> localStorage.getItem(key)
// 정보 삭제하는 방법 --> localStorage.removeItem(key)



function onLoginSubmit4(event){  

    event.preventDefault();  
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value; 
    localStorage.setItem("username",username); //local storege에 username 저장
    h1.innerText= `hello ${username}`;  
   
    h1.classList.remove(HIDDEN_CLASSNAME);
}

//loginForm.addEventListener("submit", onLoginSubmit4); //사용자가 submit을 하면, js가 function을 호출








//만약 localStorage에 유저정보가 없다면 form이 표시, 유저정보가 있다면 h1이 표시
//유저정보가 없다면 getItem의 결과 null이 반환됨

const USERNAME_KEY = "username";
function onLoginSubmit5(event){  

    event.preventDefault();  
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value; 
    localStorage.setItem(USERNAME_KEY,username);
    paintH1(username);
}


function paintH1(username){
    h1.innerText= `hello ${username}`;  
    h1.classList.remove(HIDDEN_CLASSNAME);
}


const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit5); 
  
}else{
  //show the h1
  paintH1(saveUsername);
  
}