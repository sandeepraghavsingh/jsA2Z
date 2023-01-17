// #Arrow functions 

/*
Reference : https://medium.com/geekculture/regular-vs-arrow-function-1f8140fbcece

#Why do we need regular or arrow function
1. Syntax
param => expression;
(param) => expression;

(param1, paramN) => expression;

param => {
  statements
} 

(param1, paramN) => {
  statements
}
2. Arrow functions do not have an arguments binding

const arrowFunction = (a,b) => {
    console.log(arguments)
}
arrowFunction(1,2)
//ReferenceError: arguments is not defined

3. "this" inside an arrow function always refers to "this" from the outer context.

var name = "Suprabha"
let newObject = {
    name : "supi",
    arrowFunc: () => {
        console.log(this.name); 
    },
    regularFunc() {
        console.log(this.name); 
    }   
}
newObject.arrowFunc(); // Suprabha
newObject.regularFunc(); // supi

4. new keyword-  arrow functions can never be used as constructor functions

let add = (x, y) => console.log(x + y);
const sum = new add(2,4); 
// TypeError: add is not a constructor

5. No duplicate named parameters - Arrow functions can never have duplicate named parameters, whether in strict or non-strict mode.

const arrowFunc = (a,a) => {}
// Uncaught SyntaxError: Duplicate parameter name not allowed in this context


6. Function Hoisting

arrowFunc()
const arrowFunc = () => {
    return "Arrow Function"
}
// ReferenceError: Cannot access 'arrowFunc' before initialization

7. Methods- You don’t have to bind with context.

class FullName {
    constructor(name) {
        this.name = name;
    }
    result = () => {
        console.log(this.name)
    }
}
let name = new FullName("Suprabha")
setTimeout(name.result, 2000) // Suprabha

8. We shouldn't use arrow function in Object Methods

let dog = {
    count: 3,
    jumps: () => {
        this.count++ //the number of count does not increase, will inherit the value of "this" from its parent scope.
    }
}

9. Arrow functions cannot use yield within their body and cannot be created as generator functions.

*/