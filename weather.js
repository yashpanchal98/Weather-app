const inputbox =  document.querySelector(".input-box");
const searchBtn = document.querySelector(".searchBtn");
const weather_img = document.querySelector("#weather-img");
const temprature = document.querySelector(".temprature");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const wind_speed = document.querySelector("#wind-speed");

async function checkWeather(city){

    const api_key = "b43f356c0d4593f7a66e50392130a880";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weatherData = await fetch(`${URL}`).then(response => response.json());
    console.log(weatherData);

    if(weatherData.cod == "404"){
        weather_img.src = "./404.png"
        console.log("error");
        description.innerHTML = "";
        humidity.innerHTML = "";
        wind_speed.innerHTML = "";
        temprature.innerHTML = "";
        wind_speed.innerHTML = "";
        return;
    }
    
        if( weatherData.weather[0].main == 'Clear'){
            console.log("abz")
            weather_img.src = "./clear.png";
        } else if( weatherData.weather[0].main == 'Mist'){
            weather_img.scr = "./mist.png";
        } else if( weatherData.weather[0].main == 'Clouds'){
            console.log("abz");
            weather_img.src = './cloud.png';
        } else if( weatherData.weather[0].main == 'Rain'){
            weather_img.src = "./rain.png";
        } else {
            weather_img.src = './snow.png';
        }
    

    temprature.innerText = `${Math.round(weatherData.main.temp-273.15)}°C`;
    humidity.innerHTML = `${weatherData.main.humidity}% humidity`;
    wind_speed.innerHTML = `${weatherData.wind.speed} Km/h`;
    description.innerHTML = `${weatherData.weather[0].description}`

}


searchBtn.addEventListener("click",()=>{
    checkWeather(inputbox.value);
});


