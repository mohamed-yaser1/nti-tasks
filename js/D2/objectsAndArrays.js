

//task 1
const numbers = [-1 , 2 , 3, -8, 9, 10, -7 ,3,0];
let sumPositiveNumbers = 0 , allNumbers = 0 ;


for (let i = 0; i < numbers.length; i++) {
    allNumbers+=numbers[i];
    if(numbers[i] < 0) continue;
    sumPositiveNumbers+=numbers[i];
}

// console.log(sumPositiveNumbers , allNumbers); //27 11


// task 2

const student = {
    name:"mohamed",
    age:20,
    grade:"b",
    isGraduated:false
}
console.log(student.name,student.age);
student.grade = "A";

Object.keys(student).forEach(el => console.log(el));
Object.values(student).forEach(el => console.log(el));

student.email = "email address";
delete student["isGraduated"];

console.log(student)

//task 3 

const students = [
  { name: "Ahmed", age: 20, grade: "A", isGraduated: false },
  { name: "Sara", age: 22, grade: "B", isGraduated: true },
  { name: "Youssef", age: 19, grade: "C", isGraduated: false },
  { name: "Mona", age: 23, grade: "A", isGraduated: true },
  { name: "Ali", age: 21, grade: "B", isGraduated: false },
  { name: "Laila", age: 20, grade: "A", isGraduated: false },
  { name: "Omar", age: 24, grade: "C", isGraduated: true },
  { name: "Noor", age: 22, grade: "B", isGraduated: true },
  { name: "Hassan", age: 21, grade: "A", isGraduated: false },
  { name: "Dina", age: 23, grade: "B", isGraduated: true }
];

// this array was created by ai

let average = 0 , numberOfGraduates = 0 ;

for (let i = 0; i < students.length; i++) {
    average+=students[i].age;
    if (students[i].isGraduated) numberOfGraduates++;
}

average/=students.length;
const notGraduated = students.length - numberOfGraduates;

students.push({ name: "Hassan", age: 21, grade: "A", isGraduated: false ,email:"emailadress"})

students.forEach(element => {
    delete element["isGraduated"];
    console.log(element["name"]);
});

console.log(average , numberOfGraduates , notGraduated);
