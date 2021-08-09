

const API_KEY = "ba7ded9b65f4ba472bb14c6f5a427038";

function onGeoOk(position){ 
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    console.log(`You live in ${lat},${lon}!`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data =>{
         const weather = document.querySelector("#weather span:nth-child(2)");
         const city = document.querySelector("#weather span:first-child");
         city.innerText = data.name;
         weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    })); 
    

}
function onGeoError(){
 console.log("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

