// function myFunction() {
//     window.history.back();
//   }

//session storage
//   sessionStorage.setItem("name","John Doe");
// document.getElementById("demo").innerHTML = sessionStorage.getItem("name");

//JSON
// const myObj = {name:"John", age:30, city:"New York"};
// // document.getElementById("demo").innerHTML = myObj.name+" "+myObj.age;
// document.getElementById("demo").innerHTML = myObj["name"];

//parse in json
// const txt = '{"name":"John", "age":30, "city":"New York"}'
// const obj = JSON.parse(txt);
// document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;

//Array as parse
// const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
// const myArr = JSON.parse(text);
// document.getElementById("demo").innerHTML = myArr[0];

// Convert a string into a date:
// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text);
// obj.birth = new Date(obj.birth);
// document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth; 

// Convert a string into a date, using the reviver function
// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text, function (key, value) {
//   if (key == "birth") {
//     return new Date(value);
//   } else {
//     return value;
//   }
// });

// document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;

// JSON stringify
// const obj = {name: "John", age: 30, city: "New York"};
// const myJSON = JSON.stringify(obj);
// document.getElementById("demo").innerHTML = myJSON;

// Stringify a JavaScript Array
// const arr = ["John", "Peter", "Sally", "Jane"];
// const myJSON = JSON.stringify(arr);
// document.getElementById("demo").innerHTML = myJSON;

// Storing data in local storage
// When storing data, the data has to be a certain format, and regardless of where you choose to store it, text is always one of the legal formats.
// JSON makes it possible to store JavaScript objects as text
// Storing data:
const myObj = {name: "John", age: 31, city: "New York"};
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;

