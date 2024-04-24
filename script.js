const display = document.getElementById("display");


function addToDisplay(input) {
    if (input === 'sqrt') {
        let currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue >= 0) {
            let result = Math.sqrt(currentValue);
            display.value = Number.isInteger(result) ? result : result.toFixed(8);
        }
    } else {
        display.value += input;
    }   
}

function clearDisplay() {
    display.value = "";
} 

function deleteEntry() {
    let currentValue = display.value;
    display.value = currentValue.slice(0,-1);
} 

function invert() {
    display.value = display.value * -1;
}

function calculate() {
    let expression = display.value.trim(); 
    if (!expression) return; 
   
    try {
        const result = parseFloat(eval(expression).toFixed(8));        
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }   
} 


