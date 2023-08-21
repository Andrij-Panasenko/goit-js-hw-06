function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textContainer = document.querySelector(".color")
const button = document.querySelector(".change-color");

button.addEventListener('click', backgroundColorBtnHandler);

function backgroundColorBtnHandler(event) {
  document.body.style.backgroundColor = textContainer.textContent = getRandomHexColor();
}