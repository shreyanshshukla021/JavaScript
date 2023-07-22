// This
// For all the regular function calls, this points to window object


console.log(this);

// run the same code in the browser


var user = {
    firstname: "Shreyansh",
    courseCount: 4,
    getCourseCount: function (){
        console.log("LINE 7",this);
        function sayHello(){
            console.log("Hello");
            console.log("LINE 17", this);
        }
        sayHello()
    }
}

// this is not an regular function this is called proven object

user.getCourseCount();


//regular function

// function sayHello(){
//     console.log("Hello");
// }

// sayHello()
