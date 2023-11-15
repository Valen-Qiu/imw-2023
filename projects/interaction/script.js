//split words into letter
const text = document.querySelector('.mouse');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
//rotate letter
const elements = document.querySelectorAll('span');
for (let i = 0; i < elements.length; i++) {
    elements[i].style.transform = "rotate(" + i * 17 + "deg)";
}
//move with mouse
document.addEventListener("mousemove", function (e) {
    text.style.left = e.pageX + 'px';
    text.style.top = e.pageY + 'px';
})

//move main image 
$(document).ready(function () {
    $('section.image').on("mousemove", function (e) {
        var moveX = (e.pageX * -1 / 15);
        var moveY = (e.pageY * -1 / 15);
        $(this).css('background-position', moveX + 'px ' + moveY + 'px');
    });
});

//interactive background
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

