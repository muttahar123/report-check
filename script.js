

var Name = document.getElementById('todo_input1');
var Maths = document.getElementById('todo_input2');
var Physics = document.getElementById('todo_input3');
var Chemistry = document.getElementById('todo_input4');
var English = document.getElementById('todo_input5');
var Urdu = document.getElementById('todo_input6');
var add_todo_btn = document.getElementById('add_todo_btn');
var del_todo_btn = document.getElementById('del_todo_btn');
var todo_list = document.getElementById('todo_list');


del_todo_btn.addEventListener('click', function () {
  todo_list.innerHTML = ''
})

add_todo_btn.addEventListener('click' , function(){
    if(!Name.value.trim()) return alert('Please type somthing...!');

    var list_item = 
   ` <tr>
      <th scope="row">1.</th>
      <td>${Name.value}</td>
      <td>Maths</td>
      <td>${Maths.value}/100</td>
      <td>${Maths.value*100/100}%</td>
     
    </tr>
     <tr>
    <th scope="row">2.</th>
    <td>${Name.value}</td>
    <td>Physics</td>
    <td>${Physics.value}/100</td>
    <td>${Physics.value*100/100}%</td>
  </tr>


  
<tr>
<th scope="row">3.</th>
<td>${Name.value}</td>
<td>Chemistry</td>
<td>${Chemistry.value}/100</td>
<td>${Chemistry.value*100/100}%</td>
</tr>

<tr>
<th scope="row">4.</th>
<td>${Name.value}</td>
<td>English</td>
<td>${English.value}/100</td>
<td>${English.value*100/100}%</td>
</tr>


<tr>
<th scope="row">5.</th>
<td>${Name.value}</td>
<td>Urdu</td>
<td>${Urdu.value}/100</td>
<td>${Urdu.value*100/100}%</td>

</tr>
  
  `

    // `<li>
    //   <span>${todo_input.value}</span>
    //   <button class="edit-btn" onclick="edit(this)">Edit</button>
    //   <button class="del-btn" onclick="del(this)">Del</button>
    // </li>`
    todo_list.innerHTML += list_item

    Name.value = ''
})

function edit(element) {
  console.log('Edit=>', element.previousElementSibling.innerText)

  var previousValue = element.previousElementSibling.innerText

  var updatedValue = prompt('Edit Value', previousValue)

  element.previousElementSibling.innerText = updatedValue

}

function del(element) {
  element.parentElement.remove()

}

