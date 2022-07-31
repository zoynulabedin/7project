const todoForm = document.getElementById('todoForm');
const msg = document.querySelector('.msg');
const todotitle = document.getElementById('todo-title');


todoForm.onsubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const datalist = Object.fromEntries(data.entries());
    const {todo, opt} = datalist;
  
    if(!todo || !opt) {
        msg.innerHTML = alertMessage('Please fill all fields', 'danger');
    }else{
        saveTodo('todo',datalist);
        msg.innerHTML = alertMessage('Todo added successfully', 'success');
        todoForm.reset();
        window.location.reload();

     
    }
  
}


getdata('todo').forEach((item,index) => {
    const list = document.getElementById('list');
    const li = document.createElement('li');
    li.className = 'list-group-item';
    list.appendChild(li);
    const closbtn = document.createElement('button');
    closbtn.className = 'close';
    closbtn.id = 'closeBtnID';
    closbtn.innerHTML = '&times;';
    li.appendChild(closbtn);
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.innerHTML = item.opt;
    li.appendChild(span);
    li.innerHTML += `${item.todo}`;
    li.style.color = generateColor();
    
    
    const closss = document.getElementById('closeBtnID');
    closss.onclick = () => {
        const data = getdata('todo');
        data.splice(index,1);
        localStorage.setItem('todo',JSON.stringify(data));
        window.location.reload();
    }
});

todotitle.style.color = generateColor();