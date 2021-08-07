

const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
//=== const toDoInput = toDoForm.querySelector("input");
let toDos = [];
const TODoS_KEY = "toDos";

//toDos array의 내용을 localStorage에 저장
//localStorage에 배열은 저장할 수 없고, 오직 텍스트만 저장이 가능하기 때문에
// 배열을 저장할 시, 배열의 형태를 잃고 그냥 텍스트로 저장됨.

//JSON.stringify(string으로 변환하고 싶은 data)
//array이나 object, 어떤 것이든 그 형태 그대로를 유지한 채 string으로 바꿔주는 기능
//이 기능을 사용하면 배열의 형식까지 그대로 string으로 변환하여 localStorage에 저장할 수 있음
//(ex) const member = {name:"hyojin"}
//JSON.stringify(member)  ==> "{\"name\":\"hyojin\"}"
//string으로 변환된 array를 다시 javascript가 이해할 수 있는 살아있는 array로 바꿀때는 --> JSON.parse(member) 사용
function savaTodos(){
    localStorage.setItem(TODoS_KEY, JSON.stringify(toDos));


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

//javascript에서는 array에 있는 각각의 item에 대해 
//화면에 뿌리거나 텍스트를 변형하는 등의 function을 실행할 수 있음
//배열데이터.forEach() --> array에 있는 각각의 item에 대해 ()안에 기술한 function을 실행함
//배열데이터.forEach(Element => { });   --> 이런 형태로도 가능



const savedToDos = localStorage.getItem(TODoS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo); //paintTodo(newTodo) -> paintTodo 함수의 argument로 parsedToDos array로부터 가져온 각각의 item이 전달
                                    //JSON.stringify를 사용하여 배열의 형식까지 그대로 string으로 변환하여 localStorage에 저장했기 때문에 가능
 
 
                                    //   parsedToDos.forEach(sayHello);  //parsedToDos로부터 가져온 각각의 item에 대해 sayHello function 실행
                                      // === sayHello(parsedToDos의 item[0])
                                      //     sayHello(parsedToDos의 item[1])
                                      //     sayHello(parsedToDos의 item[...])


//  parsedToDos.forEach((item) => console.log(item)); //이처럼 arrow function을 사용하여 각 item에 대해 실행할 기능까지 한 번에 정의 가능
                                                      //parsedToDos로부터 가져온 각각의 item을 console에 출력해라.
                                                      // === console.log(parsedToDos의 item[0]))
                                                      //     console.log(parsedToDos의 item[1]))  
                                                      //     console.log(parsedToDos의 item[...]))


                                            
}


//submit eventListener가 event(argument)를 그냥 제공해 주는 것처럼, 
//javascript는 지금 처리되고 있는 item 또한 argument로 제공해줌. 
function sayHello(item){     //item === 특정 item에 대해 해당 함수가 실행될 때, 그 아이템에 대한 정보가 담김 
console.log(`sayHello ${item}`);

}

