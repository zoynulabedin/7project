const ordercounter = document.getElementById('ordercounter');
const msg = document.querySelector('.msg');
const hourss = document.querySelector('.hours');
const alerm = document.getElementById('alerm');
const stop =  document.getElementById('stop');
const per = document.querySelector('.per');
let interval;
ordercounter.onsubmit = (e) => {
    e.preventDefault();
    clearInterval(interval);
    const order = new FormData(e.target);
    const {date, time} = Object.fromEntries(order.entries());
    
    if(!date || !time) {
        msg.innerHTML = alertMessage('Please fill all fields', 'danger');
    }

    
  
    let currentTime = Date.now();
    let endTime = new Date(date + ' ' + time).getTime();
   
   let intervals = setInterval(() => {
    timeing(date, time);

          
            per.style.width = `${progressBar(currentTime, endTime)}%`;
            if(progressBar(currentTime, endTime) <= 70 ){
                per.style.backgroundColor = 'yellow';
            }else if(progressBar(currentTime, endTime) <= 30){
                per.style.backgroundColor = 'red';
               
            }else if(progressBar(currentTime, endTime) < 0){
                per.style.backgroundColor = 'green';
                clearInterval(intervals);

            }
            
    },1000);

}
stop.onclick = () => {
    alerm.pause();
    per.style.width = '0%';
    clearInterval(intervals);
   
}
