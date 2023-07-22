var user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    role: "Admin",
    loginCount: 32,
    isLoggedIn: true
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);
console.log(user);
console.table(user);



