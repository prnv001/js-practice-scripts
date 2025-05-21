// const product ={
//     id : 1 ,
//     pName : "Pranav"
// };

// console.log(product);

// let person = {
//     name: "Pranav",
//     age : 30,
//     isStudent: false,
//     greet : function (){
//         console.log("Welcome Ji");
//     }
// };

// console.log(person);

// Objects using methods

const product = {
  id: 1,
  name: "Laptop",
  category: " Computers",
  brand: "lenovo",
  price: "999.99",
  stock: 50,
  description: "Welcome the best brand",
  Image: "Added later",
};

// 1--Object.Keys()

// let Keys = Object.keys(product);
// console.log(Keys);

// 2--Object.Values()

// let values = Object.values(product);
// console.log(values );

// 3-- Object.entries

// let entries = Object.entries(product);
// console.log(entries );

// 4--Object.hasOwnProperty()

// console.log(product.hasOwnProperty("name"));
// console.log(product.hasOwnProperty("isStudent"));

// 5--Object.assign();

// const target = { a: 1, b: 9 };
// const source = { b: 3, c: 4 };
// const mergedObject = Object.assign(target, source);
// console.log(mergedObject);

// 6--Object.freeze()

// Object.freeze(product);--it help to freeze value that we don't change
product.id= 9058;
console.log(product);

