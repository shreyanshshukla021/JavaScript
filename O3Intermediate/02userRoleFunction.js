/*
Define a funvtion tha can answer the role of a user, A user can be on the following roles:
admin - with all access
subadmin - with access to creat/delete courses
testprep - with access to creat/delete test
user - consume all the content
other - trail user

input: getUserRole(name,role)
*/

function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `Hey ${name}, you have all the acess`;
            // break; // this is not necessary

        case "subadmin":
            return `Hey ${name}, you have the acess to creat/delete the courses`;
            // break;

        case "testprerp":
            return `Hey ${name}, you have the acess to creat/delete the test`;
            // break;

        case "user":
            return `Hey ${name}, you have the acess to tyhe courses`;
            // break;

        default:
            return `Hey ${name}, you are now on free trial would you like to purchase any of the course`
            // break;
    }
}



getUserRole("Shreyansh","testprep")
console.log(getUserRole("Shreyansh","testprep"));

var getRole = getUserRole("sanu", "admin")
console.log(getRole);




/*

this is an unique thing about javascript that you can define the variable as the function---

var getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `Hey ${name}, you have all the acess`;
            break; // this is not necessary

        case "subadmin":
            return `Hey ${name}, you have the acess to creat/delete the courses`;
            break;

        case "testprerp":
            return `Hey ${name}, you have the acess to creat/delete the test`;
            break;

        case "user":
            return `Hey ${name}, you have the acess to tyhe courses`;
            break;

        default:
            return `Hey ${name}, you are now on free trial would you like to purchase any of the course`
            break;
    }
}



getUserRole("Shreyansh","testprep")
console.log(getUserRole("Shreyansh","testprep"));

var getRole = getUserRole("sanu", "admin")
console.log(getRole);

*/



