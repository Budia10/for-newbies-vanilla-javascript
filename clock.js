const clockContainer = document.querySelector(".js-clock"),
    colckTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minuate = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    colckTitle.innerText =
        `${hours < 10 ? `0${hours}` : hours
        }:${minuate < 10 ? `0${minuate}` : minuate
        }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 50);
}

init();