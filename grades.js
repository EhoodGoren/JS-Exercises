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
    let ascArr=[];
    for(let i=0; i<gradesLength; i++){
        ascArr[i]=lowestGrade(grades);
        grades.splice(grades.indexOf(lowestGrade(grades)),1);
    }
    return ascArr;
}
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
        grades.splice(0,grades.length/2)
        secondHalfArr=grades
    }
    else{
        grades.splice(0,grades.length/2-1)
        secondHalfGrades=grades;
    }
    return gradeRange(secondHalfArr);
}

console.log(gradeRange(grades));
//console.log(medianGrade(grades));
console.log(secondHalfGrades(grades));
//console.log("Stats: \n Range: " + gradeRange(grades) + "\n Median: " + medianGrade(grades) + "\n Half Range: " + secondHalfGrades(grades));