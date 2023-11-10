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

