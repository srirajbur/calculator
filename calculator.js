//Selectors
    //display  
const input = document.querySelector('.input')
const output = document.querySelector('.output')
    //buttons
const buttons = Array.from(document.querySelectorAll('#buttons>button'))
const equal = document.querySelector('.equal')


//Events

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
        input.textContent += e.target.innerText;
    })
})

//Functions
function add(num1, num2) {
	return num1 + num2
}

function subtract(num1, num2) {
	return num1 - num2
}

function multiply(num1, num2) {
	return num1 * num2
}

function divide(num1, num2) {
	return num1 / num2
}

function operate(operator, num1, num2){
    if(operator === '+') return add(num1, num2);
    if(operator === '-') return subtract(num1, num2);
    if(operator === '*') return multiply(num1, num2);
    if(operator === '/') return divide(num1, num2);
}
