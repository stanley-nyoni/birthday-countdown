let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

let weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let countdownText = document.querySelector('.countdown-text');
let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let birthdayDate = new Date(2022, 10, 10, 0,0,0);

function birthdayCountDown(){


    let bDay = weekDay[(birthdayDate.getDay())];
    let bDate = birthdayDate.getDate();
    let bMonth = months[(birthdayDate.getMonth())];
    let bYear = birthdayDate.getUTCFullYear();
    let bHour = birthdayDate.getHours();
    let bMinute = birthdayDate.getMinutes();

    countdownText.innerHTML = "Stanley M Nyoni's birthday is on " + bDay + "," + bDate + " " + bMonth + " " + bYear + ", " + "0" + bHour + ":"+ "0" + bMinute;

let birthDate = birthdayDate.getTime();
let today = new Date().getTime();

let timeLeft = birthDate - today;

let s = 1000;
let m = s * 60;
let h = m * 60;
let d = h * 24;

let daysLeft = Math.floor(timeLeft / d);
let hoursLeft = Math.floor((timeLeft % d) / h );
let minutesLeft = Math.floor((timeLeft % h) / m );
let secondsLeft = Math.floor((timeLeft % m) / s );

hoursLeft = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;




days.innerText = daysLeft;
hours.innerText = hoursLeft;
minutes.innerText = minutesLeft;
seconds.innerText = secondsLeft;
}

setInterval(birthdayCountDown, 1000)



