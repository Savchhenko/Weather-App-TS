import { calcCoord } from "./formatters";
import { showWeather } from "./show-weather";
import { fetchRequest } from "./fetch-request";
import { xhrRequest } from "./xhr-request";

export const apiKey: string = "87a4e3b57fd5877a435275e9fae66ccd";
const showBtnElem = <HTMLElement>document.querySelector(".btn-show");
const inputElem = <HTMLInputElement>document.querySelector(".container__main--city");
const dateElem = <HTMLElement>document.querySelector(".container__main--date");

export let currentCityName: string = '';

const date = new Date();
dateElem.innerHTML = date.toLocaleDateString();

showBtnElem.addEventListener("click", () => {
    currentCityName = inputElem.value;

    if (!currentCityName) {
        alert("Enter name of the city and then press the button again");
        return;
    }

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputElem.value}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found");
            } else {
                showWeather(data);
                updateBtnHandler(<HTMLElement>document.querySelector(".btn-update"));
                hourlyForecastBtnHandler(<HTMLElement>document.querySelector(".btn-hourly"), data);
            }
            inputElem.value = "";
        })
    .catch(err => console.log("Error: " + err));
})

function updateBtnHandler(btn: HTMLElement) {
    btn.addEventListener("click", () => {
        xhrRequest();
    });
};

function hourlyForecastBtnHandler(btn: HTMLElement, data: any) {
    btn.addEventListener("click", () => {
        const lon = calcCoord(data.coord.lon);
        const lat = calcCoord(data.coord.lat);
        const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&appid=${apiKey}`;

        fetchRequest(api);
    })
}
