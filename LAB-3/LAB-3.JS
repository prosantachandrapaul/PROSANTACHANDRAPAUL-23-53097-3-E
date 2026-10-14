let name = prompt("Enter student name:");
let age = parseInt(prompt("Enter student age:"));
let isStudent = prompt("Are you a student? (true/false)") === "true";
let cgpa = parseFloat(prompt("Enter student CGPA:"));
let address;
let phone = null;
let grade = prompt("Enter your grade:");

console.log("Student Information:");
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Student: " + isStudent);
console.log("CGPA: " + cgpa);
console.log("Address: " + address);
console.log("Phone: " + phone);
console.log("Grade: " + grade);


let marks = Number(prompt("Enter your marks:"));
if (marks >= 80) {
    console.log("Grade: A+");
} else if (marks >= 70) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else {
    console.log("Grade: F");
}



let courses = ["Web Technology", "OOP", "Database"];
console.log("Courses:");
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

console.log("Using while Loop:");
let k = 0;

while (k < courses.length) {
    console.log(courses[k]);
    k++;
}


console.log("Using do...while Loop:");
let j = 0;
do {
    console.log(courses[j]);
    j++;
} while (j < courses.length);


function showStudent(studentName, studentAge) {
    console.log("Student Name: " + studentName);
    console.log("Student Age: " + studentAge);
}

showStudent(name, age);

let students = [];

for (let x = 0; x < 3; x++) {
    students[x] = prompt("Enter student name " + (x + 1) + ":");
}

console.log("Student Names:");

for (let y = 0; y < students.length; y++) {
    console.log(students[y]);
}


