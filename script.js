let equal_pressed = 0;

//for all buttons excluding AC and DEL
let buttonInput = document.querySelectorAll(".input-button");

//for input, equal, clear, erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
}

//access each class using forEach
buttonInput.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if(equal_pressed == 1) {
            input.value = "";
            equal_pressed = 0;
        }
        //display value of each button
        input.value += button_class.value;
    });
});


//solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try {
        //evaluate user input
        let solution = eval(inp_val);
        //true for natural numbers
        //false for decimals
        if(Number.isInteger(solution)) {
            input.value = solution;
        } else {
            input.value = solution.toFixed(2);
        }
    }
    catch(err) {
        //if user entered invalid input
        alert("Invalid Input");
    }
});

//clear all input
clear.addEventListener("click", () => {
    input.value = "";
});

//erase single input 
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});