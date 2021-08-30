"use strict";
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];

//from here on are some base functions which are used in more than one fucntion
function lowestGrade(grades){
    let lowestGrade=100;
    for(let i=0; i < grades.length; i++){
        if(grades[i]<lowestGrade){
            lowestGrade=grades[i];
        }
    }
    return lowestGrade;
}

function highestGrade(grades){
    let highestGrade=0;
    for(let i=0; i < grades.length; i++){
        if(grades[i]>highestGrade){
            highestGrade=grades[i];
        }
    }
    return highestGrade;
}
function arrayAscending(grades){
    let gradesLength=grades.length;
    let firstHalf=[];
    let secondHalf=[];
    let twoHalves=[];
    let ascArr=[];
    ascArr[0]=lowestGrade(grades);
    firstHalf=grades.slice( 0, grades.indexOf(lowestGrade(grades)) );
    secondHalf=grades.slice(grades.indexOf(lowestGrade(grades))+1, gradesLength);
    twoHalves=firstHalf.concat(secondHalf);
    for(let i=1; i<gradesLength; i++){
        ascArr[i]=lowestGrade(twoHalves);
        firstHalf=twoHalves.slice( 0, twoHalves.indexOf(lowestGrade(twoHalves)) );
        secondHalf=twoHalves.slice(twoHalves.indexOf(lowestGrade(twoHalves))+1, twoHalves.length);
        twoHalves=firstHalf.concat(secondHalf);
    }
    return ascArr;
}
console.log(arrayAscending(grades));
//end of said base functions


function gradeRange(grades){
    return highestGrade(grades)-lowestGrade(grades);
}


function medianGrade(grades){
    grades=arrayAscending(grades);
    if(grades.length%2 === 0){
        return ( grades[grades.length/2] + grades[(grades.length/2)-1] )/2;
    }
    else{
        return grades[(grades.length-1)/2];
    }
}


function secondHalfGrades(grades){
    let secondHalfArr;
    if(grades.length%2 === 0){
        secondHalfArr=grades.slice(grades.length/2, grades.length)
    }
    else{
        secondHalfArr=grades.slice( (grades.length-1)/2, grades.length );
    }
    return gradeRange(secondHalfArr);
}


console.log("Stats: \n Range: " + gradeRange(grades) + "\n Median: " + medianGrade(grades) + "\n Half Range: " + secondHalfGrades(grades));