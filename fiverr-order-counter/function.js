const alertMessage = (message,type='danger') => {
    return `<div class="alert alert-${type}" role="alert">
    ${message}
  </div>`;
}

// timeing function for
const timeing = (date, time) => {
    let currentTime = Date.now();
    let endTime = new Date(date + ' ' + time).getTime();
    let allmilisecons = Math.floor(Math.abs(endTime - currentTime));
    let allSeconds = Math.floor(allmilisecons / 1000);
    let allMinutes = Math.floor(allSeconds / 60);
    let allhours = Math.floor(allMinutes / 60);
    let allDays = Math.floor(allhours / 24);
      

      // final result of

      let days =  allDays;
      let hours = allhours % 24;
      let minutes = allMinutes % 60;
      let seconds = allSeconds % 60;

      hourss.innerHTML = `${days} Days :${hours} hours :${minutes} minutes :${seconds} seconds`;

      if(allSeconds <= 0) {
          alerm.play();
          clearInterval(interval);
          hourss.innerHTML = 'Time is up';
      }
      if( allSeconds <= 1000) {
          hourss.style.color = 'red';
      }
}

// progressbar result

const progressBar = (startTime, endTime) => {
    const diffTime = endTime - startTime;
    const changeTime = endTime - Date.now();
    return Math.floor((100 * changeTime)/diffTime);
}
