//Variables

//const : 변하지 않는 값(상수)
//const는 변수 재선언, 변수 재할당 모두 불가능


const a ="5";
const b ="6";

console.log(a+b);



//변수명이 길 경우 다음 단어는 대문자로 표기(camelCase) -> 최선의 표기 방법
//snake_case 방식으로 표기했을 시 에러가 발생하지는 않지만 권장하지 않음


const c = 5;
const d = 3;
const myName = 'hyojin';

console.log(c + d);
console.log(c * d);
console.log(c / d);
console.log("my name is "+myName);



//let : 변수
//변수에 재할당이 가능하나, 변수 재선언은 불가능


let fruit = 'apple';
console.log('my favorite fruit is '+fruit);

fruit = 'peach';   // 값 재할당
console.log('your favorite fruit is '+fruit);




//대부분의 경우 기본적으로는 const를 사용하고,
//만약 variable을 업데이트해야 한다면 let을 사용 -> 의외로 자바스크립트에서는 한번 초기화한 값에 다른 값을 대입하는 경우가 매우 적기 때문에

//var : 변수
//var는 변수에 재할당, 재선언이 모두 가능 -> 코드가 보호받을 수 없음 -> 쓰지 말것!
//var가 아닌 let, const를 사용하게되면, 좀 더 의미론적인 코드 작성이 가능







//javascript dataType

//integer
const i = 5;

//float
const f = 3.5;

//string
const s1 = 'hello';
const s2 = "bye";

//boolean(true/false)
//true: 켜져있음
//false: 꺼져있음
const amITall = false;
const amISmall = true;

console.log(amITall);
console.log(amISmall);


//null : 해당 변수에는 아무것도 없음을 의미(false와는 다름)
const exist = null;

//undefined
//변수를 선언했으나, 값을 할당하지 않았을 때
//variable은 존재하나, 그것이 정의되지 않았음을 의미(null과는 다름)

//null 은 자연적으로 발생하지 않음. 우리가 variable안에 값이 없다는 것을 확실히 하기 위해서 사용
//비어있다는 것을 의도적으로 표현할 때 사용
//즉, variable이 존재는 하고, 값이 주어졌는데 그 값이 "비어있음"을 표현하는 데이터 타입

//undefined는 어떤 variable이 메모리에 있는데 그 안에 값이 없는 것
//즉, variable이 존재는 하는데 값이 주어지지 않은 것을 표현하는 데이터 타입


let un ;
console.log(un);  //undefined

// const cun; -> 에러발생: 상수는 선언과 동시에 값을 초기화 해줘야 함.





//array
//데이터로 이루어진 리스트
//사용 목적: 하나의 variable이 여러 데이터(데이터의 리스트)를 가지도록 해야할 때 사용
//시작과 끝에 대괄호[] 사용
//각각의 원소는 쉽표,로 분리되어야 함

const array = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

console.log(array);

//배열의 다섯번째 원소 가져오기
console.log(array[4]); //fri


//배열에 하나의 원소 추가하기
array.push('sun');
console.log(array);






//object


//회원정보를 표현해야 할때,

//단순히 variable 로 표현 -> 깔끔하지 않음
const varPlayerName = "hyojin";
const varPlayerPoints = 50000;
const varPlayerId = "hyohyo";
const varPlayerPassword = 1234;


//배열로 표현 -> 해당 데이터가 player의 무엇을 의미하는지 알 수 없음(의미론적이지 않음)
//리스트는 모든 값이 같은 의미를 갖기 때문에(ex 한 주의 요일 리스트, 구매할 물품 리스트 등) 배열은 회원정보를 표현하는데 적절하지 않음 
const arrayPlayer = [ "hyojin", 50000, "hyohyo", 1234];


//객체로 표현 -> 깔끔하면서 의미론적으로 표현 가능
//데이터를 정리하기 좋은 방식 중 하나
const objectPlayer = {

    name: "hyojin",
    points:50000,
    id:"hyohyo",
    password:1234

};

//생성한 objectPlayer객체에 접근하는 방법
console.log(objectPlayer); //{name: "hyojin", points: 50000, id: "hyohyo", password: 1234}
console.log(objectPlayer.name);  //hyojin
console.log(objectPlayer.points);  //50000
console.log(objectPlayer["name"]); //hyojin


//const로 선언된 객체라도 객체의 속성은 수정이 가능함 
objectPlayer.name = "jin";    //속성값 변경(hyojin -> jin)
console.log(objectPlayer.name); //jin

//단, 아래와 같이 objectPlayer 객체를 통째로 하나의 값으로서 업데이트 하려고 하면 에러 발생.

//objectPlayer = false;
//console.log(objectPlayer);   //에러발생


//const로 선언된 객체라도 객체의 속성 추가도 가능함 

objectPlayer.phoneNumber = '010-111-1111'; //속성추가(phoneNumber)

console.log(objectPlayer); //{name: "jin", points: 50000, id: "hyohyo", password: 1234, phoneNumber: "010-111-1111"}































