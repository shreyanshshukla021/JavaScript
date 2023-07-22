/*

// global context kiks in

var num = 2;
function sayMe(){
    console.log("Say me");
}

// Execution Context kiks in because the whole function is to be excuted at once

sayMe();

*/

tipper("5");

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

tipper("5");
tipper("a");


function bigTipper(a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("200");



// bigTipper("200");
// var bigTipper = function (a) {
//     var bill = parseInt(a);
//     console.log(bill + 15);
// }

// this code will throw an error unlike the above one because the bigTipper is not an fuction any more

console.log(name);
var name = "Shreyansh";

function sayName() {
    var name = "MR.H"
    console.log(name);
}

console.log(name);
sayName();

