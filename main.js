const cityInput = document.getElementById("cityInput")
const findBtn = document.getElementById("searchBtn")

//Defining elements
const cityLabel = document.getElementById("city")
const temperatureLabel = document.getElementById("temp")
const descLabel = document.getElementById("main")
const humidityLabel = document.getElementById("humidity")
const windSpeedLabel = document.getElementById("windspeed")

//Setting text for labels

function getCity(){
    let city = cityInput.value 
    getData(city)
}


function getData(currentCity){
    let apiKey = "27e6dcba9273868c29160d303e857e82"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}`

    fetch(url).then(response => response.json()).then(result => displayData(currentCity, result))
}

function displayData(city, data){
    currentTemp = Math.floor(data.main.temp - 273.15)
    currentDesc = data.weather[0].main
    currentHumidity = data.main.humidity
    currentWindSpeed = data.wind.speed
  
    cityLabel.innerText = data.name
    temperatureLabel.innerText = `${currentTemp}°C`
    document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    descLabel.innerText = currentDesc
    humidityLabel.innerText =  `Humidity: ${currentHumidity}%`
    windSpeedLabel.innerText = `Wind speed: ${currentWindSpeed} m/s`
}

//Enter to find
document.addEventListener("keydown", e => {
    if (e.keyCode == 13 && cityInput.value != ""){
        getCity()
    }
})

//Press button to find
findBtn.addEventListener("click", e => {
        getCity()
    }
)



