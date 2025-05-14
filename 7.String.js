// String represents sequence of character  (We can use single quotes & double quotes)

// const str="Hello!Pranav Ji";
// console.log(str);

// to find length
// console.log(str.length);

// to escape character
// --used to escape character.it allow u to include special characters in string

// 1st normal way to special character

// let text='My name is Bans,"Love" always with you';
// console.log(text);

// Updated Code ---

// let text="My Name is 'Pranav'\nI am a \"Full stack\" Developer";
// console.log(text);

// String search methods
// 1--indexOf

// let nam="Game\nKhELO 'Roj Roj'";
// console.log(nam);

// let text='vinod thapa';
// console.log(text.indexOf("thapa"));

// let text="pranav bans";
// let strArr=Array.from(text);
// console.log(strArr);

// let text = "pranav bans";
// let strArr = Array.from(text);
// let strMap = strArr.map((currElem, index) => {
//   return`${currElem}-${index}`;
// });
// console.log(strMap);

// LastindexOf---return the index of last occurence of specified text

// let text="Hello Javascript,welcome to coding Javascript is my class";
// let index=text.indexOf("Javascript");
// let lastindex=text.lastIndexOf("Javascript");
// console.log(lastindex);

// Search method 

// let text="Hello Javascript,welcome to coding Javascript is my class";
// let result=text.search(/Javascript/);
// console.log(result);

// match() method

// let Text="hello Pranav,welcome back Pranav ";
// let result=Text.match("Pranav");
// console.log(result);

// matchAll()-- method
// return iterator of all matches

// let text="Hello pranav,wht ui doing pranav";
// let matchResult=text.matchAll("pranav");
// console.log(matchResult);

// for (let item of matchResult){
//     console.log(item[0]);
// }

// includes()--return true if string contain specified value otherwise false

// let text="hello Javascript,Welcome to my course";
// let includeResult=text.includes("Javascript");
// console.log(includeResult);

// startswith()--returns true if string begin with specified value otherwise false

// let text="hello Javascript,Welcome to my course";
// let result=text.startsWith("hello");
// console.log(result);


// let text="hello Javascript,Welcome to my course";
// let result=text.endsWith("course");
// console.log(result);

// extracting string parts

// slice()--extracts a part of string and return the extracted part of new string

// let text="Hello Pranav,welcome back ";
// let result=text.slice(6,12);
// console.log(result);

// substring--extract portion of string on starting amd ending indics..


// extracting string characters

// 1---charAt()---returns single character 

// let text="Hello Pranav,welcome back ";
// let result=text.charAt(8);
// console.log(result);

// 2--charCodeAt()--return code of string

// let text="Hello Pranav,welcome back ";
// let result=text.charCodeAt(8);
// console.log(result);

// 3--at()--returns the character at specified index in string



// let text="Hello Pranav,welcome back ";
// let result=text.at(4);
// console.log(result);

// 4--replace()--replace specified value

// let text="Hello Pranav,welcome back ";
// let result=text.replace("Hello","WElcome");
// console.log(result);

// 5--toUppercase and toLowercase

// let text=" Pranav ";
// let result=text.toUpperCase("Pranav");
// console.log(result);

// 6--trim --remove whitespace from both end of the string

// const str='     Hello Ji    ';
// console.log(str.length);
// let result=str.trim();
// console.log(result.length);

// 7--split()--string into array 

// const str= "apple,orange,grapes";
// const strArr=str.split(",");
// console.log(strArr);


// Interview Questions

// console.log("a".charCodeAt(0));

// for(let char=97;char<=122;char++){
//     console.log(char);
// }

// string.fromChar--used to convert 

// for(char=97;char<=122;char++){
//     console.log(String.fromCharCode(char));
// }

