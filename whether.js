const apikey="fdc9f6fe8cbf260136ec2cc15529ddf7";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbtn = document.querySelector('.search button');
const searchz = document.querySelector('.search input');
const weathericon=document.querySelector('.w-i');
async function weather(city){
    const res =await fetch(apiurl + city+ `&appid=${apikey}`);
    if (res.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else{
        var data=await res.json();
        document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp )+ "°c";
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+"km/h";
    if (data.weather[0].main=='Clear'){
      weathericon.src = "images/clear.png"
    }
    else if (data.weather[0].main=='Clouds'){
        weathericon.src = "images/clouds.png"
      }
      else if (data.weather[0].main=='Drizzle'){
        weathericon.src = "images/drizzle.png"
      }
      else if (data.weather[0].main=='Rain'){
        weathericon.src = "images/rain.png"
      }
      else if (data.weather[0].main=='Mist'){
        weathericon.src = "images/mist.png"
      }
      else if (data.weather[0].main=='Snow'){
        weathericon.src = "images/snow.png"
      }
     document.querySelector('.weather').style.display = "block";
     document.querySelector('.error').style.display = "none";
    }
    }
searchbtn.addEventListener('click', ()=>{
   weather(searchz.value);
})

