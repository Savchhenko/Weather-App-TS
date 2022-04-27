const weatherContainer = <HTMLElement>document.querySelector(".container__weather");

export function showWeather(data: any) {
    const time = new Date().toLocaleTimeString().slice(0,-3);
    const temp = Math.round(data.main.temp - 273.15);
    const imgSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherContainer.style.display = "flex";

    weatherContainer.innerHTML = `
        <h1 class="container__weather--city-name">${data.name}</h1>
        <span>Status at ${time}</span>
        <h2 class="container__weather--temp">${temp}°C</h2>
        <h2>${data.weather[0].description}</h2>
        <img src=${imgSrc}>
        <div>
            <button class="btn-update btn">Update</button>
            <button class="btn-hourly btn">Hourly forecast</button>
        <div>
    `;
};
