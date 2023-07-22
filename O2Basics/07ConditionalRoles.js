// Create an application with following roles:
// admin - gets full access
// subadmin - gets access to creat/delete courses
// testprep - gets access to creat/delete tests
// user - get access to consume content



var user = "admin";

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("You get access to creat/delete courses");
        break;
    case "testprep":
        console.log("You get access to creat/ delete tests");
        break;
    case "user":
        console.log("You get access only to the courses");
        break;    

    default:
        console.log("Trial User");
        break;
}