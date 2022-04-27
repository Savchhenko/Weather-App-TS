import { showForecast } from "./show-forecast";

export async function fetchRequest(api: string) {
    let response = await fetch(api);
    if (response.ok) {
        let json = await response.json();
        showForecast(json);
    } else {
        alert("Wrong city");
        console.log("Ошибка HTTP: " + response.status);
    }
}