"use strict"

const password = document.getElementById("password");

password.addEventListener("input", (event) => {
    if(!event.includes("@")) {
        password.setCustomValidity("Password must contain @ symbol")
    }
});