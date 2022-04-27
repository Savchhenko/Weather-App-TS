import { showWeather } from "./show-weather";
import { apiKey } from "./main";
import { currentCityName } from "./main";

export function xhrRequest() {
    let xhr = new XMLHttpRequest();
        xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&appid=${apiKey}`);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function() {
            if (xhr.status != 200) {
                alert("Something was going wrong")
            } else {
                showWeather(xhr.response);
            }
        };
}