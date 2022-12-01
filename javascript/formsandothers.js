
function validateForm() {

    let missingname = document.forms["form1"]["nameandsurname"].value;
    if (missingname === "ironhack") {
        alert("You cannot be Ironhack, because I am Ironhack");
        return false;
    }
    else if (missingname.length === 0) {
        alert("It must be filled with your name");
        return false;
    }
        //  else {
    //   return true;
    //  }
     let missingat = document.forms["form1"]["email"].value;
   if (missingat !== includes("@")) {
        alert("Invalid email format please enter valid email id");
      return false;
    }
    //  else {
    //   return true;
    //  }
let missingphone = document.forms["form1"]["phone"].value;
if (typeof missingphone !=='number'){
alert("Invalid phone format please enter valid characters");
return false;
}
let missingmessage = document.forms["form1"]["message"].value;
if (missingname.length === 0){
alert("Don't you have any message for us? Please, fill the message gap and let us know!");
return false;
}

else{
    return true;
}
}