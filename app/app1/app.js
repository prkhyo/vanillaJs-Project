
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

loginButton.addEventListener("click", onLoginBtnClick2);