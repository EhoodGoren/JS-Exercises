"use strict";
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];

//from here on are some base functions which are used in more than one fucntion
function lowestGrade(grades){
    let lowestGrade=100;
    for(let i=0; i<grades.length; i++){
        if(grades[i]<lowestGrade){
            lowestGrade=grades[i];
        }
    }
    return lowestGrade;
}

function highestGrade(grades){
    let highestGrade=0;
    for(let i=0; i<grades.length; i++){
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
console.log(gradeRange(grades));


function medianGrade(grades){
}

console.log(medianGrade(grades));