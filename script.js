var Element1 = document.querySelector("#todd");
var Element2 = document.querySelector("#phil");
var Element3 = document.querySelector("#jane");
var Element4 = document.querySelector("#connumber");
var Element5 = document.querySelector("#requestnumber")




function nameChange() {
    Element3.innerText = "Kyle Sullivan";
}

var count = 500;
var countt = 2;

function addTodd() {
    count++;
    Element4.innerText = count + "+";
}

function byeTodd() {
    Element1.remove()
}

function byeReq() {
    countt--;
    Element5.innerText = countt + "  "
}
function byePhil() {
    Element2.remove();
}

function addPhil() {
    count++;
    Element4.innerText = count + "+";
}