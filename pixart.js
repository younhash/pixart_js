let button = document.querySelector('#set-color');
let brush = document.querySelector('.brush');
let inputValue = document.querySelector('#color-field');
//let createDivs; // document.createElement('div');
//createDivs.className = 'square';
//let body = document.getElementsByTagName('BODY')[0];
//let twentyDivs = body.appendChild(createDivs);



button.addEventListener('click', setTheColor);

function setTheColor(e) {
    e.preventDefault();
   brush.style.background = inputValue.value;  
}

button.addEventListener('keyup', setTheColor);

function setTheColor(e) {
    e.preventDefault();
   inputValue = document.querySelector('#color-field');
   brush.style.background = inputValue.value;  
}



for (let i=0; i<8000; i++) {
    let createDivs = document.createElement('div');
    createDivs.className = 'square';
    document.body.appendChild(createDivs);
    //twentyDivs = body.appendChild(createDivs);

      console.log(createDivs);


    createDivs.addEventListener('mouseover', change);

} 

function change() {
    this.style.background = inputValue.value; 
}
  



  