const setAlert = (msg, type) => {
    return `<div class="alert alert-${type}" role="alert">
   ${msg}
  </div>`
}


// create a function that will be send data to local storage only
const setTimeFlocal = (hour, minute,seconds) => {
    localStorage.setItem('hour', hour);
    localStorage.setItem('minute', minute);
    localStorage.setItem('seconds', seconds);
}

// create a function that will be get data from local storage only
const getTimeFlocal = () => {
    let hour = localStorage.getItem('hour');
    let minute = localStorage.getItem('minute');
    let seconds = localStorage.getItem('seconds');
    return {
        hour,
        minute,
        seconds
    }
}