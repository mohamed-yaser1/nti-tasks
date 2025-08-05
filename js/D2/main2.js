const name = prompt("enter your name");
const age = prompt("enter your age");
const expYears = prompt("enter your expYears");
const rating = prompt("from 1 to 10 rate yourself");

const baseSalary = 1000;

let jopCatgory , level , bonus;
if(expYears < 2){
    jopCatgory = 'junior';
    bonus = (10/100) * baseSalary;
}
else if(expYears > 2 && expYears < 5){
    jopCatgory = 'mid-level';
    bonus = (15/100) * baseSalary;
}
else if(expYears > 5 && expYears < 10){
    jopCatgory = 'senior'; 
    bonus = (20/100) * baseSalary;
}
else jopCatgory = "expert";



switch (true) {
  case (rating < 5):
    level = "needs improvements";
    break;

  case (rating === 5 || rating === 6):
    level = "average";
    break;

  case (rating === 7 || rating === 8):
    level = "good";
    break;

  case (rating >= 9):
    level = "excellent";
    break;

  default:
    level = " ";
}

const finalSalary = baseSalary + bonus;

console.log(finalSalary , level ,jopCatgory)

