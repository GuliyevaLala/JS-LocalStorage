"use strict";


let input = document.querySelectorAll("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

let allBooks = [];

btn.addEventListener("click", function (e) {
    e.preventDefault();
    input.forEach(element => {
        ul.innerhTML += `<li>${element.value}</li>`
        if (JSON.parse(localStorage.getItem("allBooks")) != null) {
            allBooks = JSON.parse(localStorage.getItem("allBooks"))

        }
        allBooks.push({
            Books: element.value
        })
        localStorage.setItem("allBooks", JSON.stringify(allBooks))


    });
})

