// DIGITAL CLOCK PROGRAM


function updateClock(){
    const now =new Date();
    const hours = now.getHours().toString().padStart(2,0);
    const meridiem =hours >= 12 ? "PM" : "AM";
    hoursAMPM= hours % 12 || 12;
    hoursAMPM= hoursAMPM.toString().padStart(2,0);
    const minutes= now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString= `${hours}:${minutes}:${seconds}`;
    const timeStringAMPM=`${hoursAMPM}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent =timeString;
    document.getElementById("clockAMPM").textContent =timeStringAMPM;
}
updateClock(setInterval(updateClock,1000));