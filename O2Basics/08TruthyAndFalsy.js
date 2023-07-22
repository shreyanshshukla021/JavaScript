// undefined :- var user;
// null
// 0
// ''
// NaN


// falsy values are the values that are treated as false




var user = null;
// var user = "null";
// var user = "";

if (user) {
    console.log("Condition is true");
}



console.log(2 + 2);
console.log(2 + "2");
console.log("2" + 2);
console.log("2" + "2");







var user2 = "2"

if (2 == user2){
    console.log("Statement is true");
}

// == losely check
// === strict check

if (2 === user2){
    console.log("Statement is true");
} else {
    console.log("Statement is false");
}