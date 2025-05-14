// Array is an object that represents a collection of similiar type of elements ..

// const persons=["Ram","Pranav","Hari","Rahul"]
// console.log(persons[1]);

// const persons=["Ram","Pranav","Sita"]
// console.log(persons.at(-3));

// It always minus start from -1

// let fruits=new Array("apple","banana","orange");
// console.log(fruits);

// How to access elements

// let fruits=new Array("apple","banana","orange");
// console.log(fruits[1]);

// how to modify array

// let fruits=["Apple","grapes","Orange"];
// fruits[1]="Mango";
// console.log(fruits);

// Array traversal/Iterating over Array
// 1-----for of loop(item method=name)

// let fruits = ["Apple", "Grapes", "Orange"];
// for(let item of fruits){
//     console.log(item);
// }
// 1st Method

// for (let item = 0; item < fruits.length; item++){
//     console.log(fruits[item]);
// }
// 2nd method

// 2--for in loop(item =index)
// let fruits = ["Apple", "Grapes", "Orange","Pineapple"];
// for(let item in fruits){
//     console.log(item);
// }

// 3--for each ()

// const fruits= ["Apple", "Grapes", "Orange"];
// fruits.forEach((currElem, index,arr ) => {
//   console.log(`${currElem}  ${index}`);
// });

// Map() function

// const fruits=["Apple","Grapes","Orange"];
// fruits.map((currElem,index,arr)=>{
//     console.log(fruits);
// })

// Map return easily by
// const fruits= ["Apple", "Grapes", "Orange"];
// const myMapArr=fruits.map((currElem,index,arr)=>{
//     return` my favfruit is ${currElem} `;
// });
// console.log(myMapArr);

// return favfruitis%$`{currElem}`;
// console.log(myMapArr);

// wap to mulitply each elemt by 2

// const numbers=[1,2,3,4,5];
// numbers.forEach((currElem)=>
// {
//     console.log(currElem*2);

// })

// const numbers = [1, 2, 3, 4, 5];
// numbers.map((currElem) => {
//   return(currElem * 2);
// });
// console.log(numbers);

// how to insert , add ,replace, delete elements in array
// 1--push -add one or more elements to end od array

// let vegetables=["Cabbage","Lady Finger","Carrot"];
// vegetables.push ("Spinach");
// console.log(vegetables);

// 2--pop -remove last element

// let vegetables=["Cabbage","Lady Finger","Carrot"];
// vegetables.pop("");
// console.log(vegetables);

// 3-unshift add one or more elemts in begining
// let vegetables=["Cabbage","Lady Finger","Carrot"];
// vegetables.unshift("Potato");
// console.log(vegetables);

// 4-shift-remove from bgining
// let vegetables=["Cabbage","Lady Finger","Carrot"];
// vegetables.shift();
// console.log(vegetables);

// The splice() method--change the content by replacing or removing elements

// let cars=["Audi","BMW","MAruti","Jaguar"];
// console.log(cars.splice(0));

// cars.splice(2,1,"LV");
// console.log(cars);

// Seaerching in array

// 1--index of-retrurn 1st index at which given elemt can found or either return -1

// const numbers=[1,2,3,4,5,6,7,8,9];
// console.log(numbers.indexOf(3));

// 2--lastIndex---return last index either -1 OR there are multiples of same element

// const numbers=[1,2,3,6,7,8,6,9];
// console.log(numbers.lastIndexOf(6));

// 3-includes--return true or false

// const numbers=[1,2,3,4,5];
// console.log(numbers.includes(0));

// ex1-
// let months=["Jan","Feb","march","April","May"];
// months.splice(months.length,0,"Dec");
// console.log(months);

// ex2-
// let months = ["Jan", "Feb", "march", "April", "May"];
// let update = months.indexOf("march");
// months.splice(update,2,"March")
// console.log(months);

// ex3--
// let months=["Jan","Feb","march","April","May"];
// let number = months.indexOf("march");
// months.splice(number,2)
// console.log(months);

// filter in array

// 1--find method--used to find 1st element in array that satisfy testing function & return first matching

// const numbers=[1,2,3,4,5,6,7,8,9];
// const result=numbers.find((currElem)=>
// {
//     return currElem>7;
// });
// console.log(result);

// 2--findIndex--find index of first elements.

// const numbers=[1,2,3,4,5,6,7,8,9];
// const result=numbers.map((currElem)=>
//     currElem*5
// );
// console.log(result);
// const result2=result.findIndex((currElem)=>
// {
//     return currElem>15;
// });
// console.log(result2);

// filter method--same as find but return remaining numbers
// const numbers=[1,2,3,4,5,6,7,8,9];
// const result=numbers.filter((currElem)=>
// {
// return currElem>3;
// });
// console.log(result);

// ex--E-commerce website when we want to remove or delete any product from addToCart page.

// let value = 6;
// const numbers=[1,2,3,4,6,5,6,7,8,9];

// let updatedCart=numbers.filter((currElem)=>
// {
//     return currElem!=value;
// });
// console.log(updatedCart);

// Interview Questions

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smart Watch", price: 150 },
// ];

// const filterProducts=products.filter((currElem)=>{
//     // console.log(currElem.price<=500);
//     return currElem.price<=500;
// });
// console.log(filterProducts);

// ----------------

// const numbers=[1,2,3,4,5,6,7,8,9];
// let uniqueValues=numbers.filter((currElem,index,arr)=>{
//     return arr.indexOf(currElem===index);
// });
// console.log(uniqueValues);

// how to sort & compare an array


// sort -- sorting array elements in way ..
// const numbers=[1,2,4,3,6,5,6,4,8,9,];
// numbers.sort();
// console.log(numbers);

// numbers.sort((a,b)=>{
//     if (a>b) return 1;
//     if (a<b) return -1;
// });
// console.log(numbers);



