const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos(){ //로컬 스토리지에 todo input 값 저장
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    console.log(text);
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
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadToDos = localStorage.getItem(TODOS_LS); //1.1
    if (loadToDos !== null) { //1.2
        console.log(loadToDos);
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function init() { //0
    loadToDos(); //1
    toDoForm.addEventListener("submit", handleSubmit) //2
}

init();