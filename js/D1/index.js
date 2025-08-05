const myString = "mohamd";
const myNumber = 123;
const myBoolean = true;
let x ;
const y =null;

console.log(myString , myNumber , myBoolean,x,y); //mohamd 123 true undefined null

console.log(typeof myString , typeof myNumber , typeof myBoolean ,typeof x, typeof y); // string number boolean undefined object

const firstName = "mohamed";
const lastName = "yaser";

console.log(firstName+ " " + lastName); // mohamed yaser
console.log(`${firstName} ${lastName}`)// mohamed yaser

const userName = "mohamed";
const password = "12345678";

if(!userName)
    console.log("Username is required");
else if(password.length < 8)
    console.log("Password must be at least 8 characters");
else console.log(userName , password)

// mohamed 12345678

