
//querySelecton all the buttons AT ONCE
const btn=document.querySelectorAll(".btn");

//querySelect all NUMBERED buttons
const numBtn=document.querySelectorAll("#numBtn");

//querySelect each OPERAND buttons
const addition=document.getElementById("addition");
const subtraction=document.getElementById("subtraction");
const multiplication=document.getElementById("multiplication");
const division=document.getElementById("division");
const allClear=document.getElementById("all-clear");

//querySelect EQUAL
const equal=document.getElementById("equal");

//select lines on screen
const current=document.querySelector(".current");

//Function that adds highlight effect to calculator buttons
function btnHighlight(e){
    let name=e.target.className;
    if (name==="btn"){
        e.target.style.backgroundColor="#d9dad7";
    }
}

function btnReset(e){
    let name=e.target.className;
    let id=e.target.id;
    if (name==="btn" && id!=="addition"){
        e.target.style.backgroundColor="#3e4a61";
    }
    else if(id=="addition"){
        e.target.style.backgroundColor="#c24d2c";
    }
}

//Event listeners for button interaction
for (i=0; i<16; i++){
    btn[i].addEventListener('mouseover', btnHighlight);
    btn[i].addEventListener('mouseout', btnReset);
}

let numLength=numBtn.length;
for (i=0; i<numLength; i++){
    numBtn[i].addEventListener('click', pushToArray);
}

addition.addEventListener('click', pushToStorage);
addition.addEventListener('click', determineOp);

subtraction.addEventListener('click', pushToStorage);
subtraction.addEventListener('click', determineOp);

multiplication.addEventListener('click', pushToStorage);
multiplication.addEventListener('click', determineOp);

division.addEventListener('click', pushToStorage);
division.addEventListener('click', determineOp);

equal.addEventListener('click', operate);
allClear.addEventListener('click', reset);

//Note: put parts of postnumber function into operate,

function postNumber(e){
    let number = callButton(e);
    if (number >=0 && number <=9){
        current.innerHTML=number;           
    }
    console.log("workd");
}

//Using Arrays for storage
let screenArray=[];
let storageArray=[];
let operand="";
let boy=0; //stored number
let girl=0; //screen number

function pushToArray(e){
    let a=e.target.textContent;
        screenArray.push(a);
        screenArray.reduce((total, item) =>{
            return total + item;
        }, "")
        let cowgirl=parseFloat(screenArray.join(''));
        console.log(`the screen number is now ${cowgirl}`);
        current.innerHTML=cowgirl;
        girl=cowgirl;
}

function pushToStorage(e){
    let c=screenArray.length;
    for (i=0; i<c; i++){
            let chicken=screenArray.pop();
            storageArray.unshift(chicken);
    }
    let catboy=parseFloat(storageArray.join(''));
    console.log(`stored number is ${catboy}`);
    boy=catboy;
}

function determineOp(e){
    operand = e.target.textContent;
    console.log(`the operand is ${operand}`);
}

function operate(){
    if (operand=="+"){
        console.log(`we are doing ${boy} ${operand} ${girl}`);
        result= add(boy,girl);
        console.log(`the result is ${result}`);
        current.innerHTML=result;
        storageArray=[];
        screenArray=[result];
        operand="";
        console.log(storageArray);
        console.log(screenArray);
    }
    else if (operand=="-"){
        console.log(`we are doing ${boy} ${operand} ${girl}`);
        result= subtract(boy,girl);
        console.log(`the result is ${result}`);
        current.innerHTML=result;
        storageArray=[];
        screenArray=[result];
        operand="";
        console.log(storageArray);
        console.log(screenArray);
    }
    else if (operand=="X"){
        console.log(`we are doing ${boy} ${operand} ${girl}`);
        result= multiply(boy,girl);
        console.log(`the result is ${result}`);
        current.innerHTML=result;
        storageArray=[];
        screenArray=[result];
        operand="";
        console.log(storageArray);
        console.log(screenArray);
    }
    else if (operand=="/"){
        console.log(`we are doing ${boy} ${operand} ${girl}`);
        result= divide(boy,girl);
        console.log(`the result is ${result}`);
        if (result==Infinity){
            current.innerHTML="don't divide by 0, press AC to restart universe";
            console.log("this is infinite");
            storageArray=[];
            screenArray=[];
            operand="";
        } else{
            current.innerHTML=result;
            storageArray=[];
            screenArray=[result];
            operand="";
            console.log(storageArray);
            console.log(screenArray);
        }
    }
}


//Functions for Addition, Subtraction, Division, Multiplication
function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

function multiply(a, b){
    return a*b;
}

function reset(){
    storageArray=[];
    screenArray=[];
    current.innerHTML="";
    operand="";
}