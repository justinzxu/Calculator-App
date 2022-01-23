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

//select lines on screen
const previous=document.querySelector(".previous");
const current=document.querySelector(".current");

//Adds highlight effect to calculator buttons

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
        //e.target.color="white";
    }
    else if(id=="addition"){
        e.target.style.backgroundColor="#c24d2c";
    }
}

for (i=0; i<16; i++){
    btn[i].addEventListener('mouseover', btnHighlight);
    btn[i].addEventListener('mouseout', btnReset);
}

//Press button, put corresponding button-content into array



//Functions for Addition, Subtraction, Division, Multiplication