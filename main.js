
//querySelecton all the buttons AT ONCE
const btn=document.querySelectorAll(".btn");

//querySelect all NUMBERED buttons
const numBtn=document.querySelectorAll("#numBtn");

//querySelect each OPERAND buttons
const addition=document.getElementById("addition");

//querySelect EQUAL
const equal=document.getElementById("equal");

//querySelects screen
const screen=document.querySelector(".current");

//select lines on screen
const previous=document.querySelector(".previous");
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
    //btn[i].addEventListener('click', pushToArray);
    //btn[i].addEventListener('click', pushToStorage);
}


let numLength=numBtn.length;
for (i=0; i<numLength; i++){
    numBtn[i].addEventListener('click', pushToArray);
}

addition.addEventListener('click', pushToStorage);
addition.addEventListener('click', determineOp);

equal.addEventListener('click', operate);

//Note: put parts of postnumber function into operate,

function postNumber(e){
    let number = callButton(e);
    if (number >=0 && number <=9){
        screen.innerHTML=number;           
    }
    console.log("workd");
}

//Using Arrays for storage
let screenArray=[];
let storageArray=[];
let operand="";
let boy=0;
let girl=0;

function pushToArray(e){
    let a=e.target.textContent;
    //if(a!="+" && a!="-" && a!="X" && a!="/" && a!="AC" && a!="="){
        screenArray.push(a);
        screenArray.reduce((total, item) =>{
            return total + item;
        }, "")
        let pig=parseInt(screenArray.join(''));
        console.log(`the number is now ${pig}`);
        girl=pig;
    //} 
}

function pushToStorage(e){
    //let b=e.target.textContent;
    let c=screenArray.length;
    for (i=0; i<c; i++){
        //if(b == "+" || b=="-" || b=="X" || b=="/"){
            let chicken=screenArray.pop();
            storageArray.push(chicken);
        //}
    }
    //let cat=storageArray.reduce((total, item) =>{
    //    return total + item;
    //}, "")
    let cat=parseInt(storageArray.join(''));
    console.log(`other number is ${cat}`);
    boy=cat;
}

function determineOp(e){
    operand = e.target.textContent;
    console.log(`the operand is ${operand}`);
}

function operate(){
    if (operand=="+"){
        console.log("behold!");
        //let a=screenArray[0];
        //let b=storageArray;
        console.log(`we are adding ${boy} and ${girl}`);
        //console.log(add(screenArray[0], storageArray[0]));
    }
}

//Functions for Addition, Subtraction, Division, Multiplication
//Addition
function add(a, b){
    return a+b;
}