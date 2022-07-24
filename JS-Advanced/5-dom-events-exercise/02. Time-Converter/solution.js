function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn');
    let minutesButton = document.getElementById('minutesBtn');
    let secondsButton = document.getElementById('secondsBtn');

    daysButton.addEventListener('click', onConvert);
    hoursButton.addEventListener('click', onConvert);
    minutesButton.addEventListener('click', onConvert);
    secondsButton.addEventListener('click', onConvert);

    let ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convertTime(value, unit) {
        let days = value / ratios[unit];

        let objTime = {
            days: days,
            hours: days * ratios.hours,
            minutes: days * ratios.minutes,
            seconds: days * ratios.seconds
        };
        return objTime;
    }

    function onConvert (event) {
        let element = event.target.previousElementSibling;
        let value = element.value;
        let unit = element.id;
        
        let time = convertTime(Number(value), unit);
        //console.log(time);
        
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }  
    
}