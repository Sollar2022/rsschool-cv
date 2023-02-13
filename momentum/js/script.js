
const time = document.querySelector('.time');
const dateBunner = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
let randomNum;
// const name = document.querySelector('.name');

// SHOW TIME & DATE
function showTime() {
	const date = new Date();
	const currentTime = date.toLocaleTimeString();
	time.textContent = currentTime;
 	setTimeout(showTime, 1000);
 	showDate ();
 	showGreeting();
}

showTime();

function showDate () {
	const date = new Date();
	const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};
	const currentDate = date.toLocaleDateString('en-GB', options);
	dateBunner.textContent = currentDate;
}

// GREETING

function showGreeting() {
	const date = new Date();
	const hours = date.getHours();
	const timeOfDay = getTimeOfDay();
	const greetingText = `Good ${timeOfDay}`;
	greeting.textContent = greetingText;
	
}

function getTimeOfDay() {
	const date = new Date();
	const hours = date.getHours();
	if (hours >= 6 && hours < 12)
    {
        timeOfDay = "morning";
    }
    // else if (hours >= 11 && hours < 13)
    // {
    //     timeOfDay = "noon";
    // }
    else if (hours >= 12 && hours < 18)
    {
        timeOfDay = "afternoon";
    }
    else if (hours >= 18 && hours <24)
    {
        timeOfDay = "evening";
    }
    else if (hours >= 0 && hours < 6)
    {
        timeOfDay = "night";
    }
    // else if (hours > 0 && hours <= 4)
    // {
    //     timeOfDay = "late night";
    // }
	 return timeOfDay;
}

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);


// SLIDER IMAGES

function getRandomNum(min, max) {
	 randomNum = Math.floor(Math.random() * (max - min)) + min;

}

getRandomNum(1, 21);

function setBg() {
	const timeOfDay = getTimeOfDay();
	const bgNum = String(randomNum).padStart(2, "0");
	console.log(bgNum);
	console.log(timeOfDay);

	const img = new Image();
	// console.log(img);

  	img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  	img.onload = () => {      
    body.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg")`;
    // console.log(img);
  };

}

setBg();

console.log(randomNum);
function getSlideNext() {
	console.log(randomNum);
	// getRandomNum(1, 21);
	setBg();
	if (randomNum < 20) {
		randomNum = randomNum + 1;
	} else
	if (randomNum = 20) {
		randomNum = 1;
	};
	
}

function getSlidePrev() {
	console.log(randomNum);
	// getRandomNum(1, 21);
	setBg();
	if (randomNum > 1) {
		randomNum = randomNum - 1;
	} else
	if (randomNum = 1) {
		randomNum = 20;
	};
	setBg();
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
console.log(randomNum);


// WEATHER

// https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=56ce2b2962a8c093c0a8ae4741324607&units=metric
// https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric



async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;

  console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
}
getWeather()

city.addEventListener('change', getWeather);

// QUOTES

async function getQuotes() {  
  const quotes = 'https://favqs.com/quotes/aaron-levenstein/61826-statistics-ar-';
  const res = await fetch(quotes);
  const data = await res.json(); 
  console.log(data);
}
getQuotes();