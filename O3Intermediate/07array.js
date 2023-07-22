// var name;
// var name2;
// var name3;

var countries = ["India","USA","Japan","Russia"];

var states = new Array("Rajasthan","Delhi","Mumbai","Assam");

console.log(states);
console.log(states[0]);


console.log(states.length);


states[0] = "Punjab";
console.log(states);

var user = ["Shreyansh","Shreyanshsdl007@gmail.com",3,34,true];
console.log(user);

user.pop();
user.pop();

// Eleminate the last value

console.log(user);
user.unshift("NEW VALUE");
// Add a NEW Value at beginning of array
console.log(user);
user.shift();
// Remove first element from an array and return it
console.log(user);






console.log(user.indexOf(3));
console.log(user.indexOf("Shreyansh"));
console.log(user.indexOf("newyy"));
console.log(user.indexOf("abc"));



console.log(Array.from("Shreyansh"));