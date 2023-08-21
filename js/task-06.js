const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', onFocusChange);

function onFocusChange(event) {
    const symbolLength = inputField.dataset.length; // 6
    
    // довжина введеного рядка
    const inputContentLength = inputField.value.length  
    
    if (inputContentLength >= symbolLength) {
        inputField.classList.remove('invalid')
       inputField.classList.add('valid')
    } else {
        inputField.classList.remove('valid');
        inputField.classList.add('invalid')
    }
}
