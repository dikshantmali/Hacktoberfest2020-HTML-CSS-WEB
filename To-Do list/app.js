//Selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterOption =document.querySelector('.filter-todo');


//Event Listners
document.addEventListener("DOMContentLoaded",getTodos);
todoButton.addEventListener('click',addTodo); //calls the function addTodo
todoList.addEventListener('click',deleteCheck); //calls the function deletecheck
filterOption.addEventListener('click',filterTodo);

//Functions
function addTodo(event){
    //prevent formm from refreshing
    event.preventDefault();
    
    //todo div
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");  //class=".todo" inside the div tag
   
    //Create LI
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;  //todo tasks(enter the input then it will be added to list)
    newTodo.classList.add('todo-item'); //class name .todo-item
    todoDiv.appendChild(newTodo);       //mtlb we're including newTodo in todoDiv

    
    // add todo to local storage
    saveLocalTodos(todoInput.value);

    //Check mark button
    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';   //it won't work with innerText cz it's Html
    completedButton.classList.add("complete-btn");         //class name .complete-btn
    todoDiv.appendChild(completedButton);
     //Check trash button
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    //APPEND TO LIST
    todoList.appendChild(todoDiv); //todoDiv ko todoList mai daala

    //clr todo input value
    todoInput.value="";
}

function deleteCheck(e){
    const item=e.target;
     //delete todo
     if(item.classList[0]=='trash-btn'){
          const todo= item.parentElement; 
           //Animation
          todo.classList.add('fall');
          removeLocalTodos(todo);
          todo.addEventListener("transitionend",function() {
              todo.remove();
          });
          //todo.remove(); //removes the parent element
     }
     //check mark
     if(item.classList[0]=='complete-btn'){
        const todo= item.parentElement; 
        todo.classList.toggle('completed'); 

   }

}
function filterTodo(e) {
    const todos = todoList.childNodes;
    //console.log(todos);
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}
  // local storage 

function saveLocalTodos(todo){
    //check --do i already have things
    let todos;
    if(localStorage.getItem('todos') === null){
      todos=[];
    }
    else{
      todos = JSON.parse(localStorage.getItem('todos'));
    }
  
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
  }
  
  function getTodos() { 
    let todos;
    if(localStorage.getItem('todos') === null){
      todos=[];
    }
    else{
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach((todo)=>{
  // -----------
    // TODO-DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
  
    // checked button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    // trash buttom
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
  
    // append to-do list
    todoList.appendChild(todoDiv);
  
  });
  }
  
  function removeLocalTodos(todo) {
    //check --things what i already have 
    let todos;
    if(localStorage.getItem('todos') === null){
      todos=[]
    }
    else{
      todos = JSON.parse(localStorage.getItem('todos'))
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem('todos',JSON.stringify(todos)); //deletes element
  } 