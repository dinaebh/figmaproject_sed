
function validateForm() {

    let missingname = document.forms["form1"]["nameandsurname"].value;
    if (missingname === "ironhack") {
        alert("You cannot be Ironhack, because I AM IRONHACK");
        return false;
    }
if (missingname.length ===0) {
 alert("Don't miss filling out with your name");
return false;
}

// else {
// return true;
// }
let missingat = document.forms["form1"]["email"].value;
if (!missingat.includes("@")) {
alert("Ups!invalid email format, please enter valid email id");
return false;
 }
 
// else {
// return true;
//  }

let missingphone = document.forms["form1"]["phone"].value;

if (isNaN(missingphone)){

alert("Ups! please enter valid characters");
return false;
 } 
let missingmessage = document.forms["form1"]["message"].value;
if (missingmessage.length === 0){
alert("Don't you have any message for us? Please, fill the gap and let us know!");
return false;
}

else{
    // window.location(href="http://127.0.0.1:5501/backContact.html");
    return true;
}
}