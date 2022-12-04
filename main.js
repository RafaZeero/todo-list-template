// selectors

// Button create todo
const addTodoButton = document
  .querySelector('.create-todo_button')
  .addEventListener('click', createTodo);

const addTodoInput = document.querySelector('.create-todo_input');

// Add new todo to the list
function createTodo() {
  // validate new todo
  validateTodo();
  // create html elements
  // insert text to todo html element
  // create new todo
  // add todo to the list of todos

  console.log('create todo');
}

function validateTodo(value) {
  addTodoInput.style.borderColor = 'red';
}
