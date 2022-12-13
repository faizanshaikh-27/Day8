// Asynchronous JavaScript
// Functions running in parallel with other functions are called asynchronous

function result(some) {
    console.log(some);
}
function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}
calculator(10, 30, result);




// In the real world, callbacks are most often used with asynchronous functions.
// A typical example is JavaScript setTimeout().

setTimeout(myFunction, 2000);
function myFunction() {
    console.log("Hello World");
}


// In the example above, myFunction is used as a callback.
// myFunction is passed to setTimeout() as an argument.
// 3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.

// When you pass a function as an argument, remember not to use parenthesis.
// Right: setTimeout(myFunction, 3000);
// Wrong: setTimeout(myFunction(), 3000);

// Instead of passing the name of a function as an argument to another function, you can always pass a whole function instead:

//The First method
setTimeout(func, 3000);
function func() {
    console.log("This is a set timeout function");
}


//The Second Method
setTimeout(function() {newFunction("Hello World");}, 4000);
function newFunction(value) {
    console.log(value);
}

//Display Time
// setInterval(datefunction, 1);
// function datefunction() {
//     let d = new Date();
//     console.log(d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " " +  "\n" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds());
// }
















