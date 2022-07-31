const alertMessage = (message, type="danger") => {
    return `<div class="alert alert-${type}" role="alert">
    ${message}
  </div>`;
}

// create a function that will be send data to local storage

const saveTodo = (key,value) => {
    let data = [];
    if(localStorage.getItem(key)){
        data = JSON.parse(localStorage.getItem(key));  
    }
    data.push(value);
    localStorage.setItem(key,JSON.stringify(data));
}

// create a function that will be get data from local storage

const getdata = (key) => {
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
    }

}

// create a function that will be generate color code
const generateColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}