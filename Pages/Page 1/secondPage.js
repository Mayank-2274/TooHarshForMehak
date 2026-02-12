//Setting hearts
function hearts(){
    const container = document.querySelector('.container');
    const creat = document.createElement('div');
    creat.classList.add('hearts');
    creat.innerHTML = '💓';

    creat.style.left = Math.random() * 100 + 'vw';
    creat.style.animationDuration = Math.random() * 3 + 2  + 's';

    container.appendChild(creat)
    setTimeout(() => {
        creat.remove();
    }, 3000);
}

setInterval(hearts, 100);

//Scrolling to bottom
const scrollToBottom = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
 

//Linking to other page
function myFunction() {
    window.location.href = "../Page 3/forthPage.html";
}