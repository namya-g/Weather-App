console.log("JS file is connected ")
const apiKey="b87d8cfc4b9d42608b8183759260807";
const input=document.getElementById("city_name");
const search=document.getElementById("search");
const hourly=document.getElementById("hourly");
const hcard=document.getElementById("hour-card");
const ten_day=document.getElementById("hourly");
const hcard=document.getElementById("hour-card");
search.addEventListener("click",() => {
    let city=input.value;
    console.log(city);
    weather(city);
});
async function weather(city) {
    const url= `https://api.weatherapi.com/v1/forecast.json?key=b87d8cfc4b9d42608b8183759260807&q=${city}&days=10&aqi=no&alerts=no`;
    const res= await fetch(url);
    const data= await res.json();
    console.log(data.location.name);
    console.log(data.current.temp_c);
    const aname= document.getElementById("name");
    aname.innerText= data.location.name;
    const atemp= document.getElementById("temp");
    atemp.innerText= data.current.temp_c;
    const alike= document.getElementById("like");
    alike.innerText= data.location.feelslike_c;
    const auv= document.getElementById("uv");
    auv.innerText= data.location.uv;
    const awind= document.getElementById("wind");
    awind.innerText= data.location.wind_kph;
    const arain= document.getElementById("${chance_of_rain}%");
    arain.innerText= data.location.wind_kph;
    const avsbt= document.getElementById("vsbt");
    avsbt.innerText= data.location.vis_km;
    const ahmdt= document.getElementById("hmdt");
    ahmdt.innerText= data.location.humidity;
    const arise= document.getElementById("rise");
    arise.innerText= data.forecast.forecastday[0].astro.sunrise;
    const aset= document.getElementById("set");
    aset.innerText= data.forecast.forecastday[0].astro.sunset;
    data.forecast.forecastday[0].hour.forEach((hdata) => {
        const clone= hcard.contentEditable.cloneNode(true);
        clone.querySelector(".htemp").innerText= `${hour.temp_c}°C`
        clone.querySelector(".hrain").innerText= `${hour.chance_of_rain}%`
        clone.querySelector(".hour").innerText= hour.time.split(" ")[1];
    }
)};