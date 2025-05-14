// const currentDate=new Date();
// console.log(currentDate);


// const dateString = "2025-03-20T12:24:03.118Z";
// const dateFromString = new Date(dateString);
// console.log(dateFromString);

// const date1= new Date(2025,10);
// console.log(date1);

// const date2= new Date(2024,12, 19);
// console.log(date2);

// const date2= new Date(2024,12, 19 ,10 , 44 , 8);
// console.log(date2);


// const date1 = new Date("2025-05-06");
// const date2 = new Date("May 06,2025");
// console.log(date1);
// console.log(date2);


// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// console.log(currentYear);

// ------------------------------------------------------

// useful methods of date objects in js

// const date = new Date();
// const localString = date.toLocaleString();
// console.log(localString);


// const date = new Date();
// const localString = date.toLocaleDateString();
// console.log(localString);

// const date = new Date();
// const localString = date.toLocaleTimeString();
// console.log(localString);

// const date = new Date();
// const parsedDate = Date.parse(date);
// console.log(parsedDate);

// ------Interview Questions

// 1--To add a specified number of days to given date


const addDaysToDate = (date, extraDay) => {
    let updatedDate = new Date(date); // Create a new Date object to avoid mutation
    updatedDate.setDate(updatedDate.getDate() + extraDay);
    return updatedDate;
}

const date = new Date("2024-02-29");
const newDate = addDaysToDate(date, 7);
console.log(newDate); // Correctly logs new date
console.log(newDate.toLocaleDateString()); // Fixes the typo

