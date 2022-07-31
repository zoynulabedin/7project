
const hourshand = document.querySelector('.hour-hand');
const minutehand = document.querySelector('.minute-hand');
const secondhand = document.querySelector('.second-hand');
const ampmcl = document.querySelector('.ampm');
const setTimeForm = document.getElementById('setTimeForm');
const sound =  document.getElementById('sound');
const successmsg = document.querySelector('.success-message');
const timeleft = document.querySelector('.time-left');
const resetTime = document.getElementById('resetTime');
const timereset = document.querySelector('.time-reset');

setTimeForm.onsubmit = (e) =>{
    e.preventDefault();
   let getval = new FormData(e.target);
   let data = Object.fromEntries(getval.entries());
    let time = data.time;
    let timeArr = time.split(':');
    let sethours = timeArr[0];
    let setMinutes = timeArr[1];
    let setSeconds = timeArr[2];


    // validate
    if(!time){
        successmsg.innerHTML = setAlert('Please enter a time', 'danger');
    }else{
        setTimeFlocal(sethours, setMinutes,setSeconds);
        successmsg.innerHTML = setAlert('Time set successfully', 'success');
        
    }
    timeleft.style.display = 'block';
    timereset.style.display = 'none';


  
    
}

  

setInterval(() => {

    const d = new Date();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const second = d.getSeconds();


    const ampm = hour >= 12 ? 'PM' : 'AM';


    // alarm set time

    hourshand.innerHTML = `${hour}`;
    minutehand.innerHTML = `${minute}`;
    secondhand.innerHTML = `${second}`;
    ampmcl.innerHTML = `${ampm}`;



const getlHours = getTimeFlocal('hour').hour;
const getlMinutes = getTimeFlocal('minute').minute;
const getlSeconds = getTimeFlocal('seconds').seconds;


const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();
const scurrentSeconds = currentTime.getSeconds();

if(currentHour == getlHours && currentMinute == getlMinutes && scurrentSeconds == getlSeconds){
    sound.play();
}
    

    // time left
    let timeLefthours = Math.abs(getlHours - currentHour);
    let timeLeftMinutes = Math.abs(getlMinutes - currentMinute);
    let timeLeftSeconds = Math.abs(getlSeconds - scurrentSeconds);
   
    if(timeLefthours == 0 && timeLeftMinutes == 0 && timeLeftSeconds == 0){
        timeleft.innerHTML = `Time up`;
        timeLefthours = 0;
        timeLeftMinutes = 0;
        timeLeftSeconds = 0;
    }else{
        timeleft.innerHTML = `Time Left=> ${timeLefthours} : ${timeLeftMinutes} : ${timeLeftSeconds}`;
    }
    
    
}, 1000);


resetTime.onclick = () => {
    localStorage.clear();
    successmsg.innerHTML = setAlert('Time reset successfully', 'success');
    timeleft.innerHTML = `Reset Time`;
    timeleft.style.display = 'none';
    timereset.style.display = 'block';
    sound.pause();
}



