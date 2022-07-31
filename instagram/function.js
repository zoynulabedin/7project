$(document).ready(function(){
    $(".all-items").owlCarousel({
        loop:true,
        margin:5,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
  });
const setAlert = (message,type='danger') => {
    return `<div class="alert alert-${type}" role="alert">${message}</div>`;
}

// email check pattern for validation

const emailCheck = (email) => {
    let emailPattern = /^[a-z0-9_]*@[a-z]{2,}.[a-z]{2,5}$/;
    return emailPattern.test(email);
}

 //phone number check pattern for validation

const phoneCheck = (phone) => {
    let phonePattern =  /^(\+8801|01)[0-9]{9}$/;
    return phonePattern.test(phone);
}

//  create a function that will be send data to local storage

const sendDatatoLocalStorage = (key, value) =>{
    let data = [];
    if(localStorage.getItem(key)){
        data = JSON.parse(localStorage.getItem(key));
    }
    data.push(value);
    localStorage.setItem(key, JSON.stringify(data));
}

// create a function that will be get data from local storage

    const getDatafromLocalStorage = (key) => {
        let data = [];
        if(localStorage.getItem(key)){
            data = JSON.parse(localStorage.getItem(key));
        }
        return data;
    }

// create a function that will be  delete data from local storage

    const deleteDatafromLocalStorage = (key, index) => {
        let data = [];
        if(localStorage.getItem(key)){
            data = JSON.parse(localStorage.getItem(key));
        }
        data.splice(index,1);
        localStorage.setItem(key, JSON.stringify(data));
    }

    // create a function that will be  update data from local storage

    const updatedata = (key, array) =>{
        localStorage.setItem(key, JSON.stringify(array));
     }

     