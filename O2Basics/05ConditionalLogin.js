// Allow user to acess course if he is:
// logged in form email
// logged in form google
// logged in form facebook


var email = true;
var facebook = false;
var google = false;

if (email || facebook || google){
    console.log("Login Sucess");
}else{
    console.log("Login Denaied");
}


