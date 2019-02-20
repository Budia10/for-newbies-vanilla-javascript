const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUsers",
    SHOWING_CN = "showing"; // css-display: block

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){ // 누군가 서브밋 했을 때
    event.preventDefault(); //서브밋 정지
    const currentValue = input.value;
    // console.log(currentValue);
    paintGreeting(currentValue); // 페인트 그리팅
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN); //greeting 변수에 showing 클래스 추가
    greeting.innerText = `hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS); //로컬스토리지에 인자값이 있는지 조회
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
        // 유저가 있을 경우
    }
};

function init() {
    loadName();
}

init();