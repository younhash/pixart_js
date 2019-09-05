let button = document.querySelector('#set-color');
let brush = document.querySelector('.brush');

button.addEventListener('click', setTheColor);

function setTheColor(e) {
    e.preventDefault();
   inputValue = document.querySelector('#color-field');
   brush.style.background = inputValue.value;  
}

button.addEventListener('keyup', setTheColor);

function setTheColor(e) {
    e.preventDefault();
   inputValue = document.querySelector('#color-field');
   brush.style.background = inputValue.value;  
}

