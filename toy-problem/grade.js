// Prompts the user to enter the students marks
let marks = parseInt("65");

// A function that gives the grade of the studen based on their marks
function calculateMarks(marks) {
  let grade;
  if (marks > 79) {
    grade = "A";
  } else if (marks >= 60 && marks <= 79) {
    grade = "B";
  } else if (marks >= 50 && marks <= 59) {
    grade = "C";
  } else if (marks >= 40 && marks <= 49) {
    grade = "D";
  } else {
    grade = "E";
  }
  return grade; //Returns the grade
}

let grade = calculateMarks(marks);
let message = "Invalid marks, please input again"; // The message displayed when the marks are beyond the limits or invalid

// Displays the marks of the user or the message depending on whether it is invalid or not
console.log(
  marks >= 0 && marks <= 100
    ? `The student had ${marks} which is a grade ${grade}`
    : `${message}`
);
