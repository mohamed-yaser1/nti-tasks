// functions abd callback tasks

function multiply(x,y){
    return x*y;
}
function calculate(x,y,fnc){
    return fnc(x,y);
}

function displayResutl(fnc){
    console.log(fnc)
}

// console.log(calculate(2,3,multiply));


function greetUser(){
    setTimeout(()=>{
        console.log("hello user");
    },3000)
}

function countDown(n){
    let count = n;
    const interval = setInterval(()=>{
        console.log(count);
        count--;
        if(count == 0)
            clearInterval(interval);
    },1000)

    setTimeout(()=> clearInterval(interval),5000);
}
// countDown(10);

const timeout = setTimeout(()=>{
    console.log("This will be cleared!")
},5000)
clearTimeout(timeout);