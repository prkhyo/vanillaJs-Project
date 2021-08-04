

const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");

}


//setInterval: 특정 초 간격마다 뭔가를 실행하고 싶을 때 사용(여러번 실행)
//setInterval(실행하고자 하는 function, function을 실행할 초 간격(milliseconds))
//setInterval(sayHello, 5000); // -> 5초마다 sayHello function 실행



//setTimeout: 특정 시간이 지나고 나서 function이 실행되도록 할 때 사용(단 한 번 실행)
//setTimeout(실행하고자 하는 function, function을 실행하기 위해 기다려야하는 시간(milliseconds))
//setTimeout(sayHello, 5000); // -> 5초 후에 sayHello function 실행




//Date()
const date = new Date();  //오늘 날짜에 대한 날짜 정보 생성
date.getDate();
date.getDay();
date.getFullYear();
date.getHours();
date.getMinutes();




function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
     //padStart는 문자열에만 사용 가능하므로 날짜 데이터를 string으로 변환시켜줌
     //문자열 변환방법 --> String(변환하고 싶은 데이터)

    clock.innerText = `${hours}:${minutes}:${seconds}`;

}

getClock(); //setInterval을 사용하게 되면 1초 뒤에 load되기 때문에 
            //바로 실행되는 것 처럼 보여지기 위해 우선 단독으로 함수 실행
setInterval(getClock, 1000);  //1000 -> 1초




//padStart: string의 시작 부분에 padding을 추가함으로써 특정 string의 길이를 원래 길이보다 길게 만들 수 있음
//padStart(지정 길이, 대상 문자열이 지정 길이보다 작을 시 앞쪽에 채워넣을 문자)
"1".padStart(2,"0");  //01 
