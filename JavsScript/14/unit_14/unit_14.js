const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "14e3ab03fc7ee6ab18ec768e056946d8"
}

const cities =  {
    703448: 'Kyiv, UA',
    4164138: 'Miami, US',
    2147714: 'Sydney, AU',
    6167865: 'Toronto, CA',
    2759794: 'Amsterdam, NL' 
}

function createSelector() {

    let select = document.createElement('select');
    select.id = 'city';

    for (let key in cities) {
        let option = document.createElement('option');
        option.value = key;
        option.textContent = cities[key];
        select.append(option);
    }
    document.querySelector('.out').prepend(select);
}
createSelector()

function getWeather() {
	const cityId = document.querySelector('#city').value;
    
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
        
}

function showWeather(data) {
	console.log(data);
    document.querySelector('.city-name').textContent = `City: ${data.name}`;
    document.querySelector('.temp').innerHTML = `Temperature: ${Math.round(data.main.temp)} &deg;C`;
    document.querySelector('.icon li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.descr').textContent = data.weather[0]['description'];
    document.querySelector('.wind').innerHTML = `Wind: ${data.wind.deg} deg`;
    document.querySelector('.wind-speed').innerHTML = `Wind speed: ${data.wind.speed} m/s`;
    document.querySelector('.pressure').innerHTML = `Pressure: ${Math.round(data.main.pressure * 0.75006)} mmHg`;
}

getWeather(); 
document.querySelector('#city').onchange = getWeather;
