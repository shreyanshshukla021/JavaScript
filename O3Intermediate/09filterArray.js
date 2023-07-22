var testArray = [2, 4, 6, 3, 1, 5, 9, 80];
// console.log(testArray.fill("S"));
console.log(testArray.fill("S",2,5));

const myNumbers = [ 23, 24, 25, 55, 66, 77, 87, 98];

const result = myNumbers.filter((num) => num != 55);
console.log(result);


var user = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
// console.log(user.slice(0,3));
// console.log(user.slice(4));

// user.splice(0, 2, "Hi");
user.splice(1, 3, "Hi", "BYE");
console.log(user);