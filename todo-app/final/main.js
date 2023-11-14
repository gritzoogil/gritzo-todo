let todos = [];

const todosList = document.getElementById('to-dos');
const todoInput = document.getElementById('textInput');
const inputBtn = document.getElementById('add');
const showEnterTodo = document.getElementById('showEnterTodo');
const enterTodo = document.getElementById('enterTo-do');

function saveToDos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadToDos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
    }
}

function showDefaultMessage() {
    todosList.innerHTML = `
        <div class="to-dos" style="--i:2">
            <i class='bx bxs-coffee coffee'></i>
            <div class="to-do-intro">
                <h3>What do you need to get done today?</h3>
                <p>Tasks added here will be saved even if you leave the site. Click + to add a task.</p>
            </div>
        </div>
    `;
}

window.addEventListener('load', function() {
    loadToDos();
    if (todos.length === 0) {
        showDefaultMessage();
    } else {
        showTodo();
    }
});

function showTodoInput() {
    enterTodo.style.display = 'block';
}

showEnterTodo.addEventListener('click', showTodoInput);

function addTodo(e) {
    e.preventDefault();
    let textValue = todoInput.value;
    todos.push(textValue);
    saveToDos();
    todosList.innerHTML = '';
    todoInput.value = '';
    showTodo();
    enterTodo.style.display = 'none';
}

inputBtn.addEventListener('click', addTodo);

function removeTodo(index) {
    todos = todos.filter((todo, i) => {
        return i === index ? false : true;
    });
    saveToDos();
    todosList.innerHTML = '';
    showTodo();
}

function editTodo(index) {
    const currElementText = document.querySelector(`#to-dos div:nth-child(${index + 1}) p`).innerText;
    const splicedText = currElementText.slice(3);
    removeTodo(index);
    showTodoInput();
    todoInput.value = splicedText;
}

function showTodo() {
    todosList.innerHTML = '';

    if (todos.length === 0) {
        showDefaultMessage();
    } else {
        todos.forEach((todo, i) => {
            let currentHTML = todosList.innerHTML;
            let newHTML = (
                `<div class="todoItem">
                    <p>${i + 1}. ${todo}</p>
                    <div class="actions">
                        <i onclick="removeTodo(${i})" class="fa-solid fa-trash"></i>
                        <i onclick="editTodo(${i})" class="fa-solid fa-pen"></i>
                    </div>
                </div>`
            );

            let amendedHTML = currentHTML + newHTML;
            todosList.innerHTML = amendedHTML;
        });
    }
}
