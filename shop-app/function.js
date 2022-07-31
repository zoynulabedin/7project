const setAlert = (msg, type='danger') => {
    return `<div class="alert alert-${type}" role="alert">
    ${msg}
  </div>`
}


const createLSData = (key,value) => {
 let data = [];
 if(localStorage.getItem(key)){
      data = JSON.parse(localStorage.getItem(key));
 }
  data.push(value);
  localStorage.setItem(key, JSON.stringify(data));
}


const getLSData = (key) => {
    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key));
    }else{
      return false;
    }
}

//update localStorage
const updateLSData = (key,index,value) => {
    let data = JSON.parse(localStorage.getItem(key));
    data[index] = value;
    localStorage.setItem(key, JSON.stringify(data));
}
const updatedata = (key, array) =>{
  localStorage.setItem(key, JSON.stringify(array));
}



// remove item from local storage
const removeLSData = (key,index) => {
  let data = getLSData(key);
  data.splice(index,1);
  localStorage.setItem(key, JSON.stringify(data));
}




