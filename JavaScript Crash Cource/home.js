console.log("hello");
//alert("test");

// Varibles 
var a = "test";
console.log(a);

var num = 45;
console.log(num);

// Manuplate DOM with JavaScript
// It's just a fancy way of saying change HTML to JavaScript

document.getElementById('text').innerHTML = "Hello World";

//prompt
/*
var age = prompt("How is your age");
document.getElementById('txt').innerHTML = age;
*/

// Numbers in Javascript
function numbers(){
    var num1 = 4.3;
    num1 += 1
    console.log(num1);
}

// Create Functions
function func(){
    alert("This is a function");
}

// Do something with function
function greetings(name) {
    var output = "Hello" + name; //concatenation
    console.log(output);
}

//var name = prompt("What is your name.");
//greetings(name);

// How do arguments work in functions?
function add(num1, num2){
    var result = num1 + num2
    console.log(result)
}

//Can be int or string
//add(10, 20);

//while
var a = 0
function whileLoop() {
    while(a < 100){
        a += 1
        console.log(a)
    }
}

//for
function forLoop(){
    for(let i=0; i<100; i++){ // let can only be declare once
        console.log(i);
    }
}

// Data types
let yourAge = 18; //number
let yourName = "Jason"; //string
let name = {firstName: "Jason", lastName: "Liao"}; //object
let truth = true; //boolean
let groceries = ["apple", "orange"]; //array
let random; //undefined
let nothong = null; // value null

//string
let fruit = "banana";
let moreFood = "apple\nbanana";
console.log(moreFood);
console.log(moreFood.length);
console.log(fruit.indexOf('an')); // char start index
console.log(moreFood.slice(2,4)); // char start index, char end index
console.log(moreFood.replace("nana","1212")); // replace
console.log(moreFood.toUpperCase()); // all to upper case
console.log(moreFood.toLowerCase()); // all to lower case
console.log(moreFood.charAt(2)); // find answer by index
console.log(moreFood[2]); // Traditional way is OK
console.log(moreFood.split("")) //split('condition')

// Array
let fruits = ["bananas","apple","pineapple"]; //Create a string
//let fruits = new Array("bananas","apple","pineapple");

console.log(fruits[1]);

fruits[0] = "pear"; 
console.log(fruits); 

//Print Array by for loop
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("to String", fruits.toString()) //Array to String
console.log(fruits.join(' * '));
console.log(fruits, fruits.pop(), fruits); // Delete last element
console.log(fruits.push("blackberries"), fruits); // Add element at the end
fruits[3] = "Blackberrys" 
console.log(fruits[3]); 
console.log(fruits) //Print fruits Array


fruits[fruits.length] = "NewFruits"; //Same as push
console.log(fruits);
fruits.shift(); // Delete first elements
console.log(fruits);
fruits.unshift("Banana"); //Add element at the first of array 
console.log(fruits);

let vegetables = ["asparague", "tomato", "broccoli"];
let allGroceries = fruits.concat(vegetables); // Conbine arrays
console.log(allGroceries)
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let somenumbers = [1, 10, 3, 4, 20, 6]
console.log(somenumbers.sort(function(a, b) {
    return a-b
})); //sort in ascending order

let emptyArray = new Array();
for (let num = 0; num <= 10; num++){
    emptyArray.push(num)
}
console.log(emptyArray)