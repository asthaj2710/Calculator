let curretValue="";
document.querySelector("#display").value=curretValue;


function one(){
  document.getElementById('one');
    curretValue = curretValue + '1';
    document.querySelector("#display").value=curretValue;
}
function two(){
   document.getElementById('two');
    curretValue = curretValue + '2';
    document.querySelector("#display").value=curretValue;
}
function three(){
    document.getElementById('three');
    curretValue = curretValue + '3';
    document.querySelector("#display").value=curretValue;
}
function four(){
    document.getElementById('four');
    curretValue = curretValue + '4';
    document.querySelector("#display").value=curretValue;
}
function five(){
   document.getElementById('five');
    curretValue = curretValue + '5';
    document.querySelector("#display").value=curretValue;
}
function six(){
   document.getElementById('six');
    curretValue = curretValue + '6';
    document.querySelector("#display").value=curretValue;
}
function seven(){
   document.getElementById('seven');
    curretValue = curretValue + '7';
    document.querySelector("#display").value=curretValue;
}
function eight(){
   document.getElementById('eigth');
    curretValue = curretValue + '8';
    document.querySelector("#display").value=curretValue;
}
function nine(){
    document.getElementById('nine');
    curretValue = curretValue + '9';
    document.querySelector("#display").value=curretValue;
}
function zero(){
    document.getElementById('zero');
    curretValue = curretValue + '0';
    document.querySelector("#display").value=curretValue;
}
function add(){
    document.getElementById('add');
    curretValue = curretValue + '+';
    document.querySelector("#display").value=curretValue;
}
function subtract(){
    document.getElementById('subtract');
    curretValue = curretValue + '-';
    document.querySelector("#display").value=curretValue;
}
function divide(){
    document.getElementById('divide');
    curretValue = curretValue + '/';
    document.querySelector("#display").value=curretValue;
}
function multiply(){
    document.getElementById('multiply');
    curretValue = curretValue + '*';
    document.querySelector("#display").value=curretValue;
}
// function decimal(){
//     document.getElementById('decimal');
//     curretValue = curretValue + '.';
//     document.querySelector("#display").value=curretValue;
// }
function clear(){
    // document.getElementById('clear');
    curretValue = '';
    document.querySelector("#display").value=curretValue;
}
document.getElementById('clear').addEventListener('click', clear);

function equals(){
    document.getElementById('equals');
    curretValue =eval(curretValue);
    document.querySelector("#display").value=curretValue;
}