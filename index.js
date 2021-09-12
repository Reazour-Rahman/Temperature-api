const API_KEY = `d2c07d6bde7865f58478d4f333f95fc5`
/* load data */
const searchTemperature = () =>{
    const inputField  = document.getElementById('city-name');
    const inputText = inputField.value;

    inputField.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${API_KEY}&units=metric`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.name != undefined) {
            displayData(data, data.weather)
        }
        else{
            document.getElementById('result').textContent = '';
            valid = document.getElementById('valid');
            valid.innerHTML =`Please defined a valid city`
        }
    })
};
// searchTemperature()
const displayData = (data, weathers) =>{
    console.log(data)
    const city = document.getElementById('city');
    city.innerText =`${data.name}`

    const temperature = document.getElementById('temperature')
    temperature.innerText = `${data.main.temp}`

    weathers.forEach( weather => {
        
        const url = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
        const weatherIcon = document.getElementById('weather-icon');
        // weatherIcon.src = `${url}` 
        weatherIcon.setAttribute('src', url)

        const condition = document.getElementById('condition');
        condition.innerText = `${weather.main}`
    });
}
/* api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */