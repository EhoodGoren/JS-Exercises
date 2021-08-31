"use strict";

//list of Formula 1 champions since the year 2000
const formula1Champions = [
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Alonso",
    "Alonso",
    "Räikkönen",
    "Hamilton",
    "Button",
    "Vettel",
    "Vettel",
    "Vettel",
    "Vettel",
    "Hamilton",
    "Hamilton",
    "Rosberg",
    "Hamilton",
    "Hamilton",
    "Hamilton",
    "Hamilton"
]

let winners = {}

function countWin(driver) {
    if(!winners.hasOwnProperty(driver)){
        winners[driver]=0;
    }
    winners[driver]++;
}

formula1Champions.forEach(countWin); //forEach runs the countWin function on each of it's elements (the function input is the element).