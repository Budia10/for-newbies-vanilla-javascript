const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = [];

function saveToDos(){

}

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
    console.log(toDoObj);
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function init() {
    toDoForm.addEventListener("submit", handleSubmit);
    console.log(toDos);
}

init();