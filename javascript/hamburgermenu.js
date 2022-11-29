function myBurger()  {
    let burger = document.getElementsByClassName("menu-spacing");
    if (burger.style.display === "block") {
        burger.style.display = "none";
    } else {
        burger.style.display = "block";
    }
}

myBurger();