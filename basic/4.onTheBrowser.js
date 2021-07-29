

//css와 javascript는 단독으로 브라우저에 보여질 수 없음
//css와 javascript를 포함하는 html이 브라우저에 보여지는 것

//우리는 브라우저 상에서 html과 상호작용하기 위해 javascript를 사용함
//javascript를 통해 html의 element들을 변경하고, 읽을 수 있음



//document
//가장 중요한 브라우저의 핵심 object
//브라우저에 이미 존재하는 object
//작성한 html에 대한 모든 정보를 담고 있는 object


//javascript에서는 브라우저로부터 document객체의 정보(html의 항목들)를 가지고 올 수 있음
//즉, html에 있는 정보를 javascript로 가져다 사용할 수 있음
const title = document.title;  //-> html을 javascript화 하여 읽어온 후 그 중 title정보를 가져옴.
console.log(title);  //Momentum



//document.중요태그
//body, head, title 등의 태그는 특별해서 javascript에서 
//document.body, document.head, document.title 이런형태로 태그의 element를 가져올 수 있음
//이 외의다른 태그는 불가능 (ex)document.div -> 불가능


//가져온 html의 title 정보 변경 가능
document.title = 'study';     //Momentum -> study
console.log(document.title);  //study






//javascript로 html의 특정element에 대한 정보만을 가지고 올 수 있는 방법


//방법1: 특정 id값을 가진 element 가져오기
//document.getElementById("idName");
//단 하나의 element만을 return -> 애초에 html상에서 id는 중복된 값을 사용할 수 없기 때문

//아이디가 title인 element를 찾아서 가져와라.
const titleElement = document.getElementById("title");  
console.log(titleElement);  //<h1 id="title">Grab me!</h1>

//javascript에서 특정 element에 대한 모든 정보 보기
console.dir(titleElement);


//특정 element의 text값 변경
titleElement.innerText = "Got you!";  


//특정 element의 속성값 가져오기 

//id값 가져오기
titleElement.id;  //title

//class값 가져오기
titleElement.className;  //hello

//text값 가져오기
titleElement.className;  //Got you!

//value값 가져오기
titleElement.value;







//방법2: CSS selector사용 -> element를 CSS방식으로 검색 가능
//(2-1)
//document.querySelector(".className 또는 #idName 또는 tagName");
//단 하나의 element만을 return
//해당하는 selector조건에 부합하는 element가 여러 개일 경우 제일 위에있는 첫 번째 element가 반환 됨.

//class가 hello인 것을 찾아 그 안에 있는 h1을 가져와라.
const titleElement2 = document.querySelector(".hello h1"); 
console.log(titleElement2);  //<h1 id="title">Got you!</h1>

//class가 hello인 것을 찾아 그 안에 있는 h1중 첫번째 element를 가져와라.
const titleElement3 = document.querySelector(".hello h1:first-child"); 
console.log(titleElement3);  //<h1 id="title" class="hi">Got you!</h1>


//(2-2)
//document.querySelectorAll(".className 또는 #idName 또는 tagName");
//해당하는 selector조건에 부합하는 element가 여러 개일 경우 array 형식으로 모든 elements를 반환. 

//class가 hello인 것을 찾아 그 안에 있는 h1을 가져와라.
const titleElement4 = document.querySelectorAll(".hello h1"); 
console.log(titleElement4);  // NodeList(3) [h1#title, h1#title, h1#title]







//방법3: 특정 className을 가진 element 가져오기 
//document.getElementsByClassName("className");
//해당하는 클래스 이름과 부합하는 element가 여러 개일 경우 array 형식으로 모든 elements를 반환. 


const his =document.getElementsByClassName("hi");

console.log(his);  //HTMLCollection(4) [h1#title.hi, h1#title.hi, h1#title.hi, h1#title.hi, title: h1#title.hi]








//방법4: 특정 tag를 가진 element 가져오기 
//document.getElementsByTagName("tagName");
//해당하는 태그 이름과 부합하는 element가 여러 개일 경우 array 형식으로 모든 elements를 반환. 

const titleElement5 = document.getElementsByTagName("h1");
console.log(titleElement5); // HTMLCollection(5) [h1#title.hi, h1#title.hi, h1#title.hi, h1#title, h1#title.hi, title: h1#title.hi]