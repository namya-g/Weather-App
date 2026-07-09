console.log("JS file is connected ")
const apiKey="b87d8cfc4b9d42608b8183759260807";
const input=document.getElementById("city_name");
const search=document.getElementById("search");
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
    const awind= document.getElementById("wind");
    awind.innerText= data.location.wind_kph;
}