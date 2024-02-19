
const addTodo = document.querySelector('#addtodo');
const button = document.querySelector('#button');
const todos = document.querySelector('.todos');

button.addEventListener('click', addTask);

function addTask() {

    if (addTodo.value != "") {
        let todoItem = document.createElement('li');
        let span = document.createElement('span');
        let check = document.createElement('span');

        // list item
        todoItem.innerText = addTodo.value;
        todoItem.classList.add('li');

        // Delete button
        span.classList.add('dltbutton');
        span.innerText = "\u00d7";

        // Check button

        check.classList.add('checkbutton')
        check.innerText = "✓";


        todos.appendChild(todoItem);
        todoItem.appendChild(span);
        todoItem.appendChild(check)

        span.onclick = function () {
            todos.removeChild(todoItem);
        }

        check.onclick = function () {
            todoItem.style.backgroundColor = "goldenrod";
        }

        addTodo.value = "";
    }

}

