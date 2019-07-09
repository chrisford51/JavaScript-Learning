///Documenting my JavaScript Learnings
/// Chris Ford

&&
##//"Hello World!" Log it to the console
&&

console.log("Hello, World!");

&&
##//Variables and Types
&&

var number = 3;                     //Integar
var myString = "Hello World!"       //String
var myBoolean = true;               //Boolean

var myArray = [];                   //Array
var myObject = {};                  //Object

var newVariable;
console.log(newVariable)    //Prints undefined

var emptyVariable = null;
console.log(emptyVariable);  //Prints out null

&&
##//Arrays
&&

var myArray = [1,2,3];
var theSameArray = new Array(1,2,3)

//Addressing
console.log(myArray[1])     //Logs the 2nd position in the array, 0 being the first

var myArray = []
myArray[3] = "hello"
console.log(myArray);     //Will print out ## [undefined, undefined, undefined, "hello"]

var myArray = [3, "string", {}] // Example array with a string, a number, and an empty object.

&&
##//Manipulating Arrays
&&

//Pushing and Popping
var myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack); //will display 1,2,3
//.push adds to the end of the array

console.log(myStack.pop());
console.log(myStack);
//,pop removes the last item of the Array

3           // the result from myStack.pop()
1,2         // what myStack contains now

//Shift and unshift
var myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());
//Shift removes values in the order they were entered.

var myArray = [1,2,3];
myArray.unshift(0);
console.log(myArray);       // will print out 0,1,2,3
//Unshift adds a value to the beginning of the array.

//Splice
var myArray = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3,7);

console.log(splice);        // will print out 3,4,5,6,7
console.log(myArray);       // will print out 0,1,2,8,9
//Splice creates a new Array from a range between two indices

&&
##//Operators
&&

var a = 1;
var b = 2;
var c = a + b; // c is now equal to a + b

var name = "John";
console.log("Hello " + name + "!");
console.log("The meaning of life is " + 42);
console.log(42 + " is the meaning of life");
//Integars are different from Strings
console.log(1 + "1");   // outputs "11"

//Mathematical Operators
console.log(3 - 5);     // outputs -2
console.log(3 * 5);     // outputs 15
console.log(3 / 5);     // outputs 0.6

//Advanced Operator
console.log(5 % 3);     // outputs 2
//Modulus Operators

//Combined Assignment Operators

    /=
    *=
    -=
    +=
    %=

//Math module has more advanced functions

    Math.abs calculates the absolute value of a number
    Math.exp calculates e to the power of a number
    Math.pow(x,y) calculates the result of x to the power of y
    Math.floor removes the fraction part from a number
    Math.random() will give a random number x where 0<=x<1

&&
##//If Statements
&&
