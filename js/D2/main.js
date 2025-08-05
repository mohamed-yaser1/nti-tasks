
const userName = prompt("enter your name");
const birthYear = prompt("enter your birth year");
const isStudent = confirm("are y a student");


const currentAge = new Date().getFullYear - birthYear ;

let catgorize ;

if(currentAge < 13)
    catgorize = 'kid';
else if(catgorize > 13 && catgorize <19)
    catgorize = 'teen';
else if(catgorize > 18 && catgorize <59)
    catgorize = 'adult';

else catgorize = "senior";

console.log(`hello ${userName} you re ${birthYear} years old`);
alert("catgory :" + catgorize);
document.getElementById('student').innerText="dont forgt to study hard";