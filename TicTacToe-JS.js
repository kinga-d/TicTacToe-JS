﻿// JavaScript source code

const fieldsElements = document.querySelectorAll(".cell");

const panel = document.querySelector('.panel');

const fields = ['', '', '', '', '', '', '', '', ''];

let activePlayer = 'X';
let gameActive = true;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]

const displayWinMessage = () => {
    panel.innerText = `GRATULACJE ${activePlayer},\n WYGRAŁEŚ!!!`;
}

const validateGame = () => {  //funkcja strzałkowa
    for (let i = 0; i <= 7; i++) {
        const [posA, posB, posC] = winningConditions[i];
        const value1 = fields[posA];
        const value2 = fields[posB];
        const value3 = fields[posC];
        if (value1 !== "" && value1 === value2 && value1 === value3) {
            displayWinMessage();
            gameActive = false;
            
        }
    }
}

fieldsElements.forEach(field => {
    field.addEventListener("click", e => {

        const { pos } = e.target.dataset;
        if (gameActive && fields[pos] === "") { 
            fields[pos] = activePlayer;
            e.target.classList.add(`cell--filled-${activePlayer}`); //template string with `
            validateGame();
        activePlayer = activePlayer === 'X' ? 'O' : 'X';}
    });
});