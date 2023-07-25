const number = document.getElementById("number");
const printButton = document.getElementById("print-button");
let numberPrinted = document.getElementById("print");
printButton.addEventListener("click", function(){
    if(number.value % 2 == 0){
        numberPrinted.innerHTML = parseInt(number.value) + 1;
    }
})