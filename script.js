function loadTodos() {
    // This function will load the todos from the browser
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList": []};
    console.log(todos);
    return todos;
}
function addTodoToLocalStorage(todoText) {
    const todos = loadTodos();
    todos.todoList.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}



function appendTodoInHtml(todoText) {
    const todoList = document.getElementById("todoList");

    const todo = document.createElement("li");

    todo.textContent = todoText;

    todoList.appendChild(todo)
}

document.addEventListener("DOMContentLoaded", () => {

    const todoInput = document.getElementById("todoInput");

    const submitButton = document.getElementById("addTodo");

    const todoList = document.getElementById("todoList");

    submitButton.addEventListener("click", (event) => {
        const todoText = todoInput.value;
        if(todoText == '') {
            alert("Please write something for the todo");
        } else {
            addTodoToLocalStorage(todoText);
            appendTodoInHtml(todoText);
            todoInput.value = '';
        }

    });
document.addEventListener("DOMContentLoaded", () => {

    });

    loadTodos();
    const todos = loadTodos();

    todos.todoList.forEach(todo => {
        const newTodoItem = document.createElement("li");
        newTodoItem.textContent = todo;
        todoList.appendChild(newTodoItem);
    })
});