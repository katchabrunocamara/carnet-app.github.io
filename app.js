//recuperation
let todoInput = document.getElementById("todoInput");
let submitBtn = document.getElementById("submitBtn");
let todos = document.getElementById("todos");
let todoNb = document.getElementById("todoNb");
let delecteAll = document.getElementById("delecteAll");
//compter
let nbTODOS = 0;

//fonction


const createDelecteBtn =()=>{
  let delecteButton = document.createElement("div");
  delecteButton.classList.add("btn");
  delecteButton.innerHTML = '<i class="fa fa-trash-o"></i>';
  //suppression
  delecteButton.addEventListener("click",delecteTODO);
  return delecteButton;

};
const addTodo = ()=>{
    let todoText = todoInput.value;
    if(todoText=="")return;
    let newTodo = document.createElement("div");
    newTodo.classList.add("todo");
    newTodo.innerHTML = `<p>${todoText}</p>`;
    newTodo.appendChild(createDelecteBtn());
    todos.appendChild(newTodo);
    todoInput.value ="";
    nbTODOS++;
    todoNb.innerText = nbTODOS;
};

const delecteTODO=(e)=>{
  let todoEl = e.target.closest("div.todo");
  todoEl.remove();
  nbTODOS--;
  todoNb.innerText = nbTODOS;
};
const delecteAlle=()=>{
 todos.innerHTML="";
 nbTODOS = 0;
 todoNb.innerText = nbTODOS;
};
submitBtn.addEventListener("click",addTodo);
delecteAll.addEventListener("click",delecteAlle); 