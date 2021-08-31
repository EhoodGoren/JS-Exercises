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

let winners = {
    "Schumacher":0,
    "Alonso":0,
    "Räikkönen":0,
    "Hamilton":0,
    "Button":0,
    "Vettel":0,
    "Rosberg":0,
}

function countWin(driver) {
    switch(driver){
        case "Schumacher":
            winners.Schumacher++
            break;

        case "Alonso":
            winners.Alonso++
            break;

        case "Räikkönen":
            winners.Räikkönen++
            break;

        case "Hamilton":
            winners.Hamilton++
            break;

        case "Button":
            winners.Button++
            break;
                
        case "Vettel":
            winners.Vettel++
            break;

        case "Rosberg":
            winners.Rosberg++
            break;            
    }
    return winners[driver];
}

formula1Champions.forEach(countWin); //forEach runs the countWin function on each of it's elements (the function input is the element).