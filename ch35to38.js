// QNO 1
function time(){
    let time1 = new Date()
    console.log(time1)
}
time();

// QNO 2
function fullNeme(){
    let name = prompt("enter your first name")
    let last = prompt("enter your last name")
    let fullN = name +' '+ last
    alert(fullN)
}
fullNeme();

// QNO 3
function sum(){
    let num1 = + prompt("enter the first number")
    let num2 = + prompt("enter the second number")
    return num1 + num2;
}
alert('the sum of two numbers is = '+sum());

// Qno 4
// Function to perform a mathematical operation
function calculateResult(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            return "Invalid operator";
    }

    return result;
}

const number1 = parseFloat(prompt("Enter the first number:"));
const number2 = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operator (+, -, *, /):");

// // Call the function and display the result
const result = calculateResult(number1, number2, operation);

// // Display the result in the browser
alert("Result: " + result);


// Qno 5

function square(number){

    return  number*number
}
console.log(square(7))


// QNO 6
 function factorial(num){
    let facto = 5
        for(let i=1 ; i<=facto; i++){
            console.log(facto *= i)
        }
      
 }
 console.log(factorial())

// QNO 7
function triangle(){
      let base = + prompt("enter the triangle base")
      let perp = + prompt("enter the triangle perpendicular")
      const hyp = base + perp
      return hyp
}
alert( 'the angle of right angle trianglr is '+triangle())




// Qno 8

 function area(width,heigth){
    return area = width * heigth
 }
 alert(area(20,30))


// QNO 9












