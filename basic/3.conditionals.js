

//conditionals


//prompt(message, default value) 
//사용자에게 message를 보여주고, 값을 입력받음
//입력받은 값은 string으로 반환
//사용자가 값을 입력하기 전까지는 javascript 일시정지(로딩 중 상태)
//prompt는 자바스크립트 코드의 실행을 멈추게 하기 때문에 잘 사용하지 않음
const ageNum = prompt('How old are you?');

console.log(ageNum);

//typeof data
//typeof variable
//데이터의 타입을 확인할 수 있음

console.log(typeof ageNum);




//데이터 타입 변환

//parseInt(string)
//string => number


const num1 = "26";
console.log(typeof num1);  //string
console.log(typeof parseInt(num1));  //number


//문자를 숫자로 바꾸려고 할 경우 -> NaN(not a number) 에러
//parseInt는 문자를 처리 하지 못함
//"123"-> 가능  -> 123
//"abc"-> 불가능  -> NaN


const num2 = parseInt( prompt('How old are you?'));
//함수를 여러개 사용할 경우 내부에서부터 외부로 순차적으로 실행  
//실행1: prompt()
//실행2: parseInt()



//NaN이 아니라면 = 숫자라면
//NaN이라면 = 숫자가 아니라면

//isNaN(data)
//입력한 data가 숫자인지 아닌지 판별해주는 함수
//판별결과를 boolean으로 반환
//data가 숫자일 경우 -> false 반환
//data가 숫자가 아닐 경우 -> true 반환

console.log(isNaN(num2));




//if문 
//condition의 타입 혹은 결과 값은 boolean이어야함
//condition이 true일 경우 -> 해당 블록의 코드 실행
//condition이 false일 경우 -> 해당 블록의 코드 실행되지 않음


//if문 사용1
if(condition){
   //condition === true 일때 실행
 }


//if문 사용2
if(condition){
   //condition === true 일때 실행
}else{
   //condition === false 일때 실행
}


//if문 사용3
if(condition1){
    //condition1 === true 일때 실행

 }else if(condition2){
    //condition1 === false,
    //condition2 === true 일때 실행

 }else{
    //condition1 === false,
    //condition2 === false 일때 실행

 }




//And
// a && b
//a와 b 둘 모두 true여야 true
//true  && true  === true
//false && true  === flase
//true  && false === false
//false && false === false



//Or
// a || b
//a와 b중 하나만 true여도 true
//true  || true  === true
//false || true  === true
//true  || false === true
//false || false === false


//equals
//a === b
//a가 b와 같으면 true

//no equals
//a !== b
//a가 b와 같지 않으면 true



const num3 = 30;
 
if(isNaN(num3)){                   //숫자가 아닐 경우 실행
    console.log("숫자가 아님");
}else if(num3> 0 && num3 < 100){   //숫자면서, nu3가 0보다 크고 100보다 작을 경우 실행
    console.log("10~20 사이의 수");
}else if(num3 === 0 || num3 < 0){   //숫자면서, num3가 0~100사이의 수가 아니면서, num3가 0일때, 혹은 num3가 0보다 작을 때 실행
    console.log("작은 수");
}else{                             //위 조건 모두 false일 때 실행
    console.log("큰 수");
};



//입력 나이에 따른 메세지 출력
const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age <0){                  
    console.log("Please write a real positive number!");
}else if(age < 18){   
    console.log("You are too young.");
}else if(age >= 18 && age <= 50){   
    console.log("You can drink.");
}else if(age > 50 && age <= 80){                             
    console.log("You should exercise.");
}else if(age > 80){
    console.log("You can do whatever you want!");
};



//조건으로 여러 조건식을 혼합하여 사용할 때, ()안에 조건식을 작성하여 계산의 우선순위를 정할 수 있음

if((a && b) || (c && d)){

}

//계산 순서 
// 1. a && b  -> A
// 2. c && d  -> B
// 3. A || B





if((a && b) || c && d){

}

//계산 순서 
// 1. a && b  -> A
// 2. A || c   -> B
// 3. B && d





if(a && b || (c && d)){

}

//계산 순서 
// 1. c && d  -> A
// 2. a && b   -> B
// 3. A || B
