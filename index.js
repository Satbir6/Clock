
let a;
let date;
let time;

setInterval(() => {

a = new Date();
date = a.toDateString()
time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
document.getElementById('time').innerHTML = time + " on " + date
}, 1000);