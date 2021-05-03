const clock = (text_clock, startClock, stopClock) =>{
    let clock;
    document.addEventListener('click', e =>{
        
        if(e.target.matches(startClock)){
            clock = setInterval(() => {
                let fecha = new Date();
                document.querySelector(text_clock).innerHTML = `${fecha.toLocaleTimeString()}`;
            }, 0);
            e.target.disabled = true;
            document.querySelector(stopClock).disabled = false;
        }
        if (e.target.matches(stopClock)) {
            clearInterval(clock);
            document.querySelector(startClock).disabled = false;
            document.querySelector(text_clock).innerHTML = '';
            e.target.disabled = true;
            
        }
    })
}
const alarm = (startAlarm, stopAlarm ) =>{
    let alarm;
    document.addEventListener('click', e =>{
        if (e.target.matches(startAlarm)) {
            e.target.disabled = true;
            document.querySelector('#audio').muted = false;
            alarm = setInterval(() => {
                document.querySelector('#audio').play();
            }, 0);

        }
        if (e.target.matches(stopAlarm)) {
            clearInterval(alarm);
            document.querySelector('#audio').pause();
            document.querySelector('#audio').currentTime = 0;
            document.querySelector(startAlarm).disabled = false;
        }
    })
}

export {clock, alarm};


