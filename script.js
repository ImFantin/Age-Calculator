let labels = document.querySelectorAll('label');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

let dayOutput = document.getElementById('dayOutput');
let monthOutput = document.getElementById('monthOutput');
let yearOutput = document.getElementById('yearOutput');

let days = document.getElementById('days');
let months = document.getElementById('months');
let years = document.getElementById('years');

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDate();

function reset() {
    dayOutput.innerHTML = null;
    day.style.borderColor = null;

    monthOutput.innerHTML = null;
    month.style.borderColor = null;

    yearOutput.innerHTML = null;
    year.style.borderColor = null;

    labels.forEach(function(label) {
        label.style.color = null;
    });

    days.innerHTML = '--';
    months.innerHTML = '--';
    years.innerHTML = '--';
}

function isValidDate(day, month, year) {
    let maxDaysInMonth = new Date(year, month, 0).getDate();
    return day >= 1 && day <= maxDaysInMonth;
}


function checkUpdate() {
    reset();
    let isValid = true;

    if (isNaN(day.value) || day.value === '' || day.value < 1 || day.value > 31) {
        dayOutput.innerHTML = 'Must be a valid day';
        dayOutput.style.color = 'hsl(0, 100%, 67%)';
        day.style.borderColor = 'hsl(0, 100%, 67%)';
        labels.forEach(function(label) {
            label.style.color = 'hsl(0, 100%, 67%)';
        });
        isValid = false;
    }

    else if (!isValidDate(day.value, month.value, year.value)) {
        dayOutput.innerHTML = 'Invalid date';
        dayOutput.style.color = 'hsl(0, 100%, 67%)';
        day.style.borderColor = 'hsl(0, 100%, 67%)';
        labels.forEach(function(label) {
            label.style.color = 'hsl(0, 100%, 67%)';
        });
        isValid = false;
    }

    if (isNaN(month.value) || month.value === '' || month.value < 1 || month.value > 12) {
        monthOutput.innerHTML = 'Must be a valid month';
        monthOutput.style.color = 'hsl(0, 100%, 67%)';
        month.style.borderColor = 'hsl(0, 100%, 67%)';
        labels.forEach(function(label) {
            label.style.color = 'hsl(0, 100%, 67%)';
        });
        isValid = false;
    }

    if (isNaN(year.value) || year.value === '' || year.value < 1 || year.value > currentYear) {
        yearOutput.innerHTML = 'Must be in the past';
        yearOutput.style.color = 'hsl(0, 100%, 67%)';
        year.style.borderColor = 'hsl(0, 100%, 67%)';
        labels.forEach(function(label) {
            label.style.color = 'hsl(0, 100%, 67%)';
        });
        isValid = false;
    }

    if (isValid) {
        calculateAge();
    }
}

function calculateAge() {
    let ageYears = currentYear - year.value;
    let ageMonths = currentMonth - month.value;
    let ageDays = currentDay - day.value;

    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += daysInMonth(currentMonth - 1, currentYear);
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    years.innerHTML = ageYears;
    months.innerHTML = ageMonths;
    days.innerHTML = ageDays;
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

