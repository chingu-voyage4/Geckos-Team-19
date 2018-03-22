//defulat military time
let hours = new Date().getHours();
let mins = new Date().getMinutes();
let milTime = hours + "" + mins;
//get time zone time and date


export default function () {
    let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true});
    return { time: time };
}

