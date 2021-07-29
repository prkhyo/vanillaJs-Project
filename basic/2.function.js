

//function
//코드를 캡슐화하여 여러번 실행할 수 있도록 함


//functoin 생성

//argument: 전달인자, 인자 -> 함수와 메서드의 입력 값 (Value)
//parameter: 매개변수 -> 함수와 메서드 입력 변수 명 (Variable)
//argument로부터 보내진 데이터는 parameter로 선언된 변수에 초기화 됨
//parameter는 여러개 받을 수 있음
//여러개 받을 경우, 순서 중요 ! 첫번째 인자는 첫번쨰 파라미터로, n번쨰 인자는 n번쨰 파라미터로 순차적으로 들어가게 됨
//parameter로 받은 데이터는 해당 function의 body 안에서만 사용할 수 있음 -> 캡슐화, 외부에서는 접근 불가

   function fun(parameter){    //data를 받는 방법

      //실행할 코드 작성

   }


//function 사용

  fun('argument');   //data를 보내는 방법





function sayHello(name, age){  //sayHello로 보내진 데이터는 function의 name이라는 variable로 가게 됨
                               //즉, 첫번째 parameter로 어떤 데이터가 들어오면 그 데이터는 name이라는 variable이름을 쓰게되는 것

    console.log("Hello! My name is "+name+ " and I'm "+age);

}

sayHello('hyojin' , 26); 
sayHello('hani', 10);
sayHello('choco', 10);



//function을 이용한 계산기

function plus(firstNumber, secondNumber){

    console.log(firstNumber + secondNumber);   

}

plus(1,2);   


function divide(firstNumber, secondNumber){

    console.log(firstNumber / secondNumber);   

}

divide(94, 4);


//object 안에 function 생성

const player ={
name: 'hyojin',
sayHello: function(name){
   console.log('hello! '+name);
}
};


//object 안 function 사용
player.sayHello('hyojin');



//object 사용하여 계산기 만들기 과제
//function 사용
//console.log() 사용

const calculatorConsole ={

   add: function(num1, num2){
      console.log(num1 + num2);
   },
   minus: function(num1, num2){
      console.log(num1 - num2);
   },
   times: function(num1, num2){
      console.log(num1 * num2);
   },
   divide: function(num1, num2){
      console.log(num1 / num2);
   },
   power: function(num1, num2){
      console.log(num1 ** num2);
   }

};

calculatorConsole.add(40, 60);
calculatorConsole.minus(100, 34);
calculatorConsole.times(5, 4);
calculatorConsole.divide(10,5);
calculatorConsole.power(2,4);


//alert()는 브라우저에 메세지 창을 띄워 결과를 표시
//계산의 결과를 브라우저에 창을 띄워 출력하고 싶을 때 사용

//console.log()는 console에 결과를 표시
//계산의 결과를 가지고 아무 것도 하지 않고 단순 출력해서 확인하고 싶을 때 사용



//return
//함수의 결과 값를 화면에 출력한다거나 결과 값을 받아서 사용해야 할 때 사용
//ruturn을 사용하면 외부에서도 function의 실행 결과 값을 얻을 수 있음 

function calculateAvg(math, korean, english){

   return ( math + korean + english )/3;    //계산의 결과 값을 return

}

const avg = calculateAvg(99,100,80);  //function이 실행되면 실행 결과를 return 하여 결과 값을 반환하고,
                                      //avg의 값은 그 결과 값으로 대체됨.
                                      //avg = function의 return 값인 93

console.log(avg);    //93


//function은 위와 같이 어떤 작업을 처리하고 그 결과를 return하기 위해 사용 -> function이 function의 외부와 소통하는 방법
//단, function을 사용할 때, 코드 실행 후 그 결과가 필요 없는 경우는 return 사용하지 않아도 됨
//return을 하면, function은 결과 값을 return 하고 작동을 멈춤.
//즉, 특정 function의 body 내, return 다음에 작성된 코드는 실행되지 않음.



function a(){

console.log("hi");   //실행
return "a";           //return과 함께function 종료
console.log("bye");  //실행 X

}



//object 사용하여 계산기 만들기 과제
//function 사용
//return 사용 -> 외부에서도 function의 실행 결과 값을 얻을 수 있음
              
const calculatorReturn ={

   add: function(num1, num2){
     return num1 + num2;
   },
   minus: function(num1, num2){
     return num1 - num2;
   },
   times: function(num1, num2){
     return num1 * num2;
   },
   divide: function(num1, num2){
     return num1 / num2;
   },
   power: function(num1, num2){
     return num1 ** num2;
   }

};


const addResult = calculatorReturn.add(40, 60);
const minusResult = calculatorReturn.minus(addResult, 34);  //addResult function의 결과값을 외부에서도 자유롭게 사용 가능 !
const timesResult = calculatorReturn.times(minusResult, 4);
const divideResult = calculatorReturn.divide(10, timesResult);
const powerResult = calculatorReturn.power(addResult, 4);
