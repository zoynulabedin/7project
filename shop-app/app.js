const product_from = document.getElementById('product_from');
const alldatashow = document.getElementById('alldatashow');
const msg = document.querySelector('.msg');
const total_price = document.getElementById('total');
const product_update = document.getElementById('product_update');
const update_form_d = document.getElementById('update_form_d');

if(!getLSData('product') || getLSData('product').length === 0){
  alldatashow.innerHTML = `<tr><td colspan="7">No product found</td></tr>`;
}

let allProductsShow = () => {
  let totalPrice = 0;
let totalquantity = 0;
getLSData('product').forEach((item,index) => {
    const {price,image,name,quantity} = item;
    totalPrice += price * quantity;
    totalquantity += parseInt(quantity);
   

   let output = '';
    output = `
    <tr data-product="${index+1}">
    <td>${index+1}</td>
    <td><img width="80" src="${image}" alt="" /></td>
    <td>${name}</td>
    <td>${price} BDT</td>
    <td>${quantity}</td>
    <td>${price * quantity} BDT</td>
    <td>
      <a href="#product_view" data-bs-toggle="modal" index-data="${index+1}" class="btn btn-primary"
        ><i class="fas fa-eye"></i
      ></a>
      <a href=""  index-data="${index+1}" class="btn btn-info"
        ><i class="fas fa-edit"></i
      ></a>
      <a href="#"  index-data="${index+1}" class="btn btn-danger"
        ><i class="fas fa-trash"></i
      ></a>
    </td>
  </tr>
 
    `;
    alldatashow.innerHTML += output;
});

total_price.innerHTML = `
    <tr>
    <td>Summary:</td>
        <td></td>
        <td></td>
        <td></td>
        <td>${totalquantity}</td>
        <td>${totalPrice} BDT</td>
        <td></td>
                  </tr>

`

}




product_from.onsubmit = (e) => {
  e.preventDefault();
  const form_data = new FormData(e.target);
  const productobject = Object.fromEntries(form_data.entries());
  const {price,image,name,quantity} = productobject;
  if(!price ||!image ||!name ||!quantity){
      msg.innerHTML = setAlert('Please fill all fields', 'danger');
  }else{
      createLSData('product',productobject);
      msg.innerHTML = setAlert('Product added successfully', 'success');
      location.reload();
      product_from.reset();
     
  }
 
}


alldatashow.onclick = (e) => {
    e.preventDefault();
 
  if(e.target.classList.contains('fa-trash')){
    alert('Are you sure to delete this product?');
    const index = e.target.parentElement.parentElement.parentElement.getAttribute('data-product');
    removeLSData('product',index-1);
    location.reload();
  }else if(e.target.classList.contains('fa-eye')){
    const index = e.target.parentElement.parentElement.parentElement.getAttribute('data-product');
      console.log(index);
      const productDataa = getLSData('product')[index-1];
      const {price,image,name,quantity} = productDataa;
     let view = `
     <img width="150" class="img-responsive"
                  src="${image}"
                  alt=""
                />
                <div class="card-body">
                  <p>Product Name: ${name}</p>
                  <p>Price: ${price}</p>
                  <p>Quantity: ${quantity}</p>
              </div>
     `
     document.querySelector('.pd').innerHTML = view;
  }else if(e.target.classList.contains('fa-edit')){
    const crosss = document.getElementById('crosss');
    crosss.onclick = () => {
      product_update.style.display = 'none';
    }
    const index = e.target.parentElement.parentElement.parentElement.getAttribute('data-product');
    const productsss = getLSData('product')[index-1];
    const {price,image,name,quantity} = productsss;
    update_form_d.querySelector('[name="uprice"]').value = price;
    update_form_d.querySelector('[name="uimage"]').value = image;
    update_form_d.querySelector('[name="uname"]').value = name;
    update_form_d.querySelector('[name="uquantity"]').value = quantity;
    update_form_d.querySelector('[name="uindexx"]').value = index;
    product_update.style.display = 'block';

    update_form_d.onsubmit = (e) => {
      e.preventDefault();
      const upform_data = new FormData(e.target);
      const upproductobject = Object.fromEntries(upform_data.entries());
      const {uindexx,uname,uprice,uquantity,uimage} = upproductobject;
      if(!uprice ||!uimage ||!uname ||!uquantity){
          msg.innerHTML = setAlert('Please fill all fields', 'danger');
      }else{
        let getlsData = getLSData('product');
        
        getlsData[uindexx-1] = {
          price: uprice,
          image: uimage,
          name: uname,
          quantity: uquantity

        }
        updatedata('product',getlsData);
        location.reload();
        msg.innerHTML = setAlert('Product updated successfully', 'success');
        
         
      }

    }

   
}
  
  }

  allProductsShow();

 




