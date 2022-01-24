/*
//querySelect all the buttons
const oneBtn=document.getElementById('one');
const twoBtn=document.getElementById('two');
const threeBtn=document.getElementById('three');
const fourBtn=document.getElementById('four');
const fiveBtn=document.getElementById('five');
const sixBtn=document.getElementById('six');
const sevenBtn=document.getElementById('seven');
const eightBtn=document.getElementById('eight');
const nineBtn=document.getElementById('nine');
const zeroBtn=document.getElementById('zero');
const additionBtn=document.getElementById('addition');
const subtractionBtn=document.getElementById('subtraction');
const multiplicationBtn=document.getElementById('multiplication');
const divisionBtn=document.getElementById('division');
const allClearBtn=document.getElementById('all-clear');
const equalBtn=document.getElementById('equal');
*/

//querySelecton all the buttons AT ONCE
const btn=document.querySelectorAll(".btn");

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
    btn[i].addEventListener('click', postNumber);
}

//Function to push callButton into screen
let screenArray=[];

//Note: put parts of postnumber function into operate,

function postNumber(e){
    let number = callButton(e);
    if (number >=0 && number <=9){
        screen.innerHTML=number;           
    }
    console.log("workd");
}


//Function to obtain button/operation from buttons 
function callButton (e){
    const word = e.target.textContent;
    console.log(word);
    return word;
}

//Functions for Addition, Subtraction, Division, Multiplication