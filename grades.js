"use strict";
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];

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

function gradeRange(grades){
    return highestGrade(grades)-lowestGrade(grades);
}
console.log(gradeRange(grades));


function medianGrade(grades){
    let ascArr=[];
    for(i=0; i<grades.length; i++){
    }
}