import { dateFormat } from "./formatters";

const mainContainer = <HTMLElement>document.querySelector(".container__main");
const forecastContainer = <HTMLElement>document.querySelector(".container__forecast");

export function showForecast(data: any) {
    forecastContainer.style.display = "flex";
    mainContainer.style.display = "none";
    const btnHourly = <HTMLElement>document.querySelector(".btn-hourly")
    btnHourly.style.display = "none";

    for (let i = 1; i < 24; i++) {
        const time = dateFormat(data.hourly[i].dt);
        const temp = Math.round(data.hourly[i].temp - 273.15);;
        const imgSrc = `http://openweathermap.org/img/wn/${data.hourly[i].weather[0].icon}@2x.png`;

        const forecastItem = document.createElement("div");
        const forecastItemContent = `
            <div class="container__forecast__item">
                <span>${time}</span>
                <span>${temp}°C</span>
                <img src="${imgSrc}">
            </div>
        `;
        forecastContainer.appendChild(forecastItem);
        forecastItem.innerHTML = forecastItemContent;
    }
}
