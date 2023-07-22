var user = {
    firstName : "Shreyansh",
    lastName: "Shukla",
    age: 20,
    emailId: "Shreyanshsdl007@gmail.com",
    password:"Password",
    address:"Bhopal {MadhyaPradesh}",
    phoneNo:"+91-8354678",
    education:"BBA-BIA",
    userInfo: function (){
        return `age is:${this.age},
         Email ID is: ${this.emailId}, Password is:${this.password},
          Address is${this.address}, Phone is:${this.phoneNo}
           and the education is${this.education}`;
    }
}


// var userInfo = true;
console.log(`the User name is ${user.firstName +
     user.lastName} and his all info is displayed hear: ${user.userInfo()}`);







