function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    clock.textContent = `${hours}:${minutes}:${seconds}`;
    clock.classList.remove('fade');
    void clock.offsetWidth;
    clock.classList.add('fade')
}
updateClock();
setInterval(updateClock, 1000);

function date(){
    const newDate = document.getElementById('date');
    const nowDate = new Date();
    newDate.textContent = `${nowDate.getDate()}-${nowDate.getMonth()}-${nowDate.getUTCFullYear()}`;
}
date();

function day(){
    const currentDay = new Date();
    // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    // const displayDay = days[currentDay.getDay()];
    // return displayDay;
    return currentDay.toLocaleDateString('en-US', {weekday: 'long'})
}

function displayDayName(){
    const dayName = day();
    document.getElementById('day').innerText = dayName;
}
setInterval(displayDayName, 1000);
window.onload = displayDayName;
