console.log("JS file is connected ")
const apiKey="b87d8cfc4b9d42608b8183759260807";
const input=document.getElementById("city_name");
const search=document.getElementById("search");
const hourly=document.getElementById("hourly");
const hcard=document.getElementById("hour-card");
const ten_day=document.getElementById("ten-day");
const tcard=document.getElementById("day-card");
search.addEventListener("click",() => {
    let city=input.value;
    weather(city);
});
async function weather(city) {
    const url= `https://api.weatherapi.com/v1/forecast.json?key=b87d8cfc4b9d42608b8183759260807&q=${city}&days=10&aqi=no&alerts=no`;
    const res= await fetch(url);
    const data= await res.json();
    const aname= document.getElementById("name");
    aname.innerText= data.location.name;
    const atemp= document.getElementById(`${temp}°C`);
    atemp.innerText= data.current.temp_c;
    const alike= document.getElementById(`${like}°C`);
    alike.innerText= data.location.feelslike_c;
    const auv= document.getElementById("uv");
    auv.innerText= data.location.uv;
    const awind= document.getElementById("wind");
    awind.innerText= data.location.wind_kph;
    const arain= document.getElementById(`${chance_of_rain}%`);
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
        const clone= hcard.content.cloneNode(true);
        clone.querySelector(".htemp").innerText= `${hdata.temp_c}°C`;
        clone.querySelector(".hrain").innerText= `${hdata.chance_of_rain}%`;
        clone.querySelector(".hour").innerText= hdata.time.split(" ")[1];
        hourly.appendChild(clone);
    });
    data.forecast.forecastday.forEach((tdata) => {
        const clone= tcard.content.cloneNode(true);
        clone.querySelector(".tdate").innerText=tdata.date;
        clone.querySelector(".ticon").src="https:"+tdata.condition.icon;
        clone.querySelector(".train").innerText=`${tdata.daily_chance_of_rain}%`
        clone.querySelector(".tdate").innerText=tdata.date;
        clone.querySelector(".thigh").innerText= `${tdata.maxtemp_c}°C`;
        clone.querySelector(".tlow").innerText= `${tdata.mintemp_c}°C`;
        clone.querySelector(".thmdt").innerText=tdata.avghumidity;
        clone.querySelector(".tuv").innerText=tdata.uv;
        ten_day.appendChild(clone);
    });
}