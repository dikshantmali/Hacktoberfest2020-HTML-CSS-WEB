"use strict";

// Selectors
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");
var filterOption = document.querySelector(".filter-todo"); // Event Listener

document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo); // Functions

function addTodo(event) {
  event.preventDefault(); // VALIDATION WHEN VALUE DON'T HAVE ANYTHING.

  if (todoInput.value === "") {
    alert("PLEASE FILL IN THE ENTRY WITH DATA.");
  } else {
    // TODO DIV
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); // CREATE LI

    var newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); // ADD TODO TO LOCALSTORAGE

    saveLocalTodos(todoInput.value); // CHECK MARK BUTTON

    var completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton); // CHECK TRASH BUTTON

    var trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton); // APPENF TO LIST

    todoList.appendChild(todoDiv); // CLEAR Todo INPUT VALUE

    todoInput.value = "";
  }
}

function deleteCheck(event) {
  var item = event.target; // DELETE TODO

  if (item.classList.contains('trash-btn')) {
    item.parentElement.classList.add("fall");
    removeLocalTodos(item.parentElement);
    item.parentElement.addEventListener("transitionend", function () {
      item.parentElement.remove();
    });
  } // CHECK MARK


  if (item.classList.contains('complete-btn')) {
    item.parentElement.classList.toggle("completed");
  }
}

function filterTodo(event) {
  var todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;

      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }

        break;

      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }

        break;
    }
  });
}

function saveLocalTodos(todo) {
  var todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  var todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    // TODO DIV
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); // CREATE LI

    var newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); // CHECK MARK BUTTON

    var completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton); // CHECK TRASH BUTTON

    var trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton); // APPENF TO LIST

    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  var todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  var todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}