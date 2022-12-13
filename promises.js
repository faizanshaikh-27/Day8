// "I Promise a Result!"
//  "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result

// A Promise is a JavaScript object that links producing code and consuming code


function JS_promises(result){
    console.log(result);
}

let promise = new Promise(function(resolve, reject){
    let x = 0;
    // producing code will take some time
    // resolve(); //when sucessfull
    // reject();  //when error
    
    // (try to change x to 5)
    if(x==0){
        resolve("OK");
    }
    else{
        reject("Error");
    }
});

promise.then(
    function(value) {
        JS_promises(value);
    },
    function(error) {
        JS_promises(error);
    }
);








function display(results) {
    console.log(results);
}

let mypromise = new Promise(function(resolve, reject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
        if (req.status == 200) {
            resolve(req.response);
        } else{
            reject("file not found");
        }
    }
    req.send();
});

promise.then(
    function(value) {
        display(value);
    },

    function(error) {
        display(error);
    }
);

/*Promise Object Properties
A JavaScript Promise object can be:

Pending
Fulfilled
Rejected
The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.*/


/* You cannot access the Promise properties state and result.
You must use a Promise method to handle promises. 

Promise.then() takes two arguments, a callback for success and another for failure.
Both are optional, so you can add a callback for success or failure only. */




















