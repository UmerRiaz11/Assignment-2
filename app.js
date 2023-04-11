// // Q-1

// function createAdder(num) {
//   return function addNumToNum(numToAdd) {
//     return num + numToAdd;
//   }
// }
// Example :
// const addFive = createAdder(5);
// console.log(addFive(15));

// // Q-2

// function searchArray(arr, value) {
//     if (arr.length === 0) {
//       return false;
//     }
//     else if (arr[0] === value) {
//       return true;
//     }
//     else {
//       return searchArray(arr.slice(1), value);
//     }
//   }
// Example :
//   const arr = [1, 2, 3, 4, 5];
//   console.log(searchArray(arr, 3));

// // Q-3
// function paragraph(paragraph){
//     var container = document.getElementById("home")
//     var para = document.createElement("p")
//     para.innerHTML = paragraph
//     container.appendChild(para)
// }
// paragraph("karachi")
// paragraph("pakistan")

// // Q-4
// function addListItem(text) {
//   // Create a new list item
//   var con = document.getElementById("myList");
//   var newText = document.createElement("li");
//   newText.innerHTML = text
//   con.appendChild(newText);
// }

// addListItem("test")

// // Q-5

// function backgroungChange(element, color) {
//   var container = document.getElementById("home");
//   var element = document.createElement(element);
//   element.innerHTML = "pakistan";
//   element.style.backgroundColor = color;
//   container.appendChild(element);
// }

// backgroungChange("h1", "orange");

// // Q-6

// function savingInLocalStorage(key, data) {
//   localStorage.setItem(key, JSON.stringify(data));
// }
// savingInLocalStorage("qwe", 123)

// // Q-7

// function gettingLocalStorageData(key) {
//   var data = localStorage.getItem(key);
// data = JSON.parse(data);
// console.log(data)
// }

// gettingLocalStorageData("qwe")

// // // Q-8

// function test(object) {
//   const key = Object.keys(object);
//   const value = Object.values(object);
//   // var data = {}
//   for (i = 0; i < key.length; i++) {
//     localStorage.setItem(key[i], value[i]);
//   }
 
// }

// var karachi = {
//   name: "city",
//   age: 12,
// };
// test(karachi);



