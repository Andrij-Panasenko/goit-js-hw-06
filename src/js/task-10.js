function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const boxesContainer = document.querySelector("#boxes");
const boxesAmount = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);



function createBoxes() { 
  const amount = boxesAmount.value;
  boxesContainer.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);
  }
};

function destroyBoxes() {
  boxesContainer.innerHTML = '';
};
