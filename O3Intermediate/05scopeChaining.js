var name = "Sanu";

console.log(`line number 3 ${name}`);

function sayName() {
    console.log("Line number 6", name);

    sayNmaeTwo();

    function sayNmaeTwo() {
        var name = "MR. SS"
        console.log(`line number 12 ${name}`);
    }
}


sayName();


// function sayName1() {
//     var name = "MY H"
//     console.log("Line number 21", name);
// }

// sayName1();