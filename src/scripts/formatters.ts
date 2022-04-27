// Форматирует координату, чтобы она содержала строго 2 цифры после запятой
export const calcCoord = function (num: number): string {
    let coord: string = '';

    if ((num > 0 && num > 9) || (num < 0 && num > -10)) {
        coord = num.toString().slice(0, 5);
    } else if (num > 0 && num < 10) {
        coord = num.toString().slice(0, 4);
    } else if (num < 0 && num <= -10) {
        coord = num.toString().slice(0, 6);
    }

    if (coord.split(".")[1].length === 1) {
        coord = coord + "0";
    } else if (coord.split(".")[1].length === 0) {
        coord = coord + "00";
    }

    return coord;
};

export function dateFormat(num: number): string {
    const date = new Date(num * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();

    const formattedDate = hours + ':' + minutes.substring(-2);

    return formattedDate;
}
