// Задание 1

const button01 = document.getElementById('button01')
const img = document.querySelector('.logo01');

button01.addEventListener('click', func);
function func() {
    img.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"/></svg>';
    button01.addEventListener('click', () => {
        img.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down-left-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z"/></svg>';
        return;
    });
}

// Задание 2

const button021 = document.getElementById('button021');

button021.addEventListener('click', () => {
    window.alert(`Размеры данного экрана - ширина: ${document.documentElement.clientWidth}, высота: ${document.documentElement.clientHeight}`);
});

const button022 = document.getElementById('button022');

button022.addEventListener('click', () => {
    window.alert(`Размеры данного экрана - ширина: ${window.innerWidth}, высота: ${window.innerHeight}`);
});

// Задание 3

const wsUri = "wss://echo-ws-service.herokuapp.com/";


const chatOutput = document.querySelector(".chat-messages-task03");
const input = document.querySelector(".input-task03");
const sendBtn = document.querySelector(".button-send-task03");
    
let socket = new WebSocket(wsUri);
        
socket.onmessage = (event) => {
    writeToChat(event.data, true);
}

sendBtn.addEventListener("click", sendMessage);

function sendMessage() {
    if (!input.value) return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value === "";
}
    
function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
    chatOutput.innerHTML += messageHTML;
}

const locationBtn = document.querySelector('.button-location-task03');

const error = () => {
    let messageHTML = `<div class="location">Невозможно получить ваше местоположение</div>`;
    chatOutput.innerHTML += messageHTML;
}

const sucess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    let messageHTML = `<div class="location">Широта: ${latitude}, Долгота: ${longitude}<br>
    <a href= "https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">
    Ваше положение на карте</a></div>`;
    chatOutput.innerHTML += messageHTML;
}

locationBtn.addEventListener ('click', () => {
    if (!navigator.geolocation) {       // Проверка поддерживает ли браузер пользователя геолокацию
        let messageHTML = `<div class="location">Ваш браузер не поддерживает геолокацию</div>`;
        chatOutput.innerHTML += messageHTML;
    }   else  {
        navigator.geolocation.getCurrentPosition(sucess, error);
    }
})

