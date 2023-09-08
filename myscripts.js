
document.addEventListener("DOMContentLoaded", function(event) { 
    console.log('working')
    const now = new Date();
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();
    const milliseconds = now.getUTCMilliseconds();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = weekday[now.getDay()];
    document.getElementById("day").innerHTML = day
    document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds}`       

})

