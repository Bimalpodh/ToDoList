
let todoList = [
// {
//     item:'buy milk',
//     dueDate:'4/8/2023'

// },
// {
//   item:'Go to college',
//   dueDate:'4/8/2023'

// }
];
displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todoAdd');
  let DateElement = document.querySelector('#todo-Date');
  let todoItem = inputElement.value;
  let todoDate=DateElement.value;

  
  if (todoItem.trim() !== "") { // Check if the input is not empty
    todoList.push({item: todoItem,dueDate:todoDate}); // Push the new todo item
    inputElement.value = '';
    DateElement.value='';
    displayItems(); // Call displayItems to update the list
  }
}


function displayItems() {
  let containerElements = document.querySelector('.todo-Container');
  
  let newHtml = '';
  
  for (let i = 0; i < todoList.length; i++) {
    let{item, dueDate}=todoList[i];
    if(item && dueDate){
    newHtml += `<div>
    <table border=" ">
    <tr>
      <th class="table-head">Task</th>
      <th class="table-head">date</th>
      <th class="table-head">REMOVE</th>
    </tr>
    <tr>
      <td class="tdata"><span>${item}</span></td>
      <td class="tdata"><span>${dueDate}</span></td>
      <td class="tdata"><button onclick="todoList.splice(${i},1);displayItems();">Delete</button></td>
      
    </tr>
  </table>

    </div> 
    `          
  }
}
  
  containerElements.innerHTML = newHtml;
}

