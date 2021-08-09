
//user의 위치 구해서 해당 위치의 날씨 정보 얻어오기
//navigator.geolocation.getCurrentPosition(위치를 잘 가져왔을 때 실행될 함수, 에러발생 시 실행될 함수)

const API_KEY = "ba7ded9b65f4ba472bb14c6f5a427038";

function onGeoOk(position){ //성공 시, parameter로 geolocation position object를 입력 받음
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    console.log(`You live in ${lat},${lon}!`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data =>{
         const weather = document.querySelector("#weather span:first-child");
         const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })); 
    //fetch(url) --> url정보를 javascript로 가져옴 (가져오기 위해서는 서버에 요청을 해야하기 때문에 응답에 대한 대기시간이 발생 할 수있음)
    //then(응답을 받았을 때 실행) --> 응답을 받고나서 실행할 코드입력
    //response.json()--> 응답을 json데이터로 추출
    //



}
function onGeoError(){
 console.log("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//https://openweathermap.org/api  --> 위치, 날씨 등에 관련된 api 정보
//가입 후 개인 key를 얻어야 사용 가능
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={my API key}