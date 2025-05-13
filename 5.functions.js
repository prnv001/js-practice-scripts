//  Function syntax  ---
// function function name (parameter)
// {
//     // code to be executed ;
//     return result;
// }

// Ex 1

// function sum(a,b)
// {
//     return a+b;
// }

// console.log(sum(5,5));
// console.log(sum(45,8));
// console.log(sum(5,78));

// function declaration

// function greet()
// {
//     console.log("Hello Mister");
// }
// function Invocation
// greet();

// ex2

// function sum()
// {
//     var a=10
//     var b=5
//     console.log(a+b);
// }
// sum();

// Function parameter

// Ex3
// function greet(name)
// {
// console.log("Hello " + name+ " Welcome Back SIR");
// }
// greet("PRANAV G");

// Ex4
// function sum(a,b){
//     console.log(a+b);
// }
// sum(10,10);

// var result=function sum(a,b){
//     console.log(a+b);
// }
// result(10,10);

// anonymous function

// var result=function(a,b){
//     console.log(a+b);
// }
// result (44,1);

// return keyboard

// function sum (a,b)
// {
//     return a+b;
// }
// console.log(sum(10,23));

// function sum(a,b)
// {
//     return a+b;
// }
//  var result=sum(22,22);
// //  console.log(result);
//  console.log("Sum of Above Numbers = "+result);

// IIFE--Immediately Invoked function expressions

// (function(a,b){
// console.log(a+b);
// })(10,30);

// Ecmascript --1996-2015

// Ex1
// var myName="Pranav"
// if(true==myName)
// {
//     var myName="Sahil"
//     console.log(myName);
// }
// else
// {
//  console.log("Not match");
// }

// var myName="Pranav"
// if(true)
// {
//     var myName="Pranav"
//     console.log(myName);
// }
//  myName="Bans"
//  console.log(myName);

// Template string

// let firstName="Pranav"
// let lastName="Bans"

// let fullName=`${firstName} ${lastName}`;
// console.log(fullName);

// String Interpolation

// let age = 25;
// let message=` I am ${age} years old`;
// console.log(message);

// Practice Questions

// old way
// let num=5
// {console.log(" 5 * " + num + " = " + 5* num );}

// new way

// let num =5
// console.log((`5 * ${num} = ${5*num}`));

// Default Constructor

// function sum (a,b=10)
// {
//     return a+b;
// }
// console.log(sum(3));

// fat arrow  function

// old way

// const sum = function (a, b) {
//   let result = `The sum  of ${a} and ${b} is ${a + b}`;
//   console.log(result);
// };
// sum(5, 3);

// New way in Fat arrow 

// const sum = (a,b)=>console.log
// (`The sum of ${a} and ${b} is ${a+b}`);
// sum(5,5);

