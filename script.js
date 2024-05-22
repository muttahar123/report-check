

var todo_input = document.getElementById('todo_input');
var add_todo_btn = document.getElementById('add_todo_btn');
var del_todo_btn = document.getElementById('del_todo_btn');
var todo_list = document.getElementById('todo_list');

add_todo_btn.addEventListener('click' , function(){
    if(!todo_input.value.trim()) return alert('Please type somthing...!');

    var list_item = 
    `<li>
      <span>${todo_input.value}</span>
      <button class="edit-btn" onclick="edit(this)">Edit</button>
      <button class="del-btn" onclick="del(this)">Del</button>
    </li>`
})

