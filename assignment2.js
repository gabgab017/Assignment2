let student = [
    { name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
    { name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },
    { name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },
    { name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99] }
];

// Question 1

function getTopStudent(students) {
    let topStudent;
    let highestMarks = 0;
    students.forEach(student => {
        let totalMarks = student.marks.reduce((acc, mark) => acc + mark);
        if (totalMarks > highestMarks) {
            highestMarks = totalMarks;
            topStudent = student.name;
        }
    });
    return topStudent;
};

let top = getTopStudent(student);
console.log(top);

// Question 2:

function getMinimumValue(students) {
    return students.map(student => Math.min(...student.marks));
};

let minMarks = getMinimumValue(student);
console.log(minMarks);

// Question 3:

function countLetters(str) {
    return str.split('').filter(char => char.match(/[a-zA-Z]/)).length;
};

let count = countLetters('helloworld');
console.log(count);

debugger;