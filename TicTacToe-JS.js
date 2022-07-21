// JavaScript source code

const fieldsElements = document.querySelectorAll(".cell");

const fields = ['', '', '', '', '', '', '', '', ''];

let activePlayer = 'X';

fieldsElements.forEach(field => {
    field.addEventListener("click", e => {

        const { pos } = e.target.dataset;
        if (fields[pos] === '') { 
            fields[pos] = activePlayer;
        e.target.classList.add(`cell--filled-${activePlayer}`); //template string with `
        activePlayer = activePlayer === 'X' ? 'O' : 'X';}
    });
});