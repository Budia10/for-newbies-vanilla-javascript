const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings")

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function handleSubmit(event) {
    console.log("handleSubmitStart");
    event.preventDefault();
    const curretValue = input.value;
    paintGreeting(curretValue);
    saveName(curretValue);
    console.log("handleSubmitEnd");
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser === null) {
        askForName(); // She is not
    } else {
        paintGreeting(currentUser); // She is
    }
}


function init() {
    loadName();
}

init();