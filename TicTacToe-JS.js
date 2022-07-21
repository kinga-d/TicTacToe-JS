// JavaScript source code

const fields = document.querySelectorAll(".cell");

let activePlayer = 'X';

fields.forEach(field => {
    field.addEventListener("click", e => {
        e.target.classList.add(`cell--filled-${activePlayer}`); //template string with `
    });
});