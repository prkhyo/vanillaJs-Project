

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

//사용할 삭제 방법 --> 기존의 array에서 삭제할 data를 제외시키고 새 array 생성
//arraydata.filter(array의 각 요소에 대해 실행할 함수)
//함수(arraydata[0]) --> 결과 true를 return할 경우, arraydata[0]값이 유지되어 다시 반환 --> array에 포함됨
//함수(arraydata[1]) --> 결과 false를 return할 경우, arraydata[1]값이 삭제되어 반환되지 않음--> array에서 제외

toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); 
//todo의id는 number, li의 id는 string이기 때문에 제대로 비교하기 위해서는
//li.id를 숫자형태로 형변환시켜줘야 함
savaTodos();

}


//toDo 추가 및 출력
function paintTodo(newTodo){
const li = document.createElement("li");
li.id = newTodo.id;
const span = document.createElement("span");
span.innerText = newTodo.text;
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

 const newTodoObj = {
   text:newTodo,
   id: Date.now()
 }
 toDos.push(newTodoObj); //array에 todo 추가
 paintTodo(newTodoObj);
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



//filter 함수

function niceFilter(item){
    if(item ===1){
        return true
    }else{
        return false
    }

    //return item === 1  --> 한 줄로도 가능
    
}



//{1,2,3,4}.filter(niceFilter)
//niceFilter(1) 
//niceFilter(2)
//niceFilter(3)
//niceFilter(4)
// ==> 총 4번 실행
// --> 결과 값이 ture면, argument 값이 유지되어 그 값이 다시 반환
// --> 결과 값이 false면, argument 값이 삭제되고 삭제된 값은 반환되지 않음


