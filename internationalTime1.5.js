//Creating the lists for custom date formatting
var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var monthList = ["January","February","March","April ","May","June","July","August","September","October","November","December"];

//Setting the interval at which the clocks change
var clockInterval = setInterval(localClock, 1000);
var clockInterval = setInterval(intClock, 1000);
function localClock() {
    var today = new Date();
    var date = dayList[today.getDay()] + monthList[today.getMonth()] + "-" + today.getDate();
    document.getElementById("LocalTime").innerHTML = (date + " " + today.toLocaleTimeString());
}
// Event handling
document.getElementById("Akl").addEventListener("click", changeContent);
document.getElementById("Akl").addEventListener("mouseover", buttonHoverOn);
document.getElementById("Akl").addEventListener("mouseout", buttonHoverOff);

document.getElementById("Syd").addEventListener("click", changeContent);
document.getElementById("Syd").addEventListener("mouseover", buttonHoverOn);
document.getElementById("Syd").addEventListener("mouseout", buttonHoverOff);

document.getElementById("Nyc").addEventListener("click", changeContent);
document.getElementById("Nyc").addEventListener("mouseover", buttonHoverOn);
document.getElementById("Nyc").addEventListener("mouseout", buttonHoverOff);

document.getElementById("Ldn").addEventListener("click", changeContent);
document.getElementById("Ldn").addEventListener("mouseover", buttonHoverOn);
document.getElementById("Ldn").addEventListener("mouseout", buttonHoverOff);

document.getElementById("Bei").addEventListener("click", changeContent);
document.getElementById("Bei").addEventListener("mouseover", buttonHoverOn);
document.getElementById("Bei").addEventListener("mouseout", buttonHoverOff);

document.getElementById("Mnl").addEventListener("click", changeContent);
document.getElementById("Mnl").addEventListener("mouseover", buttonHoverOn);
document.getElementById("Mnl").addEventListener("mouseout", buttonHoverOff);

function changeContent() {
    var cityName = document.querySelector("#CityName");
    cityName.innerHTML = this.innerHTML;
    document.body.background = "images_web_app/"+cityName.innerHTML+".jpg";
} 
function buttonHoverOn() {
    document.querySelectorAll("Button");
    this.style.color = "orangered";
}
function buttonHoverOff() {
    document.querySelectorAll("Button");
    this.style.color = "black";
}

// Variable clock functions
function intClock() {
    var cityName = document.querySelector("#CityName");
    if (cityName.innerHTML=="Auckland") {
        addTime = 12;
    }
    if (cityName.innerHTML=="Sydney") {
        addTime = 10;
    }zz
    if (cityName.innerHTML=="New York") {
        addTime = -4;
    }
    if (cityName.innerHTML=="London") {
        addTime = +1;
    }
    if (cityName.innerHTML=="Beijing") {
        addTime = 8;
    }
    if (cityName.innerHTML=="Manila") {
        addTime = 8;
    }

    var intToday = new Date();
    intToday.setHours(intToday.getUTCHours() + addTime); //this is the expression that will need to change based on the button pushed
    var time = intToday.getHours() + ":" + intToday.getMinutes() + ":" + intToday.getSeconds();
    var date = dayList[intToday.getUTCDay()] + " "+ monthList[intToday.getUTCMonth()] + "-" + intToday.getUTCDate();

    if (intToday.getHours() >= 12) {
        amPM ="PM";
    }
    else {
        amPM ="AM";
    }
    document.getElementById("IntTime").innerHTML = (date + " " + time + " "+ amPM);
}
function runClock() {
    var cityName = document.querySelector("#CityName");
    if (cityName.innerHTML=="Auckland") {
        addTime = 12;
    }
    if (cityName.innerHTML=="Sydney") {
        addTime = 10;
    }
    if (cityName.innerHTML=="New York") {
        addTime = -4;
    }
    if (cityName.innerHTML=="London") {
        addTime = +1;
    }
    if (cityName.innerHTML=="Beijing") {
        addTime = 8;
    }
    var now = new Date();
    now.setHours(now.getUTCHours()+addTime)
    var hourStyle = now.getUTCHours()+addTime;
    var hour = now.getHours() % 12;
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var ms = now.getMilliseconds();

    var clock = document.querySelector("div.clock")
    var hourHand = clock.querySelector("div.hour")
    var minHand = clock.querySelector("div.minute")
    var secHand = clock.querySelector("div.second")

    var hourRotation = 30 * hour + (0.5 * min);
    var minRotation = 6 * min + (0.1 * sec);
    var secRotation = 6 * sec + 0.006 * ms;

    hourHand.style.transform = "rotate(" + hourRotation + "deg)";
    minHand.style.transform = "rotate(" + minRotation + "deg)";
    secHand.style.transform = "rotate(" + secRotation +"deg)";

requestAnimationFrame(runClock);
}
runClock();






