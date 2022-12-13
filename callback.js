// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished
// Function Sequence
// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
// This example will end up displaying "Goodbye":

function myFunction(result) {
    console.log(result);
}
function fun1() {
    myFunction("Hello");
}
function fun2() {
    myFunction("World");
}
fun1();
fun2();


// Function Sequences
function display(output) {
    console.log(output);
}
function Sum_add(num1, num2) {
let sum = num1 + num2;
return sum;
}
let result = Sum_add(10, 20);
display(result);



//Callback
function myDisplay(result) {
    console.log(result);
}
function subtract(no1, no2, myCallback) {
    let sum = no1 - no2;
    myCallback(sum);
}
subtract(50, 10, myDisplay);


//create an array
const numbers = [13, 76, -12, 53, -78, 15 ,34, -27];
//calling removenegative with a callback
const positivenumber = removenegative(numbers, (x)=> x >= 0);
//display result
console.log(positivenumber);
//removing negative number
function removenegative(numbers, callback) {
    const myArr = [ ];
    for (const x of numbers) {
        if (callback(x)) {
            myArr.push(x);
        }
    }
    return myArr;
}