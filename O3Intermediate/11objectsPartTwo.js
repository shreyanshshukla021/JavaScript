var user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    role: "Admin",
    loginCount: 32,
    isLoggedIn: true,
    cousreList: [],
    buyCourse: function (coureseName){
        this.cousreList.push(coureseName);
    },
    getCourseCount: function (){
        return `${this.firstName} is enrolled in total of ${this.cousreList.length} courses`;
    },
};

var cousreList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React js Courses");
user.buyCourse("Angular Courses");
console.log(user.getCourseCount());
