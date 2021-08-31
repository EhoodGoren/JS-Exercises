"use strict";

function guessCity(capital, coastal, famous, ancient){
    if(capital && !coastal && famous && ancient){
        return "Jerusalem";
    }
    if(!capital && coastal && famous && !ancient){
        return "Tel Aviv";
    }
    if(!capital && coastal && !famous && ancient){
        return "Acre";
    }
    if(!capital && !coastal && !famous && ancient){
        return "Katzrin";
    }
    if(!capital && coastal && !famous && !ancient){
        return "Zikim";
    }
    if(!capital && !coastal && !famous && !ancient){
        return "Musmus";
    }
    else{
        return "No match for a city";
    }
}