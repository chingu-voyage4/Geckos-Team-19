//defulat military time
let hours = new Date().getHours();
let mins = new Date().getMinutes();
let milTime = hours + "" + mins;
//get time zone time and date
let getDateTime = new Date().toLocaleString();
let time = getDateTime.substring(11, 15);

export default function () {
    if (time.length > 4) {
        time.substring(11, 16);
    } else {
        time.substring(11, 15);
    
    }
    return (
    [{ time: time, },
    { time: milTime}
        ] 
        )
}

