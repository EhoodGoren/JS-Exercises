"use strict";
//const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
const grades = [1,100,45];
function gradeRange(grades){
    let lowestGrade=100;
    let highestGrade=0;
    for(let i=0; i<grades.length; i++){
        if(grades[i]<lowestGrade){
            lowestGrade=grades[i];
        }
        if(grades[i]>highestGrade){
            highestGrade=grades[i];
        }
    }
    return (lowestGrade + " - " + highestGrade);
}
console.log(gradeRange(grades));
