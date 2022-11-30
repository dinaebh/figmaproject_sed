
function validateForm() {

    let x = document.forms["form1"]["nameandsurname"].value;
    if (x === "ironhack") {
        alert("You cannot be Ironhack, because I am Ironhack");
        return false;
    }
    if (x === "") {
        alert("It must be filled with your name");
        return false;
    }
    else {
        return true;
    }
    // let missingat = document.forms["form1"]["email"].value;
    // if (missingat !== includes("@")) {
    //     alert("You are missing @ ");
    //     return false;
    // }
    // else {
    //     return true;
    // }

}