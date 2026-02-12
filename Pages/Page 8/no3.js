//Changing gif while hovering on a button
const img = document.getElementById('image');

const images = {
    depressed: '../Assets/attitude.gif',
    ori: "../Assets/angry.gif"
};

function ChangeImage(giphy) {
    img.src = images[giphy];
}
function ResetImage() {
    img.src = images.ori;
};

//BG image change while hovering on a button
var body = document.body;

function bg2() {
	body.className = 'noo';
};

function resetBG(){
	body.className = '';
};

//Moving button
const buttonHeight = 50;
const buttonWidth = 150;

//Making bg
function lines(){
    let sizeW = Math.random() * 12;
    let duration = Math.random() * 3;
    let e = document. createElement('div');
    e.setAttribute('class', 'circle');
    document.body.appendChild(e);
    e.style.width = 2*sizeW + 'px';
    e.style.left = Math.random() * + innerWidth + 'px';
    e.style.animationDuration = 2 + duration + 's';
    setTimeout(function(){
        document.body.removeChild(e)
    }, 4000);
}

setInterval(function(){
    lines();
}, 200);

let evasiveButton;
let evasiveContainer;

function getRandomPosition(max) {
    return Math.max(0, Math.random() * max);
}

function moveButton() {
    if (!evasiveButton || !evasiveContainer) return;

    const maxX = evasiveContainer.clientWidth - evasiveButton.offsetWidth;
    const maxY = evasiveContainer.clientHeight - evasiveButton.offsetHeight;

    const nextX = getRandomPosition(maxX);
    const nextY = getRandomPosition(maxY);

    evasiveButton.style.left = `${nextX}px`;
    evasiveButton.style.top = `${nextY}px`;
}

window.addEventListener('DOMContentLoaded', () => {
    evasiveButton = document.getElementById('yes');
    evasiveContainer = evasiveButton?.parentElement;

    if (!evasiveButton || !evasiveContainer) return;

    evasiveContainer.style.position = evasiveContainer.style.position || 'relative';
    evasiveButton.style.position = 'absolute';

    moveButton();

    ['mouseover', 'click', 'touchstart'].forEach((evt) => {
        evasiveButton.addEventListener(evt, moveButton);
    });
});

//BG image change while hovering on a button
var body = document.body;

function bg() {
	body.className = 'noo';
};

function resetBG(){
	body.className = '';
};

//Linking to no page
function noFunction() {
    window.location.href = "../Page 5/yes.html";
}