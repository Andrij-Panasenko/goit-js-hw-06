const inputField = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

inputField.addEventListener('input', onInputChange);

function onInputChange(event) {
    const inputValue = event.currentTarget.value;
  
    nameLabel.textContent = inputValue === '' ? 'Anonymous' : inputValue;
}