// function isEven(element){
//     if (element % 2 === 0){
//         return true;
//     }
//     return false;
// }




// function isEven(element){
//     return element % 2 === 0;
// }

// Arrow function 

var isEven = (element) => {
    return element % 2 === 0;
}

console.log(isEven(2));
console.log(isEven(9));
console.log(isEven(7894562245));

//callbackfunction

var result = [2, 4, 6, 8].every(isEven);
console.log(result);
// Output:true


var result2 = [2, 4, 9, 8].every(isEven);
console.log(result2);
// Output:false



// arrow fuction callback

var result2 = [2, 4, 9, 8].every((e) => (e % 2===0));
console.log(result2);





















