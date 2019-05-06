const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function handleSubmit() {
    const currentValue = toDoInput.value;
    event.preventDefault();
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerText = "❌";
    span.innerText = currentValue;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    toDoInput.value = "";
    const toDoObj = {
        text: currentValue,
        id: (toDos.length + 1)
    }
    toDos.push(toDoObj);
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // console.log(toDoObj);
    // console.log(TODOS_LS);
    // console.log(toDos);
}

function loadToDos() {
    const loadToDos = localStorage.getItem(TODOS_LS);
    console.log(loadToDos, "asd")
    if (loadToDos !== null) {
        const parsedLoadToDos =     JSON.parse(loadToDos);
        parsedLoadToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    // console.log(toDos);
}

init();