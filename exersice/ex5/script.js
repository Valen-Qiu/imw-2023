//Interaction
document.getElementById("green").addEventListener("click", function () {
    document.getElementById("interactionContainer").style.backgroundColor = "lightgreen";
});
document.getElementById("plum").addEventListener("click", function () {
    document.getElementById("interactionContainer").style.backgroundColor = "plum";
});
document.getElementById("blue").addEventListener("click", function () {
    document.getElementById("interactionContainer").style.backgroundColor = "lightblue";
});

//Loop
let words = "Use a for loop to add repeating text to this container"
for (let step = 0; step < 2; step++) {
    let textBox = document.createElement("p");
    textBox.innerHTML = words;
    document.getElementById("loopContainer").appendChild(textBox);
};

//conditionContainer
let num = 6;
if (num == 6) {
    document.getElementById("square").style.backgroundColor = "red"
};

//timeContainer
function increase() {
    const textElement = document.getElementById('increaseText');
    let fontSize = parseFloat(getComputedStyle(textElement).fontSize);
    fontSize += 1;
    textElement.style.fontSize = fontSize + 'px';
}
const interval = setInterval(increase, 1000);

//inputContainer
function count() {
    const inputElement = document.getElementById('inputText');
    const textLengthElement = document.getElementById('text-length');
    const inputValue = inputElement.value;
    const characterCount = inputValue.length;
    textLengthElement.textContent = `Character count: ${characterCount}`;
}
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    count();
});

//consoleContainer
console.log("This is a message of my choice.");