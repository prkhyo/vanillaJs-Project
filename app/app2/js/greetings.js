const USERNAME_KEY = "username";
const loginForm = document.querySelector("#login-form");
const h1 = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = 'hidden';

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