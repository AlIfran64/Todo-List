//Todo practice 1

const todoList = [
  {
  name: 'make dinner',
  dueDate: '2022-12-22'
},
{
  name: 'wash dishes',
dueDate: '2022-12-22'

}];

renderTodoList();

function renderTodoList(){

  let todoListHtml = '';

  todoList.forEach((todoObject, index) => {
    
    const{name , dueDate} = todoObject;
    const html = `
    <div class="name-div">${name}</div> 

    <div class="date-div">${dueDate}</div>
    
    <div class="delete-div">
    <button class="delete-button js-delete-todo-button" 
    >Delete</button>
    </div>`;
    todoListHtml += html;
  })
 
  document.querySelector('.js-todo-list').innerHTML = todoListHtml;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index)=>{
    deleteButton.addEventListener('click', () => {
      
      todoList.splice(index, 1);
      renderTodoList();
    });
  });

};

document.querySelector('.js-add-button').addEventListener('click', () => {
  addTodo();
});

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;

  todoList.push({

    //name: name,
    //dueDate: dueDate

    name,
    dueDate
    
  });


  inputElement.value = '';

  renderTodoList();
}

//Todo practice 2

