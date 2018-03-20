let getDateTime = new Date().toLocaleString();
const DATE = getDateTime.substring(0, 9);

export default function () {
    return { date: DATE.substring(2, 4) };
}