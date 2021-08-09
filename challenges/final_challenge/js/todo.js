

const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];
const TODoS_KEY = "toDos";


function savaTodos(){
    localStorage.setItem(TODoS_KEY, JSON.stringify(toDos));


}



function deleteTodo(event){
const li = event.target.parentElement;  
li.remove();
toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); 
savaTodos();

}



function paintTodo(newTodo){
const li = document.createElement("li");
li.id = newTodo.id;
const span = document.createElement("span");
span.innerText = newTodo.text;
const button =  document.createElement("button");
button.innerText ="Ⅹ";
button.addEventListener("click", deleteTodo);
li.appendChild(span);   
li.appendChild(button);

toDoList.appendChild(li);
}



function handleTodoSubmit(event){
 event.preventDefault();
 const newTodo = toDoInput.value;
 toDoInput.value ="";
 
 const newTodoObj = {
   text:newTodo,
   id: Date.now()
 }
 toDos.push(newTodoObj); 
 paintTodo(newTodoObj);
 savaTodos();

}

toDoForm.addEventListener("submit", handleTodoSubmit)


const savedToDos = localStorage.getItem(TODoS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo); 

                                   
}










