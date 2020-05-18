// 38. Write a JavaScript program to check the total marks of a student in
//  various examinations. The student will get A+ grade if the total marks 
//  are in the range 89..100 inclusive, if the examination is "Final-exam."
//  the student will get A+ grade and total marks must be greater than or 
//  equal to 90. Return true if the student get A+ grade or false otherwise. 

// using a bit of client-side js..
//i have four students with diff identity numbers.
// step for verification of students
function Student(idNumber, grade) {
    this.idNumber = idNumber;
    this.grade = grade;
}
const studentOne = new Student(1, 90);
const studentTwo = new Student(2, 70);
const studentThree = new Student(3, 98);
const studentFour = new Student(4, 89);

const input = document.getElementById('input');

function myGradeProgram(typeOfExam) {
    if (typeOfExam !== 'final') {
        var gradeLimit = 89;
    } else {
        gradeLimit = 90;
    }
    switch (Number(input.value)) {
        case studentOne.idNumber: 
            if (studentOne.grade >= gradeLimit && studentOne.grade <= 100) {
                alert(true);
            } else {
                alert(false);
            }
        break;
        case studentTwo.idNumber: 
            if (studentTwo.grade >= gradeLimit && studentTwo.grade <= 100) {
                alert(true);
            } else {
                alert(false);
            }
        break;
        case studentThree.idNumber: 
            if (studentThree.grade >= gradeLimit && studentThree.grade <= 100) {
                alert(true);
            } else {
                alert(false);
            }
        break;
        case studentFour.idNumber: 
            if (studentFour.grade >= gradeLimit && studentFour.grade <= 100) {
                alert(true);
            } else {
                alert(false);
            }
        break;
    }
}

document.getElementById('button').addEventListener('click', function() {myGradeProgram('final')});
