

const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
//=== const toDoInput = toDoForm.querySelector("input");
const toDos = [];


//toDos array의 내용을 localStorage에 저장
//localStorage에 배열은 저장할 수 없고, 오직 텍스트만 저장이 가능하기 때문에
// 배열을 저장할 시, 배열의 형태를 잃고 그냥 텍스트로 저장됨.

//JSON.stringify(string으로 변환하고 싶은 data)
//array이나 object, 어떤 것이든 그 형태 그대로를 유지한 채 string으로 바꿔주는 기능
//이 기능을 사용하면 배열의 형식까지 그대로 string으로 변환하여 localStorage에 저장할 수 있음
//(ex) const member = {name:"hyojin"}
//JSON.stringify(member)  ==> "{\"name\":\"hyojin\"}"
function savaTodos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));


}


//toDo 삭제
function deleteTodo(event){
const li = event.target.parentElement;  //클릭 된 <button>의 부모 태그인 <li> element
li.remove(); //특정 element 제거
//=== toDoList.removeChild(li); 


}


//toDo 추가 및 출력
function paintTodo(newTodo){
const li = document.createElement("li");
const span = document.createElement("span");
span.innerText = newTodo;
const button =  document.createElement("button");
button.innerText ="❌";
button.addEventListener("click", deleteTodo);
li.appendChild(span);   //특정 element 추가
li.appendChild(button);

toDoList.appendChild(li);
}



function handleTodoSubmit(event){
 event.preventDefault();
 const newTodo = toDoInput.value;
 toDoInput.value ="";
 //toDoInput.value의 값이 비워진다고 해도 newTodo의 값은 비워지지 않음
 //toDoInput.value를 비우기 전, 새로운 변수 newTodo에 그 값을 복사해 놓은 것이기 때문에
 toDos.push(newTodo); //array에 todo 추가
 paintTodo(newTodo);
 savaTodos();

}

toDoForm.addEventListener("submit", handleTodoSubmit)


