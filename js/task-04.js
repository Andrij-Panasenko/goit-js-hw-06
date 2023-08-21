const decrementBts = document.querySelector(".decrement");
const value = document.querySelector(".value");
const incrementBtn = document.querySelector(".increment");

let counterValue = 0;


decrementBts.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);

function onDecrementClick() {
    counterValue -= 1;
    updateValue()
}

function onIncrementClick() {
    counterValue += 1;
    updateValue()
}

function updateValue() { 
    value.textContent = counterValue;
}
